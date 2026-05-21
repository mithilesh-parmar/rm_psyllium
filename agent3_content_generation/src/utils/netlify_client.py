"""Netlify integration: atomic file writes and build hook trigger."""
import os
import requests

from src.utils.logger import get_logger

log = get_logger("netlify")


def trigger_deploy(content_id: str | None = None) -> bool:
    """POST to Netlify build hook to trigger site rebuild."""
    hook_url = os.getenv("NETLIFY_BUILD_HOOK")
    if not hook_url:
        log.warning("NETLIFY_BUILD_HOOK not set — skipping deploy trigger")
        return False
    try:
        resp = requests.post(hook_url, json={}, timeout=10)
        resp.raise_for_status()
        log.info("Netlify deploy triggered (content_id=%s)", content_id)
        return True
    except requests.RequestException as e:
        log.error("Netlify deploy trigger failed: %s", e)
        return False
