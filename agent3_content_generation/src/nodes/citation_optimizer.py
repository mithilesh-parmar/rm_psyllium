"""Node 3: Extract AI snippet, tag structured facts, build link targets."""
import re
from src.utils.markdown_templater import extract_ai_snippet
from src.utils.logger import get_logger

log = get_logger("citation_optimizer")

_SPEC_FACT_PATTERNS = [
    (r"purity[:\s]+(\d+[-–]\d+%)", "Psyllium husk purity range", "RM Psyllium product specs"),
    (r"moisture[:\s]+[≤<]?\s*(\d+%)", "Moisture content limit", "USP <561> testing method"),
    (r"mesh\s+size[:\s]+(\d+[-–]\d+)", "Available mesh sizes", "RM Psyllium product specs"),
    (r"swelling\s+volume[:\s]+[≥>]?\s*(\d+\s*mL/g)", "Swelling volume minimum", "USP Method"),
    (r"bulk\s+density[:\s]+(\d+[-–]\d+\s*kg/m³)", "Bulk density range", "ASTM D1895"),
    (r"MOQ[:\s]+(\d+\s*kg)", "Minimum order quantity", "RM Psyllium commercial terms"),
]


def _extract_structured_facts(markdown: str) -> list[dict]:
    facts = []
    for pattern, fact_name, source in _SPEC_FACT_PATTERNS:
        match = re.search(pattern, markdown, re.IGNORECASE)
        if match:
            facts.append({
                "fact": fact_name,
                "value": match.group(1),
                "source": source,
            })
    return facts


def _build_backlink_targets(citation_sources: list[str]) -> list[dict]:
    source_to_url = {
        "FDA 21 CFR Part 117": {
            "anchor": "FDA 21 CFR Part 117 GMP requirements",
            "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-117",
        },
        "WHO GMP Guidelines": {
            "anchor": "WHO GMP guidelines for botanical ingredients",
            "url": "https://www.who.int/publications/i/item/9789241506797",
        },
        "USP <561>": {
            "anchor": "USP <561> Articles of Botanical Origin",
            "url": "https://www.usp.org/chemical-medicines/general-chapters-reagents",
        },
        "EFSA": {
            "anchor": "EFSA novel food regulation requirements",
            "url": "https://www.efsa.europa.eu/en/topics/topic/novel-food",
        },
    }
    targets = []
    for source in citation_sources:
        for key, link_data in source_to_url.items():
            if key.lower() in source.lower():
                targets.append(link_data)
                break
    return targets


def citation_optimizer(state: dict) -> dict:
    """
    Input: raw_draft, agent2_payload, business_context
    Output: state + citation_optimization dict
    """
    draft = state.get("raw_draft", "")
    brief = state["agent2_payload"]
    seo = brief.get("seo_aeo_requirements", {})
    gen_payload = brief.get("agent_3_generation_payload", {})
    citation_sources = gen_payload.get("citation_sources", [])

    # Extract or use provided AI snippet target
    ai_snippet = seo.get("ai_overview_target_snippet", "") or extract_ai_snippet(draft, word_target=40)

    structured_facts = _extract_structured_facts(draft)
    backlink_targets = _build_backlink_targets(citation_sources)

    biz_links = state["business_context"].get("internal_links", {})
    internal_link_insertions = [
        {"anchor": "psyllium husk specifications", "url": biz_links.get("psyllium_husk", "/products/psyllium-husk")},
        {"anchor": "compliance documentation", "url": biz_links.get("compliance", "/compliance/")},
        {"anchor": "request a sample COA", "url": biz_links.get("sample_coa", "/resources/sample-coa.pdf")},
        {"anchor": "contact RM Psyllium", "url": biz_links.get("contact", "/contact/")},
    ]

    citation_optimization = {
        "ai_snippet_target": ai_snippet,
        "structured_facts": structured_facts,
        "backlink_targets": backlink_targets,
        "internal_link_insertions": internal_link_insertions,
    }

    log.info(
        "Citation optimization: snippet=%d chars, %d facts, %d backlinks",
        len(ai_snippet),
        len(structured_facts),
        len(backlink_targets),
    )

    return {**state, "citation_optimization": citation_optimization}
