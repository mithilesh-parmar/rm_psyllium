"""Enrich layer: add volume/difficulty, intent classification, regulatory tags."""
from src.utils.api_clients import fetch_dataforseo_volume
from src.utils.llm_client import call_llm_json
from src.utils.logger import get_logger

log = get_logger("enrich")

_REGULATORY_KEYWORDS = {
    "fda": ["FDA", "21 CFR", "facility registration", "prior notice", "GRAS"],
    "efsa": ["EFSA", "novel food", "EU regulation", "Article 14"],
    "organic": ["NOP", "EU-NOP", "USDA Organic", "EU Organic", "Öko-Verordnung"],
    "gmp": ["GMP", "ISO 22000", "HACCP", "BRC"],
    "fssai": ["FSSAI", "APEDA", "Spices Board"],
}

_PRODUCT_TAG_MAP = {
    "husk": "psyllium_husk",
    "powder": "psyllium_powder",
    "khakha": "psyllium_khakha",
    "industrial": "industrial_grade",
    "organic": "organic_psyllium",
    "cattle": "cattle_feed",
    "feed": "cattle_feed",
    "animal": "cattle_feed",
}

_INTENT_SYSTEM = """You are a B2B search intent classifier for psyllium husk sourcing queries.
Classify the intent as one of: informational, commercial, transactional.
- informational: learning about specs, properties, regulations (no immediate purchase signal)
- commercial: comparing suppliers, verifying certifications, evaluating options (mid-funnel)
- transactional: ready to buy, request pricing, request samples (bottom-funnel)
Respond with JSON: {"intent": "<informational|commercial|transactional>"}"""


def _extract_regulatory_keywords(query_text: str) -> list[str]:
    text_lower = query_text.lower()
    found = []
    for tag, keywords in _REGULATORY_KEYWORDS.items():
        if any(kw.lower() in text_lower for kw in keywords) or tag in text_lower:
            found.extend([kw for kw in keywords if kw.lower() in text_lower])
    return list(set(found))


def _extract_product_tags(query_text: str) -> list[str]:
    text_lower = query_text.lower()
    return list(set(v for k, v in _PRODUCT_TAG_MAP.items() if k in text_lower))


def _classify_intent(query_text: str) -> str:
    try:
        result = call_llm_json(_INTENT_SYSTEM, query_text, model="openai")
        return result.get("intent", "informational")
    except Exception:
        # Fallback: heuristic
        lower = query_text.lower()
        if any(t in lower for t in ["price", "cost", "quote", "sample", "order", "buy", "purchase"]):
            return "transactional"
        if any(t in lower for t in ["supplier", "certif", "verify", "compare", "which", "best"]):
            return "commercial"
        return "informational"


def enrich_metrics(state: dict) -> dict:
    """
    LangGraph node: add volume/difficulty and classify intent.
    Writes: state["enriched_queries"]
    """
    queries = state["expanded_queries"]
    region = state.get("current_region", "US")

    # Fetch volume/difficulty in batch
    query_texts = [q["query_text"] for q in queries]
    volume_data = fetch_dataforseo_volume(query_texts, region)

    enriched = []
    for item in queries:
        qt = item["query_text"]
        metrics = volume_data.get(qt, {"estimated_monthly_volume": 0, "estimated_difficulty": 25})

        enriched.append({
            **item,
            "estimated_monthly_volume": metrics["estimated_monthly_volume"],
            "estimated_difficulty": metrics["estimated_difficulty"],
            "trend_direction": "stable",
            "intent": _classify_intent(qt),
            "regulatory_keywords": _extract_regulatory_keywords(qt),
            "product_tags": _extract_product_tags(qt) or ["psyllium_husk"],
        })

    log.info("Enriched %d queries", len(enriched))
    return {**state, "enriched_queries": enriched}
