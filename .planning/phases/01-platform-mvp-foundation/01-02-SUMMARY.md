---
phase: 01-platform-mvp-foundation
plan: 02
subsystem: ui
tags: [nextjs, static-rendering, seo, sitemap, robots, metadata]
requires:
  - phase: 01-01
    provides: deployment-safe Next.js baseline and CI quality gates
provides:
  - Static-first Home, Services, and Contracts routes
  - Shared server-rendered marketing navigation shell
  - Reusable metadata helper plus sitemap and robots generation
affects: [phase-03-trust-and-lead-capture, phase-04-launch-quality-gates]
tech-stack:
  added: []
  patterns: [force-static route exports, centralized metadata helper, generated crawl primitives]
key-files:
  created:
    - app/(marketing)/layout.tsx
    - app/(marketing)/services/page.tsx
    - app/(marketing)/contracts/page.tsx
    - app/sitemap.ts
    - app/robots.ts
    - lib/seo/metadata.ts
    - tests/plan02-static-routes.test.mjs
  modified:
    - app/(marketing)/page.tsx
key-decisions:
  - "Use explicit force-static exports on core routes to lock static rendering behavior."
  - "Generate crawl primitives from a single in-repo route list to reduce SEO drift risk."
patterns-established:
  - "Pattern 1: TDD checks can assert route behavior contracts via source-level tests."
  - "Pattern 2: Metadata canonical URLs are generated from one shared site URL helper."
requirements-completed: [PLAT-02]
duration: 24min
completed: 2026-05-28
---

# Phase 1 Plan 02: Static Route and SEO Primitive Summary

**Static-first core marketing routing with shared shell navigation and generated sitemap/robots metadata primitives**

## Performance

- **Duration:** 24 min
- **Started:** 2026-05-28T10:00:00Z
- **Completed:** 2026-05-28T10:24:00Z
- **Tasks:** 3
- **Files modified:** 8

## Accomplishments

- Implemented Home, Services, and Contracts as deterministic static-first routes with no request-time data dependency.
- Added a shared marketing layout navigation linking core routes while staying server-rendered.
- Added reusable route metadata helper and generated `sitemap.xml`/`robots.txt` primitives mapped to core routes.

## Task Commits

Each task was committed atomically:

1. **Task 1 (RED): Define static-first behavior for core marketing routes** - `7bce28a` (test)
2. **Task 1 (GREEN): Define static-first behavior for core marketing routes** - `68131e3` (feat)
3. **Task 2: Build shared marketing shell navigation wiring** - `187052c` (feat)
4. **Task 3: Add metadata and crawl primitives tied to route model** - `18e21b0` (feat)

## Files Created/Modified

- `app/(marketing)/layout.tsx` - Shared core navigation shell.
- `app/(marketing)/page.tsx` - Static home route and page metadata export.
- `app/(marketing)/services/page.tsx` - Static services route.
- `app/(marketing)/contracts/page.tsx` - Static contracts route.
- `lib/seo/metadata.ts` - Canonical and open graph metadata helper.
- `app/sitemap.ts` - Generated sitemap route definition.
- `app/robots.ts` - Generated robots directives.
- `tests/plan02-static-routes.test.mjs` - TDD route static-export contract tests.

## Decisions Made

- Kept static rendering intent explicit via route-level `dynamic = "force-static"` exports instead of implicit defaults.
- Used a centralized helper for canonical URL generation to avoid route-by-route metadata inconsistencies.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Typed content modules can now plug into static core pages and metadata flow.
- Crawl primitives are in place for upcoming SEO hardening in later phases.

## Self-Check: PASSED
