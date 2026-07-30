# Phase 12: SEWP Compliance DOM & Dead Code - Research

**Researched:** 2026-07-30
**Domain:** Next.js App Router client-component tabs (always-mount + CSS/HTML hide), SEWP page dead-code removal
**Confidence:** HIGH

## Summary

Fair Opportunity and Program Manager content already exist in typed content (`src/content/nasa-sewp-vi.ts`) and are rendered inside `NasaSewpViStatementsTableSection`, but **only the active tab’s panel is mounted**. Default `activeTab` is `"contract-overview"`, so a no-JS fetch/skim of `/nasa-sewp-vi` never sees Fair Opportunity or Maybelline Magnet contact text. Phase 12 keeps the existing tab UX and changes rendering so **all eight statement panels are always in the DOM**, with inactive panels CSS/HTML-hidden.

Separately, SEWP past-performance UI/content/schema is **orphaned** (component never mounted from `NasaSewpViBody`), and Ordering Guide VPAT / coming-soon / `isAvailable` paths are **computed but never rendered**. Remove those dead paths while leaving the working Ordering Guide PDF download CTA.

**Primary recommendation:** Refactor `NasaSewpViStatementsTableSection` to one stable `role="tabpanel"` per tab with the HTML `hidden` attribute on inactive panels; delete unused past-performance + VPAT/availability dead code; verify with `curl`/`Select-String` against the static SSR HTML (no tab click).

<user_constraints>
## User Constraints (from discuss / orchestrator locked decisions)

### Locked Decisions
- Keep tab UX; render ALL statement panels in DOM; CSS-hide inactive (not conditional mount)
- Fair Opportunity + Program Manager Maybelline must be in initial HTML without click
- Remove unused past performance content/schema/UI
- Remove unused VPAT/coming-soon availability UI paths; Ordering Guide PDF download must still work

### Claude's Discretion
- Exact hide mechanism (`hidden` attribute vs class + `display: none`) — research recommends HTML `hidden` (below)
- Whether to also always-render nested Post-Delivery topic panels (not required by SEWP-01/02)
- Whether Company Hub exclusive-mount tabs are touched (out of SEWP-01–04 scope; leave alone)
- How aggressively to delete Ordering Guide `download.comingSoonLabel` / `isAvailable` once VPAT paths go (recommend delete unused fields)

### Deferred Ideas (OUT OF SCOPE)
- SEWP tab visual redesign
- Wiring VPAT Coming Soon UI / uploading VPAT PDF
- Company Hub / Clients crawlability changes
- Building a Privacy Policy page
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| SEWP-01 | Fair Opportunity clause text present in initial HTML (no tab click); tab UX may still control visual focus | Always-mount `fair-opportunity` panel + `hidden` when inactive; content already at `fairOpportunityClause` in `nasa-sewp-vi.ts` L350–363; exclusive mount today at Statements L299–340 |
| SEWP-02 | Program Manager Maybelline Magnet (name, role, direct phone, `sewp.pm@` email) in initial HTML without tab click | Always-mount `program-manager` panel; profile content at `nasa-sewp-vi.ts` L496–520; exclusive mount today at Statements L405–440 |
| SEWP-03 | Unused past performance content, schema, related unused UI removed from SEWP pipeline | Orphan `NasaSewpViPastPerformanceSection` + `NasaSewpViExperienceIcon` + `pastPerformance` on `nasaSewpViPageSchema` / content; not referenced from `NasaSewpViBody` |
| SEWP-04 | Unused VPAT / coming-soon availability UI paths removed; Ordering Guide PDF download still works when file present | Dead vars/CSS/schema/loader for VPAT + unused `isAvailable`/`comingSoonLabel`; card always renders Download PDF today — keep that CTA, strip unused paths |
</phase_requirements>

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Statement tab state + keyboard | Browser / Client | Frontend Server (SSR) | `"use client"` component with `useState`; initial HTML still SSR’d by Next |
| Fair Opportunity / PM HTML presence | Frontend Server (SSR) | CDN / Static | `force-static` page; compliance skim reads SSR HTML source |
| Visual hide of inactive panels | Browser / Client | CDN / Static | `hidden` / CSS applied on client after hydration; attribute also present in SSR for inactive panels |
| Ordering Guide PDF link | CDN / Static | Frontend Server (SSR) | File under `public/documents/`; href baked into HTML |
| Dead content/schema cleanup | Build-time (Zod `content:check`) | — | `prebuild` runs `scripts/validate-content.mjs` |
| Past performance removal | Codebase only | — | Never mounted; no runtime datastore |

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js App Router | `16.2.12` [VERIFIED: package.json] | Static marketing page SSR | Already on SEWP page (`dynamic = "force-static"`) |
| React | `latest` pin in package.json | Client tab state | Existing |
| TypeScript + Zod | project pins | Content schema validation | `nasaSewpViPageSchema` gates build |
| framer-motion | `^12.40.0` [VERIFIED: package.json] | Section enter animations | Already wraps statements layout — do not add per-panel motion |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Native HTML `hidden` | platform | Hide inactive tabpanels | Prefer over custom visually-hidden for tabs [CITED: developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden] [CITED: w3.org/WAI/ARIA/apg/patterns/tabs] |
| eslint-plugin-jsx-a11y | `^6.10.2` | Catch a11y regressions | Already in eslint config |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| HTML `hidden` | Class + `display: none` | Equivalent for fetch/HTML source; `hidden` is the APG-aligned semantic default and stays in sync with a11y tree |
| HTML `hidden` | `visually-hidden` / clip pattern | Keeps content in a11y tree → inactive panels would be read by screen readers (wrong for tabs) |
| HTML `hidden` | Conditional mount (`activeTab ===`) | Current pattern — **fails SEWP-01/02** because text never enters HTML |
| HTML `hidden` | `hidden="until-found"` | Useful for find-in-page reveal; not needed for PMO curl skim; more complexity |
| Delete VPAT schema | Wire Coming Soon UI | Explicitly deferred / out of scope |

**Installation:**
```bash
# No new packages required for Phase 12
```

**Version verification:** Existing stack only — `next@16.2.12`, `framer-motion@^12.40.0` confirmed in `package.json`. No registry installs planned.

## Package Legitimacy Audit

> Phase installs **no** new external packages.

| Package | Registry | Age | Downloads | Source Repo | slopcheck | Disposition |
|---------|----------|-----|-----------|-------------|-----------|-------------|
| — | — | — | — | — | — | N/A — no installs |

**Packages removed due to slopcheck [SLOP] verdict:** none
**Packages flagged as suspicious [SUS]:** none

*slopcheck not required — zero new dependencies.*

## Architecture Patterns

### System Architecture Diagram

```text
curl / browser GET /nasa-sewp-vi
        │
        ▼
┌───────────────────────────────┐
│ page.tsx (force-static)       │
│ loadMarketingContent()        │
│  └─ loadNasaSewpViPageContent │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│ NasaSewpViBody (client)       │
│  ├─ ElectronicOrderingGuide   │── Download PDF CTA (keep)
│  ├─ StatementsTableSection ★  │── ALWAYS mount all panels
│  │     tabs (visual focus)    │     inactive → hidden attr
│  │     panels in SSR HTML     │── Fair Opp + PM for skim
│  ├─ CompanyHubSection         │── OUT OF SCOPE (leave)
│  └─ FederalSalesContact       │
└───────────────────────────────┘

★ Change: exclusive activeTab === mount → map all tabs → panel + hidden={!active}
```

### Recommended Project Structure (touch set)

```
components/marketing/
├── NasaSewpViStatementsTableSection.tsx   # SEWP-01/02 primary change
├── NasaSewpViOrderingGuideCard.tsx        # SEWP-04 dead-var cleanup
├── NasaSewpViPastPerformanceSection.tsx   # DELETE (SEWP-03)
└── NasaSewpViExperienceIcon.tsx           # DELETE (SEWP-03 only consumer)

lib/content/
└── nasa-sewp-vi-page.ts                   # Drop VPAT/isAvailable loader logic

src/content/
├── nasa-sewp-vi.ts                        # Drop pastPerformance + EOG accessibility/VPAT fields
└── schema.ts                              # Drop nasaSewpVi pastPerformance + EOG accessibility/VPAT/comingSoon/isAvailable

app/styles/pages/
└── sewp-vi.css                            # Add [hidden] safety if needed; delete dead experience/a11y/vpat CSS
```

### Pattern 1: Always-mount tabpanels with HTML `hidden`

**What:** One `role="tabpanel"` per tab, always rendered; inactive panels get `hidden`; active panel omits `hidden`. Tabs keep roving `tabIndex` / `aria-selected` / `aria-controls` as today.

**When to use:** Statement tabs only (compliance skim). Do **not** apply to Company Hub in this phase.

**Example:**
```tsx
// Source: WAI-ARIA APG Tabs pattern + MDN `hidden`
// File target: components/marketing/NasaSewpViStatementsTableSection.tsx

{TABS.map((tab) => {
  const isActive = tab.id === activeTab;
  return (
    <div
      key={tab.id}
      id={`${baseId}-panel-${tab.id}`}
      role="tabpanel"
      aria-labelledby={`${baseId}-tab-${tab.id}`}
      hidden={!isActive}
      className="sewp-vi-statements__panel"
    >
      {renderStatementsPanel(tab.id)}
    </div>
  );
})}
```

Extract today’s `activeTab === "..."` branches into `renderStatementsPanel(tabId)` (or equivalent switch) so each panel’s JSX is unchanged — only mounting strategy changes.

**CSS note:** `.sewp-vi-statements__panel` (sewp-vi.css ~L1973) does **not** set `display`, so UA `[hidden] { display: none }` is not overridden. Do **not** add `display: grid/block` on that class without a `[hidden]` exception:

```css
/* Only if a future rule sets display on the panel */
.sewp-vi-statements__panel[hidden] {
  display: none !important;
}
```

### Pattern 2: Prefer `hidden` over visually-hidden for inactive tabs

| Technique | In HTML source? | Visible? | In a11y tree? | Fit for SEWP skim + tabs |
|-----------|-----------------|----------|---------------|---------------------------|
| Conditional mount (`===` + `null`) | No (inactive) | No | No | **Fails SEWP-01/02** |
| HTML `hidden` / `display:none` | Yes | No | No | **Recommended** |
| `.visually-hidden` / clip | Yes | No | Yes | Bad — SR reads all panels |
| `aria-hidden="true"` alone | Yes | Still visible unless also CSS-hidden | No | Do not use alone; redundant if `hidden` present [CITED: MDN aria-hidden] |

**Do not** set `aria-hidden="true"` on panels that already use `hidden` / `display:none` — redundant and discouraged by MDN.

### Pattern 3: Dead-code deletion (past performance)

**Verified unused in SEWP page pipeline:**
- `components/marketing/NasaSewpViPastPerformanceSection.tsx` — never imported by `NasaSewpViBody.tsx` (Body L13–42 only wires EOG, Statements, CompanyHub, FederalSales)
- `components/marketing/NasaSewpViExperienceIcon.tsx` — only imported by PastPerformanceSection
- `src/content/nasa-sewp-vi.ts` L546–587 `pastPerformance: { ... }`
- `src/content/schema.ts` L456–461 `nasaSewpViPastPerformanceSchema` + L739–744 `pastPerformance` on `nasaSewpViPageSchema`
- CSS `.sewp-vi-experience*` block in `app/styles/pages/sewp-vi.css` (~L1093–1221)

**Do NOT remove** capabilities-statement `pastPerformance` fields (`schema.ts` ~L989 / ~L1066 and capabilities content modules) — those power `/capabilities-*` pages via `CapabilitiesStatementPageContent.tsx`.

### Pattern 4: Dead-code deletion (VPAT / availability)

**Current Ordering Guide card** (`NasaSewpViOrderingGuideCard.tsx`):
- L24–26: reads `accessibility`, computes `orderingGuideAvailable` and `vpatAvailable` — **never used in JSX**
- L46–55: always renders Download PDF `<a href={download.href}>` with no availability gate

**Dead paths to remove:**
| Location | What |
|----------|------|
| `NasaSewpViOrderingGuideCard.tsx` L24–26 | Unused destructure/vars |
| `lib/content/nasa-sewp-vi-page.ts` L12–29 | `orderingGuideVpatAvailable` + mutating `accessibility.vpat.isAvailable` / `download.isAvailable` |
| `src/content/nasa-sewp-vi.ts` L7 | `orderingGuideVpat` document path |
| `src/content/nasa-sewp-vi.ts` L320 | `comingSoonLabel` on download |
| `src/content/nasa-sewp-vi.ts` L325–343 | entire `accessibility` / VPAT block |
| `src/content/schema.ts` L609–626 | `comingSoonLabel`, `isAvailable`, entire `accessibility` object |
| `sewp-vi.css` L2898–2972 | `__cta--disabled`, `__a11y*`, `__vpat*` rules |

**Keep:**
- `NASA_SEWP_VI_DOCUMENTS.orderingGuide` + `download.href` / title / description / illustration / downloadLabel
- Card Download PDF CTA markup
- File `public/documents/nasa-sewp-vi/ordering-guide.pdf` (present in workspace; VPAT PDF absent)

**Note:** Phase 9 originally called for a coming-soon state when the Ordering Guide PDF is missing. That UI was never wired into the card JSX. SEWP-04 locks **removal** of unused coming-soon paths rather than re-wiring them. Planner should not reintroduce Coming Soon unless product reopens scope.

### Anti-Patterns to Avoid
- **Conditional mount for “performance”:** Removes compliance text from HTML — the exact failure mode.
- **visually-hiding inactive panels:** Breaks tab a11y (all panels announced).
- **Overriding `[hidden]` with `display: flex/grid`:** MDN: CSS `display` overrides the `hidden` attribute’s effect.
- **Deleting capabilities-statement pastPerformance:** Wrong schema family.
- **Changing Company Hub mount strategy:** Out of SEWP-01–04 scope.
- **Adding `aria-hidden` on top of `hidden`:** Redundant; avoid.
- **Animating panel mount/unmount with framer-motion:** Unnecessary; risk of opacity-0 content quirks. Outer section motion can stay.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Hide inactive tabpanel | Custom JS class toggles + invent a11y attrs | HTML `hidden` + existing APG tab roles | Browser removes from a11y/focus; content stays in HTML source |
| Content in HTML for auditors | Duplicate Fair Opp / PM in a noscript or footer | Same panel content always mounted | Single source of truth; no drift |
| VPAT availability | Custom file-probe UI | Delete unused path | No VPAT asset; out of scope to wire |
| Past performance section | Soft-disable / feature flag | Delete unused files/schema/content | Never mounted |

**Key insight:** Compliance skim cares about **bytes in the HTTP response HTML**, not visual layout. Conditional React mount fails that test; `hidden` passes it.

## Common Pitfalls

### Pitfall 1: Exclusive `activeTab ===` mount (current bug)
**What goes wrong:** Inactive panel JSX is `null` → absent from SSR HTML.
**Why it happens:** Statements L277–468 pattern; Company Hub L144–174 same pattern (out of scope).
**How to avoid:** Map all `TABS` to panels; toggle `hidden` only.
**Warning signs:** `curl` HTML lacks `FAR Part 16.505` / `Maybelline Magnet` / `sewp.pm@abrahamsconsulting.com`.

### Pitfall 2: Unstable panel `id` tied to `activeTab`
**What goes wrong:** Today panel id is `` `${baseId}-panel-${activeTab}` `` (L272) — only one id exists. After refactor, each tab needs a **stable** id matching `aria-controls` on its tab button (already `` `${baseId}-panel-${tab.id}` `` at L256).
**How to avoid:** Never reuse a single panel element with a swapping id.

### Pitfall 3: Focusable links inside `hidden` panels
**What goes wrong:** Program Manager / Order Troubleshooting / External Resources contain `<a href>`. With proper `hidden`/`display:none`, they leave the focus order; if someone uses opacity/off-screen instead, Tab can land in “invisible” panels.
**How to avoid:** Stick to `hidden`; keep roving tabindex on tabs; do not make inactive panels `visibility:hidden` only.

### Pitfall 4: Nested PostDeliveryTopics still exclusive-mount
**What goes wrong:** Statements L153–160 still mounts only the active topic description. Out of SEWP-01/02 scope, but auditors looking for warranty text via skim may only see the default topic.
**How to avoid:** Leave for now unless product expands scope; document as residual.

### Pitfall 5: framer-motion `initial="hidden"` opacity
**What goes wrong:** Section wrapper uses motion `initial="hidden"` / `whileInView="visible"` (L217–220). Text is still in SSR HTML (good for curl). Visual opacity-0 until in view is unrelated to tab panels.
**How to avoid:** Do not wrap each tabpanel in additional motion that remounts content; existing page CSS already forces opacity on `:focus-visible` (sewp-vi.css L4124–4126).

### Pitfall 6: Hydration mismatch
**What goes wrong:** Server and client disagree on `activeTab` or `hidden`.
**How to avoid:** Keep `useState<TabId>("contract-overview")` as sole initial state; derive `hidden={!isActive}` from it on both server and client (Next still SSR’s client components’ first paint).

### Pitfall 7: Schema delete breaks `content:check`
**What goes wrong:** Removing schema fields without updating `nasa-sewp-vi.ts` fails `prebuild`.
**How to avoid:** Edit schema + content + loader in one commit; run `npm run content:check`.

### Pitfall 8: SEO “hidden content” myths
**What goes wrong:** Fear that `display:none` tab content is “cloaking.”
**Reality for this phase:** PMO requirement is source presence for fetch/skim; WAI-ARIA tabs legitimately hide inactive panels. Google historically indexes tabbed content that exists in HTML. Do not duplicate content in a visible off-page block.

## Code Examples

### Current exclusive-mount pattern (must change)

```277:291:components/marketing/NasaSewpViStatementsTableSection.tsx
            {activeTab === "contract-overview" ? (
              <div id="sewp-vi-overview-heading">
                <p className="sewp-vi-statements__paragraph">{contractOverview.description}</p>
                <dl className="sewp-vi-statements__meta">
                  {contractOverview.items.map((item) => (
                    <div key={item.id} className="sewp-vi-statements__meta-row">
                      <dt>{item.label}</dt>
                      <dd>
                        <ContactValue value={item.value} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : null}
```

Fair Opportunity exclusive mount: L299–340. Program Manager exclusive mount: L405–440. Single tabpanel wrapper: L271–276.

### Target always-mount + hidden (prescriptive)

```tsx
// Source: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
//         https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden

<div className="sewp-vi-statements__panels">
  {TABS.map((tab) => {
    const isActive = tab.id === activeTab;
    return (
      <div
        key={tab.id}
        id={`${baseId}-panel-${tab.id}`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${tab.id}`}
        hidden={!isActive}
        className="sewp-vi-statements__panel"
      >
        {renderPanel(tab.id)}
      </div>
    );
  })}
</div>
```

### Verification commands (Windows PowerShell)

```powershell
# After `npm run build` + `npm run start` (or against a preview URL):
$html = curl.exe -sL http://localhost:3000/nasa-sewp-vi

# SEWP-01
$html | Select-String -Pattern "FAR Part 16.505" -SimpleMatch
$html | Select-String -Pattern "Fair Opportunity" -SimpleMatch

# SEWP-02
$html | Select-String -Pattern "Maybelline Magnet" -SimpleMatch
$html | Select-String -Pattern "sewp.pm@abrahamsconsulting.com" -SimpleMatch
$html | Select-String -Pattern "(301) 638-8731" -SimpleMatch

# Confirm inactive panels still present while default tab is contract-overview:
$html | Select-String -Pattern 'role="tabpanel"' -AllMatches
$html | Select-String -Pattern "\shidden[\s>]" 

# SEWP-04 — Ordering Guide link still present
$html | Select-String -Pattern "/documents/nasa-sewp-vi/ordering-guide.pdf" -SimpleMatch

# SEWP-03 / SEWP-04 absences
$html | Select-String -Pattern "Representative Experience|VPAT|ordering-guide-vpat" 
# Expect no matches for VPAT / Representative Experience in SEWP page HTML
```

Optional static artifact check after build: search `.next/server/app` for the route’s HTML/RSC payload for the same strings (path may vary by Next version).

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Conditional panel mount | Always mount + `hidden` | Phase 12 | Compliance skim sees all panels |
| Orphan past-performance section | Delete | Phase 12 | Smaller schema/UI surface |
| Schema-ready VPAT / coming-soon | Delete unused | Phase 12 | Matches “no VPAT PDF” product reality |

**Deprecated/outdated:**
- Treating “CSS hide” as incompatible with “in HTML” — false; `hidden`/`display:none` keep source text
- Wiring Coming Soon for VPAT without an asset — deferred by PROJECT.md

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | PMO fetch/skim is satisfied by HTTP HTML source containing the strings (curl), not by screen-reader traversal of inactive panels | Verification | If auditors use a browser automation that only reads visible text, `hidden` would still fail — unlikely given “fetch/skim” wording; if true, would need visible duplicate (product conflict with tab UX) |
| A2 | Company Hub exclusive mount is intentionally out of scope | User Constraints | Address inconsistency if later audits demand Company Info in HTML without click (Company Info already has non-tab paths elsewhere? Company hub is tabbed — leave unless asked) |
| A3 | Removing Ordering Guide `isAvailable` / comingSoon without re-wiring missing-PDF UX is acceptable under SEWP-04 | SEWP-04 | If PDF deleted from `public/`, download link 404s (same as today’s unwired card) |

**If this table is empty:** N/A — three assumptions listed.

## Open Questions

1. **Nested Post-Delivery topic panels**
   - What we know: Only active topic description is mounted (Statements L153–160).
   - What's unclear: Whether any auditor cares about non-default warranty topics in initial HTML.
   - Recommendation: Leave exclusive-mount nested topics; success criteria name Fair Opportunity + Program Manager only.

2. **Ordering Guide missing-PDF behavior**
   - What we know: Card always links; `isAvailable` unused; PDF currently present on disk.
   - What's unclear: Whether product wants a disabled/coming-soon state restored later.
   - Recommendation: Per SEWP-04, delete unused paths; do not restore Coming Soon in this phase.

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | build / content:check | ✓ | v22.13.0 | — |
| npm | scripts | ✓ | 10.9.2 | — |
| `ordering-guide.pdf` | SEWP-04 download | ✓ | present under `public/documents/nasa-sewp-vi/` | Keep href; file already shipped |
| `ordering-guide-vpat.pdf` | VPAT UI (removing) | ✗ | missing | Delete VPAT path — no fallback UI |
| Playwright | automated e2e | ✗ in package.json | — | Manual curl verification (nyquist off) |
| ctx7 CLI | docs lookup | ✗ | — | Used MDN + WAI-ARIA APG via WebFetch |

**Missing dependencies with no fallback:** none for planned work

**Missing dependencies with fallback:** Playwright → curl/Select-String verification

Step 2.6: External deps audited above (no DB/services).

## Security Domain

> `security_enforcement` not disabled in config — included.

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | no | — |
| V3 Session Management | no | — |
| V4 Access Control | no | Public marketing page |
| V5 Input Validation | yes (content) | Zod `nasaSewpViPageSchema` via `content:check` |
| V6 Cryptography | no | — |

### Known Threat Patterns for this change set

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| Broken external PDF link / 404 as “download” | Spoofing / Tampering perception | Keep verified `ordering-guide.pdf` path; do not invent VPAT link |
| Accidental exposure of draft/internal text via always-mounted panels | Information Disclosure | Only mount already-approved public SEWP copy |
| Focus into hidden interactive content | Elevation of Privilege (a11y) | Use real `hidden`/`display:none`, not off-screen |

## Sources

### Primary (HIGH confidence)
- Codebase: `NasaSewpViStatementsTableSection.tsx`, `NasaSewpViBody.tsx`, `nasa-sewp-vi.ts`, `schema.ts`, `nasa-sewp-vi-page.ts`, `NasaSewpViOrderingGuideCard.tsx`, `sewp-vi.css`, `page.tsx`
- [MDN `hidden`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden) — hide semantics; CSS `display` can override
- [MDN `aria-hidden`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) — do not stack on already-hidden elements
- [WAI-ARIA APG Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) — inactive tabpanels must be hidden; preloaded panels enable activation UX
- [MDN tabpanel role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) — `display: none` common for inactive panels

### Secondary (MEDIUM confidence)
- Vispero / community writeups on hide-method a11y differences (aligned with MDN)
- Project ROADMAP/REQUIREMENTS success criteria for Phase 12

### Tertiary (LOW confidence)
- Google indexing behavior for `display:none` tab content — not the primary acceptance path (curl/fetch skim is)

## Project Constraints (from .cursor/rules/)

No `.cursor/rules/` directory present in this repo at research time. Follow CLAUDE.md / PROJECT constraints: Next.js on Vercel, performance-first, code-managed content, English-only, compliance skim for Fair Opportunity + Program Manager.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — no new libs; verified in package.json + code
- Architecture: HIGH — line-level exclusive-mount and dead-code inventory verified by grep/read
- Pitfalls: HIGH — a11y/SEO hide behavior cited from MDN + APG; hydration/motion risks grounded in existing code

**Research date:** 2026-07-30
**Valid until:** 2026-08-30 (stable UI pattern; recheck if Statements component is redesigned)
