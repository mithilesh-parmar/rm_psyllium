"""Score layer: rule-based + LLM scoring, threshold filtering."""
import re
from src.utils.llm_client import call_llm_json
from src.utils.logger import get_logger

log = get_logger("score")

_QUESTION_STARTERS = {"how", "what", "which", "can", "should", "where", "when", "why", "does", "is", "are", "do"}
_HIGH_ANSWERABILITY = re.compile(
    r"\b(how to|what is|what are|which|how does|how much|what documents|difference between|vs|comparison|steps|guide|checklist)\b",
    re.IGNORECASE,
)
_LOW_ANSWERABILITY = re.compile(r"\b(best|good|top|great|excellent)\b", re.IGNORECASE)
_SPEC_TERMS = re.compile(
    r"\b(mesh|purity|moisture|coa|gmp|fda|efsa|moq|fob|certification|organic|usp|haccp|iso|bulk|mt|kg|ppm|viscosity|swelling|particle)\b",
    re.IGNORECASE,
)

_CITATION_SYSTEM = """You are an AEO (Answer Engine Optimization) scoring assistant.
Given a B2B search query about psyllium husk sourcing, score two factors:

citation_potential (1-10): How likely is a well-written answer to this query to be cited by AI engines like Perplexity or Google AI Overviews?
- 9-10: Query requires specific data (tables, checklists, regulatory citations, step-by-step guides)
- 7-8: Factual answer with some structured content needed
- 5-6: General knowledge, unlikely to stand out
- 1-4: Too vague or off-topic

commercial_fit (1-10): How relevant is this query to a buyer who would purchase psyllium husk from RM Psyllium?
- 9-10: Direct purchase signal (pricing, certification check, import docs, sample request)
- 7-8: Mid-funnel (supplier evaluation, spec comparison)
- 5-6: Early research (understanding the product)
- 1-4: Not relevant to B2B psyllium purchasing

Respond with JSON: {"citation_potential": <int>, "commercial_fit": <int>}"""


def _score_answerability(query_text: str) -> int:
    """Rule-based. No LLM cost."""
    words = query_text.lower().split()
    word_count = len(words)

    if word_count < 3 or word_count > 20:
        return 3

    score = 5  # baseline

    if _HIGH_ANSWERABILITY.search(query_text):
        score += 3
    if _LOW_ANSWERABILITY.search(query_text):
        score -= 2
    if _SPEC_TERMS.search(query_text):
        score += 1
    if word_count >= 6:
        score += 1

    return max(1, min(10, score))


def _score_conversational_match(query_text: str, question_format_bonus: float = 0.5) -> int:
    """Rule-based. No LLM cost."""
    words = query_text.lower().split()
    word_count = len(words)

    score = 5
    if words and words[0] in _QUESTION_STARTERS:
        score += 2
    if 4 <= word_count <= 12:
        score += 2
    elif word_count > 12:
        score += 1
    if _SPEC_TERMS.search(query_text):
        score += 1

    # question_format_bonus is applied in calculate_aeo_score if query is a question
    return max(1, min(10, score))


def _score_llm_factors(query_text: str) -> dict:
    """LLM-evaluated: citation_potential and commercial_fit only."""
    try:
        result = call_llm_json(_CITATION_SYSTEM, query_text, model="openai")
        return {
            "citation_potential": int(result.get("citation_potential", 5)),
            "commercial_fit": int(result.get("commercial_fit", 5)),
        }
    except Exception as e:
        log.warning("LLM scoring failed for '%s': %s", query_text, e)
        # Heuristic fallback
        has_spec = bool(_SPEC_TERMS.search(query_text))
        has_purchase = any(t in query_text.lower() for t in ["price", "cost", "buy", "sample", "certif", "import", "document"])
        return {
            "citation_potential": 7 if has_spec else 5,
            "commercial_fit": 8 if has_purchase else (6 if has_spec else 4),
        }


def calculate_aeo_score(factors: dict, weights: dict, question_format_bonus: float = 0.5, is_question: bool = False) -> float:
    raw = (
        factors["answerability"] * weights["answerability"]
        + factors["citation_potential"] * weights["citation_potential"]
        + factors["conversational_match"] * weights["conversational_match"]
        + factors["commercial_fit"] * weights["commercial_fit"]
    )
    if is_question:
        raw += question_format_bonus
    return round(min(10.0, raw), 1)


def _derive_priority(score: float) -> str:
    if score >= 8.5:
        return "high"
    if score >= 7.5:
        return "medium"
    return "low"


def _derive_citation_tags(query_text: str) -> list[str]:
    tags = []
    lower = query_text.lower()
    if any(t in lower for t in ["document", "certif", "import", "fda", "efsa", "gmp"]):
        tags.append("compliance_checklist")
    if any(t in lower for t in ["vs", "versus", "difference", "comparison", "compare"]):
        tags.append("spec_comparison")
    if any(t in lower for t in ["how to", "steps", "guide", "verify", "check"]):
        tags.append("step_by_step")
    if any(t in lower for t in ["price", "cost", "mt", "per kg", "bulk"]):
        tags.append("pricing_data")
    if any(t in lower for t in ["mesh", "purity", "moisture", "swelling", "particle"]):
        tags.append("technical_spec")
    return tags or ["general"]


def _derive_content_recommendation(query_text: str, cluster_id: str) -> dict:
    lower = query_text.lower()
    if "how to" in lower or "steps" in lower or "verify" in lower:
        fmt = "step_by_step_guide"
    elif "vs" in lower or "comparison" in lower or "difference" in lower:
        fmt = "comparison_table"
    elif "document" in lower or "certif" in lower or "import" in lower:
        fmt = "compliance_checklist"
    elif "price" in lower or "cost" in lower:
        fmt = "pricing_guide"
    else:
        fmt = "faq_article"

    cta_map = {
        "supplier_qualification": "Request our GMP documentation package",
        "technical_specs": "Download our full product specification sheet",
        "pricing_logistics": "Get a custom quote for your volume requirements",
        "organic_sustainability": "Request our organic certification documents",
        "compliance_documentation": "Download our USA/EU Import Compliance Checklist (PDF)",
        "khakha_animal_feed": "Request a sample of our khakha powder",
        "industrial_specialty": "Contact us for industrial-grade specifications",
        "competitor_targeting": "Compare our COA with any competitor — request a call",
    }

    return {
        "format": fmt,
        "key_sections": [],
        "cta_suggestion": cta_map.get(cluster_id, "Book a call with our export team"),
    }


def score_aeo(state: dict) -> dict:
    """
    LangGraph node: score each query, filter by threshold.
    Writes: state["scored_queries"]
    """
    queries = state["enriched_queries"]
    config = state["config"]
    weights = config["aeo_scoring_weights"]
    threshold = config.get("output_filters", {}).get("min_aeo_score", 7.0)
    question_format_bonus = config.get("output_filters", {}).get("question_format_bonus", 0.5)

    scored = []
    for item in queries:
        qt = item["query_text"]
        words = qt.lower().split()

        # Filter obvious junk early
        if len(words) < config.get("output_filters", {}).get("min_word_count", 3):
            continue

        is_question = bool(words and words[0] in _QUESTION_STARTERS)
        answerability = _score_answerability(qt)
        conversational_match = _score_conversational_match(qt)
        llm_factors = _score_llm_factors(qt)

        factors = {
            "answerability": answerability,
            "citation_potential": llm_factors["citation_potential"],
            "conversational_match": conversational_match,
            "commercial_fit": llm_factors["commercial_fit"],
        }
        aeo_score = calculate_aeo_score(factors, weights, question_format_bonus, is_question)

        if aeo_score < threshold:
            continue

        scored.append({
            **item,
            "aeo_score": aeo_score,
            "aeo_factors": factors,
            "citation_tags": _derive_citation_tags(qt),
            "priority": _derive_priority(aeo_score),
            "content_recommendation": _derive_content_recommendation(qt, item.get("cluster_id", "")),
            "human_review_status": "pending",
        })

    log.info("Scored: %d queries passed threshold %.1f (from %d)", len(scored), threshold, len(queries))
    return {**state, "scored_queries": scored}
