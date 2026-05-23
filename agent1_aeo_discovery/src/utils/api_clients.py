"""Wrappers for SERPAPI, DataForSEO, and Google Trends."""
import os
import time
from typing import Optional
import requests

from src.utils.logger import get_logger

log = get_logger("api_clients")

_serpapi_calls = 0
_MAX_SERPAPI_CALLS = int(os.getenv("MAX_SERPAPI_CALLS_PER_RUN", "100"))


def _serpapi_request(params: dict) -> dict:
    global _serpapi_calls
    if _serpapi_calls >= _MAX_SERPAPI_CALLS:
        log.warning("SERPAPI call limit reached (%d), skipping", _MAX_SERPAPI_CALLS)
        return {}
    params["api_key"] = os.environ["SERPAPI_KEY"]
    resp = requests.get("https://serpapi.com/search", params=params, timeout=15)
    resp.raise_for_status()
    _serpapi_calls += 1
    return resp.json()


def fetch_serp_related_queries(seed_query: str, region: str = "US") -> list[str]:
    """Return 'related searches' and 'people also ask' from Google SERP."""
    country_code = {"US": "us", "DE": "de", "UK": "gb", "FR": "fr", "NL": "nl", "CA": "ca", "BD": "bd"}.get(region, "us")
    try:
        data = _serpapi_request({
            "engine": "google",
            "q": seed_query,
            "gl": country_code,
            "hl": "en",
            "num": 10,
        })
    except Exception as e:
        log.warning("SERPAPI error for '%s': %s", seed_query, e)
        return []

    queries = []

    for item in data.get("related_searches", []):
        queries.append(item.get("query", ""))

    for item in data.get("related_questions", []):
        queries.append(item.get("question", ""))

    return [q for q in queries if q]


def fetch_dataforseo_volume(queries: list[str], region: str = "US") -> dict[str, dict]:
    """Return estimated volume + difficulty per query. Falls back to heuristics if unavailable."""
    login = os.getenv("DATAFORSEO_LOGIN")
    password = os.getenv("DATAFORSEO_PASSWORD")

    if not login or not password:
        log.debug("DataForSEO credentials not set — using heuristic estimates")
        return _heuristic_metrics(queries)

    location_code = {"US": 2840, "DE": 2276, "UK": 2826, "FR": 2250, "NL": 2528, "CA": 2124}.get(region, 2840)
    payload = [{"keywords": queries[:100], "location_code": location_code, "language_code": "en"}]

    try:
        resp = requests.post(
            "https://api.dataforseo.com/v3/keywords_data/google_ads/search_volume/live",
            json=payload,
            auth=(login, password),
            timeout=30,
        )
        resp.raise_for_status()
        data = resp.json()
        result = {}
        for item in data.get("tasks", [{}])[0].get("result", []) or []:
            result[item["keyword"]] = {
                "estimated_monthly_volume": item.get("search_volume") or 0,
                "estimated_difficulty": item.get("competition_index") or 20,
            }
        return result
    except Exception as e:
        log.warning("DataForSEO error: %s — falling back to heuristics", e)
        return _heuristic_metrics(queries)


def _heuristic_metrics(queries: list[str]) -> dict[str, dict]:
    """Estimate volume/difficulty from query characteristics when no API is available."""
    result = {}
    for q in queries:
        words = q.lower().split()
        # Longer, more specific queries → lower volume, lower difficulty
        length_factor = max(1, len(words) - 3)
        has_spec_term = any(t in q.lower() for t in ["mesh", "purity", "coa", "gmp", "mq", "fob", "certification"])
        volume = max(10, 500 // length_factor) if has_spec_term else max(5, 200 // length_factor)
        difficulty = min(40, 15 + length_factor * 2)
        result[q] = {"estimated_monthly_volume": volume, "estimated_difficulty": difficulty}
    return result
