"""LangGraph state machine definition for AEO Query Discovery Agent."""
from langgraph.graph import StateGraph, END
from langgraph.checkpoint.memory import MemorySaver

from src.nodes.fetch_queries import fetch_queries
from src.nodes.expand_variants import expand_variants
from src.nodes.enrich_metrics import enrich_metrics
from src.nodes.score_aeo import score_aeo
from src.nodes.deduplicate import deduplicate
from src.nodes.output_export import output_export
from src.utils.logger import get_logger

log = get_logger("graph")

# State schema — all keys are optional to allow partial updates per node
AgentState = dict


def _should_continue_after_fetch(state: dict) -> str:
    """Skip to output if fetch returns 0 queries (e.g., API limit hit)."""
    if not state.get("raw_queries"):
        log.warning("No raw queries fetched — skipping cluster")
        return "skip"
    return "continue"


def build_graph(use_checkpoints: bool = True) -> StateGraph:
    graph = StateGraph(AgentState)

    graph.add_node("fetch", fetch_queries)
    graph.add_node("expand", expand_variants)
    graph.add_node("enrich", enrich_metrics)
    graph.add_node("score", score_aeo)
    graph.add_node("dedup", deduplicate)
    graph.add_node("export", output_export)

    graph.set_entry_point("fetch")

    graph.add_conditional_edges(
        "fetch",
        _should_continue_after_fetch,
        {"continue": "expand", "skip": END},
    )
    graph.add_edge("expand", "enrich")
    graph.add_edge("enrich", "score")
    graph.add_edge("score", "dedup")
    graph.add_edge("dedup", "export")
    graph.add_edge("export", END)

    if use_checkpoints:
        # In-memory checkpointing per cluster run — allows resume on failure
        checkpointer = MemorySaver()
        return graph.compile(checkpointer=checkpointer)

    return graph.compile()
