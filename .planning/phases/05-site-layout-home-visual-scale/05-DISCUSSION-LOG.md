# Phase 5: Site Layout & Home Visual Scale - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-06-01
**Phase:** 5-Site Layout & Home Visual Scale
**Areas discussed:** None (user skipped interactive discussion)

---

## Session Note

User invoked `/gsd-discuss-phase 5` and skipped the gray-area selection prompt. Context was generated from milestone v1.1 decisions captured during `/gsd-new-milestone` plus codebase analysis.

## Typography Scale Amount

| Option | Description | Selected |
|--------|-------------|----------|
| ~8% subtle bump | Barely noticeable, safe for CWV | |
| ~12% moderate bump | Noticeably larger, balanced | ✓ |
| ~20% bold bump | Dramatic change, may feel oversized | |

**User's choice:** Applied via Claude discretion (moderate ~12% based on "a little bit larger" feedback)
**Notes:** Token-based approach in globals.css preferred over per-selector edits.

## Banner Width Treatment

| Option | Description | Selected |
|--------|-------------|----------|
| Banner keeps 72rem container | Split container tokens | |
| Banner widens to 84rem, content unchanged | Site-wide token, compact internals | ✓ |
| Banner full-bleed | Edge-to-edge announcement | |

**User's choice:** Applied via Claude discretion (matches site-wide 84rem + "aside from banner" sizing intent)
**Notes:** User excluded banner from scale-up, not from site-wide width alignment.

## Hero Visual Balance

| Option | Description | Selected |
|--------|-------------|----------|
| Logo scales proportionally | Fills wider grid naturally | ✓ |
| Logo stays same size | More whitespace in visual column | |
| Adjust grid ratio | More text column space | |

**User's choice:** Applied via Claude discretion (logo ~38rem, reduced margin-left)

## Section Spacing

| Option | Description | Selected |
|--------|-------------|----------|
| Match type scale (~15% padding) | Consistent visual rhythm | ✓ |
| Keep current padding | Wider but same density | |
| Generous padding (~25%) | Very airy, may push content below fold | |

**User's choice:** Applied via Claude discretion (~15% padding bump on scaled sections)

---

## Claude's Discretion

- Exact clamp formula tuning
- Horizontal padding bump at desktop
- Partner carousel cell dimensions
- Certification bar column ratio adjustment

## Deferred Ideas

- Other marketing page scaling → Phase 6
- CWV verification → Phase 6
