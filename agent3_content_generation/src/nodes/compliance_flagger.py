"""Node 4: Flag pending certifications, detect prohibited phrases, build review checklist."""
import re
import yaml
from pathlib import Path

from src.utils.logger import get_logger

log = get_logger("compliance_flagger")

_RULES: dict | None = None


def _load_rules() -> dict:
    global _RULES
    if _RULES is None:
        path = Path(__file__).parent.parent.parent / "config" / "compliance_rules.yaml"
        _RULES = yaml.safe_load(path.read_text())
    return _RULES


def _detect_prohibited_phrases(text: str, prohibited: list[str]) -> list[str]:
    found = []
    text_lower = text.lower()
    for phrase in prohibited:
        if phrase.lower() in text_lower:
            found.append(phrase)
    return found


def _detect_pending_cert_claims(text: str, certs_pending: list[str]) -> list[str]:
    """Detect if draft claims pending certs as active."""
    violations = []
    claim_patterns = {
        "GMP": r"\b(gmp[\s-]certified|is\s+gmp\s+compliant|gmp\s+approved)\b",
        "ISO 22000": r"\b(iso\s+22000[\s-]certified|holds?\s+iso\s+22000)\b",
        "HACCP": r"\b(haccp[\s-]certified|is\s+haccp\s+approved)\b",
    }
    for cert in certs_pending:
        pattern = claim_patterns.get(cert)
        if pattern and re.search(pattern, text, re.IGNORECASE):
            violations.append(f"Premature claim: '{cert}' described as active certification")
    return violations


def _build_compliance_flags(state: dict, violations: list[str], prohibited_found: list[str]) -> list[str]:
    flags = []
    certs_pending = state["business_context"].get("certifications_pending", [])
    pending_eta = state["business_context"].get("certifications_pending_eta", "Q3 2026")

    draft = state.get("raw_draft", "")

    for cert in certs_pending:
        if cert.lower() in draft.lower():
            flags.append(f"pending_{cert.lower().replace(' ', '_')}_certification_noted")

    flags.extend([f"violation:{v}" for v in violations])
    flags.extend([f"prohibited_phrase:{p}" for p in prohibited_found])

    return flags


def compliance_flagger(state: dict) -> dict:
    """
    Input: raw_draft, business_context, agent2_payload
    Output: state + compliance_flags, human_review_flags
    """
    rules = _load_rules()
    draft = state.get("raw_draft", "")
    biz_ctx = state["business_context"]
    certs_pending = biz_ctx.get("certifications_pending", [])
    pending_eta = biz_ctx.get("certifications_pending_eta", "Q3 2026")

    prohibited_found = _detect_prohibited_phrases(draft, rules.get("prohibited_phrases", []))
    cert_violations = _detect_pending_cert_claims(draft, certs_pending)

    all_flags = _build_compliance_flags(state, cert_violations, prohibited_found)

    requires_founder_approval = []
    if any("pending" in f for f in all_flags):
        requires_founder_approval.append(f"Pending certification language ({', '.join(certs_pending)}) — verify Q3 2026 timeline")
    if any("coa" in f.lower() for f in all_flags) or "/resources/sample-coa.pdf" in draft:
        requires_founder_approval.append("COA sample link validity — confirm /resources/sample-coa.pdf is live")

    legal_check = ""
    if cert_violations:
        legal_check = (
            f"VIOLATIONS DETECTED: {'; '.join(cert_violations)}. "
            f"Do not publish until corrected. Use 'finalizing audit' language instead."
        )
    elif certs_pending:
        legal_check = (
            f"Do not claim {', '.join(certs_pending)} as active certifications. "
            f"Use: 'finalizing audit documentation — target {pending_eta}'"
        )

    if prohibited_found:
        log.warning("Prohibited phrases detected: %s", prohibited_found)
    if cert_violations:
        log.error("Certification claim violations: %s", cert_violations)

    human_review_flags = {
        "requires_founder_approval": requires_founder_approval,
        "legal_compliance_check": legal_check,
        "technical_review": "Verify spec table values match current production capabilities",
        "prohibited_phrases_found": prohibited_found,
        "cert_violations": cert_violations,
    }

    log.info(
        "Compliance check complete: %d flags, %d prohibited phrases, %d cert violations",
        len(all_flags), len(prohibited_found), len(cert_violations),
    )

    return {**state, "compliance_flags": all_flags, "human_review_flags": human_review_flags}
