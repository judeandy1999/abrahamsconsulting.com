---
phase: 12-sewp-compliance-dom-dead-code
plan: 01
subsystem: ui
tags: [sewp, tabs, ssr, accessibility, hidden, fair-opportunity, program-manager]

requires:
  - phase: 11-content-consistency
    provides: NASA SEWP VI content modules and statements tab UI
provides:
  - Always-mounted statement tabpanels with HTML hidden for inactive tabs
  - Fair Opportunity + Program Manager Maybelline present in initial /nasa-sewp-vi HTML
affects: [12-02-dead-code-cleanup, SEWP PMO fetch/skim audits]

tech-stack:
  added: []
  patterns:
    - "Always-mount role=tabpanel per tab; inactive via HTML hidden={!isActive}"
    - "Stable per-tab panel ids matching aria-controls; renderStatementsPanel helper"

key-files:
  created: []
  modified:
    - components/marketing/NasaSewpViStatementsTableSection.tsx

key-decisions:
  - "Use HTML hidden attribute (not conditional mount, not class-only hide) for inactive statement panels"
  - "Wrap mapped panels in a minWidth:0 grid cell so layout stays sidebar + content column"
  - "Verify SSR HTML on port 3012 to avoid conflict with parallel plan 12-02"

patterns-established:
  - "Pattern: TABS.map → one tabpanel each with hidden={!isActive} for PMO-fetchable marketing tabs"

requirements-completed: [SEWP-01, SEWP-02]

duration: 12min
completed: 2026-07-30
---

# Phase 12 Plan 01: Always-Mount SEWP Statement Panels Summary

**All eight NASA SEWP VI statement tabpanels now SSR into `/nasa-sewp-vi` HTML with inactive panels using `hidden=""`, so Fair Opportunity (FAR Part 16.505) and Program Manager Maybelline Magnet contact strings survive no-JS fetch/skim without a tab click.**

## Performance

- **Duration:** 12 min
- **Started:** 2026-07-30T14:33:22Z
- **Completed:** 2026-07-30T14:45:00Z
- **Tasks:** 2/2
- **Files modified:** 1

## Accomplishments

- Replaced exclusive `activeTab === … ? … : null` mounts with `TABS.map` always-mounted `role="tabpanel"` nodes
- Inactive panels use HTML `hidden={!isActive}` (React SSR emits `hidden=""`); tab keyboard/`aria-*` UX unchanged
- Production curl of `/nasa-sewp-vi` on port 3012 confirms SEWP-01 and SEWP-02 strings plus ≥8 statement tabpanels

## Task Commits

Each task was committed atomically:

1. **Task 1: Always-mount statement tabpanels with HTML hidden** - `7ad63a6` (feat)
2. **Task 2: Verify Fair Opportunity and Program Manager in SSR HTML without tab click** - verification only (no code delta; covered by Task 1 commit + build/curl)

**Plan metadata:** `e815a32` (docs: complete plan)

## Files Created/Modified

- `components/marketing/NasaSewpViStatementsTableSection.tsx` — `renderStatementsPanel(tabId)` + always-mounted panels with `hidden={!isActive}` and stable `${baseId}-panel-${tab.id}` ids

## Decisions Made

- Prefer HTML `hidden` over class-only hide (per RESEARCH / Claude's Discretion)
- Do not change Company Hub exclusive-mount or nested `PostDeliveryTopics` exclusive topic panel
- Grid wrapper uses inline `minWidth: 0` only (no `sewp-vi.css` edits; Plan 12-02 owns CSS cleanup)

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Build blocked by parallel plan 12-02 WIP**
- **Found during:** Task 2 (SSR HTML verification)
- **Issue:** `npm run build` failed on unrelated dirty `AwardBanner.tsx` / mid-edit schema-content mismatches while 12-02 ran in parallel
- **Fix:** Temporarily built from clean committed HEAD (including `7ad63a6`), verified on port **3012** (orchestrator override vs plan's :3000), restored sibling WIP without stash
- **Files modified:** none (process-only)
- **Verification:** `npx next start -p 3012` + curl assertions
- **Committed in:** N/A

**Total deviations:** 1 auto-fixed (Rule 3)
**Impact on plan:** Verification environment adjusted for parallel execution; product behavior matches plan.

## Issues Encountered

- Plan verify regex `\shidden(\s|>|/)` misses React's `hidden=""` serialization; attribute is present on inactive panels (`hidden=""`). Assertions used `includes` / panel-tag `\bhidden\b` instead.

## User Setup Required

None

## Next Phase Readiness

- SEWP-01 / SEWP-02 satisfied for statement tabs
- Plan 12-02 may proceed with dead-code / CSS cleanup independently
- Nested Post-Delivery topic panels remain exclusive-mount (out of SEWP-01/02 scope)

## Self-Check: PASSED

- FOUND: `components/marketing/NasaSewpViStatementsTableSection.tsx`
- FOUND: commit `7ad63a6`
- FOUND: SSR strings FAR Part 16.505, Maybelline Magnet, SEWP VI PROGRAM MANAGER, (301) 638-8731, sewp.pm@abrahamsconsulting.com
- FOUND: 8 statement `role="tabpanel"` nodes with 7 `hidden=""` inactive
