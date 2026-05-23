"""Supabase client with batch upsert and retry logic."""
import os
import time
from typing import Any
import requests

from src.utils.logger import get_logger

log = get_logger("supabase")

_SUPABASE_URL = None
_SUPABASE_KEY = None


def _get_headers() -> dict:
    global _SUPABASE_URL, _SUPABASE_KEY
    if not _SUPABASE_URL:
        _SUPABASE_URL = os.environ["SUPABASE_URL"]
        _SUPABASE_KEY = os.environ["SUPABASE_SERVICE_ROLE_KEY"]
    return {
        "apikey": _SUPABASE_KEY,
        "Authorization": f"Bearer {_SUPABASE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "resolution=merge-duplicates",  # upsert on conflict
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


def upsert_queries(queries: list[dict]) -> int:
    """Upsert queries to aeo_queries table in batches of 100. Returns count inserted."""
    if not queries:
        return 0

    url = f"{os.environ['SUPABASE_URL']}/rest/v1/aeo_queries"
    total = 0

    for i in range(0, len(queries), 100):
        batch = queries[i:i + 100]
        resp = _request_with_retry(
            "POST", url,
            headers=_get_headers(),
            json=batch,
            timeout=30,
        )
        total += len(batch)
        log.debug("Upserted batch %d-%d", i, i + len(batch))

    return total


def upsert_run(run_data: dict) -> None:
    url = f"{os.environ['SUPABASE_URL']}/rest/v1/agent_runs"
    _request_with_retry("POST", url, headers=_get_headers(), json=run_data, timeout=15)


def update_query_review_status(query_id: str, status: str, edited_text: str | None = None) -> None:
    """Update human review status for a query (approved/rejected/edited)."""
    url = f"{os.environ['SUPABASE_URL']}/rest/v1/aeo_queries?query_id=eq.{query_id}"
    payload: dict = {"human_review_status": status}
    if edited_text:
        payload["query_text"] = edited_text
    _request_with_retry("PATCH", url, headers=_get_headers(), json=payload, timeout=15)


def fetch_queries_for_review(min_score: float = 8.0, limit: int = 50) -> list[dict]:
    url = (
        f"{os.environ['SUPABASE_URL']}/rest/v1/aeo_queries"
        f"?aeo_score=gte.{min_score}&human_review_status=eq.pending"
        f"&order=aeo_score.desc&limit={limit}"
    )
    headers = {**_get_headers(), "Prefer": ""}
    resp = _request_with_retry("GET", url, headers=headers, timeout=15)
    return resp.json()
