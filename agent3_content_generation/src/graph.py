"""LangGraph state machine for Agent 3: Content Generation & Citation Optimization."""
from langgraph.graph import StateGraph, END
from langgraph.checkpoint.memory import MemorySaver

from src.nodes.draft_generator import draft_generator
from src.nodes.schema_builder import schema_builder
from src.nodes.citation_optimizer import citation_optimizer
from src.nodes.compliance_flagger import compliance_flagger
from src.nodes.exporter import exporter
from src.utils.logger import get_logger

log = get_logger("graph")

AgentState = dict


def _should_skip_if_no_brief(state: dict) -> str:
    brief = state.get("agent2_payload", {})
    if not brief or not brief.get("content_strategy", {}).get("primary_keyword"):
        log.warning("No valid Agent 2 payload — skipping")
        return "skip"
    return "continue"


def _halt_on_cert_violation(state: dict) -> str:
    """Block export if hard certification violations detected (must fix before publish)."""
    flags = state.get("human_review_flags", {})
    violations = flags.get("cert_violations", [])
    if violations:
        log.error("Cert violations detected — routing to export anyway for human review: %s", violations)
    # Still export so human can review and fix; draft will be marked accordingly
    return "export"


def build_graph(use_checkpoints: bool = True) -> StateGraph:
    graph = StateGraph(AgentState)

    graph.add_node("draft", draft_generator)
    graph.add_node("schema", schema_builder)
    graph.add_node("cite", citation_optimizer)
    graph.add_node("comply", compliance_flagger)
    graph.add_node("export", exporter)

    graph.set_entry_point("draft")

    graph.add_conditional_edges(
        "draft",
        _should_skip_if_no_brief,
        {"continue": "schema", "skip": END},
    )
    graph.add_edge("schema", "cite")
    graph.add_edge("cite", "comply")
    graph.add_conditional_edges(
        "comply",
        _halt_on_cert_violation,
        {"export": "export"},
    )
    graph.add_edge("export", END)

    if use_checkpoints:
        return graph.compile(checkpointer=MemorySaver())

    return graph.compile()
