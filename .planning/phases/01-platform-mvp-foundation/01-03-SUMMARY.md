---
phase: 01-platform-mvp-foundation
plan: 03
subsystem: testing
tags: [zod, content-validation, typescript, build-gates]
requires:
  - phase: 01-01
    provides: CI/build baseline and script execution workflow
  - phase: 01-02
    provides: static marketing route structure consuming code-managed content
provides:
  - Typed content schemas for site, services, and contracts modules
  - Central validated content loader used by application code
  - CLI validation gate integrated into prebuild and explicit content checks
affects: [phase-02-conversion-journeys, phase-03-trust-and-lead-capture]
tech-stack:
  added: [zod]
  patterns: [schema-first content contracts, fail-fast validator CLI, prebuild content gate]
key-files:
  created:
    - src/content/schema.ts
    - src/content/site.ts
    - src/content/services.ts
    - src/content/contracts.ts
    - lib/content/load-content.ts
    - scripts/validate-content.mjs
    - tests/plan03-content-validation.test.mjs
    - tests/fixtures/valid-content.json
    - tests/fixtures/invalid-content.json
  modified:
    - package.json
key-decisions:
  - "Use zod as single source of truth for content contract enforcement in both scripts and app loader."
  - "Gate build with prebuild content checks so malformed content fails before deployment compile."
patterns-established:
  - "Pattern 1: Content updates must remain typed data modules without executable business logic."
  - "Pattern 2: Validator commands must expose deterministic pass/fail exits for CI compatibility."
requirements-completed: [PLAT-03]
duration: 31min
completed: 2026-05-28
---

# Phase 1 Plan 03: Content Validation Workflow Summary

**Schema-validated code-managed content pipeline with deterministic validator CLI and prebuild enforcement gate**

## Performance

- **Duration:** 31 min
- **Started:** 2026-05-28T10:25:00Z
- **Completed:** 2026-05-28T10:56:00Z
- **Tasks:** 3
- **Files modified:** 10

## Accomplishments

- Defined typed `zod` content contracts and implemented a validator that demonstrates both valid and invalid content outcomes.
- Added editor-friendly TypeScript content modules with a central validated loader for route consumption.
- Wired content validation into explicit developer command (`content:check`) and automatic prebuild gating.

## Task Commits

Each task was committed atomically:

1. **Task 1 (RED): Define typed content contracts and failing validation cases** - `77ebf0d` (test)
2. **Task 1 (GREEN): Define typed content contracts and failing validation cases** - `dfcea77` (feat)
3. **Task 2: Implement code-managed content modules and validated loader** - `685707f` (feat)
4. **Task 3: Wire validation into developer and CI workflows** - `e7f3381` (feat)

## Files Created/Modified

- `src/content/schema.ts` - Added strongly typed content schemas and TypeScript inferences.
- `scripts/validate-content.mjs` - Added validator CLI for fixture checks and module validation.
- `src/content/site.ts` - Added site-level code-managed content data.
- `src/content/services.ts` - Added services content records.
- `src/content/contracts.ts` - Added contracts/procurement content records.
- `lib/content/load-content.ts` - Added central loader enforcing schema validation in app code.
- `package.json` - Added `content:check` and `prebuild` scripts.
- `tests/plan03-content-validation.test.mjs` - Added TDD behavior assertions for pass/fail paths.

## Decisions Made

- Kept content modules as plain typed data objects to satisfy security guidance against executable logic in content files.
- Required prebuild validation to shift malformed content failures earlier than deployment build.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing Critical] Added default validator mode for real content module validation**
- **Found during:** Task 2 (Implement code-managed content modules and validated loader)
- **Issue:** Script initially validated only fixture inputs and did not enforce schema checks on real `src/content/*.ts` modules.
- **Fix:** Extended validator default path to load and validate site/services/contracts modules directly.
- **Files modified:** `scripts/validate-content.mjs`
- **Verification:** `node scripts/validate-content.mjs` exits success and validates module exports.
- **Committed in:** `685707f`

---

**Total deviations:** 1 auto-fixed (1 missing critical)
**Impact on plan:** Necessary to meet PLAT-03 requirement that actual content modules are validated in workflow.

## Issues Encountered

None after the validator default-mode correction.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Core content workflow is now fail-fast and CI-friendly for upcoming conversion/trust page expansion.
- No blockers identified for Phase 2 planning/execution.

## Self-Check: PASSED
