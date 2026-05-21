"""Supabase client for Agent 2: content_briefs table operations."""
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


def upsert_brief(brief: dict) -> None:
    """Upsert a single content brief to content_briefs table."""
    url = f"{os.environ['SUPABASE_URL']}/rest/v1/content_briefs"
    _request_with_retry("POST", url, headers=_get_headers(), json=brief, timeout=30)
    log.debug("Upserted brief_id=%s", brief.get("brief_id"))


def fetch_pending_briefs(limit: int = 20) -> list[dict]:
    """Fetch briefs in 'draft' status for human review."""
    url = (
        f"{os.environ['SUPABASE_URL']}/rest/v1/content_briefs"
        f"?status=eq.draft&order=created_at.desc&limit={limit}"
    )
    headers = {**_get_headers(), "Prefer": ""}
    resp = _request_with_retry("GET", url, headers=headers, timeout=15)
    return resp.json()


def fetch_approved_briefs() -> list[dict]:
    """Fetch briefs approved for Agent 3 processing."""
    url = (
        f"{os.environ['SUPABASE_URL']}/rest/v1/content_briefs"
        f"?status=eq.approved&order=created_at.desc"
    )
    headers = {**_get_headers(), "Prefer": ""}
    resp = _request_with_retry("GET", url, headers=headers, timeout=15)
    return resp.json()


def update_brief_status(brief_id: str, status: str) -> None:
    url = f"{os.environ['SUPABASE_URL']}/rest/v1/content_briefs?brief_id=eq.{brief_id}"
    _request_with_retry("PATCH", url, headers=_get_headers(), json={"status": status}, timeout=15)
    log.info("Brief %s → status=%s", brief_id, status)


def fetch_aeo_queries_for_briefs(min_score: float = 7.0, limit: int = 20) -> list[dict]:
    """Fetch Agent 1 queries that don't yet have briefs, ordered by AEO score."""
    url = (
        f"{os.environ['SUPABASE_URL']}/rest/v1/aeo_queries"
        f"?aeo_score=gte.{min_score}"
        f"&human_review_status=neq.rejected"
        f"&order=aeo_score.desc&limit={limit}"
    )
    headers = {**_get_headers(), "Prefer": ""}
    resp = _request_with_retry("GET", url, headers=headers, timeout=15)
    return resp.json()
