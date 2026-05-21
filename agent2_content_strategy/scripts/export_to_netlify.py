#!/usr/bin/env python3
"""Export approved briefs as .md files to the Netlify content directory."""
import argparse
import json
import shutil
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))

from dotenv import load_dotenv
from src.utils.supabase_client import fetch_approved_briefs
from src.utils.markdown_gen import write_brief_file
from src.utils.logger import setup_logging, get_logger

log = get_logger("netlify_export")

PROJECT_ROOT = Path(__file__).parent.parent.parent.parent  # rm_psyllium root
DEFAULT_NETLIFY_CONTENT_DIR = PROJECT_ROOT / "src" / "content" / "briefs"


def export_briefs(netlify_dir: Path, dry_run: bool = False) -> int:
    briefs_raw = fetch_approved_briefs()
    if not briefs_raw:
        log.info("No approved briefs to export.")
        return 0

    exported = 0
    for raw in briefs_raw:
        try:
            # Reconstruct brief dict from Supabase flat row
            brief = {
                "brief_metadata": {
                    "brief_id": raw.get("brief_id", ""),
                    "source_query_id": raw.get("source_query_id", ""),
                    "cluster_id": raw.get("cluster_id", ""),
                    "created_at": raw.get("created_at", ""),
                    "priority": raw.get("priority", "medium"),
                    "estimated_effort_hours": raw.get("estimated_effort_hours", 3),
                    "target_publish_date_days": 0,
                },
                "target_audience": {},
                "content_strategy": json.loads(raw.get("content_strategy", "{}")),
                "seo_aeo_requirements": json.loads(raw.get("seo_aeo_requirements", "{}")),
                "cta_conversion_strategy": json.loads(raw.get("cta_strategy", "{}")),
                "agent_3_generation_payload": json.loads(raw.get("agent_3_payload", "{}")),
                "human_review_notes": json.loads(raw.get("human_review_notes", "{}")),
            }

            if dry_run:
                slug = brief["seo_aeo_requirements"].get("url_slug", raw.get("brief_id", "?"))
                log.info("[DRY RUN] Would export: %s", slug)
            else:
                path = write_brief_file(brief, netlify_dir)
                log.info("Exported: %s", path)

            exported += 1
        except Exception as e:
            log.error("Failed to export brief_id=%s: %s", raw.get("brief_id", "?"), e)

    return exported


def main():
    parser = argparse.ArgumentParser(description="Export approved briefs to Netlify content dir")
    parser.add_argument(
        "--env",
        default=str(Path(__file__).parent.parent.parent / "agent1_aeo_discovery" / "config" / "api_keys.env"),
    )
    parser.add_argument("--output-dir", default=str(DEFAULT_NETLIFY_CONTENT_DIR))
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    setup_logging()
    env_path = Path(args.env)
    if env_path.exists():
        load_dotenv(env_path)
    else:
        load_dotenv()

    netlify_dir = Path(args.output_dir)
    count = export_briefs(netlify_dir, dry_run=args.dry_run)
    print(f"{'[DRY RUN] ' if args.dry_run else ''}Exported {count} brief(s) to {netlify_dir}")


if __name__ == "__main__":
    main()
