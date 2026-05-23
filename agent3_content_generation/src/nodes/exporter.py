"""Node 5: Validate, assemble full markdown + schema, atomic write, Supabase log."""
import json
import uuid
from datetime import datetime
from pathlib import Path

from pydantic import ValidationError

from src.utils.validators import validate_jsonld, count_words, FrontmatterModel
from src.utils.markdown_templater import build_frontmatter, inject_frontmatter, inject_schema_jsonld, write_content_file
from src.utils.logger import get_logger, notify_slack

log = get_logger("exporter")


def _parse_frontmatter_from_draft(draft: str) -> dict:
    """Extract YAML frontmatter values from LLM-generated draft."""
    frontmatter = {}
    if not draft.strip().startswith("---"):
        return frontmatter

    parts = draft.split("---", 2)
    if len(parts) < 3:
        return frontmatter

    fm_block = parts[1]
    for line in fm_block.strip().split("\n"):
        if ":" in line:
            key, _, value = line.partition(":")
            key = key.strip()
            value = value.strip().strip('"').strip("'")
            if key in ("title", "description", "slug", "date"):
                frontmatter[key] = value
            elif key == "tags":
                tags = value.strip("[]").replace('"', "").replace("'", "")
                frontmatter["tags"] = [t.strip() for t in tags.split(",") if t.strip()]
            elif key == "schema_types":
                st = value.strip("[]").replace('"', "").replace("'", "")
                frontmatter["schema_types"] = [s.strip() for s in st.split(",") if s.strip()]
    return frontmatter


def _build_slug_filename(slug: str) -> str:
    clean = slug.lstrip("/").replace("/", "-")
    if not clean.endswith(".md"):
        clean += ".md"
    return clean


def exporter(state: dict) -> dict:
    """
    Input: full accumulated state
    Output: state + 'output' key with content_id, paths, metadata
    """
    draft = state.get("raw_draft", "")
    schema_markup = state.get("schema_markup", {})
    citation_opt = state.get("citation_optimization", {})
    compliance_flags = state.get("compliance_flags", [])
    human_review_flags = state.get("human_review_flags", {})
    brief = state["agent2_payload"]

    # JSON-LD validation
    is_valid, schema_errors = validate_jsonld(schema_markup)
    schema_validation_status = "passed" if is_valid else f"failed: {'; '.join(schema_errors)}"
    if schema_errors:
        log.warning("Schema validation issues: %s", schema_errors)

    # Parse frontmatter from draft
    fm_data = _parse_frontmatter_from_draft(draft)
    seo = brief.get("seo_aeo_requirements", {})
    today = datetime.utcnow().strftime("%Y-%m-%d")

    title = fm_data.get("title") or seo.get("title_tag", "")
    description = fm_data.get("description") or seo.get("meta_description", "")
    slug = fm_data.get("slug") or seo.get("url_slug", "/guides/untitled")
    tags = fm_data.get("tags") or brief.get("content_strategy", {}).get("outline_sections", [])[:3]
    schema_types = fm_data.get("schema_types") or list(schema_markup.keys())

    # Pydantic frontmatter validation
    try:
        fm_model = FrontmatterModel(
            title=title,
            description=description,
            slug=slug,
            date=fm_data.get("date", today),
            tags=tags or ["psyllium"],
            draft=False,
            schema_types=schema_types,
        )
    except ValidationError as e:
        log.warning("Frontmatter validation issues (non-fatal): %s", e)
        # Build minimal valid frontmatter
        fm_model = FrontmatterModel(
            title=title or "RM Psyllium Guide",
            description=description or "Technical guide for psyllium buyers and importers.",
            slug=slug,
            date=today,
            tags=["psyllium"],
            draft=True,  # mark as draft if validation failed
            schema_types=schema_types,
        )

    # Rebuild frontmatter block
    frontmatter_str = build_frontmatter(
        title=fm_model.title,
        description=fm_model.description,
        slug=fm_model.slug,
        tags=fm_model.tags,
        schema_types=fm_model.schema_types,
        publish_date=fm_model.date,
    )

    # Inject clean frontmatter + append JSON-LD
    clean_markdown = inject_frontmatter(draft, frontmatter_str)
    full_markdown = inject_schema_jsonld(clean_markdown, schema_markup)

    word_count = count_words(draft)

    # Atomic write
    content_id = str(uuid.uuid4())
    filename = _build_slug_filename(slug)
    output_dir = Path(__file__).parent.parent.parent / "output" / "content"
    md_path = write_content_file({"full_markdown": full_markdown}, output_dir, filename)
    log.info("Content written to %s (%d words)", md_path, word_count)

    # Supabase log (skip in test_mode)
    if not state.get("test_mode", False):
        try:
            from src.utils.supabase_client import upsert_content_generation
            record = {
                "content_id": content_id,
                "source_brief_id": brief.get("brief_metadata", {}).get("brief_id", ""),
                "status": "generated",
                "generated_markdown": full_markdown,
                "schema_markup": json.dumps(schema_markup),
                "citation_optimization": json.dumps(citation_opt),
                "human_review_flags": json.dumps(human_review_flags),
                "export_metadata": json.dumps({
                    "filename": filename,
                    "target_directory": "/content/guides/",
                    "netlify_frontmatter_compatible": True,
                    "schema_injected": True,
                }),
                "token_count": state.get("draft_word_count", 0),
                "model_used": "llama-3.3-70b-versatile (groq)",
                "schema_validation": schema_validation_status,
                "compliance_flags": json.dumps(compliance_flags),
            }
            upsert_content_generation(record)
        except Exception as e:
            log.error("Supabase upsert failed (non-fatal): %s", e)
            notify_slack(f"Agent 3 Supabase error: content_id={content_id}: {e}")

    return {
        **state,
        "output": {
            "content_id": content_id,
            "md_path": str(md_path),
            "filename": filename,
            "word_count": word_count,
            "schema_validation": schema_validation_status,
            "compliance_flags": compliance_flags,
            "human_review_flags": human_review_flags,
            "frontmatter": fm_model.model_dump(),
            "citation_optimization": citation_opt,
        },
    }
