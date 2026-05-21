"""Generate YAML frontmatter + Markdown brief skeleton for Netlify/Hugo/Next.js."""
import yaml
from datetime import datetime, timedelta
from pathlib import Path
from typing import Any


def _clean_yaml_value(v: Any) -> Any:
    if isinstance(v, list):
        return [_clean_yaml_value(i) for i in v]
    if isinstance(v, dict):
        return {k: _clean_yaml_value(val) for k, val in v.items()}
    return v


def generate_frontmatter(brief: dict) -> str:
    meta = brief.get("brief_metadata", {})
    seo = brief.get("seo_aeo_requirements", {})
    strategy = brief.get("content_strategy", {})
    audience = brief.get("target_audience", {})

    publish_days = meta.get("target_publish_date_days", 7)
    publish_date = (datetime.utcnow() + timedelta(days=publish_days)).strftime("%Y-%m-%d")

    frontmatter = {
        "title": seo.get("title_tag", ""),
        "description": seo.get("meta_description", ""),
        "slug": seo.get("url_slug", ""),
        "date": datetime.utcnow().strftime("%Y-%m-%d"),
        "publish_date": publish_date,
        "status": "draft",
        "brief_id": meta.get("brief_id", ""),
        "cluster_id": meta.get("cluster_id", ""),
        "priority": meta.get("priority", "medium"),
        "format": strategy.get("content_format", ""),
        "word_count_target": strategy.get("target_word_count", 1000),
        "schema_markup": seo.get("schema_markup", []),
        "primary_keyword": strategy.get("primary_keyword", ""),
        "secondary_keywords": strategy.get("secondary_keywords", []),
        "target_persona": audience.get("persona", ""),
        "decision_stage": audience.get("decision_stage", ""),
    }

    return "---\n" + yaml.dump(frontmatter, default_flow_style=False, allow_unicode=True) + "---\n"


def generate_brief_markdown(brief: dict) -> str:
    strategy = brief.get("content_strategy", {})
    seo = brief.get("seo_aeo_requirements", {})
    cta = brief.get("cta_conversion_strategy", {})
    agent3 = brief.get("agent_3_generation_payload", {})
    review = brief.get("human_review_notes", {})

    sections = strategy.get("outline_sections", [])
    snippet = seo.get("ai_overview_target_snippet", "")
    primary_cta = cta.get("primary_cta", "")
    secondary_cta = cta.get("secondary_cta", "")
    placement_hooks = cta.get("placement_hooks", [])
    tone_constraints = agent3.get("tone_constraints", [])
    required_elements = agent3.get("required_elements", [])
    avoid_phrases = agent3.get("avoid_phrases", [])
    citations = agent3.get("citation_sources", [])
    internal_links = agent3.get("internal_link_targets", [])
    founder_notes = review.get("requires_founder_input", [])
    legal_note = review.get("legal_compliance_check", "")

    lines = []
    lines.append(f"# {seo.get('title_tag', 'Content Brief')}\n")

    lines.append("## AI Overview Target Snippet\n")
    lines.append(f"> {snippet}\n")

    lines.append("## Content Outline\n")
    for i, section in enumerate(sections, 1):
        lines.append(f"### {i}. {section}\n")
        lines.append("<!-- AGENT 3: expand this section with ~{} words -->".format(
            strategy.get("target_word_count", 1000) // len(sections)
        ))
        if i == 1 and "after_section_1" in placement_hooks:
            lines.append(f"\n<!-- CTA_HOOK: {primary_cta} -->\n")
        elif i == 2 and "after_section_2" in placement_hooks:
            lines.append(f"\n<!-- CTA_HOOK: {primary_cta} -->\n")
        lines.append("")

    lines.append("## Agent 3 Generation Constraints\n")
    lines.append("**Tone constraints:**")
    for t in tone_constraints:
        lines.append(f"- {t}")
    lines.append("")

    lines.append("**Required elements:**")
    for e in required_elements:
        lines.append(f"- `{e}`")
    lines.append("")

    lines.append("**Avoid phrases:**")
    for p in avoid_phrases:
        lines.append(f"- ~~{p}~~")
    lines.append("")

    lines.append("**Citation sources:**")
    for c in citations:
        lines.append(f"- {c}")
    lines.append("")

    lines.append("**Internal link targets:**")
    for link in internal_links:
        lines.append(f"- `{link}`")
    lines.append("")

    lines.append("## CTA Placement\n")
    lines.append(f"- **Primary CTA**: {primary_cta}")
    lines.append(f"- **Secondary CTA**: {secondary_cta}")
    lines.append(f"- **Placement hooks**: {', '.join(placement_hooks)}")
    lines.append("")

    if founder_notes or legal_note:
        lines.append("## Human Review Notes\n")
        if founder_notes:
            lines.append("**Requires founder input:**")
            for note in founder_notes:
                lines.append(f"- [ ] {note}")
            lines.append("")
        if legal_note:
            lines.append(f"**Legal/compliance check:** {legal_note}")
        lines.append("")

    return "\n".join(lines)


def write_brief_file(brief: dict, output_dir: Path) -> Path:
    output_dir.mkdir(parents=True, exist_ok=True)
    brief_id = brief.get("brief_metadata", {}).get("brief_id", "unknown")
    slug = brief.get("seo_aeo_requirements", {}).get("url_slug", f"/brief-{brief_id}").lstrip("/").replace("/", "-")
    filename = f"{slug}.md"
    filepath = output_dir / filename

    content = generate_frontmatter(brief) + "\n" + generate_brief_markdown(brief)
    filepath.write_text(content, encoding="utf-8")
    return filepath
