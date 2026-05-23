"""Node 1: Rule-based intent → content format mapping. No LLM needed."""
import json
from pathlib import Path

from src.utils.logger import get_logger

log = get_logger("intent_mapper")

_MAPPINGS: dict | None = None


def _load_mappings() -> dict:
    global _MAPPINGS
    if _MAPPINGS is None:
        path = Path(__file__).parent.parent.parent / "config" / "template_mappings.json"
        _MAPPINGS = json.loads(path.read_text())
    return _MAPPINGS


def intent_mapper(state: dict) -> dict:
    """
    Input state keys: agent1_payload, business_context
    Output state keys: content_format, buyer_stage, template_config
    """
    payload = state["agent1_payload"]
    intent = payload.get("intent", "informational")
    mappings = _load_mappings()

    candidate_formats = mappings["intent_to_format"].get(intent, ["faq"])

    # Prefer the format from Agent 1's recommendation if it matches
    agent1_format = (payload.get("content_recommendation") or {}).get("format", "")
    normalized = agent1_format.replace("-", "_")
    if normalized in candidate_formats:
        chosen_format = normalized
    else:
        chosen_format = candidate_formats[0]

    buyer_stage = mappings["intent_to_buyer_stage"].get(intent, "awareness")
    template_config = mappings["format_templates"].get(chosen_format, {})

    log.info(
        "Intent='%s' → format='%s', buyer_stage='%s'",
        intent, chosen_format, buyer_stage,
    )

    return {
        **state,
        "content_format": chosen_format,
        "buyer_stage": buyer_stage,
        "template_config": template_config,
    }
