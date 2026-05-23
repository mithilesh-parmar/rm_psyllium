"""Node 5: Build the Agent 3 generation payload from accumulated state."""
import yaml
from pathlib import Path

from src.utils.logger import get_logger

log = get_logger("agent3_builder")

_TONE_RULES: dict | None = None
_BUSINESS_CTX: dict | None = None


def _load_tone_rules() -> dict:
    global _TONE_RULES
    if _TONE_RULES is None:
        path = Path(__file__).parent.parent.parent / "config" / "tone_rules.yaml"
        _TONE_RULES = yaml.safe_load(path.read_text())
    return _TONE_RULES


def _load_business_ctx() -> dict:
    global _BUSINESS_CTX
    if _BUSINESS_CTX is None:
        import json
        path = Path(__file__).parent.parent.parent / "config" / "business_context.json"
        _BUSINESS_CTX = json.loads(path.read_text())
    return _BUSINESS_CTX


def _build_citation_sources(citation_tags: list[str], region: str) -> list[str]:
    sources = []
    tag_to_citation = {
        "compliance_checklist": "FDA 21 CFR Part 117 — Current Good Manufacturing Practice",
        "regulatory_links": "EU Regulation 178/2002 — General Food Law",
        "supplier_qualification": "WHO Guidelines on Good Agricultural and Collection Practices (GACP)",
        "import_docs": "USDA FSIS Import Requirements for Plant-Based Ingredients",
        "specification_sheet": "RM Psyllium internal COA template (available on request)",
        "market_data": "APEDA Export Statistics — Psyllium Husk & Powder",
        "testing_methods": "USP 42 — Psyllium Husk Powder Monograph",
        "botanical_compliance": "EU Herbal Monograph — Plantago ovata seed",
    }
    for tag in citation_tags:
        if tag in tag_to_citation:
            sources.append(tag_to_citation[tag])

    if region in ("US", "CA"):
        sources.append("FDA 21 CFR Part 117 — Current Good Manufacturing Practice")
    elif region in ("DE", "EU", "UK"):
        sources.append("EU Regulation 178/2002 — General Food Law")

    sources.append("RM Psyllium internal COA template (available on request)")
    return list(dict.fromkeys(sources))


def _build_required_elements(content_format: str, compliance_notes: list[str]) -> list[str]:
    base = ["spec_table_placeholder", "compliance_footnote"]
    if content_format in ("step_by_step_guide", "checklist"):
        base.append("numbered_checklist_block")
    if content_format == "comparison":
        base.append("comparison_table_placeholder")
    if content_format in ("spec_sheet", "technical_deep_dive"):
        base.append("technical_data_table")
    if any("cert" in note.lower() or "gmp" in note.lower() for note in compliance_notes):
        base.append("certification_status_disclaimer")
    base.append("founder_signature_note")
    return base


def agent3_builder(state: dict) -> dict:
    """
    Input: all accumulated state
    Output: agent_3_payload dict added to state
    """
    tone_rules = _load_tone_rules()
    biz_ctx = _load_business_ctx()
    payload = state["agent1_payload"]

    citation_tags = payload.get("citation_tags", [])
    region = payload.get("region", "US")
    content_format = state.get("content_format", "step_by_step_guide")
    compliance_notes = state.get("compliance_notes", [])

    tone_constraints = [
        "B2B professional — no consumer language",
        "data-first — cite specific specs, numbers, and regulatory references",
        "transparent about pending certifications (GMP/ISO 22000 — Q3 2026)",
        "procurement-focused — address MOQ, FOB, COA, incoterms explicitly",
        "no marketing fluff — no superlatives without data backing",
    ]
    tone_constraints.extend(state.get("tone_constraints_applied", []))
    tone_constraints = list(dict.fromkeys(tone_constraints))

    avoid_phrases = tone_rules.get("forbidden_phrases", [])

    internal_links = list(biz_ctx.get("internal_links", {}).values())

    agent_3_payload = {
        "tone_constraints": tone_constraints,
        "required_elements": _build_required_elements(content_format, compliance_notes),
        "citation_sources": _build_citation_sources(citation_tags, region),
        "avoid_phrases": avoid_phrases,
        "internal_link_targets": internal_links,
        "generation_parameters": {
            "model_temperature": 0.3,
            "max_tokens": 1800,
            "output_format": "markdown_with_yaml_frontmatter",
            "include_table_placeholders": True,
        },
    }

    log.info(
        "Agent 3 payload built: %d tone constraints, %d citations, %d required elements",
        len(tone_constraints),
        len(agent_3_payload["citation_sources"]),
        len(agent_3_payload["required_elements"]),
    )

    return {**state, "agent_3_payload": agent_3_payload}
