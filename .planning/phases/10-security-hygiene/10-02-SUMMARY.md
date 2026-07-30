---
phase: 10-security-hygiene
plan: 02
subsystem: infra
tags: [nextjs, csp, hsts, security-headers, eslint-config-next]

requires: []
provides:
  - Next.js and eslint-config-next pinned to 16.2.12
  - Enforce-mode HSTS + allowlist CSP via next.config.ts headers()
affects:
  - preview smoke / merge of Phase 10
  - any future third-party script or embed origins

tech-stack:
  added: []
  patterns:
    - Config-level allowlist CSP (no nonce/proxy) with isDev unsafe-eval + Speed Insights hosts
    - Exact patch pin for next/eslint-config-next only

key-files:
  created: []
  modified:
    - package.json
    - package-lock.json
    - next.config.ts

key-decisions:
  - "Pinned next and eslint-config-next to exact 16.2.12 (not ^)"
  - "Enforce Content-Security-Policy (not Report-Only); no proxy/nonce CSP"
  - "Dev-only: unsafe-eval + va.vercel-scripts.com / vitals.vercel-insights.com"

patterns-established:
  - "Security headers extended on source /(.*) without removing existing baseline headers"
  - "CSP allowlist sourced from 10-RESEARCH Pattern 2"

requirements-completed: [SEC-03, SEC-04]

duration: 12min
completed: 2026-07-30
status: complete
---

# Phase 10 Plan 02: Next Pin + HSTS/CSP Summary

**Pinned Next.js 16.2.12 and shipped enforce-mode HSTS + allowlist CSP for HubSpot, GA, YouTube, and the blog embed. Human CSP smoke approved 2026-07-30.**

## CHECKPOINT COMPLETE (Task 3)

**Type:** `checkpoint:human-verify`  
**Gate:** blocking  
**Status:** Approved by user — no CSP violation hosts reported.

### What was built
- `next` + `eslint-config-next` at exact `16.2.12`
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- Enforce `Content-Security-Policy` allowlist (hsforms, googletagmanager, youtube, `abrahams73.lll-ll.com`)

### Automated header check already passed
Production server on `:3010` returned HSTS + CSP with `hsforms`, `googletagmanager`, `youtube`, and `abrahams73.lll-ll.com` present.

---

## Performance

- **Duration:** ~12 min
- **Started:** 2026-07-30T13:09:37Z
- **Completed:** 2026-07-30T13:24:00Z
- **Tasks:** 3/3 complete (2 automated + 1 human-verify approved)
- **Files modified:** 3 (`package.json`, `package-lock.json`, `next.config.ts`)

## Accomplishments
- SEC-03 framework pin: Next 16.2.12 + matching eslint-config-next; typecheck/lint/build green
- SEC-04 transport/content headers: HSTS + enforce allowlist CSP in `next.config.ts`
- Automated header assertion against production `next start` home document
- Human smoke approved for `/`, `/contact-us`, `/solutions`, `/blog`

## Task Commits

1. **Task 1: Pin Next.js and eslint-config-next to 16.2.12** - `60408b9` (chore)
2. **Task 2: Add HSTS and enforce allowlist CSP headers** - `206fc04` (feat)
3. **Task 3: Preview CSP smoke on marketing pages** - approved by user (no code commit)

## Files Created/Modified
- `package.json` - Exact pins `next` / `eslint-config-next` to `16.2.12`
- `package-lock.json` - Lockfile resolves both at 16.2.12
- `next.config.ts` - HSTS + enforce CSP allowlist; kept existing headers and `poweredByHeader: false`

## Decisions Made
- Exact version strings (no `^`) per plan lock
- SI / `unsafe-eval` only when `NODE_ENV === "development"`
- Left unrelated `"latest"` packages untouched

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Stale `.next` types after parallel 10-01 lead API removal**
- **Found during:** Task 1 (typecheck)
- **Issue:** `tsc` failed on `.next/types/validator.ts` referencing deleted `app/api/lead/route.js` (10-01 parallel work)
- **Fix:** Deleted `.next` cache and re-ran typecheck/lint/build (no source edits outside plan files)
- **Files modified:** none (cache only)
- **Verification:** typecheck, lint, build succeeded
- **Committed in:** n/a (not a tracked change)

**Total deviations:** 1 auto-fixed (Rule 3)  
**Impact on plan:** Unblocked verification only; no scope creep.

## Issues Encountered
- `npm run start -- -p 3010` on Windows passed `3010` as a project directory; used `npx next start -p 3010` for header smoke.

## Known Stubs
None.

## Threat Flags
None beyond plan threat model (headers + npm pin already registered as T-10-04..T-10-08 / T-10-SC).

## Self-Check: PASSED
- FOUND: `package.json` with `16.2.12`
- FOUND: `package-lock.json` (next@16.2.12)
- FOUND: `next.config.ts` with `Strict-Transport-Security` and `Content-Security-Policy`
- FOUND: commit `60408b9`
- FOUND: commit `206fc04`
