"""Node 1: Expand Agent 2 brief into full markdown article draft via LLM."""
import json
from pathlib import Path

from src.utils.llm_router import call_llm_text
from src.utils.logger import get_logger

log = get_logger("draft_generator")

_SYSTEM_PROMPT: str | None = None


def _load_system_prompt() -> str:
    global _SYSTEM_PROMPT
    if _SYSTEM_PROMPT is None:
        path = Path(__file__).parent.parent / "prompts" / "generation_system.txt"
        _SYSTEM_PROMPT = path.read_text()
    return _SYSTEM_PROMPT


def _build_user_prompt(state: dict) -> str:
    brief = state["agent2_payload"]
    biz_ctx = state["business_context"]
    return (
        "Generate the article based on this brief and business context.\n\n"
        f"BRIEF:\n{json.dumps(brief, indent=2)}\n\n"
        f"BUSINESS CONTEXT:\n{json.dumps(biz_ctx, indent=2)}"
    )


def draft_generator(state: dict) -> dict:
    """
    Input: agent2_payload, business_context
    Output: state + raw_draft (markdown string)
    """
    system_prompt = _load_system_prompt()
    user_prompt = _build_user_prompt(state)

    gen_params = (
        state["agent2_payload"]
        .get("agent_3_generation_payload", {})
        .get("generation_parameters", {})
    )
    temperature = gen_params.get("model_temperature", 0.3)
    max_tokens = gen_params.get("max_tokens", 2000)

    # Groq for drafting (free tier), OpenAI only for final polish
    raw_draft = call_llm_text(
        system_prompt=system_prompt,
        user_prompt=user_prompt,
        model="groq",
        temperature=temperature,
        max_tokens=max_tokens,
        use_cache=not state.get("test_mode", False),
    )

    word_count = len(raw_draft.split())
    log.info("Draft generated: %d words", word_count)

    return {**state, "raw_draft": raw_draft, "draft_word_count": word_count}
