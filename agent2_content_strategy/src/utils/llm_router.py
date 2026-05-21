"""LLM router: Groq (free) for outline generation, OpenAI GPT-4o-mini for validation/strategy."""
import hashlib
import json
import os
from pathlib import Path
from typing import Optional

from openai import OpenAI

_CACHE_DIR = Path(__file__).parent.parent.parent / ".llm_cache"
_CACHE_DIR.mkdir(exist_ok=True)

_cost_tracker: dict = {"groq_calls": 0, "openai_calls": 0, "total_tokens": 0}


def _cache_key(model: str, system: str, user: str) -> str:
    h = hashlib.sha256(f"{model}:{system}:{user}".encode()).hexdigest()[:16]
    return h


def _read_cache(key: str) -> Optional[str]:
    f = _CACHE_DIR / f"{key}.txt"
    return f.read_text() if f.exists() else None


def _write_cache(key: str, value: str) -> None:
    (_CACHE_DIR / f"{key}.txt").write_text(value)


def _groq_client() -> OpenAI:
    return OpenAI(
        api_key=os.environ["GROQ_API_KEY"],
        base_url="https://api.groq.com/openai/v1",
    )


def _openai_client() -> OpenAI:
    return OpenAI(api_key=os.environ["OPENAI_API_KEY"])


def call_llm_json(
    system_prompt: str,
    user_prompt: str,
    model: str = "openai",
    temperature: float = 0.3,
    max_tokens: int = 1800,
    use_cache: bool = True,
) -> dict:
    """Call LLM and return parsed JSON. model: 'openai' | 'groq'"""
    actual_model = "gpt-4o-mini" if model == "openai" else "llama-3.3-70b-versatile"
    key = _cache_key(actual_model + ":json", system_prompt, user_prompt)

    if use_cache:
        cached = _read_cache(key)
        if cached:
            return json.loads(cached)

    client = _openai_client() if model == "openai" else _groq_client()
    response = client.chat.completions.create(
        model=actual_model,
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt},
        ],
        response_format={"type": "json_object"},
        temperature=temperature,
        max_tokens=max_tokens,
    )
    result = response.choices[0].message.content.strip()
    usage = response.usage

    _cost_tracker["openai_calls" if model == "openai" else "groq_calls"] += 1
    if usage:
        _cost_tracker["total_tokens"] += usage.total_tokens

    if use_cache:
        _write_cache(key, result)

    return json.loads(result)


def get_cost_summary() -> dict:
    """Rough cost estimate: GPT-4o-mini ~$0.15/1M input tokens."""
    estimated_usd = (_cost_tracker["total_tokens"] / 1_000_000) * 0.15
    return {**_cost_tracker, "estimated_cost_usd": round(estimated_usd, 4)}
