"""Node 3: Deterministic SEO/AEO field generation using templates. Zero LLM cost."""
import json
import re
import unicodedata
from pathlib import Path

from src.utils.logger import get_logger

log = get_logger("seo_aeo")

_MAPPINGS: dict | None = None


def _load_mappings() -> dict:
    global _MAPPINGS
    if _MAPPINGS is None:
        path = Path(__file__).parent.parent.parent / "config" / "template_mappings.json"
        _MAPPINGS = json.loads(path.read_text())
    return _MAPPINGS


def _slugify(text: str) -> str:
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("ascii")
    text = text.lower()
    text = re.sub(r"[^\w\s-]", "", text)
    text = re.sub(r"[\s_]+", "-", text)
    text = re.sub(r"-+", "-", text)
    return text.strip("-")


def _extract_keywords(query_text: str, product_tags: list[str], region: str) -> tuple[str, list[str]]:
    primary = query_text.strip().lower()
    secondary = []

    for tag in product_tags[:3]:
        variant = f"{tag.replace('_', ' ')} {region.lower()} import"
        secondary.append(variant)

    if region and region not in primary:
        secondary.append(f"{primary} {region.lower()}")

    secondary.append(f"{primary} supplier India")
    secondary = list(dict.fromkeys(secondary))[:4]

    return primary, secondary


def _build_title(fmt: str, query_text: str, template_cfg: dict) -> str:
    pattern = template_cfg.get("title_pattern", "{topic} | RM Psyllium")
    q = query_text.strip()
    # Capitalise first word only for readability
    q_title = q[0].upper() + q[1:] if q else q
    title = pattern.replace("{topic}", q_title).replace("{action}", q_title).replace("{topic1}", q_title)
    if "| RM Psyllium" not in title:
        title += " | RM Psyllium"
    return title[:120]


def _build_meta(query_text: str, region: str, template_cfg: dict, outline_sections: list[str]) -> str:
    pattern = template_cfg.get("meta_pattern", "Learn about {topic} with RM Psyllium.")
    resource = outline_sections[1] if len(outline_sections) > 1 else "compliance checklist"
    count = len(outline_sections)
    audience = f"{region} buyers" if region else "B2B buyers"
    meta = (
        pattern
        .replace("{benefit}", f"everything about {query_text[:40]}")
        .replace("{count}", str(count))
        .replace("{resource}", resource.lower())
        .replace("{audience}", audience)
        .replace("{topic}", query_text[:50])
        .replace("{use_case}", "nutraceutical and pharma applications")
        .replace("{region}", region)
        .replace("{topic1}", query_text[:40])
        .replace("{topic2}", "alternative grades")
    )
    return meta[:160]


def seo_aeo_engine(state: dict) -> dict:
    """
    Input: content_format, template_config, outline_sections, ai_snippet, agent1_payload
    Output: title_tag, meta_description, url_slug, schema_markup, ai_snippet (refined)
    """
    payload = state["agent1_payload"]
    query_text = payload.get("query_text", "")
    region = payload.get("region", "US")
    product_tags = payload.get("product_tags", [])
    template_cfg = state.get("template_config", {})
    outline_sections = state.get("outline_sections", [])
    content_format = state.get("content_format", "step_by_step_guide")
    mappings = _load_mappings()
    fmt_cfg = mappings["format_templates"].get(content_format, template_cfg)

    title_tag = _build_title(content_format, query_text, fmt_cfg)
    meta_description = _build_meta(query_text, region, fmt_cfg, outline_sections)

    url_prefix = fmt_cfg.get("url_prefix", "/guides/")
    url_slug = url_prefix + _slugify(query_text)

    schema_markup = fmt_cfg.get("schema_types", ["Article", "FAQPage"])

    primary_keyword, secondary_keywords = _extract_keywords(query_text, product_tags, region)

    # Use LLM-generated snippet if available, otherwise build a template one
    ai_snippet = state.get("ai_snippet", "")
    if not ai_snippet or len(ai_snippet.split()) < 20:
        sections_preview = "; ".join(outline_sections[:3])
        ai_snippet = (
            f"RM Psyllium provides psyllium husk and powder from Gujarat, India. "
            f"This guide covers: {sections_preview}. "
            f"Current certifications: FSSAI, APEDA, IEC. GMP/ISO 22000 audit in progress — expected Q3 2026."
        )

    log.info("SEO/AEO: title='%s', slug='%s'", title_tag[:60], url_slug)

    return {
        **state,
        "title_tag": title_tag,
        "meta_description": meta_description,
        "url_slug": url_slug,
        "schema_markup": schema_markup,
        "ai_snippet": ai_snippet,
        "primary_keyword": primary_keyword,
        "secondary_keywords": secondary_keywords,
    }
