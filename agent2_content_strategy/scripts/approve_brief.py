#!/usr/bin/env python3
"""CLI to approve or reject a content brief (changes status draft → approved/rejected)."""
import argparse
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))

from dotenv import load_dotenv
from src.utils.supabase_client import fetch_pending_briefs, update_brief_status
from src.utils.logger import setup_logging, get_logger

log = get_logger("approve")


def list_drafts():
    briefs = fetch_pending_briefs(limit=50)
    if not briefs:
        print("No draft briefs found.")
        return
    print(f"\n{'BRIEF ID':<38} {'PRIORITY':<10} {'CLUSTER':<35} {'CREATED'}")
    print("-" * 110)
    for b in briefs:
        print(
            f"{b.get('brief_id', '?'):<38} "
            f"{b.get('priority', '?'):<10} "
            f"{b.get('cluster_id', '?'):<35} "
            f"{b.get('created_at', '?')[:19]}"
        )


def approve_brief(brief_id: str):
    update_brief_status(brief_id, "approved")
    print(f"✓ Brief {brief_id} approved — ready for Agent 3.")


def reject_brief(brief_id: str):
    update_brief_status(brief_id, "rejected")
    print(f"✗ Brief {brief_id} rejected.")


def main():
    parser = argparse.ArgumentParser(description="Approve or reject content briefs")
    parser.add_argument(
        "--env",
        default=str(Path(__file__).parent.parent.parent / "agent1_aeo_discovery" / "config" / "api_keys.env"),
    )
    subparsers = parser.add_subparsers(dest="command")

    subparsers.add_parser("list", help="List all draft briefs")

    approve_p = subparsers.add_parser("approve", help="Approve a brief")
    approve_p.add_argument("--brief-id", required=True)

    reject_p = subparsers.add_parser("reject", help="Reject a brief")
    reject_p.add_argument("--brief-id", required=True)

    args = parser.parse_args()

    setup_logging()
    env_path = Path(args.env)
    if env_path.exists():
        load_dotenv(env_path)
    else:
        load_dotenv()

    if args.command == "list":
        list_drafts()
    elif args.command == "approve":
        approve_brief(args.brief_id)
    elif args.command == "reject":
        reject_brief(args.brief_id)
    else:
        parser.print_help()


if __name__ == "__main__":
    main()
