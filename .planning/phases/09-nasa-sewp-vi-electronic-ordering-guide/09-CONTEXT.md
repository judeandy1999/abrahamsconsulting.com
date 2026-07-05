# Phase 9: NASA SEWP VI Electronic Ordering Guide - Context

**Gathered:** 2026-07-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Deliver a mockup-accurate **Electronic Ordering Guide** section on `/nasa-sewp-vi` as its own block **immediately below Contract Overview**. Left column: title, intro, four feature bullets. Right column: elevated download card with custom PDF illustration and **Download PDF** action wired to the existing ordering guide document path. No Last Updated / Version metadata on the card.

</domain>

<decisions>
## Implementation Decisions

### Section placement
- **D-01:** Standalone full-width section stacked directly below Contract Overview — do not merge into the overview grid or place side-by-side with it.
- **D-02:** White section background (`var(--color-white)`), consistent with Contract Overview.
- **D-03:** Desktop: feature list left, download card right. Mobile: **download card first**, then feature list.
- **D-04:** Use standard NASA SEWP VI scroll-in motion (`useMarketingMotionConfig` / framer-motion pattern).

### Legacy ordering UI cleanup
- **D-05:** Remove `orderingProcess` from content module and schema — superseded by the four mockup feature bullets.
- **D-06:** PDF download appears **only** in the new section — remove ordering guide from `resources` (or drop duplicate entry); no second download link elsewhere on the page.
- **D-07:** Extend existing `NasaSewpViOrderingGuideCard` for the download card (metadata rows omitted; illustration slot added).
- **D-08:** Add a dedicated `electronicOrderingGuide` content block in `src/content/nasa-sewp-vi.ts` with title, intro, four features (icon + title + description), and card copy.

### PDF metadata & availability
- **D-09:** **Do not display** Last Updated or Version on the download card — user chose to remove metadata (differs from mockup placeholders).
- **D-10:** When `ordering-guide.pdf` is absent, show full section with **disabled Coming Soon** download control (reuse `isAvailable` from `loadNasaSewpViPageContent`).
- **D-11:** When available, Download PDF opens in a **new tab** (`target="_blank"`, `rel="noopener noreferrer"`).
- **D-12:** Keep `NASA_SEWP_VI_DOCUMENTS.orderingGuide` path + runtime file-exists check in `lib/content/nasa-sewp-vi-page.ts`.

### Download card visual
- **D-13:** Custom WebP illustration for the PDF document graphic (export from approved mockup → `public/images/nasa-sewp-vi/`).
- **D-14:** Elevated white card — rounded corners, soft shadow (match federal contact / capabilities card patterns).
- **D-15:** Feature list uses circular light-blue icon backgrounds with Lucide icons (same pattern as consulting capabilities cards).
- **D-16:** Section title **Electronic Ordering Guide** with red accent line under heading (no separate eyebrow).

### Claude's Discretion
- Exact Lucide icon mapping for the four feature bullets (document, refresh, printer, shield-check suggested).
- Responsive breakpoints and spacing tokens — align with existing `sewp-vi-*` sections.
- Whether to remove entire `resources` section or only the ordering guide entry if capability statement is still needed elsewhere (prefer minimal removal: drop ordering guide entry only unless Resources section is unused in body).

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Milestone & requirements
- `.planning/ROADMAP.md` — Phase 9 goal, success criteria, suggested plan breakdown
- `.planning/REQUIREMENTS.md` — EOG-01 through EOG-08 (update EOG-05 if metadata removal changes acceptance)
- `.planning/PROJECT.md` — v1.4 milestone scope and constraints

### Design reference
- `.cursor/projects/c-Users-conve-projects-AbrahamsConsulting/assets/c__Users_conve_AppData_Roaming_Cursor_User_workspaceStorage_aff5b7b3baef1910511a1dd48f63e254_images_image-495e1694-f3bb-4fa9-af1b-ac6f37bee4be.png` — approved Electronic Ordering Guide mockup (user-provided)

### Content & schema
- `src/content/nasa-sewp-vi.ts` — add `electronicOrderingGuide`; remove `orderingProcess`
- `src/content/schema.ts` — schema for new block; remove `orderingProcess`
- `scripts/validate-content.mjs` — mirror schema changes
- `lib/content/nasa-sewp-vi-page.ts` — PDF availability injection

### Components & integration
- `components/marketing/NasaSewpViBody.tsx` — wire section after `NasaSewpViContractOverviewSection`
- `components/marketing/NasaSewpViContractOverviewSection.tsx` — placement reference (section above)
- `components/marketing/NasaSewpViOrderingGuideCard.tsx` — extend for download card
- `components/marketing/ConsultingServicesPackageSection.tsx` — circle icon + feature row pattern reference
- `app/globals.css` — `sewp-vi-overview__*`, `sewp-vi-ordering-guide__*`, `consulting-services-package__icon` patterns

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `NasaSewpViOrderingGuideCard` — stub download link with available/coming-soon states; extend for full card layout.
- `loadNasaSewpViPageContent()` — already sets `resources.orderingGuide.isAvailable` from filesystem.
- `NasaSewpViContractOverviewSection` — adjacent section; white background, red accent title pattern.
- `useMarketingMotionConfig()` — standard motion variants for section entrance.
- `pillarIconProps` + Lucide — icon styling for feature bullets.

### Established Patterns
- Typed content in `src/content/nasa-sewp-vi.ts` validated by zod in build pipeline.
- NASA sections use `sewp-vi-*` BEM classes in `globals.css`.
- PDF paths centralized in `NASA_SEWP_VI_DOCUMENTS` constant.

### Integration Points
- Insert new section in `NasaSewpViBody` immediately after line 22 (`NasaSewpViContractOverviewSection`).
- Remove dead `orderingProcess` content; consolidate ordering guide UX into new section only.
- Partial CSS exists: `.sewp-vi-ordering__*`, `.sewp-vi-ordering-guide__*` — refactor/rename for full section layout.

</code_context>

<specifics>
## Specific Ideas

- Match approved mockup layout: two columns, four feature rows with dividers, elevated download card with PDF illustration and primary **Download PDF** button.
- Mockup copy for features:
  1. **Easy to Download** — Printable PDF formatted per SEWP CHUM specifications.
  2. **Always Up to Date** — Updated within 10 business days of every contract modification.
  3. **Print-Ready Format** — Designed for agency buyers to download and print with ease.
  4. **Required Before First Order** — Must be live on our website before the first order is placed.
- Intro: "Our Electronic Ordering Guide provides federal agencies with step-by-step instructions for placing orders through the NASA SEWP VI contract with Abrahams Consulting LLC."

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

**Note:** REQUIREMENTS.md EOG-05 references Last Updated / Version — planner should align requirement text with D-09 (metadata removed) or mark EOG-05 as descoped for metadata fields only.

</deferred>

---

*Phase: 9-NASA SEWP VI Electronic Ordering Guide*
*Context gathered: 2026-07-05*
