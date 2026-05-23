# Agent 1: AEO Query Discovery — RM Psyllium

Discovers, scores, and structures long-tail search queries for B2B psyllium husk sourcing. Feeds approved queries to Agent 2 (content generator).

## Quick Start

```bash
cd agent1_aeo_discovery
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt

cp config/api_keys.env.example config/api_keys.env
# Edit config/api_keys.env with your API keys

# Test run — single cluster, skip Supabase writes
python scripts/run_local.py --cluster supplier_qualification --region US --test-mode
```

## Supabase Setup

1. Create a free project at https://supabase.com
2. Run `database_schema.sql` in the SQL Editor
3. Add `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` to `config/api_keys.env`

## Dashboard

```bash
cd dashboard && pip install -r requirements.txt
streamlit run app.py
```

Opens at http://localhost:8501. Approve/reject queries; approved ones auto-generate Agent 2 handoff.

## Running Tests

```bash
pytest tests/ -v
```

All tests are deterministic — no API calls required.

## Architecture

```
CONFIG → FETCH → EXPAND → ENRICH → SCORE → DEDUP → EXPORT
```

- **FETCH**: SERPAPI related queries + seed queries from config
- **EXPAND**: Groq (Mistral-7B, free tier) generates 10 conversational variants per seed
- **ENRICH**: DataForSEO volume/difficulty + rule-based intent/regulatory tagging
- **SCORE**: Rule-based answerability + conversational match; LLM only for citation_potential + commercial_fit
- **DEDUP**: Semantic clustering with sentence-transformers; keeps highest-scoring variant
- **EXPORT**: JSON + Supabase upsert + Agent 2 handoff JSON

## Cost Controls

- Groq free tier for bulk expansion (Mistral-7B)
- GPT-4o-mini only for 2 LLM scoring factors
- SERPAPI capped at 100 calls/run
- LLM responses cached for 1 week in `.llm_cache/`
- Weekly GitHub Actions cron (not daily)

Target: < ₹7,000/month (~$85)

## GitHub Actions

Set these secrets in your repo settings:
- `OPENAI_API_KEY`
- `GROQ_API_KEY`
- `SERPAPI_KEY`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SLACK_WEBHOOK_URL` (optional)
- `DATAFORSEO_LOGIN` / `DATAFORSEO_PASSWORD` (optional)
