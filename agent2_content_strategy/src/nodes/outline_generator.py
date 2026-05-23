"""Node 2: LLM-powered outline generation with B2B tone enforcement."""
import json
import re
from pathlib import Path

from src.utils.llm_router import call_llm_json
from src.utils.logger import get_logger

log = get_logger("outline_generator")

_SYSTEM_PROMPT: str | None = None


def _load_system_prompt() -> str:
    global _SYSTEM_PROMPT
    if _SYSTEM_PROMPT is None:
        path = Path(__file__).parent.parent / "prompts" / "outline_system.txt"
        _SYSTEM_PROMPT = path.read_text()
    return _SYSTEM_PROMPT


def _build_user_prompt(state: dict) -> str:
    payload = state["agent1_payload"]
    business_ctx = state["business_context"]
    template_cfg = state.get("template_config", {})
    section_template = template_cfg.get("section_template", [])

    return json.dumps({
        "query_text": payload.get("query_text"),
        "intent": payload.get("intent"),
        "region": payload.get("region"),
        "aeo_score": payload.get("aeo_score"),
        "product_tags": payload.get("product_tags", []),
        "citation_tags": payload.get("citation_tags", []),
        "competitor_context": payload.get("competitor_context", ""),
        "cluster_id": payload.get("cluster_id"),
        "content_format": state.get("content_format"),
        "buyer_stage": state.get("buyer_stage"),
        "section_template_hint": section_template,
        "products_available": business_ctx.get("products_available", []),
        "differentiators": business_ctx.get("differentiators", []),
        "certifications_current": business_ctx.get("certifications_current", []),
        "certifications_pending": business_ctx.get("certifications_pending", []),
        "tone_guidelines": business_ctx.get("tone_guidelines", ""),
    }, indent=2)


def _validate_outline(result: dict) -> list[str]:
    sections = result.get("outline_sections", [])
    if not isinstance(sections, list):
        raise ValueError("outline_sections must be a list")
    if not (4 <= len(sections) <= 6):
        raise ValueError(f"Expected 4–6 sections, got {len(sections)}")
    return sections


def outline_generator(state: dict) -> dict:
    """
    Input: content_format, buyer_stage, template_config, agent1_payload, business_context
    Output: outline_sections, ai_snippet, tone_constraints_applied, compliance_notes
    """
    system_prompt = _load_system_prompt()
    user_prompt = _build_user_prompt(state)

    for attempt in range(2):
        try:
            result = call_llm_json(
                system_prompt=system_prompt,
                user_prompt=user_prompt,
                model="openai",
                temperature=0.3,
                max_tokens=1800,
            )
            sections = _validate_outline(result)
            log.info("Outline generated: %d sections", len(sections))
            return {
                **state,
                "outline_sections": sections,
                "ai_snippet": result.get("ai_overview_target_snippet", ""),
                "tone_constraints_applied": result.get("tone_constraints_applied", []),
                "compliance_notes": result.get("compliance_notes", []),
            }
        except (ValueError, KeyError) as e:
            if attempt == 1:
                log.error("Outline generation failed after 2 attempts: %s", e)
                # Fallback to template sections
                sections = state.get("template_config", {}).get("section_template", [
                    "Background & Context",
                    "Technical Specifications",
                    "Compliance Requirements",
                    "RM Psyllium Approach",
                    "Next Steps",
                ])
                return {
                    **state,
                    "outline_sections": sections[:6],
                    "ai_snippet": "",
                    "tone_constraints_applied": ["B2B professional", "data-first"],
                    "compliance_notes": [],
                }
            log.warning("Outline attempt %d failed (%s), retrying with cache disabled", attempt + 1, e)
            # Retry without cache so we get a fresh response
            user_prompt = user_prompt + f"\n\n[Retry #{attempt+2}: previous response had wrong section count]"
