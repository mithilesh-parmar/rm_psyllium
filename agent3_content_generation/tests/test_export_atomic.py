"""Test: atomic file write, rollback on error, frontmatter parsing."""
import pytest
from pathlib import Path
import tempfile


def test_atomic_write_creates_file():
    from src.utils.markdown_templater import write_content_file

    content = {"full_markdown": "---\ntitle: test\n---\nHello world"}
    with tempfile.TemporaryDirectory() as tmpdir:
        path = write_content_file(content, Path(tmpdir), "test-article.md")
        assert path.exists()
        assert path.read_text() == content["full_markdown"]


def test_atomic_write_no_tmp_file_left():
    from src.utils.markdown_templater import write_content_file

    with tempfile.TemporaryDirectory() as tmpdir:
        content = {"full_markdown": "# Test"}
        write_content_file(content, Path(tmpdir), "test.md")
        tmp_files = list(Path(tmpdir).glob(".*.tmp"))
        assert len(tmp_files) == 0, "Temp file should be cleaned up after atomic write"


def test_atomic_write_overwrites_existing():
    from src.utils.markdown_templater import write_content_file

    with tempfile.TemporaryDirectory() as tmpdir:
        p = Path(tmpdir) / "article.md"
        p.write_text("old content")
        write_content_file({"full_markdown": "new content"}, Path(tmpdir), "article.md")
        assert p.read_text() == "new content"


def test_build_frontmatter_format():
    from src.utils.markdown_templater import build_frontmatter

    fm = build_frontmatter(
        title="Test Article",
        description="A test description for the article that is long enough.",
        slug="/guides/test-article",
        tags=["psyllium", "compliance"],
        schema_types=["HowTo", "FAQPage"],
        publish_date="2026-05-20",
    )
    assert fm.startswith("---\n")
    assert 'title: "Test Article"' in fm
    assert 'slug: "/guides/test-article"' in fm
    assert '"HowTo"' in fm
    assert '"psyllium"' in fm


def test_inject_frontmatter_replaces_existing():
    from src.utils.markdown_templater import inject_frontmatter, build_frontmatter

    old_draft = '---\ntitle: "Old"\ndraft: true\n---\n\n# Body content here'
    new_fm = build_frontmatter(
        title="New Title",
        description="New description that meets minimum length requirements here.",
        slug="/guides/new",
        tags=["test"],
        schema_types=["Organization"],
    )
    result = inject_frontmatter(old_draft, new_fm)
    assert 'title: "New Title"' in result
    assert 'title: "Old"' not in result
    assert "# Body content here" in result


def test_schema_jsonld_injected_at_end():
    from src.utils.markdown_templater import inject_schema_jsonld

    markdown = "# Article\n\nSome content."
    schema = {"Organization": {"@context": "https://schema.org", "@type": "Organization", "name": "RM Psyllium"}}
    result = inject_schema_jsonld(markdown, schema)
    assert '<script type="application/ld+json">' in result
    assert '"@type": "Organization"' in result


def test_extract_ai_snippet_returns_first_paragraph():
    from src.utils.markdown_templater import extract_ai_snippet

    markdown = """---
title: test
---

To verify GMP certification for a psyllium supplier in India, request the facility registration number, review third-party audit reports, and cross-check with FDA and WHO databases.

## Section 2

More content here.
"""
    snippet = extract_ai_snippet(markdown, word_target=30)
    assert "GMP" in snippet or "psyllium" in snippet
    assert len(snippet.split()) <= 35
