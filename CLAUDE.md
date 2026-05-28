<!-- GSD:project-start source:PROJECT.md -->
## Project

**Abrahams Consulting Website Revamp**

This project is a full revamp of the Abrahams Consulting marketing website using Next.js and deployment on Vercel. The site will modernize brand credibility, improve qualified lead generation, and make service and contract capabilities easier to discover for enterprise and government buyers. The v1 release is a rapid MVP focused on high-impact pages and SEO/performance best practices from day one.

**Core Value:** Deliver a fast, SEO-strong website that clearly communicates Abrahams Consulting's offerings and drives high-intent consultation leads.

### Constraints

- **Tech stack**: Next.js on Vercel — selected platform for delivery speed and hosting alignment.
- **Performance**: Performance-first implementation — pages must be optimized for fast real-world load times.
- **SEO**: Strong technical SEO baseline in v1 — organic discoverability is a core launch requirement.
- **Timeline**: Rapid MVP cadence — prioritize speed to first high-quality launch and iterate after.
- **Content model**: Code-managed content in v1 — avoids CMS overhead during initial delivery.
- **Localization**: English-only for v1 — reduces scope and accelerates launch.
<!-- GSD:project-end -->

<!-- GSD:stack-start source:research/STACK.md -->
## Technology Stack

## Executive Recommendation
- Rapid MVP delivery
- Excellent Core Web Vitals
- Clean, maintainable architecture without CMS overhead
- Easy post-launch extension (CMS and localization can be added later without re-platforming)
## 1) Recommended Concrete Stack
## Core Platform
| Layer | Choice | Version | Why this choice | Confidence |
|---|---|---:|---|---|
| Runtime | Node.js | `>=20.9` (use latest 22 LTS in CI/dev) | Meets Next.js minimum, stable long-term runtime | HIGH |
| Framework | Next.js (App Router) | `16.2.6` | Best-in-class for SEO/SSR/SSG/PPR on Vercel | HIGH |
| UI Runtime | React + React DOM | `19.2.6` | Required by Next 16 ecosystem/tooling | HIGH |
| Language | TypeScript | `6.0.3` | Safer refactors and long-term maintainability | HIGH |
| Deployment | Vercel | Managed platform | Native optimization path for Next | HIGH |
## Styling + UI
| Layer | Choice | Version | Why | Confidence |
|---|---|---:|---|---|
| CSS framework | Tailwind CSS | `4.3.0` | Fast MVP UI iteration with predictable utility patterns | MEDIUM |
| Tailwind PostCSS adapter | `@tailwindcss/postcss` | `4.3.0` | Current Tailwind v4 integration path | MEDIUM |
| CSS pipeline | PostCSS + Autoprefixer | `8.5.15` / `10.5.0` | Browser compatibility and standard pipeline | HIGH |
| Variant utils | `class-variance-authority` + `clsx` | `0.7.1` / `2.1.1` | Maintainable component variants without heavy UI framework | MEDIUM |
## Content Model (No CMS v1)
| Layer | Choice | Version | Why | Confidence |
|---|---|---:|---|---|
| Primary content source | Typed TS content modules (`src/content/*.ts`) | n/a | Fastest code-managed path, easy reviews, type-safe | HIGH |
| Optional long-form pages | MDX via `@next/mdx` | `16.2.6` | Allows rich editorial pages while staying code-managed | MEDIUM |
| Validation | `zod` for content schema checks | `4.4.3` | Prevents invalid page metadata/content at build time | MEDIUM |
## Quality / Operations
| Layer | Choice | Version | Why | Confidence |
|---|---|---:|---|---|
| Linting | ESLint + `eslint-config-next` | `10.4.0` / `16.2.6` | Next-specific guardrails and common standards | HIGH |
| Formatting | Prettier | `3.8.3` | Consistent diffs and maintainability | HIGH |
| E2E testing | Playwright | `1.60.0` | Fast confidence on key conversion/user flows | MEDIUM |
| RUM (performance) | `@vercel/speed-insights` | `2.0.0` | Core Web Vitals field data by route | HIGH |
| Product analytics | `@vercel/analytics` | `2.0.1` | Basic page/visitor metrics for marketing iteration | HIGH |
| Image processing | `sharp` | `0.34.5` | Reliable local/CI image optimization support | MEDIUM |
## 2) Performance Optimization Stack (Core Web Vitals)
## Target CWV thresholds (P75)
- **LCP <= 2.5s**
- **INP <= 200ms**
- **CLS <= 0.1**
## Implementation baseline
## 3) SEO Stack (Next.js App Router Best Practices)
## Required technical baseline
## 4) Security + Maintainability Baseline (Business Website)
## Security baseline
- Enforce HTTPS and add hardened security headers through `next.config` `headers()`:
- Keep all secrets server-side (`process.env`) and never expose operational keys in client bundles.
- Protect public forms with anti-spam controls (honeypot + server validation + optional challenge).
- Use Vercel Firewall/WAF capabilities where available.
## Maintainability baseline
- Domain-oriented folder layout (`app/(marketing)/...`, `components/`, `content/`, `lib/seo`, `lib/content`).
- Strong TypeScript types and `zod` schemas for content objects.
- ESLint + Prettier + CI checks on PRs.
- Playwright smoke suite for key flows (home, service page, contact submission success/failure).
- Keep architecture boring in v1: avoid abstractions until repeated patterns appear.
## 5) What NOT to Use in v1 (and Why)
| Avoid in v1 | Why not now | Revisit when |
|---|---|---|
| Headless CMS (Contentful/Sanity/etc.) | Slows MVP with schema/modeling/editor workflows; current requirement is code-managed content | Content editing velocity exceeds engineering bandwidth |
| `next-seo` style metadata abstraction libraries | Next App Router built-in metadata + file conventions already cover v1 needs | Only if team needs advanced reusable SEO DSL beyond native APIs |
| Heavy UI kits / animation-first stacks | Increases JS/CSS payload and design-system overhead | Brand system becomes complex enough to justify it |
| Over-engineered state management (Redux/Zustand app-wide) | Marketing site has low interactive state needs | Product-like interactions or authenticated experiences |
| Premature microservices / separate backend | Adds operational complexity and cost | When integrations/business logic become substantial |
| Multilingual/i18n rollout | Out of scope for v1, adds routing/content/QA complexity | Post-launch after English funnel is validated |
| Edge runtime everywhere by default | Can complicate dependencies/debugging with little v1 upside | Specific latency-critical routes justify it |
## 6) Installation Baseline (practical starter)
## Sources
- Next.js installation/system requirements: https://nextjs.org/docs/app/getting-started/installation
- Next.js metadata API: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
- Next.js sitemap file convention: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
- Next.js robots file convention: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
- Next.js JSON-LD guide: https://nextjs.org/docs/app/guides/json-ld
- Next.js lazy loading/dynamic import: https://nextjs.org/docs/app/guides/lazy-loading
- Next.js cache components: https://nextjs.org/docs/app/getting-started/caching
- Next.js headers config: https://nextjs.org/docs/app/api-reference/config/next-config-js/headers
- Vercel Speed Insights quickstart: https://vercel.com/docs/speed-insights/quickstart
- Vercel Web Analytics quickstart: https://vercel.com/docs/analytics/quickstart
- Vercel Firewall overview: https://vercel.com/docs/vercel-firewall
- Google Web Vitals thresholds: https://web.dev/articles/vitals
- Google sitemap guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google Organization structured data: https://developers.google.com/search/docs/appearance/structured-data/organization
- Google SEO starter guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->
## Project Skills

No project skills found. Add skills to any of: `.claude/skills/`, `.agents/skills/`, `.cursor/skills/`, `.github/skills/`, or `.codex/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
