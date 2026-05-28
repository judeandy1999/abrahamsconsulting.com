---
phase: 04-launch-quality-gates
plan: 03
subsystem: performance
tags: [speed-insights, lighthouse-ci, cwv, github-actions]
requires:
  - phase: 04-launch-quality-gates
    provides: Static launch routes from prior phases
provides:
  - @vercel/speed-insights in root layout for production RUM
  - lighthouserc.json CWV-oriented CI budgets
  - Lighthouse CI step in GitHub Actions after production build
affects: [04-04, lighthouse-accessibility-budgets]
tech-stack:
  added: ["@vercel/speed-insights", "@lhci/cli"]
  patterns: [CI Lighthouse autorun against production server on primary launch URLs]
key-files:
  created: [lighthouserc.json, tests/plan04-performance-gates.test.mjs]
  modified: [app/layout.tsx, app/globals.css, app/(marketing)/trust/page.tsx, .github/workflows/ci.yml, package.json]
key-decisions:
  - "Lighthouse budgets target LCP 2500ms, CLS 0.1, TBT 200ms proxy on five primary launch URLs"
patterns-established:
  - "Performance contract tests guard Speed Insights wiring and CI Lighthouse configuration"
requirements-completed: [PERF-01]
duration: 40min
completed: 2026-05-28
---

# Phase 4 Plan 03: Performance Gates Summary

**Speed Insights RUM in production layout plus Lighthouse CI budgets enforcing STACK CWV thresholds on primary launch routes**

## Performance

- **Duration:** 40 min
- **Tasks:** 3
- **Files modified:** 8

## Accomplishments

- Installed and rendered `@vercel/speed-insights` in `app/layout.tsx`
- Added `lighthouserc.json` with performance and accessibility category assertions
- Extended CI to run `lhci autorun` after `npm run build`
- Stabilized trust partner logo layout to reduce CLS risk

## Task Commits

1. **Task 1: Performance contract tests** - `41f1297` (test)
2. **Task 2: Speed Insights and trust media** - `f9a9caf` (feat)
3. **Task 3: Lighthouse CI in GitHub Actions** - `9bf593c` (feat)

## User Setup Required

Enable Speed Insights in the Vercel project dashboard after deploy (Vercel → Project → Speed Insights).

## Deviations from Plan

None - plan executed exactly as written.

## Self-Check: PASSED

---
*Phase: 04-launch-quality-gates*
*Completed: 2026-05-28*
