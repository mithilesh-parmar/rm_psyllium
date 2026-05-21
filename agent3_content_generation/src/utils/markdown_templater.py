"""YAML frontmatter injection and markdown file assembly utilities."""
import re
from datetime import date
from pathlib import Path
from typing import Any


def build_frontmatter(
    title: str,
    description: str,
    slug: str,
    tags: list[str],
    schema_types: list[str],
    publish_date: str | None = None,
) -> str:
    today = publish_date or date.today().isoformat()
    tags_str = ", ".join(f'"{t}"' for t in tags)
    schema_str = ", ".join(f'"{s}"' for s in schema_types)
    return (
        f"---\n"
        f'title: "{_escape_yaml(title)}"\n'
        f'description: "{_escape_yaml(description)}"\n'
        f'slug: "{slug}"\n'
        f'date: "{today}"\n'
        f"tags: [{tags_str}]\n"
        f"draft: false\n"
        f"schema_types: [{schema_str}]\n"
        f"---\n"
    )


def inject_frontmatter(body: str, frontmatter: str) -> str:
    """Replace or prepend frontmatter block in a markdown body."""
    if body.strip().startswith("---"):
        # Strip existing frontmatter
        parts = body.split("---", 2)
        if len(parts) >= 3:
            body = parts[2].lstrip("\n")
    return frontmatter + "\n" + body


def build_spec_table(product_type: str, spec_templates: list[dict]) -> str:
    rows = []
    for spec in spec_templates:
        rows.append(
            f"| {spec['parameter']} | {spec['standard_range']} | {spec['test_method']} |"
        )
    header = "| Parameter | Standard Range | Test Method |\n|-----------|---------------|-------------|"
    return header + "\n" + "\n".join(rows)


def inject_schema_jsonld(markdown: str, schema_markup: dict[str, Any]) -> str:
    """Append JSON-LD script blocks at end of markdown for Netlify/Hugo processing."""
    import json

    blocks = []
    for schema_type, block in schema_markup.items():
        serialized = json.dumps(block, indent=2)
        blocks.append(
            f'\n<script type="application/ld+json">\n{serialized}\n</script>'
        )
    return markdown + "\n" + "\n".join(blocks)


def extract_ai_snippet(markdown: str, word_target: int = 40) -> str:
    """Extract first substantive paragraph for AI overview snippet targeting."""
    lines = markdown.split("\n")
    for line in lines:
        stripped = line.strip()
        if stripped and not stripped.startswith("#") and not stripped.startswith("---") and not stripped.startswith("|"):
            words = stripped.split()
            if len(words) >= 20:
                # Trim to roughly target word count
                return " ".join(words[:word_target])
    return ""


def write_content_file(
    content: dict[str, Any],
    output_dir: Path,
    filename: str,
) -> Path:
    """Atomic write: write to .tmp then rename."""
    output_dir.mkdir(parents=True, exist_ok=True)
    target = output_dir / filename
    tmp = output_dir / f".{filename}.tmp"
    tmp.write_text(content["full_markdown"], encoding="utf-8")
    tmp.rename(target)
    return target


def _escape_yaml(text: str) -> str:
    return text.replace('"', '\\"')
