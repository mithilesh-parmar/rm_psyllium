import logging
import os
import time
import requests

_run_start = time.time()


def setup_logging(level: str = "INFO") -> None:
    logging.basicConfig(
        format="%(asctime)s [%(levelname)s] %(name)s — %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
        level=getattr(logging, level.upper(), logging.INFO),
    )


def get_logger(name: str = "agent3") -> logging.Logger:
    return logging.getLogger(name)


def notify_slack(message: str) -> None:
    webhook = os.getenv("SLACK_WEBHOOK_URL")
    if not webhook:
        return
    try:
        requests.post(webhook, json={"text": message}, timeout=5)
    except Exception:
        logging.getLogger("agent3").debug("Slack notification failed (non-critical)")
