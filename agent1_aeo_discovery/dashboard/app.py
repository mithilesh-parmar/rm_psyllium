"""Streamlit dashboard: review, approve/reject AEO queries with Supabase write-back."""
import os
import sys
from pathlib import Path

import streamlit as st
import pandas as pd

sys.path.insert(0, str(Path(__file__).parent.parent))

from dotenv import load_dotenv
load_dotenv(Path(__file__).parent.parent / "config" / "api_keys.env")

from src.utils.supabase_client import fetch_queries_for_review, update_query_review_status

st.set_page_config(page_title="AEO Query Review — RM Psyllium", layout="wide")
st.title("AEO Query Discovery Dashboard")
st.caption("Review and approve queries for Agent 2 content generation")

# Sidebar filters
with st.sidebar:
    st.header("Filters")
    min_score = st.slider("Min AEO Score", 7.0, 10.0, 8.0, 0.1)
    limit = st.selectbox("Max queries", [25, 50, 100], index=1)
    cluster_filter = st.selectbox("Cluster", [
        "All", "supplier_qualification", "technical_specs", "pricing_logistics",
        "organic_sustainability", "compliance_documentation", "khakha_animal_feed",
        "industrial_specialty", "competitor_targeting",
    ])
    region_filter = st.selectbox("Region", ["All", "US", "DE", "UK", "FR", "NL", "CA", "BD"])
    refresh = st.button("Refresh from Supabase")

# Fetch data
@st.cache_data(ttl=60, show_spinner="Loading queries from Supabase...")
def load_queries(min_score, limit):
    return fetch_queries_for_review(min_score=min_score, limit=limit)

if "queries" not in st.session_state or refresh:
    st.session_state.queries = load_queries(min_score, limit)
    st.session_state.actions = {}

queries = st.session_state.queries

if not queries:
    st.info("No pending queries found. Run the agent first or lower the min score filter.")
    st.stop()

# Apply local filters
df = pd.DataFrame(queries)
if cluster_filter != "All":
    df = df[df["cluster_id"] == cluster_filter]
if region_filter != "All":
    df = df[df["region"] == region_filter]

st.metric("Queries to review", len(df))

# Summary metrics
col1, col2, col3, col4 = st.columns(4)
col1.metric("Avg AEO Score", f"{df['aeo_score'].mean():.1f}" if len(df) else "—")
col2.metric("High priority", len(df[df["priority"] == "high"]) if len(df) else 0)
col3.metric("Commercial intent", len(df[df["intent"] == "commercial"]) if len(df) else 0)
col4.metric("Clusters covered", df["cluster_id"].nunique() if len(df) else 0)

st.divider()

# Batch actions
st.subheader("Batch Actions")
ba_col1, ba_col2, ba_col3 = st.columns(3)
if ba_col1.button("Approve all HIGH priority", type="primary"):
    high_ids = df[df["priority"] == "high"]["query_id"].tolist()
    for qid in high_ids:
        update_query_review_status(qid, "approved")
    st.success(f"Approved {len(high_ids)} high-priority queries")
    st.cache_data.clear()
    st.rerun()

if ba_col2.button("Export approved to CSV"):
    approved = df[df.get("human_review_status", pd.Series(["pending"] * len(df))) == "approved"]
    csv = approved.to_csv(index=False)
    ba_col2.download_button("Download CSV", csv, "approved_queries.csv", "text/csv")

st.divider()

# Per-query review
st.subheader("Query Review")
for _, row in df.iterrows():
    qid = row["query_id"]
    with st.expander(f"[{row.get('aeo_score', 0):.1f}] {row['query_text']}", expanded=False):
        c1, c2, c3 = st.columns([2, 1, 1])
        with c1:
            st.markdown(f"**Cluster:** `{row.get('cluster_id', '—')}` | **Region:** `{row.get('region', '—')}` | **Intent:** `{row.get('intent', '—')}`")
            st.markdown(f"**Priority:** `{row.get('priority', '—')}` | **Est. volume/mo:** `{row.get('estimated_monthly_volume', '—')}`")
            factors = row.get("aeo_factors", {}) or {}
            if factors:
                st.markdown(
                    f"**Scoring:** Answerability={factors.get('answerability', '—')} | "
                    f"Citation={factors.get('citation_potential', '—')} | "
                    f"Conv.Match={factors.get('conversational_match', '—')} | "
                    f"CommFit={factors.get('commercial_fit', '—')}"
                )
            rec = row.get("content_recommendation") or {}
            if rec:
                st.markdown(f"**Recommended format:** `{rec.get('format', '—')}` | **CTA:** _{rec.get('cta_suggestion', '—')}_")

            edited = st.text_input("Edit query text (optional)", value=row["query_text"], key=f"edit_{qid}")

        with c2:
            if st.button("Approve", key=f"approve_{qid}", type="primary"):
                text = edited if edited != row["query_text"] else None
                status = "edited" if text else "approved"
                update_query_review_status(qid, status, text)
                st.success("Approved")
                st.cache_data.clear()

        with c3:
            if st.button("Reject", key=f"reject_{qid}"):
                update_query_review_status(qid, "rejected")
                st.warning("Rejected")
                st.cache_data.clear()

st.divider()

# Agent 2 handoff preview
st.subheader("Agent 2 Handoff Preview")
st.caption("High-priority approved queries ready for content generation")
output_dir = Path(__file__).parent.parent / "outputs"
handoff_files = list(output_dir.glob("agent2_handoff_*.json")) if output_dir.exists() else []
if handoff_files:
    latest = max(handoff_files, key=lambda f: f.stat().st_mtime)
    import json
    handoff = json.loads(latest.read_text())
    st.json(handoff[:3])  # preview first 3
    st.download_button("Download full Agent 2 handoff", latest.read_text(), latest.name, "application/json")
else:
    st.info("No Agent 2 handoff files yet. Run the agent first.")
