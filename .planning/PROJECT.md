# Abrahams Consulting Website Revamp

## What This Is

This project is a full revamp of the Abrahams Consulting marketing website using Next.js and deployment on Vercel. The site will modernize brand credibility, improve qualified lead generation, and make service and contract capabilities easier to discover for enterprise and government buyers. The v1 release is a rapid MVP focused on high-impact pages and SEO/performance best practices from day one.

## Core Value

Deliver a fast, SEO-strong website that clearly communicates Abrahams Consulting's offerings and drives high-intent consultation leads.

## Current Milestone: v1.2 Executive Recruiting Completion

**Goal:** Complete the executive recruiting page with legacy-aligned sections that drive hiring-profile discovery and consultation leads.

**Target features:**
- Tabbed "Which IT Leadership Hiring Profile Fits You?" section with four profiles
- Typed content model, local images, accessible tab UI
- Preserve existing hero, wrong-hire, and consultation CTA sections

## Requirements

### Validated

- [x] Launch a Next.js website revamp deployed on Vercel with a production-ready architecture. (v1.0 Phase 1)
- [x] Achieve strong SEO and web performance foundations across core launch pages. (v1.0 Phase 4)
- [x] Rewrite content to improve clarity, trust, and conversion intent. (v1.0 Phases 2–3)
- [x] Prioritize launch quality for the Home page first, then expand to remaining priority pages. (v1.0 Phase 2)
- [x] Widen site-wide content container to 84rem and scale marketing typography. (v1.1)

### Active

- [ ] Executive recruiting hiring profiles tabbed section with four outcomes
- [ ] Content schema, validation, and local assets for profile images

### Out of Scope

- Multilingual support in v1 — English-only launch is prioritized for speed.
- CMS implementation in v1 — content is code-managed for the fastest initial release.
- Advanced integrations in v1 (CRM, analytics stack, custom workflows) — deferred until the core site relaunch is stable.
- AwardBanner scaling — banner stays at current compact dimensions.

## Context

Abrahams Consulting is an established MWBE technology consulting and staffing company with existing service lines, contract vehicles, and certifications that must be communicated clearly online. The current website includes key sections such as niche solutions, consulting services, contract vehicles, certifications, clients, careers, and blog content, and v1 should preserve this business footprint while improving structure, UX, and discoverability. This is a greenfield implementation in the current workspace and should follow modern Next.js and Vercel best practices.

v1.0 shipped the full MVP (platform foundation, conversion journeys, trust/lead capture, launch quality gates). v1.1 addresses post-launch visual feedback that the homepage and site shell feel too narrow and undersized on desktop viewports.

## Constraints

- **Tech stack**: Next.js on Vercel — selected platform for delivery speed and hosting alignment.
- **Performance**: Performance-first implementation — pages must be optimized for fast real-world load times.
- **SEO**: Strong technical SEO baseline in v1 — organic discoverability is a core launch requirement.
- **Timeline**: Rapid MVP cadence — prioritize speed to first high-quality launch and iterate after.
- **Content model**: Code-managed content in v1 — avoids CMS overhead during initial delivery.
- **Localization**: English-only for v1 — reduces scope and accelerates launch.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Use Next.js for the revamp | Strong SSR/SSG support, modern DX, and SEO/performance capabilities | ✓ Good |
| Deploy on Vercel | Native Next.js platform with optimized deployment workflow | ✓ Good |
| Launch with code-managed content, no CMS | Fastest path to shipping and controlling quality in v1 | ✓ Good |
| Prioritize rapid MVP over broad first-release scope | Early launch and iterative delivery is preferred | ✓ Good |
| Keep v1 English-only | Avoids localization complexity in the initial rollout | ✓ Good |
| Site-wide container width 84rem for v1.1 | User feedback: 72rem feels narrow on desktop; 84rem balances spaciousness without full-bleed | — Pending |
| Exclude AwardBanner from scale-up | Banner is a compact announcement strip; scaling would reduce information density | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-06-01 after milestone v1.1 initialization*
