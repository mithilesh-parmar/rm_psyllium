"""Trigger Netlify site rebuild. Optionally mark content_id as published.

Usage:
  python scripts/trigger_netlify_deploy.py
  python scripts/trigger_netlify_deploy.py --content-id <uuid>
"""
import argparse
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))

from dotenv import load_dotenv

_ENV_PATH = Path(__file__).parent.parent.parent / "agent1_aeo_discovery" / "config" / "api_keys.env"
if _ENV_PATH.exists():
    load_dotenv(_ENV_PATH)


def main():
    parser = argparse.ArgumentParser(description="Trigger Netlify deploy — RM Psyllium")
    parser.add_argument("--content-id", help="Mark this content_id as published in Supabase after deploy")
    args = parser.parse_args()

    from src.utils.logger import setup_logging, get_logger
    setup_logging("INFO")
    log = get_logger("netlify_deploy")

    from src.utils.netlify_client import trigger_deploy
    triggered = trigger_deploy(content_id=args.content_id)

    if not triggered:
        print("ERROR: Deploy not triggered. Set NETLIFY_BUILD_HOOK in .env")
        sys.exit(1)

    print("Netlify deploy triggered successfully.")

    if args.content_id:
        try:
            from datetime import datetime
            from src.utils.supabase_client import update_content_status
            update_content_status(
                args.content_id,
                "published",
                published_at=datetime.utcnow().isoformat() + "Z",
            )
            print(f"Content {args.content_id} marked as published in Supabase.")
        except Exception as e:
            log.error("Failed to update Supabase status: %s", e)
            print(f"WARNING: Could not update Supabase status: {e}")


if __name__ == "__main__":
    main()
