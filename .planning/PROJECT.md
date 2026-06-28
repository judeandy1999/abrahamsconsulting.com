# Abrahams Consulting Website Revamp

## What This Is

This project is a full revamp of the Abrahams Consulting marketing website using Next.js and deployment on Vercel. The site will modernize brand credibility, improve qualified lead generation, and make service and contract capabilities easier to discover for enterprise and government buyers. The v1 release is a rapid MVP focused on high-impact pages and SEO/performance best practices from day one.

## Core Value

Deliver a fast, SEO-strong website that clearly communicates Abrahams Consulting's offerings and drives high-intent consultation leads.

## Current Milestone: v1.3 NASA SEWP VI Federal Contract Page

**Goal:** Publish an accurate, maintainable NASA SEWP VI Prime Contractor page at `/nasa-sewp-vi` that matches the existing design system and supports leadership/PMO review.

**Target features:**
- Full contract page with verified content from Capability Statement and SEWP VI documentation
- Typed content module with schema validation; PDF paths configurable without code changes
- Hero, contract overview, competencies, past performance, company info, resources, and federal sales contact
- SEO registry and sitemap inclusion; responsive, accessible layout reusing site patterns

## Requirements

### Validated

- [x] Launch a Next.js website revamp deployed on Vercel with a production-ready architecture. (v1.0 Phase 1)
- [x] Achieve strong SEO and web performance foundations across core launch pages. (v1.0 Phase 4)
- [x] Rewrite content to improve clarity, trust, and conversion intent. (v1.0 Phases 2–3)
- [x] Prioritize launch quality for the Home page first, then expand to remaining priority pages. (v1.0 Phase 2)
- [x] Widen site-wide content container to 84rem and scale marketing typography. (v1.1)
- [x] Executive recruiting hiring profiles tabbed section with four outcomes. (v1.2)

### Active

- [ ] NASA SEWP VI page at `/nasa-sewp-vi` with verified contract content
- [ ] Dynamic PDF resource paths (Capability Statement, Ordering Guide)
- [ ] Content schema, validation, SEO, and responsive sections matching existing design system

### Out of Scope

- Website redesign or new design system — page must match existing site
- Invented statistics, expired contract vehicles, or unverifiable claims
- Multilingual support in v1 — English-only launch is prioritized for speed.
- CMS implementation in v1 — content is code-managed; PDFs replaceable via `public/documents/` paths
- Advanced integrations in v1 (CRM, analytics stack, custom workflows) — deferred until the core site relaunch is stable.
- AwardBanner scaling — banner stays at current compact dimensions.

## Context

Abrahams Consulting is an established MWBE technology consulting and staffing company with existing service lines, contract vehicles, and certifications that must be communicated clearly online. The NASA SEWP VI Prime Contract (80TECH26D1658, Category A – ITC/AV Solutions) requires a dedicated federal-facing page suitable for agency buyers and NASA SEWP PMO review.

v1.0 shipped the full MVP. v1.1 addressed desktop visual scale. v1.2 completed executive recruiting hiring profiles. v1.3 adds the NASA SEWP VI contract page without redesigning the site.

## Constraints

- **Tech stack**: Next.js on Vercel — selected platform for delivery speed and hosting alignment.
- **Performance**: Performance-first implementation — pages must be optimized for fast real-world load times.
- **SEO**: Strong technical SEO baseline in v1 — organic discoverability is a core launch requirement.
- **Timeline**: Rapid MVP cadence — prioritize speed to first high-quality launch and iterate after.
- **Content model**: Code-managed content in v1 — avoids CMS overhead during initial delivery.
- **Localization**: English-only for v1 — reduces scope and accelerates launch.
- **Accuracy**: Only display information verifiable from official Capability Statement and SEWP VI documentation.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Use Next.js for the revamp | Strong SSR/SSG support, modern DX, and SEO/performance capabilities | ✓ Good |
| Deploy on Vercel | Native Next.js platform with optimized deployment workflow | ✓ Good |
| Launch with code-managed content, no CMS | Fastest path to shipping and controlling quality in v1 | ✓ Good |
| PDFs in `public/documents/nasa-sewp-vi/` with content-module paths | Replace Capability Statement and Ordering Guide without code changes | — Pending |
| Reuse existing marketing section patterns (hero, cards, tag grids) | Page must feel native to the existing site | — Pending |
| Exclude retired vehicles (e.g. STARS III) | Leadership requirement: no expired contract vehicles on page | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
- Archive milestone summary
- Reset active requirements for next milestone
