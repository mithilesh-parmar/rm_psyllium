"""Node 6: Validate, assemble final brief, write .md file, upsert to Supabase."""
import json
import uuid
from datetime import datetime, timedelta
from pathlib import Path

from pydantic import ValidationError

from src.utils.validators import ContentBrief
from src.utils.markdown_gen import write_brief_file
from src.utils.logger import get_logger

log = get_logger("exporter")


def _determine_priority(aeo_score: float, buyer_stage: str) -> str:
    if aeo_score >= 8.0 and buyer_stage in ("rfq_ready", "vendor_evaluation"):
        return "high"
    if aeo_score >= 6.5:
        return "medium"
    return "low"


def _build_brief_dict(state: dict) -> dict:
    payload = state["agent1_payload"]
    aeo_score = payload.get("aeo_score", 0.0)
    buyer_stage = state.get("buyer_stage", "vendor_evaluation")
    content_format = state.get("content_format", "step_by_step_guide")
    template_cfg = state.get("template_config", {})
    effort = template_cfg.get("estimated_effort_hours", 3)
    priority = _determine_priority(aeo_score, buyer_stage)

    return {
        "brief_metadata": {
            "brief_id": str(uuid.uuid4()),
            "source_query_id": payload.get("query_id", ""),
            "cluster_id": payload.get("cluster_id", ""),
            "created_at": datetime.utcnow().isoformat() + "Z",
            "priority": priority,
            "estimated_effort_hours": effort,
            "target_publish_date_days": 5 if priority == "high" else 10,
        },
        "target_audience": {
            "persona": _infer_persona(payload.get("region", "US"), payload.get("intent", "commercial")),
            "decision_stage": buyer_stage,
            "technical_level": "intermediate_to_advanced",
        },
        "content_strategy": {
            "primary_keyword": state.get("primary_keyword", payload.get("query_text", "")),
            "secondary_keywords": state.get("secondary_keywords", []),
            "content_format": content_format,
            "target_word_count": template_cfg.get("target_word_count", 1000),
            "outline_sections": state.get("outline_sections", []),
        },
        "seo_aeo_requirements": {
            "title_tag": state.get("title_tag", ""),
            "meta_description": state.get("meta_description", ""),
            "url_slug": state.get("url_slug", ""),
            "schema_markup": state.get("schema_markup", []),
            "ai_overview_target_snippet": state.get("ai_snippet", ""),
        },
        "cta_conversion_strategy": {
            "primary_cta": state.get("primary_cta", ""),
            "secondary_cta": state.get("secondary_cta", ""),
            "placement_hooks": state.get("placement_hooks", ["end_of_article"]),
            "qualification_filter": state.get("qualification_filter", "Show to all visitors"),
        },
        "agent_3_generation_payload": state.get("agent_3_payload", {}),
        "human_review_notes": _build_review_notes(state),
    }


def _infer_persona(region: str, intent: str) -> str:
    persona_map = {
        ("US", "commercial"): "procurement_manager_us_nutraceutical",
        ("EU", "commercial"): "procurement_manager_eu_pharma",
        ("DE", "commercial"): "procurement_manager_eu_pharma",
        ("US", "transactional"): "buyer_rfq_us",
        ("US", "informational"): "rd_formulator_us",
    }
    return persona_map.get((region, intent), f"b2b_buyer_{region.lower()}")


def _build_review_notes(state: dict) -> dict:
    notes = []
    compliance_notes = state.get("compliance_notes", [])
    cert_pending = state["business_context"].get("certifications_pending", [])

    if cert_pending:
        notes.append("Confirm current GMP/ISO 22000 audit timeline before publishing")
    if any("coa" in n.lower() for n in compliance_notes):
        notes.append("Attach latest batch COA sample PDF for download link")

    legal = ""
    if "GMP" in cert_pending or "ISO 22000" in cert_pending:
        legal = "Do not claim 'GMP certified' — use 'GMP-aligned' or 'audit in progress — Q3 2026'"

    return {
        "requires_founder_input": notes,
        "legal_compliance_check": legal,
    }


def exporter(state: dict) -> dict:
    """
    Input: full accumulated state
    Output: state with 'output' key containing brief + export paths
    """
    brief_dict = _build_brief_dict(state)

    # Pydantic validation
    try:
        ContentBrief.model_validate(brief_dict)
        log.info("Brief schema validation passed")
    except ValidationError as e:
        log.warning("Brief validation errors (non-fatal): %s", e)

    # Write .md file
    output_dir = Path(__file__).parent.parent.parent / "output" / "briefs"
    md_path = write_brief_file(brief_dict, output_dir)
    log.info("Brief written to %s", md_path)

    # Supabase upsert (skip if test_mode)
    if not state.get("test_mode", False):
        try:
            from src.utils.supabase_client import upsert_brief
            flat_brief = {
                "brief_id": brief_dict["brief_metadata"]["brief_id"],
                "source_query_id": brief_dict["brief_metadata"]["source_query_id"],
                "cluster_id": brief_dict["brief_metadata"]["cluster_id"],
                "priority": brief_dict["brief_metadata"]["priority"],
                "status": "draft",
                "content_strategy": json.dumps(brief_dict["content_strategy"]),
                "seo_aeo_requirements": json.dumps(brief_dict["seo_aeo_requirements"]),
                "cta_strategy": json.dumps(brief_dict["cta_conversion_strategy"]),
                "agent_3_payload": json.dumps(brief_dict["agent_3_generation_payload"]),
                "human_review_notes": json.dumps(brief_dict["human_review_notes"]),
                "estimated_effort_hours": brief_dict["brief_metadata"]["estimated_effort_hours"],
                "target_publish_date": (
                    datetime.utcnow()
                    + timedelta(days=brief_dict["brief_metadata"]["target_publish_date_days"])
                ).strftime("%Y-%m-%d"),
            }
            upsert_brief(flat_brief)
        except Exception as e:
            log.error("Supabase upsert failed (non-fatal in test): %s", e)

    return {
        **state,
        "output": {
            "brief": brief_dict,
            "md_path": str(md_path),
            "brief_id": brief_dict["brief_metadata"]["brief_id"],
            "priority": brief_dict["brief_metadata"]["priority"],
        },
    }
