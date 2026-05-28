---
phase: 01-platform-mvp-foundation
plan: 01
subsystem: infra
tags: [nextjs, vercel, ci, github-actions, typescript]
requires: []
provides:
  - Next.js App Router marketing shell with baseline public routes
  - CI quality gates for lint, typecheck, and production build
  - Vercel and runtime security header deployment defaults
affects: [phase-02-conversion-journeys, phase-03-trust-and-lead-capture]
tech-stack:
  added: [next, react, react-dom, typescript, eslint, github-actions]
  patterns: [server-component-first marketing routes, commit-gated build safety checks]
key-files:
  created:
    - app/layout.tsx
    - app/(marketing)/page.tsx
    - app/(marketing)/about/page.tsx
    - .github/workflows/ci.yml
    - vercel.json
  modified:
    - package.json
    - next.config.ts
    - eslint.config.mjs
key-decisions:
  - "Use a minimal Next.js TypeScript baseline with explicit CI gate parity to local scripts."
  - "Apply secure response headers centrally through next.config.ts for preview/prod consistency."
patterns-established:
  - "Pattern 1: Every deploy candidate must pass lint, typecheck, and build."
  - "Pattern 2: Marketing foundation routes remain static server-rendered by default."
requirements-completed: [PLAT-01]
duration: 26min
completed: 2026-05-28
---

# Phase 1 Plan 01: Deployment Foundation Summary

**Next.js App Router baseline with deterministic CI quality gates and secure deployment defaults on Vercel-compatible config**

## Performance

- **Duration:** 26 min
- **Started:** 2026-05-28T09:33:00Z
- **Completed:** 2026-05-28T09:59:00Z
- **Tasks:** 3
- **Files modified:** 13

## Accomplishments

- Created the foundational App Router shell with public Home and About routes for reliable preview/production coverage.
- Added CI workflow checks that enforce lint, typecheck, and production build before deployment promotion.
- Added deployment-safe defaults with runtime security headers and Vercel routing baseline configuration.

## Task Commits

Each task was committed atomically:

1. **Task 1: Scaffold Next.js marketing shell on Vercel baseline** - `3fc7d6b` (feat)
2. **Task 2: Add CI deployment safety gate** - `2c17c63` (feat)
3. **Task 3: Configure deployment defaults for reliable preview and production** - `58cad97` (feat)

## Files Created/Modified

- `package.json` - Added scripts and core runtime/tooling dependencies.
- `next.config.ts` - Added baseline runtime and security header defaults.
- `vercel.json` - Added Vercel deployment behavior defaults.
- `.github/workflows/ci.yml` - Added deterministic quality gate workflow.
- `app/layout.tsx` - Added root layout and baseline metadata.
- `app/(marketing)/page.tsx` - Added public home route.
- `app/(marketing)/about/page.tsx` - Added public about route.

## Decisions Made

- Kept route foundation fully server-component first with no client wrappers to preserve static-first behavior and simplicity.
- Kept CI to a single deterministic job to reduce noise and maximize merge/deploy signal quality.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Fixed lint command compatibility with Next.js 16 and build artifact scanning**
- **Found during:** Task 2 (Add CI deployment safety gate)
- **Issue:** `next lint` invocation failed and ESLint scanned `.next` output causing false errors.
- **Fix:** Switched lint script to `eslint . --max-warnings=0` and added `.next`/generated directory ignores in flat config.
- **Files modified:** `package.json`, `eslint.config.mjs`, `package-lock.json`
- **Verification:** `npm run lint` and `npm run build` both pass.
- **Committed in:** `2c17c63`

---

**Total deviations:** 1 auto-fixed (1 blocking)
**Impact on plan:** Required for deterministic CI gate correctness; no scope expansion.

## Issues Encountered

- None beyond the lint compatibility issue resolved inline.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Static-first route expansion and SEO primitives can now build on a stable deployment and CI foundation.
- No blockers identified for Plan 01-02.

## Self-Check: PASSED
