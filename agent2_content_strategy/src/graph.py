"""LangGraph state machine for Agent 2: Content Strategy & Brief Generator."""
from langgraph.graph import StateGraph, END
from langgraph.checkpoint.memory import MemorySaver

from src.nodes.intent_mapper import intent_mapper
from src.nodes.outline_generator import outline_generator
from src.nodes.seo_aeo_engine import seo_aeo_engine
from src.nodes.cta_planner import cta_planner
from src.nodes.agent3_builder import agent3_builder
from src.nodes.exporter import exporter
from src.utils.logger import get_logger

log = get_logger("graph")

AgentState = dict


def _should_skip_if_no_input(state: dict) -> str:
    if not state.get("agent1_payload") or not state.get("agent1_payload", {}).get("query_text"):
        log.warning("No valid Agent 1 payload — skipping")
        return "skip"
    return "continue"


def build_graph(use_checkpoints: bool = True) -> StateGraph:
    graph = StateGraph(AgentState)

    graph.add_node("intent_map", intent_mapper)
    graph.add_node("outline", outline_generator)
    graph.add_node("seo_aeo", seo_aeo_engine)
    graph.add_node("cta", cta_planner)
    graph.add_node("agent3_build", agent3_builder)
    graph.add_node("export", exporter)

    graph.set_entry_point("intent_map")

    graph.add_conditional_edges(
        "intent_map",
        _should_skip_if_no_input,
        {"continue": "outline", "skip": END},
    )
    graph.add_edge("outline", "seo_aeo")
    graph.add_edge("seo_aeo", "cta")
    graph.add_edge("cta", "agent3_build")
    graph.add_edge("agent3_build", "export")
    graph.add_edge("export", END)

    if use_checkpoints:
        return graph.compile(checkpointer=MemorySaver())

    return graph.compile()
