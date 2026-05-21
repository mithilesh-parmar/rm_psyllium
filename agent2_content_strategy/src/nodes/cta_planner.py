"""Node 4: CTA & conversion strategy — deterministic, based on buyer stage."""
import json
from pathlib import Path

from src.utils.logger import get_logger

log = get_logger("cta_planner")

_MAPPINGS: dict | None = None


def _load_mappings() -> dict:
    global _MAPPINGS
    if _MAPPINGS is None:
        path = Path(__file__).parent.parent.parent / "config" / "template_mappings.json"
        _MAPPINGS = json.loads(path.read_text())
    return _MAPPINGS


def cta_planner(state: dict) -> dict:
    """
    Input: buyer_stage, content_format, template_config, outline_sections
    Output: primary_cta, secondary_cta, placement_hooks, qualification_filter
    """
    buyer_stage = state.get("buyer_stage", "vendor_evaluation")
    template_cfg = state.get("template_config", {})
    content_format = state.get("content_format", "step_by_step_guide")
    outline_sections = state.get("outline_sections", [])
    mappings = _load_mappings()

    primary_cta = mappings["buyer_stage_to_cta"].get(
        buyer_stage,
        template_cfg.get("cta_default", "Request a quote from RM Psyllium"),
    )

    # Secondary CTA: always offer a lower-commitment alternative
    secondary_cta_map = {
        "awareness": "Download our psyllium sourcing guide (PDF)",
        "vendor_evaluation": "Download Sample COA Template (PDF)",
        "rfq_ready": "Request 500g sample with pre-shipment COA",
        "sample_stage": "Confirm spec requirements — we'll send a matching COA",
        "decision": "Contact us to finalize incoterms and delivery schedule",
    }
    secondary_cta = secondary_cta_map.get(buyer_stage, "Contact us with your specification requirements")

    # Placement: after 2nd section and at end of article
    placement_hooks = ["end_of_article"]
    if len(outline_sections) >= 3:
        placement_hooks.insert(0, "after_section_2")

    # Qualification filter: shown based on engagement depth
    qualification_filters = {
        "awareness": "Show to all visitors",
        "vendor_evaluation": "Show to visitors who scroll past 40% or click spec tables",
        "rfq_ready": "Show to visitors who reach the pricing or spec section",
        "sample_stage": "Show to returning visitors or those who clicked a CTA before",
        "decision": "Show to visitors who have viewed 3+ product pages",
    }
    qualification_filter = qualification_filters.get(buyer_stage, "Show to all visitors")

    log.info("CTA: buyer_stage='%s', primary='%s'", buyer_stage, primary_cta[:60])

    return {
        **state,
        "primary_cta": primary_cta,
        "secondary_cta": secondary_cta,
        "placement_hooks": placement_hooks,
        "qualification_filter": qualification_filter,
    }
