"""Expand layer: generate 10 AEO-optimized variants per seed using LLM."""
from pathlib import Path
from src.utils.llm_client import call_llm
from src.utils.logger import get_logger

log = get_logger("expand")

_PROMPT_PATH = Path(__file__).parent.parent / "prompts" / "expansion_prompt.txt"
_GERMAN_PROMPT_PATH = Path(__file__).parent.parent / "prompts" / "expansion_prompt_de.txt"


def _load_prompt(language: str = "en") -> str:
    path = _GERMAN_PROMPT_PATH if language == "de" else _PROMPT_PATH
    if path.exists():
        return path.read_text()
    return ""


def _parse_questions(raw_output: str) -> list[str]:
    lines = [line.strip() for line in raw_output.strip().split("\n")]
    questions = []
    for line in lines:
        # Strip numbering/bullets if LLM added them despite instructions
        line = line.lstrip("0123456789.-) ").strip()
        if line and len(line.split()) >= 3:
            questions.append(line)
    return questions[:10]


def expand_variants(state: dict) -> dict:
    """
    LangGraph node: for each raw query, generate 10 conversational variants.
    Writes: state["expanded_queries"] (flat list, same schema as raw_queries + extra fields)
    """
    raw_queries = state["raw_queries"]
    cluster_name = state["current_cluster"]
    region = state.get("current_region", "US")
    language = state.get("current_language", "en")

    # Bengali: English queries only, tagged region:BD — no separate language model needed
    if language == "bn":
        language = "en"

    system_prompt = _load_prompt(language)
    expanded: list[dict] = []

    # Copy all raw queries through unchanged
    for item in raw_queries:
        expanded.append({**item, "language": language})

    # Expand via LLM (limit to avoid cost overrun; use Groq free tier)
    seeds_to_expand = raw_queries[:20]
    log.info("Expanding %d seeds for cluster '%s'", len(seeds_to_expand), cluster_name)

    for item in seeds_to_expand:
        seed = item["query_text"]
        user_prompt = (
            f"CLUSTER FOCUS: {cluster_name}\n"
            f"REGION FOCUS: {region}\n"
            f"LANGUAGE: {language}\n\n"
            f"SEED: {seed}\n\nBEGIN EXPANSION:"
        )
        try:
            raw_output = call_llm(system_prompt, user_prompt, model="groq", temperature=0.8)
            variants = _parse_questions(raw_output)
            for v in variants:
                expanded.append({
                    "query_text": v,
                    "source": "llm_expansion",
                    "cluster_id": cluster_name,
                    "region": region,
                    "language": language,
                })
        except Exception as e:
            log.warning("LLM expansion failed for '%s': %s", seed, e)

    # Deduplicate again after expansion
    seen = set()
    unique = []
    for item in expanded:
        key = item["query_text"].lower().strip()
        if key and key not in seen:
            seen.add(key)
            unique.append(item)

    log.info("Expanded to %d unique queries", len(unique))
    return {**state, "expanded_queries": unique}
