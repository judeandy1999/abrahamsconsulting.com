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

requirements-completed: []  # SEC-03/SEC-04 pending Task 3 human CSP smoke approval

duration: 12min
completed: 2026-07-30
status: awaiting_human_checkpoint
---

# Phase 10 Plan 02: Next Pin + HSTS/CSP Summary

**Pinned Next.js 16.2.12 and shipped enforce-mode HSTS + allowlist CSP for HubSpot, GA, YouTube, and the blog embed — awaiting human preview smoke before SEC-03/SEC-04 close-out.**

## CHECKPOINT PENDING (Task 3)

**Type:** `checkpoint:human-verify`  
**Gate:** blocking  
**Status:** Automated Tasks 1–2 complete; interactive browser CSP smoke not completed by executor.

### What was built
- `next` + `eslint-config-next` at exact `16.2.12`
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- Enforce `Content-Security-Policy` allowlist (hsforms, googletagmanager, youtube, `abrahams73.lll-ll.com`)

### How to verify (human)
1. Start preview: `npm run build` then `npx next start -p 3010` (or use the Vercel preview for this branch).
2. Open `/`, `/contact-us`, `/solutions`, and `/blog` with DevTools Console + Network.
3. Confirm no CSP violations blocking: HubSpot form on contact, gtag/GA, YouTube facade on solutions, blog iframe on `/blog`, bfcache recovery inline script.
4. Confirm response headers include `Strict-Transport-Security` and `Content-Security-Policy` (not Report-Only).
5. If an unexpected required host appears, list it for a narrow allowlist expand — do not switch to Report-Only or nonce CSP.

### Resume signal
Type **approved** if pages load cleanly, or list CSP violation hosts/URLs to fix.

### Automated header check already passed
Production server on `:3010` returned HSTS + CSP with `hsforms`, `googletagmanager`, `youtube`, and `abrahams73.lll-ll.com` present. Console smoke still needs a human browser.

---

## Performance

- **Duration:** ~12 min
- **Started:** 2026-07-30T13:09:37Z
- **Completed (automated):** 2026-07-30T13:21:00Z
- **Tasks:** 2/3 automated complete; 1/3 human-verify pending
- **Files modified:** 3 (`package.json`, `package-lock.json`, `next.config.ts`)

## Accomplishments
- SEC-03 framework pin: Next 16.2.12 + matching eslint-config-next; typecheck/lint/build green
- SEC-04 transport/content headers: HSTS + enforce allowlist CSP in `next.config.ts`
- Automated header assertion against production `next start` home document

## Task Commits

1. **Task 1: Pin Next.js and eslint-config-next to 16.2.12** - `60408b9` (chore)
2. **Task 2: Add HSTS and enforce allowlist CSP headers** - `206fc04` (feat)
3. **Task 3: Preview CSP smoke on marketing pages** - PENDING human verify

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
