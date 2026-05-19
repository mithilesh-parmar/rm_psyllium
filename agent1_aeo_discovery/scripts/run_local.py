#!/usr/bin/env python3
"""Local test runner — run a single cluster/region without cron."""
import argparse
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))

from dotenv import load_dotenv
load_dotenv("config/api_keys.env")

from src.main import load_config, run_agent
from src.utils.logger import setup_logging

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--cluster", default="supplier_qualification", help="Cluster to run")
    parser.add_argument("--region", default="US", help="Region to run (US, DE, UK, ...)")
    parser.add_argument("--config", default="config/seed_input.json")
    parser.add_argument("--test-mode", action="store_true", help="Skip Supabase writes")
    parser.add_argument("--log-level", default="INFO")
    args = parser.parse_args()

    setup_logging(args.log_level)
    config = load_config(args.config)

    print(f"\n🌾 Running AEO Agent: cluster={args.cluster}, region={args.region}, test_mode={args.test_mode}\n")
    result = run_agent(
        config,
        test_mode=args.test_mode,
        cluster_filter=args.cluster,
        region_filter=args.region,
    )
    print(f"\n✅ Complete: {result['aeo_ready_count']} high-quality queries discovered")
    print(f"   Output files: outputs/")
