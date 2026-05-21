"""CLI: change content status 'generated' → 'approved', then optionally trigger Netlify.

Usage:
  python scripts/approve_for_publish.py --content-id <uuid> [--notes "Spec table verified"]
  python scripts/approve_for_publish.py --list-pending
"""
import argparse
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))

from dotenv import load_dotenv

_ENV_PATH = Path(__file__).parent.parent.parent / "agent1_aeo_discovery" / "config" / "api_keys.env"
if _ENV_PATH.exists():
    load_dotenv(_ENV_PATH)


def main():
    parser = argparse.ArgumentParser(description="Approve content for publishing — RM Psyllium Agent 3")
    parser.add_argument("--content-id", help="UUID of content_generation record to approve")
    parser.add_argument("--notes", default="", help="Reviewer notes (stored in Supabase)")
    parser.add_argument("--deploy", action="store_true", help="Trigger Netlify deploy after approval")
    parser.add_argument("--list-pending", action="store_true", help="List content awaiting review")
    parser.add_argument("--reject", action="store_true", help="Reject instead of approve")
    args = parser.parse_args()

    from src.utils.logger import setup_logging
    setup_logging("INFO")

    from src.utils.supabase_client import fetch_pending_review, update_content_status

    if args.list_pending:
        pending = fetch_pending_review(limit=20)
        if not pending:
            print("No content awaiting review.")
            return
        print(f"\n{'Content ID':<38} {'Words':<8} {'Schema':<12} {'Created'}")
        print("-" * 90)
        for item in pending:
            meta = item.get("export_metadata", {})
            if isinstance(meta, str):
                import json as _json
                meta = _json.loads(meta)
            print(
                f"{item.get('content_id', 'N/A'):<38} "
                f"{item.get('token_count', 0):<8} "
                f"{item.get('schema_validation', 'N/A'):<12} "
                f"{str(item.get('created_at', ''))[:16]}"
            )
        return

    if not args.content_id:
        parser.error("Provide --content-id or --list-pending")

    new_status = "rejected" if args.reject else "approved"
    extra = {}
    if args.notes:
        extra["human_review_notes"] = args.notes

    update_content_status(args.content_id, new_status, **extra)
    print(f"Content {args.content_id} → {new_status}")

    if args.deploy and not args.reject:
        from src.utils.netlify_client import trigger_deploy
        triggered = trigger_deploy(content_id=args.content_id)
        if triggered:
            print("Netlify deploy triggered.")
        else:
            print("WARNING: Netlify deploy not triggered (check NETLIFY_BUILD_HOOK env var).")


if __name__ == "__main__":
    main()
