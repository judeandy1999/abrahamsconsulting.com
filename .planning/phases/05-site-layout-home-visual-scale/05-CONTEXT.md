# Phase 5: Site Layout & Home Visual Scale - Context

**Gathered:** 2026-06-01
**Status:** Ready for planning

<domain>
## Phase Boundary

Widen the site-wide content container from 72rem to 84rem and scale up homepage typography, spacing, and visual elements proportionally. The AwardBanner announcement strip keeps its current compact typography and internal sizing unchanged. Header, footer, hero, certification bar, about section, and main content all participate in the wider layout. Responsive behavior at existing breakpoints must hold without horizontal overflow.

Out of scope for this phase: scaling other marketing pages (Phase 6), CWV verification (Phase 6), new content or sections, AwardBanner typography/sizing changes.

</domain>

<decisions>
## Implementation Decisions

### Container Width
- **D-01:** Set `--container-max: 84rem` in `:root` — single token drives header nav, hero, certification bar, about, main content, footer, and award banner container width.
- **D-02:** Do not introduce a separate narrow container token for the banner. The banner row widens with the site, but its internal content stays compact (see Banner section).

### Typography Scale
- **D-03:** Apply a ~12% type scale bump across homepage sections using CSS custom properties in `app/globals.css`. Prefer token-based changes over per-selector hardcoding.
- **D-04:** Scale these tokens/values proportionally:
  - `--home-section-heading-size` clamp (certification bar, about headings)
  - Hero headline clamp (`clamp(2rem, 4.2vw, 3.15rem)` → increase max ~12%)
  - Hero description (`1.05rem` → `1.125rem`), feature list (`0.9rem` → `1rem`)
  - About body text (`1.0625rem` → `1.125rem`, lead paragraph `1.125rem` → `1.2rem`)
  - Eyebrow labels (`0.75rem` → `0.8125rem`)
  - Buttons (`.btn` `0.8125rem` → `0.875rem`, padding bump ~10%)
  - Header nav link size (`0.9375rem` → `1rem`) and footer text modestly
- **D-05:** Do not change base utility bar font size (`0.8125rem`) — it is part of the compact chrome, not homepage content scale.

### Award Banner (Preserve Compact)
- **D-06:** Leave all `.award-banner__*` internal sizing unchanged: font sizes (`0.875rem`), badge dimensions (`3.5rem`), padding (`0.5rem 1.5rem`), rule height, CTA size.
- **D-07:** Do not apply the homepage type scale tokens to any `.award-banner` selectors. Mobile responsive overrides for banner also stay as-is.
- **D-08:** Banner container follows `--container-max: 84rem` but content remains left-aligned at current sizes — extra width is whitespace, not scaled content.

### Hero Visual Balance
- **D-09:** Scale hero logo from `width: 35rem` to ~`38rem` (~8%) to fill wider grid without dominating.
- **D-10:** Increase hero description `max-width` from `38rem` to `42rem` to use the wider column.
- **D-11:** Reduce hero logo `margin-left` from `5rem` to `3rem` — wider container makes the offset less necessary.
- **D-12:** Keep hero two-column grid ratio (`1.15fr / 0.85fr`) unchanged unless overflow occurs at 960px breakpoint.

### Section Spacing
- **D-13:** Increase vertical section padding ~15% on scaled sections:
  - Hero inner padding (`3.5rem 1.5rem 4rem` → `4rem 1.5rem 4.5rem`)
  - About inner padding (`3.5rem 1.5rem` → `4rem 1.5rem`)
  - Certification bar heading/media padding (`1.75rem` → `2rem`) — this section scales with homepage
- **D-14:** Increase grid gaps modestly (`home-about__inner` gap `2.5rem 3rem` → `3rem 3.5rem`).
- **D-15:** Do not increase award banner vertical padding.

### Implementation Approach
- **D-16:** All changes in `app/globals.css` — no component file changes expected unless image `sizes` attributes need updating for wider layout.
- **D-17:** Consider introducing a `--home-type-scale: 1.12` multiplier token if it simplifies proportional bumps, but avoid over-abstracting one-off values.
- **D-18:** Update existing design contract tests in `tests/plan02-home-hero-design.test.mjs` only if assertions break due to intentional CSS changes — do not add tests for exact pixel values.

### Claude's Discretion
- Exact clamp formula tuning for `--home-section-heading-size` and hero headline
- Whether to bump horizontal padding from `1.5rem` to `1.75rem` at desktop
- Partner carousel logo cell dimensions (currently `160px` width) — scale ~10% if visually warranted
- Certification bar grid column ratio (`36%` heading column) — adjust only if composite image looks cramped after widen

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Milestone & Requirements
- `.planning/PROJECT.md` — v1.1 milestone goals, 84rem decision, banner exclusion
- `.planning/REQUIREMENTS.md` — LAYT-01, LAYT-02, TYPE-01, TYPE-02 requirement definitions
- `.planning/ROADMAP.md` — Phase 5 success criteria and scope boundary

### Styles & Components
- `app/globals.css` — all layout tokens and section styles (primary implementation surface)
- `components/marketing/HomeHero.tsx` — hero structure, logo Image dimensions
- `components/marketing/HomeAboutSection.tsx` — about section layout
- `components/marketing/HomeCertificationBar.tsx` — certification bar structure
- `components/marketing/AwardBanner.tsx` — banner markup (must not change)
- `components/marketing/MarketingHeader.tsx` — header uses shared container classes
- `components/marketing/MarketingFooter.tsx` — footer uses shared container classes

### Tests
- `tests/plan02-home-hero-design.test.mjs` — home composition and asset contract tests

No external ADRs or UI-SPEC exist for this phase.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `:root` CSS custom properties (`--container-max`, `--home-section-heading-size`) — central scale control point
- Shared container class group (`.utility-bar__inner`, `.main-nav__inner`, `.certification-bar__inner`, `.marketing-main__inner`) — all inherit `--container-max`
- `.btn` component classes — shared across hero CTAs and site-wide buttons

### Established Patterns
- All marketing styles live in a single `app/globals.css` file with BEM-like section prefixes (`home-hero__`, `home-about__`, `award-banner__`)
- Responsive overrides at `@media (max-width: 960px)`, `768px`, `640px`, `400px`
- Framer Motion animations in hero/about — no animation timing changes needed for layout scale
- Design contract tests assert file composition and asset paths, not CSS values

### Integration Points
- `app/(marketing)/page.tsx` composes AwardBanner → HomeHero → HomeCertificationBar → HomeAboutSection → marketing-main
- Header/footer wrap all pages via `app/(marketing)/layout.tsx`
- Image `sizes` attributes in HomeCertificationBar and PartnerLogoCarousel may need wider viewport hints after container change

</code_context>

<specifics>
## Specific Ideas

User feedback driving this phase: homepage feels too narrow and undersized on desktop. Target is noticeably more spacious without full-bleed. Award announcement banner should stay compact — user explicitly excluded it from the scale-up.

Discussion questions were skipped; decisions above apply milestone v1.1 defaults with ~12% type scale and Claude discretion on fine-tuning.

</specifics>

<deferred>
## Deferred Ideas

- Marketing pages scale (services, contracts, trust, consultation) — Phase 6
- CWV/responsive verification pass — Phase 6
- Full-bleed layouts beyond 84rem — out of scope per milestone

</deferred>

---

*Phase: 5-Site Layout & Home Visual Scale*
*Context gathered: 2026-06-01*
