# Phase 9: NASA SEWP VI Electronic Ordering Guide - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-07-05
**Phase:** 9-NASA SEWP VI Electronic Ordering Guide
**Areas discussed:** Section placement, Legacy ordering UI cleanup, PDF metadata & availability, Download card visual

---

## Section placement

| Option | Description | Selected |
|--------|-------------|----------|
| Stacked section below | Contract Overview stays as-is; new section directly underneath | ✓ |
| Shared wrapper band | Both in one visual unit | |
| Side-by-side with overview | Overview left, ordering guide right in one row | |

**Background:** White (not alternate gray or textured)

**Mobile stack:** Card first on mobile only; desktop features left, card right

**Animation:** Standard scroll animation (same as other NASA sections)

---

## Legacy ordering UI cleanup

| Decision | Selected |
|----------|----------|
| Remove `orderingProcess` content | ✓ |
| Single PDF location in new section only | ✓ |
| Extend `NasaSewpViOrderingGuideCard` | ✓ |
| New `electronicOrderingGuide` content block | ✓ |

---

## PDF metadata & availability

| Decision | Selected |
|----------|----------|
| Last Updated / Version metadata | **Remove** (user: "remove it") |
| Missing PDF behavior | Disabled Coming Soon button |
| Available PDF action | Open in new tab |
| Path configuration | Keep `NASA_SEWP_VI_DOCUMENTS` + file-exists loader |

---

## Download card visual

| Decision | Selected |
|----------|----------|
| PDF illustration | Custom WebP from mockup |
| Card style | Elevated white card with shadow |
| Feature icons | Circle + Lucide icons |
| Section heading | Red accent line under title |

---

## Claude's Discretion

- Lucide icon picks for four features
- Exact responsive spacing
- Minimal vs full removal of `resources.orderingGuide` entry

## Deferred Ideas

None.
