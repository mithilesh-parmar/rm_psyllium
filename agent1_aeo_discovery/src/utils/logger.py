import logging
import json
import os
import time
from typing import Optional
import requests

_log = logging.getLogger("aeo_agent")
_run_start = time.time()
_metrics: dict = {}


def setup_logging(level: str = "INFO") -> None:
    logging.basicConfig(
        format="%(asctime)s [%(levelname)s] %(name)s — %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
        level=getattr(logging, level.upper(), logging.INFO),
    )


def get_logger(name: str = "aeo_agent") -> logging.Logger:
    return logging.getLogger(name)


def record_metric(key: str, value: float | int) -> None:
    _metrics[key] = value


def get_metrics() -> dict:
    return dict(_metrics)


def compute_cost_metrics(total_api_cost: float, total_discovered: int, aeo_ready_count: int) -> dict:
    metrics = {
        "cost_per_discovered_query": total_api_cost / max(total_discovered, 1),
        "cost_per_aeo_ready_query": total_api_cost / max(aeo_ready_count, 1),
        "total_api_cost_usd": total_api_cost,
        "total_discovered": total_discovered,
        "aeo_ready_count": aeo_ready_count,
        "runtime_seconds": round(time.time() - _run_start, 1),
    }
    budget_threshold = float(os.getenv("BUDGET_THRESHOLD_USD", "10.0"))
    if metrics["cost_per_aeo_ready_query"] > 1.20:  # ~₹100
        _log.warning("Cost per AEO-ready query exceeds ₹100 threshold: $%.3f", metrics["cost_per_aeo_ready_query"])
    return metrics


def notify_slack(message: str) -> None:
    webhook = os.getenv("SLACK_WEBHOOK_URL")
    if not webhook:
        return
    try:
        requests.post(webhook, json={"text": message}, timeout=5)
    except Exception:
        _log.debug("Slack notification failed (non-critical)")
