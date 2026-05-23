#!/usr/bin/env python3
"""Manually re-run a specific cluster across all configured regions."""
import argparse
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent.parent))

from dotenv import load_dotenv
load_dotenv("config/api_keys.env")

from src.main import load_config, run_agent
from src.utils.logger import setup_logging

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("cluster", help="Cluster name to refresh (e.g. technical_specs)")
    parser.add_argument("--config", default="config/seed_input.json")
    parser.add_argument("--test-mode", action="store_true")
    args = parser.parse_args()

    setup_logging()
    config = load_config(args.config)
    result = run_agent(config, test_mode=args.test_mode, cluster_filter=args.cluster)
    print(f"Refreshed cluster '{args.cluster}': {result['aeo_ready_count']} queries")
