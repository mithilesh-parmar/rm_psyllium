"""Unified LLM interface: routes to Groq (free) for bulk tasks, OpenAI for scoring."""
# Groq model: mixtral-8x7b-32768 was decommissioned; using llama-3.3-70b-versatile instead
import hashlib
import json
import os
from functools import lru_cache
from pathlib import Path
from typing import Optional

from openai import OpenAI

_CACHE_DIR = Path(__file__).parent.parent.parent / ".llm_cache"
_CACHE_DIR.mkdir(exist_ok=True)


def _cache_key(model: str, system: str, user: str) -> str:
    h = hashlib.sha256(f"{model}:{system}:{user}".encode()).hexdigest()[:16]
    return h


def _read_cache(key: str) -> Optional[str]:
    f = _CACHE_DIR / f"{key}.txt"
    if f.exists():
        return f.read_text()
    return None


def _write_cache(key: str, value: str) -> None:
    (_CACHE_DIR / f"{key}.txt").write_text(value)


def _groq_client() -> OpenAI:
    return OpenAI(
        api_key=os.environ["GROQ_API_KEY"],
        base_url="https://api.groq.com/openai/v1",
    )


def _openai_client() -> OpenAI:
    return OpenAI(api_key=os.environ["OPENAI_API_KEY"])


def call_llm(
    system_prompt: str,
    user_prompt: str,
    model: str = "groq",
    temperature: float = 0.7,
    max_tokens: int = 1024,
    use_cache: bool = True,
) -> str:
    """
    model: "groq" (Llama-3.3-70b via Groq free tier) | "openai" (GPT-4o-mini)
    """
    actual_model = "llama-3.3-70b-versatile" if model == "groq" else "gpt-4o-mini"
    key = _cache_key(actual_model, system_prompt, user_prompt)

    if use_cache:
        cached = _read_cache(key)
        if cached:
            return cached

    if model == "groq":
        client = _groq_client()
    else:
        client = _openai_client()

    response = client.chat.completions.create(
        model=actual_model,
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt},
        ],
        temperature=temperature,
        max_tokens=max_tokens,
    )
    result = response.choices[0].message.content.strip()

    if use_cache:
        _write_cache(key, result)

    return result


def call_llm_json(
    system_prompt: str,
    user_prompt: str,
    model: str = "openai",
    use_cache: bool = True,
) -> dict:
    """Call LLM and parse JSON response. Uses OpenAI by default for reliability."""
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
        temperature=0.3,
        max_tokens=512,
    )
    result = response.choices[0].message.content.strip()

    if use_cache:
        _write_cache(key, result)

    return json.loads(result)
