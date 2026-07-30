# Phase 10: Security Hygiene - Research

**Researched:** 2026-07-30
**Domain:** Next.js security headers, secrets hygiene, dependency patching, orphan API removal
**Confidence:** HIGH

## Summary

Phase 10 closes four vetting gaps on an already-shipped Next.js marketing site: `.env*` is not gitignored today; an unused Resend-backed `POST /api/lead` remains as a spam surface while contact UI is HubSpot-only; lockfile pins `next@16.2.6` while npm `latest` is `16.2.12` (July 2026 high advisories fixed in `16.2.11+`); and `next.config.ts` ships baseline headers but **no** `Strict-Transport-Security` or `Content-Security-Policy`.

The right plan is mechanical and low-risk: extend `.gitignore` with an `.env.example` exception; delete the lead route + helper and retarget Phase 3 lead tests; pin/upgrade `next` + `eslint-config-next` to `16.2.12`; extend `headers()` with HSTS plus a **staged allowlist CSP** in `next.config.ts` (not nonce/proxy CSP). Nonce-based strict CSP would force dynamic rendering and conflict with this site’s static/performance model and HubSpot’s inline styles.

**Primary recommendation:** Implement SEC-01–04 as config/delete/upgrade tasks in `next.config.ts` + `.gitignore` + remove `app/api/lead` / `lib/lead`, using an enforce-mode allowlist CSP with `'unsafe-inline'` for scripts/styles so HubSpot, GA, bfcache, YouTube, and the blog iframe keep working.

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| SEC-01 | Ignore `.env*` while keeping `.env.example` tracked | Current `.gitignore` has **no** env rules; use `.env*` + `!.env.example` |
| SEC-02 | Remove orphan `POST /api/lead` + lead helpers; HubSpot-only contact | Delete `app/api/lead/route.ts`, `lib/lead/send-lead-email.ts`; contact uses `HubSpotContactForm`; update `tests/plan03-lead-capture-flow.test.mjs` + `.env.example` |
| SEC-03 | Upgrade Next to patched `16.2.12+` | Installed/locked `16.2.6`; npm latest `16.2.12`; advisories cleared in `16.2.11` ([CITED: nextjs.org/blog/july-2026-security-release](https://nextjs.org/blog/july-2026-security-release)) |
| SEC-04 | Production HSTS + staged CSP for HubSpot, GA, YouTube, blog embed | Extend existing `headers()`; prefer config CSP without nonces ([CITED: nextjs.org CSP guide](https://nextjs.org/docs/app/guides/content-security-policy)) |
</phase_requirements>

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| `.env*` gitignore / `.env.example` | Build / Repo | — | Secrets never enter the client or git; example stays documented |
| Delete `/api/lead` + Resend helper | API / Backend (removal) | — | Orphan route handler is the spam surface; no UI caller |
| HubSpot contact submit | Browser / Client | CDN (HubSpot) | `HubSpotContactForm` loads `js.hsforms.net` and posts to HubSpot |
| Next.js patch upgrade | Build / Runtime | CDN / Vercel | Framework vulnerability surface is server + build toolchain |
| HSTS header | CDN / Static (Vercel) + Next headers | — | Transport policy on all responses; Vercel also sets defaults |
| CSP allowlist | Frontend Server (Next `headers()`) | Browser enforcement | Policy attached to HTML responses; browser blocks disallowed loads |
| GA / Speed Insights scripts | Browser / Client | CDN | Scripts in root layout; Speed Insights v2 uses first-party paths in prod |
| YouTube facade + blog iframe | Browser / Client | CDN / Static | `frame-src` / `img-src` must allow third-party media hosts |

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| `next` | `16.2.12` (pin exact) | App Router framework | Clears July 2026 high advisories shipped in `16.2.11`; latest stable on registry is `16.2.12` [VERIFIED: npm registry] |
| `eslint-config-next` | `16.2.12` (pin exact) | Lint rules aligned to Next | Must match Next major/minor/patch line after upgrade [VERIFIED: npm registry] |
| `react` / `react-dom` | keep current lock (`19.2.6`) unless peer conflict | UI runtime | Peer range `^18.2.0 \|\| ^19.0.0`; no forced bump for SEC-03 [VERIFIED: npm registry peerDependencies] |
| `@vercel/speed-insights` | `^2.0.0` (already installed) | RUM / CWV | First-party `/_vercel/...` intake in production — no extra CSP host required in prod [CITED: vercel.com/docs/speed-insights] |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| HubSpot Forms embed (`js.hsforms.net`) | n/a (CDN) | Contact lead capture | Already wired in `HubSpotContactForm.tsx` |
| Google Analytics gtag | n/a (CDN) | Analytics | `GoogleAnalytics.tsx` + `NEXT_PUBLIC_GA_MEASUREMENT_ID` |
| Node.js | `>=20.9` (dev has `v22.13.0`) | Runtime | Matches engines + Next 16 minimum |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Config CSP + `'unsafe-inline'` | Nonce CSP via `proxy.ts` | Stricter XSS posture but forces dynamic rendering, breaks static/CDN caching, fights HubSpot inline styles — **reject for v1.5** [CITED: nextjs.org CSP guide] |
| Enforce CSP immediately | `Content-Security-Policy-Report-Only` first | Safer rollout, but SEC-04 success criterion asks for CSP present in production responses — use enforce with broad allowlist as “staged,” optionally add Report-Only only if planner wants a canary deploy |
| Explicit HSTS in `next.config` | Rely on Vercel platform defaults | Platform already sets HSTS on custom domains; explicit header makes audits/repro local and meets SEC-04 wording [CITED: vercel.com/docs/cdn-security/encryption] |
| Pin only `next` | Also clean all `"latest"` pins | Full pin cleanup deferred per REQUIREMENTS Out of Scope; still pin `next` + `eslint-config-next` for SEC-03 |

**Installation:**

```bash
npm install next@16.2.12 eslint-config-next@16.2.12
```

**Version verification (2026-07-30):**
- `npm view next version` → `16.2.12` [VERIFIED: npm registry]
- Lockfile currently resolves `next@16.2.6` / `eslint-config-next@16.2.6` while `package.json` uses `"latest"` for both
- `npm view react version` → `19.2.8` (installed `19.2.6` — leave unless install pulls peers)

**No new third-party packages required for this phase.**

## Package Legitimacy Audit

> Phase upgrades existing packages only; no new installs recommended.

| Package | Registry | Age | Downloads | Source Repo | slopcheck | Disposition |
|---------|----------|-----|-----------|-------------|-----------|-------------|
| `next` | npm | since 2016 | high (framework) | github.com/vercel/next.js | unavailable in PATH | Approved upgrade target `16.2.12` — official Vercel package [ASSUMED for slopcheck; VERIFIED existence via npm view + nextjs.org] |
| `eslint-config-next` | npm | long-lived | high | github.com/vercel/next.js | unavailable | Approved companion pin `16.2.12` |

**Packages removed due to slopcheck [SLOP] verdict:** none
**Packages flagged as suspicious [SUS]:** none
**Note:** `slopcheck` Python package is installed but CLI not on PATH in this shell; treat legitimacy as registry + official-docs confirmed, not slopcheck-gated.

## Architecture Patterns

### System Architecture Diagram

```text
[Developer secrets]
    .env* ──(gitignored)──> local / Vercel env only
    .env.example ──(tracked)──> docs for NEXT_PUBLIC_* only after lead cleanup

[Visitor]
    │
    ├─ HTML response (Next headers)
    │     X-Content-Type-Options, X-Frame-Options, Referrer-Policy,
    │     Permissions-Policy, Strict-Transport-Security, Content-Security-Policy
    │
    ├─ Contact page
    │     HubSpotContactForm ──script──> https://js.hsforms.net/...
    │     form submit ──connect──> *.hsforms.com / *.hubapi.com
    │     (NO call to /api/lead — route deleted)
    │
    ├─ Analytics
    │     GoogleAnalytics ──script──> googletagmanager.com
    │     gtag ──connect/img──> *.google-analytics.com / *.analytics.google.com
    │     SpeedInsights ──script/connect──> same-origin /_vercel/* (prod)
    │
    ├─ Solutions video
    │     YouTubeFacade ──frame──> youtube.com/embed
    │     poster ──img──> i.ytimg.com
    │
    └─ Blog page
          ContentMxBlogEmbed ──frame──> abrahams73.lll-ll.com
```

### Recommended Project Structure (touched paths)

```text
.gitignore                          # SEC-01: .env* + !.env.example
.env.example                        # drop Resend/lead vars after SEC-02
next.config.ts                      # SEC-04: HSTS + CSP; keep existing headers
package.json / package-lock.json    # SEC-03: pin next + eslint-config-next
app/api/lead/route.ts               # DELETE (SEC-02)
lib/lead/send-lead-email.ts         # DELETE (SEC-02)
lib/lead/                           # remove empty dir
components/marketing/HubSpotContactForm.tsx  # keep — sole contact path
tests/plan03-lead-capture-flow.test.mjs      # rewrite assertions post-delete
app/layout.tsx                      # CSP consumers: bfcache inline, GA, SpeedInsights
```

### Pattern 1: Gitignore env secrets with example exception

**What:** Ignore all dotenv variants; force-track the template.
**When to use:** Always for Next apps with local secrets.
**Example:**

```gitignore
# Secrets — never commit
.env*
!.env.example
```

[ASSUMED] common Git pattern; `.env.example` is already tracked (`git ls-files`).

### Pattern 2: Staged allowlist CSP in `next.config.ts` (no nonces)

**What:** Build a single CSP string and attach via existing `headers()` alongside HSTS.
**When to use:** Static marketing sites that must keep third-party embeds and cannot pay dynamic-render cost of nonces.
**Example:**

```ts
// Source pattern: https://nextjs.org/docs/app/guides/content-security-policy (Without Nonces)
const isDev = process.env.NODE_ENV === "development";

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://js.hsforms.net https://*.hsforms.net https://www.googletagmanager.com`,
  "style-src 'self' 'unsafe-inline' https://*.hsforms.net https://*.hsforms.com",
  "img-src 'self' data: blob: https://i.ytimg.com https://*.hsforms.net https://*.hsforms.com https://www.googletagmanager.com https://*.google-analytics.com",
  "font-src 'self' data:",
  "connect-src 'self' https://*.hsforms.com https://*.hubapi.com https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com" +
    (isDev ? " https://va.vercel-scripts.com https://vitals.vercel-insights.com" : ""),
  "frame-src https://www.youtube.com https://youtube.com https://*.hsforms.com https://*.hsforms.net https://abrahams73.lll-ll.com",
  "child-src https://*.hsforms.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' https://*.hsforms.com https://*.hubspot.com",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests"
].join("; ");
```

Then add to the existing `/(.*)` header block:

```ts
{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
{ key: "Content-Security-Policy", value: contentSecurityPolicy }
```

[CITED: nextjs.org/docs/app/api-reference/config/next-config-js/headers](https://nextjs.org/docs/app/api-reference/config/next-config-js/headers)  
[CITED: knowledge.hubspot.com CSP table](https://knowledge.hubspot.com/domains-and-urls/ssl-and-domain-security-in-hubspot)  
[CITED: developers.google.com Tag Platform CSP / GA4](https://developers.google.com/tag-platform/security/guides/csp)

### Pattern 3: Delete orphan API; keep HubSpot contact path

**What:** Remove Resend route entirely; contact remains `ContactUsPageContent` → `HubSpotContactForm`.
**Files to delete:**
1. `app/api/lead/route.ts`
2. `lib/lead/send-lead-email.ts`
3. Empty `app/api/lead/` and `lib/lead/` directories after file removal

**Confirmed HubSpot-only path:** Grep shows production UI imports only `HubSpotContactForm` from `components/marketing/ContactUsPageContent.tsx`. No page posts to `/api/lead`. Script URL: `https://js.hsforms.net/forms/embed/v2.js`. Portal region `na1` in `src/content/site.ts`.

**Also update (not delete):**
- `.env.example` — remove `RESEND_API_KEY`, `LEAD_NOTIFICATION_TO`, `LEAD_NOTIFICATION_FROM`
- `tests/plan03-lead-capture-flow.test.mjs` — replace lead-API tests with “route absent / HubSpot-only” assertions

### Anti-Patterns to Avoid

- **Nonce CSP for this marketing site:** Forces dynamic rendering; incompatible with static optimization and PPR; HubSpot still needs style `'unsafe-inline'` [CITED: nextjs.org CSP guide].
- **Leaving `/api/lead` “disabled” but present:** Orphan POST remains a spam/probe target; delete the route.
- **CSP without HubSpot `connect-src` / `form-action`:** Form UI loads but submit fails silently.
- **CSP without `'unsafe-inline'` for `script-src`:** Breaks `BFCACHE_RECOVERY_SCRIPT` (`dangerouslySetInnerHTML` in `app/layout.tsx`) and GA inline config script.
- **Relying on `"latest"` alone for SEC-03:** Lockfile can stay on `16.2.6` until reinstall; pin exact patched versions.
- **Adding `X-Frame-Options: DENY` changes:** Already present; keep. Aligns with `frame-ancestors 'none'`.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| HTTP security headers | Custom middleware inventing header sets | `next.config.ts` `headers()` | Build-time, static, documented Next path |
| Strict XSS CSP | Homegrown nonce plumbing across every page | Staged allowlist CSP now; nonce later if needed | Nonces require dynamic pages site-wide |
| Lead email delivery | Keep unused Resend adapter “just in case” | HubSpot Forms (existing) | Dual paths increase attack surface; UI unused |
| Secret scanning in CI | Custom regex scripts in this phase | `.gitignore` + never commit `.env*` | Sufficient for SEC-01 scope |
| HSTS | Skip because Vercel sets it | Explicit `Strict-Transport-Security` in config | Meets SEC-04 verifiably in app config |

**Key insight:** This phase is hygiene and headers, not a security-platform rewrite. Prefer delete + pin + config over new middleware or new packages.

## Common Pitfalls

### Pitfall 1: CSP breaks HubSpot forms
**What goes wrong:** Form shell renders empty, or submit blocked.
**Why it happens:** Missing `script-src` for `*.hsforms.net`, `connect-src`/`form-action` for `*.hsforms.com` / `*.hubapi.com`, or `style-src 'unsafe-inline'` for HubSpot-injected inline styles [CITED: HubSpot KB + community].
**How to avoid:** Start from HubSpot’s official CSP domain table for Forms rows; verify `/contact-us` in browser console for CSP violations after deploy.
**Warning signs:** Console `Refused to load script/connect/frame from ... hsforms...`.

### Pitfall 2: CSP breaks bfcache recovery script
**What goes wrong:** Back-button reload recovery stops working.
**Why it happens:** Root layout injects inline JS via `dangerouslySetInnerHTML` (`lib/bfcache/recovery-script.ts` → `app/layout.tsx`). Without nonce or `'unsafe-inline'`, browser blocks it.
**How to avoid:** Keep `'unsafe-inline'` in staged `script-src`, or migrate script to external file under `'self'` (larger change — out of phase preference).
**Warning signs:** CSP violation on inline script at document start; back-nav bugs return.

### Pitfall 3: CSP breaks Google Analytics / Next `Script`
**What goes wrong:** No GA hits; console blocks gtag.
**Why it happens:** Need `https://www.googletagmanager.com` in `script-src`; GA4 needs `*.google-analytics.com` / `*.analytics.google.com` in `connect-src`/`img-src`; inline gtag bootstrap needs `'unsafe-inline'` or nonce [CITED: Google Tag Platform CSP].
**How to avoid:** Include GA4 directive set (non-Ads subset is enough for current code).
**Warning signs:** Network tab missing `gtag/js` or collect beacons.

### Pitfall 4: Speed Insights in development vs production
**What goes wrong:** Local CSP errors for `va.vercel-scripts.com` / `vitals.vercel-insights.com`.
**Why it happens:** Speed Insights v2 uses first-party paths in production; **dev** still hits Vercel script hosts [CITED: vercel/speed-insights#103].
**How to avoid:** Conditionally append those hosts when `NODE_ENV === 'development'`; production can rely on `'self'`.
**Warning signs:** Dev-only CSP violations; prod fine.

### Pitfall 5: YouTube / blog iframe blocked
**What goes wrong:** Video facade or blog embed blank.
**Why it happens:** `frame-src` defaults to `default-src 'self'` if omitted; need `youtube.com` embed hosts and `https://abrahams73.lll-ll.com`.
**How to avoid:** Explicit `frame-src` list from `YouTubeFacade` + `src/content/blog.ts`.
**Warning signs:** Console frame-src violations on `/solutions` and `/blog`.

### Pitfall 6: Next upgrade leaves lockfile vulnerable
**What goes wrong:** `package.json` says latest but CI still builds `16.2.6`.
**Why it happens:** `"latest"` only resolves on fresh install; existing lock pins old patch.
**How to avoid:** `npm install next@16.2.12 eslint-config-next@16.2.12` and commit lockfile; change package.json from `"latest"` to `"16.2.12"` for those two.
**Warning signs:** `npm ls next` still shows `16.2.6` after “upgrade.”

### Pitfall 7: Tests still assert deleted lead API
**What goes wrong:** `node --test tests/plan03-lead-capture-flow.test.mjs` fails after delete.
**Why it happens:** Tests require honeypot/Resend/route files to exist.
**How to avoid:** Rewrite tests in same task as deletion: assert HubSpot embed remains; assert lead route/helper files are absent; drop Resend env assertions.

### Pitfall 8: `.env*` accidentally ignores `.env.example`
**What goes wrong:** Template becomes untracked or hard to re-add.
**Why it happens:** `.env*` matches `.env.example`.
**How to avoid:** Always add `!.env.example` **after** `.env*`. Confirm with `git check-ignore -v .env.local` (ignored) and `git check-ignore -v .env.example` (not ignored) + `git ls-files .env.example`.

## Code Examples

### SEC-01 `.gitignore` addition

```gitignore
node_modules
.next
out
coverage
*.log
dist

# Local secrets (keep .env.example tracked)
.env*
!.env.example
```

### SEC-02 deletion checklist

```text
DELETE  app/api/lead/route.ts
DELETE  lib/lead/send-lead-email.ts
RMDIR   app/api/lead  (if empty)
RMDIR   lib/lead      (if empty)
EDIT    .env.example  (remove RESEND_* / LEAD_NOTIFICATION_*)
EDIT    tests/plan03-lead-capture-flow.test.mjs
KEEP    components/marketing/HubSpotContactForm.tsx
KEEP    components/marketing/ContactUsPageContent.tsx
```

### SEC-03 upgrade

```bash
npm install next@16.2.12 eslint-config-next@16.2.12
# Then set package.json dependencies/devDependencies entries to "16.2.12" (not "latest")
npm run typecheck
npm run lint
npm run build
```

**Break risk assessment:** `16.2.6` → `16.2.12` is patch-line only. Security fixes landed in `16.2.11` (DoS Server Actions, Turbopack middleware bypass, SSRF rewrite/actions, cache confusion, etc.); `16.2.12` adds docs/TS7 backports [CITED: GitHub releases v16.2.11 / v16.2.12]. Low expected app break risk for this marketing site (no custom i18n locales middleware pattern; Vercel-hosted not custom Node server for SSRF custom-server CVE). Still run full build + smoke contact/blog/solutions pages.

### SEC-04 HSTS (Next docs example)

```js
// Source: https://nextjs.org/docs/app/api-reference/config/next-config-js/headers
{
  key: "Strict-Transport-Security",
  value: "max-age=63072000; includeSubDomains; preload"
}
```

Vercel already applies `max-age=63072000` on custom domains (without `includeSubDomains; preload` by default). Explicit app header satisfies SEC-04 and can strengthen subdomain/preload directives [CITED: vercel.com/docs/cdn-security/encryption].

### Current headers baseline (before phase)

```79:90:next.config.ts
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" }
        ]
      }
    ];
  }
```

**Missing today:** `Strict-Transport-Security`, `Content-Security-Policy`.

### Required third-party origins (from codebase)

| Origin / pattern | Used by | CSP directives |
|------------------|---------|----------------|
| `https://js.hsforms.net` / `https://*.hsforms.net` | HubSpot embed script | `script-src`, `img-src`, `frame-src`, `style-src` |
| `https://*.hsforms.com` | HubSpot forms submit/frames | `script-src`, `img-src`, `frame-src`, `connect-src`, `child-src`, `form-action` |
| `https://*.hubapi.com` | HubSpot API | `connect-src` |
| `https://www.googletagmanager.com` | GA gtag loader | `script-src`, `img-src`, `connect-src` |
| `https://*.google-analytics.com` / `https://*.analytics.google.com` | GA4 collect | `connect-src`, `img-src` |
| `https://www.youtube.com` / `https://youtube.com` | `YouTubeFacade` iframe | `frame-src` |
| `https://i.ytimg.com` | YouTube poster (also `images.remotePatterns`) | `img-src` |
| `https://abrahams73.lll-ll.com` | Blog iframe (`src/content/blog.ts`) | `frame-src` |
| `https://va.vercel-scripts.com` / `https://vitals.vercel-insights.com` | Speed Insights **dev only** | `script-src` / `connect-src` when `isDev` |

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Resend `/api/lead` + HubSpot dual path | HubSpot-only contact | Product decision v1.5 | Delete orphan API |
| No CSP / HSTS in app config | Explicit headers in `next.config` | Phase 10 | Auditability + XSS/transport hardening |
| Next CSP via `middleware.ts` examples | Next 16 docs emphasize `proxy.ts` for nonces | Next 16 naming | Prefer config CSP here; avoid proxy unless strict CSP later |
| Speed Insights third-party hosts | v2 first-party `/_vercel` intake in prod | Speed Insights v2 | Simpler prod CSP |
| Ad-hoc `"latest"` pins | Exact patched pins for Next line | Phase 10 (partial) | Reproducible security baseline |

**Deprecated/outdated:**
- Keeping unused Resend lead pipeline “for later” — deferred CRM is GROW-04; do not leave dead API.
- Full nonce CSP as v1.5 default — wrong performance tradeoff for this site.

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | `.env*` + `!.env.example` is the correct ignore pattern for this repo’s git version | SEC-01 | Need alternate negation syntax; verify with `git check-ignore` |
| A2 | HubSpot form submit only needs `*.hsforms.com` + `*.hubapi.com` connect/form-action for portal `na1` (no EU hosts) | SEC-04 | EU regions would need `*-eu1` hosts from HubSpot table |
| A3 | GA Ads / doubleclick endpoints are not required for current gtag-only setup | SEC-04 | If Ads features enabled later, CSP must expand |
| A4 | MUI Emotion runtime does not need extra external style hosts beyond `'unsafe-inline'` | SEC-04 | Rare Emotion CDN edge cases; verify no style-src violations on key pages |
| A5 | No production Vercel/env still depends on `RESEND_*` / `LEAD_NOTIFICATION_*` after route delete | SEC-02 | Orphan env vars harmless; remove from Vercel dashboard opportunistically |
| A6 | Patch upgrade `16.2.6`→`16.2.12` has no app-breaking behavior for this codebase | SEC-03 | Mitigate with build + smoke tests |

**If this table is empty:** N/A — assumptions listed above need planner/executor verification, not discuss-phase locks (no CONTEXT.md).

## Open Questions

1. **CSP enforce vs Report-Only first deploy?**
   - What we know: SEC-04 asks for a staged CSP present in production that does not break marketing pages.
   - What's unclear: Whether “staged” means Report-Only canary or enforce-with-allowlist.
   - Recommendation: **Enforce allowlist CSP** in the same PR (matches success criterion wording); use preview deploy + DevTools CSP console as the staging gate. Add Report-Only only if preview shows noisy unknown hosts.

2. **HSTS `includeSubDomains; preload`?**
   - What we know: Next docs use full preload string; Vercel custom-domain default is `max-age=63072000` only.
   - What's unclear: Whether all Abrahams subdomains are HTTPS-ready for includeSubDomains/preload submission.
   - Recommendation: Use `max-age=63072000; includeSubDomains; preload` if www + apex and known subs are HTTPS-only on Vercel; otherwise start with `max-age=63072000; includeSubDomains` without `preload`.

3. **Should `"latest"` pins for react/zod/typescript be touched?**
   - What we know: REQUIREMENTS Out of Scope says full `"latest"` cleanup can follow later.
   - Recommendation: **Only pin `next` and `eslint-config-next`** in Phase 10.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | Next build | ✓ | v22.13.0 | — |
| npm | install/upgrade | ✓ | 10.9.2 | — |
| `next` (installed) | runtime | ✓ | 16.2.6 (upgrade to 16.2.12) | — |
| Git | `.gitignore` verify | ✓ | present | — |
| Vercel project env | runtime secrets | ✗ (not probed) | — | Document that RESEND vars can be removed manually |
| ctx7 / Context7 | docs lookup | ✗ | — | Used WebFetch + npm view + official URLs |
| slopcheck CLI | package audit | ✗ on PATH | pip pkg present | Registry + official docs verification |

**Missing dependencies with no fallback:** none for implementation.

**Missing dependencies with fallback:** Context7/ctx7 → WebFetch official docs; slopcheck CLI → ASSUMED legitimacy + official sources.

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | no | Marketing site; no app auth |
| V3 Session Management | no | No user sessions |
| V4 Access Control | no | Public pages only |
| V5 Input Validation | yes (removal) | Deleting `/api/lead` removes Zod-validated public POST surface; HubSpot validates remote form |
| V6 Cryptography | no new | HTTPS/HSTS via Vercel + header; do not hand-roll crypto |
| V14 Config | yes | `.gitignore` secrets, dependency pins, security headers |

### Known Threat Patterns for Next marketing + third-party embeds

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Secret commit (`.env`) | Information Disclosure | `.env*` gitignore + tracked `.env.example` only |
| Orphan public POST spam / probe | Denial of Service / Abuse | Delete `/api/lead` |
| Framework RCE/DoS advisories | Denial of Service / Elevation | Upgrade Next ≥ `16.2.11` (target `16.2.12`) |
| XSS via injected script | Tampering / Elevation | CSP allowlist + existing `poweredByHeader: false` |
| Clickjacking | Spoofing | Existing `X-Frame-Options: DENY` + CSP `frame-ancestors 'none'` |
| HTTP downgrade | Tampering | HSTS header |
| Third-party supply chain (HubSpot/GA/YouTube) | Tampering | Explicit origin allowlist; prefer HTTPS hosts only |

## Project Constraints (from `.cursor/rules/`)

No `.cursor/rules/` directory present in the repo. Follow PROJECT.md / CLAUDE.md constraints: Next on Vercel, performance-first, English-only, code-managed content, no CMS in v1.

**Workflow:** GSD planning artifacts for this phase; `workflow.nyquist_validation` is `false` in `.planning/config.json` — Validation Architecture section omitted by design.

## Sources

### Primary (HIGH confidence)
- [npm registry] `npm view next version` → `16.2.12`; lockfile `16.2.6` — SEC-03 baseline
- [https://nextjs.org/blog/july-2026-security-release](https://nextjs.org/blog/july-2026-security-release) — advisories fixed in `16.2.11`
- [https://github.com/vercel/next.js/releases/tag/v16.2.11](https://github.com/vercel/next.js/releases/tag/v16.2.11) / [v16.2.12](https://github.com/vercel/next.js/releases/tag/v16.2.12)
- [https://nextjs.org/docs/app/guides/content-security-policy](https://nextjs.org/docs/app/guides/content-security-policy) — with/without nonces; static vs dynamic tradeoff
- [https://nextjs.org/docs/app/api-reference/config/next-config-js/headers](https://nextjs.org/docs/app/api-reference/config/next-config-js/headers) — HSTS example
- [https://knowledge.hubspot.com/domains-and-urls/ssl-and-domain-security-in-hubspot](https://knowledge.hubspot.com/domains-and-urls/ssl-and-domain-security-in-hubspot) — official HubSpot CSP domain table
- [https://developers.google.com/tag-platform/security/guides/csp](https://developers.google.com/tag-platform/security/guides/csp) — GA4 CSP directives
- [https://vercel.com/docs/cdn-security/encryption](https://vercel.com/docs/cdn-security/encryption) — platform HSTS defaults
- Repo files: `.gitignore`, `package.json`, `package-lock.json`, `next.config.ts`, `app/api/lead/route.ts`, `lib/lead/send-lead-email.ts`, `HubSpotContactForm.tsx`, `GoogleAnalytics.tsx`, `ContentMxBlogEmbed.tsx`, `app/layout.tsx`, `lib/bfcache/recovery-script.ts`, `src/content/blog.ts`, `tests/plan03-lead-capture-flow.test.mjs`

### Secondary (MEDIUM confidence)
- [https://vercel.com/docs/speed-insights/migrating-from-legacy](https://vercel.com/docs/speed-insights/migrating-from-legacy) — first-party intake
- [vercel/speed-insights#103](https://github.com/vercel/speed-insights/issues/103) — dev CSP hosts

### Tertiary (LOW confidence)
- HubSpot community threads on `'unsafe-inline'` for form styles — corroborated by official need for style flexibility; exact minimal style-src still verify in browser

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — npm + official July 2026 security blog + lockfile inspection
- Architecture: HIGH — codebase paths and HubSpot-only contact verified by grep/read
- Pitfalls: HIGH — Next CSP docs + HubSpot/GA official CSP tables + known inline scripts in layout

**Research date:** 2026-07-30  
**Valid until:** 2026-08-30 (Next patch line moves quickly; re-check `npm view next version` at execute time)
