"""Supabase client for Agent 3: content_generations and citation_tracking tables."""
import os
import time
import requests

from src.utils.logger import get_logger

log = get_logger("supabase")

_SUPABASE_URL: str | None = None
_SUPABASE_KEY: str | None = None


def _get_headers() -> dict:
    global _SUPABASE_URL, _SUPABASE_KEY
    if not _SUPABASE_URL:
        _SUPABASE_URL = os.environ["SUPABASE_URL"]
        _SUPABASE_KEY = os.environ["SUPABASE_SERVICE_ROLE_KEY"]
    return {
        "apikey": _SUPABASE_KEY,
        "Authorization": f"Bearer {_SUPABASE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "resolution=merge-duplicates",
    }


def _request_with_retry(method: str, url: str, **kwargs) -> requests.Response:
    for attempt in range(3):
        try:
            resp = requests.request(method, url, **kwargs)
            resp.raise_for_status()
            return resp
        except requests.HTTPError as e:
            if attempt == 2:
                raise
            wait = 2 ** attempt
            log.warning("Supabase %s error (attempt %d/3): %s — retrying in %ds", method, attempt + 1, e, wait)
            time.sleep(wait)
    raise RuntimeError("Supabase request failed after 3 attempts")


def upsert_content_generation(record: dict) -> None:
    url = f"{os.environ['SUPABASE_URL']}/rest/v1/content_generations"
    _request_with_retry("POST", url, headers=_get_headers(), json=record, timeout=30)
    log.debug("Upserted content_id=%s", record.get("content_id"))


def update_content_status(content_id: str, status: str, **extra_fields) -> None:
    url = f"{os.environ['SUPABASE_URL']}/rest/v1/content_generations?content_id=eq.{content_id}"
    payload = {"status": status, **extra_fields}
    _request_with_retry("PATCH", url, headers=_get_headers(), json=payload, timeout=15)
    log.info("Content %s → status=%s", content_id, status)


def fetch_approved_briefs(limit: int = 10) -> list[dict]:
    """Fetch Agent 2 briefs with status='approved', ready for generation."""
    url = (
        f"{os.environ['SUPABASE_URL']}/rest/v1/content_briefs"
        f"?status=eq.approved&order=created_at.asc&limit={limit}"
    )
    headers = {**_get_headers(), "Prefer": ""}
    resp = _request_with_retry("GET", url, headers=headers, timeout=15)
    return resp.json()


def fetch_pending_review(limit: int = 20) -> list[dict]:
    """Fetch generated content awaiting human review."""
    url = (
        f"{os.environ['SUPABASE_URL']}/rest/v1/content_generations"
        f"?status=eq.generated&order=created_at.desc&limit={limit}"
    )
    headers = {**_get_headers(), "Prefer": ""}
    resp = _request_with_retry("GET", url, headers=headers, timeout=15)
    return resp.json()


def log_citation(record: dict) -> None:
    url = f"{os.environ['SUPABASE_URL']}/rest/v1/citation_tracking"
    headers = {**_get_headers(), "Prefer": "return=minimal"}
    _request_with_retry("POST", url, headers=headers, json=record, timeout=15)
    log.info("Citation logged: engine=%s, content_id=%s", record.get("ai_engine"), record.get("content_id"))


def fetch_published_content(limit: int = 50) -> list[dict]:
    """Fetch published content for citation scanning."""
    url = (
        f"{os.environ['SUPABASE_URL']}/rest/v1/content_generations"
        f"?status=eq.published&order=published_at.desc&limit={limit}"
        f"&select=content_id,export_metadata"
    )
    headers = {**_get_headers(), "Prefer": ""}
    resp = _request_with_retry("GET", url, headers=headers, timeout=15)
    return resp.json()
