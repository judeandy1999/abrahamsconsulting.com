# Technology Stack Recommendation (MVP v1)

**Project:** Abrahams Consulting website revamp  
**Researched:** 2026-05-28  
**Scope:** Next.js App Router + Vercel, code-managed content, English-only launch, SEO/performance-first

## Executive Recommendation

Use a **lean App Router stack** centered on `next@16.2.6` with mostly Server Components, static-first rendering, and selective dynamic islands only where required. For v1, keep content in-repo (typed TS objects and optional MDX), implement technical SEO via built-in Next metadata APIs, and enforce a minimal but serious security header baseline.

This stack is optimized for:
- Rapid MVP delivery
- Excellent Core Web Vitals
- Clean, maintainable architecture without CMS overhead
- Easy post-launch extension (CMS and localization can be added later without re-platforming)

---

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

---

## 2) Performance Optimization Stack (Core Web Vitals)

## Target CWV thresholds (P75)
- **LCP <= 2.5s**
- **INP <= 200ms**
- **CLS <= 0.1**

Confidence: **HIGH** (Google Web Vitals guidance)

## Implementation baseline

1. **Static-first rendering**
   - Prefer fully static pages for marketing routes.
   - Use App Router cache primitives only where needed (`"use cache"`, `cacheLife`) to keep responses predictable.
   - Confidence: **HIGH**.

2. **Server Components by default**
   - Keep most page/layout code server-side.
   - Use client components only for interaction islands (forms, nav toggles, calculators).
   - Confidence: **HIGH**.

3. **Image and font optimization**
   - Use `next/image` everywhere for responsive images and modern formats.
   - Use `next/font` (self-hosted Google/local fonts) to avoid layout shift and external font requests.
   - Confidence: **HIGH**.

4. **Bundle and JS control**
   - Keep dependencies minimal.
   - Use `next/dynamic` for optional or below-the-fold client components.
   - Add `@next/bundle-analyzer@16.2.6` during optimization phases.
   - Confidence: **HIGH**.

5. **Measure in production**
   - Add `<SpeedInsights />` in root layout and monitor route-level regressions.
   - Add `<Analytics />` for behavior context around performance issues.
   - Confidence: **HIGH**.

---

## 3) SEO Stack (Next.js App Router Best Practices)

## Required technical baseline

1. **Metadata API first**
   - Use route-level `metadata`/`generateMetadata` for title, description, canonical, OpenGraph, Twitter.
   - Keep a single metadata utility for consistency and brand-level defaults.
   - Confidence: **HIGH**.

2. **Sitemap + robots via file conventions**
   - Implement `app/sitemap.ts` and `app/robots.ts`.
   - Use absolute canonical URLs and include sitemap location in robots output.
   - Confidence: **HIGH**.

3. **Structured data (JSON-LD)**
   - Render native `<script type="application/ld+json">` in Server Components.
   - For safety, sanitize `JSON.stringify` output by replacing `<` with `\\u003c`.
   - Start with `Organization` (+ `Service` / `BreadcrumbList` / `Article` where relevant).
   - Confidence: **HIGH**.

4. **Content and information architecture**
   - One primary intent per page with descriptive headings (`h1`/`h2`) and internal linking between services/capabilities.
   - Unique title/meta description per route.
   - Confidence: **MEDIUM** (SEO outcomes vary by competition/content quality).

5. **English-only v1 SEO clarity**
   - Do not implement i18n alternates/hreflang until multilingual rollout.
   - Keep clean canonical signals with a single language version.
   - Confidence: **HIGH**.

---

## 4) Security + Maintainability Baseline (Business Website)

## Security baseline

- Enforce HTTPS and add hardened security headers through `next.config` `headers()`:
  - `Strict-Transport-Security`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy`
  - `Permissions-Policy`
  - `Content-Security-Policy` (start strict, loosen intentionally only where needed)
- Keep all secrets server-side (`process.env`) and never expose operational keys in client bundles.
- Protect public forms with anti-spam controls (honeypot + server validation + optional challenge).
- Use Vercel Firewall/WAF capabilities where available.

Confidence: **HIGH**.

## Maintainability baseline

- Domain-oriented folder layout (`app/(marketing)/...`, `components/`, `content/`, `lib/seo`, `lib/content`).
- Strong TypeScript types and `zod` schemas for content objects.
- ESLint + Prettier + CI checks on PRs.
- Playwright smoke suite for key flows (home, service page, contact submission success/failure).
- Keep architecture boring in v1: avoid abstractions until repeated patterns appear.

Confidence: **HIGH**.

---

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

Confidence: **HIGH**.

---

## 6) Installation Baseline (practical starter)

```bash
npm i next@16.2.6 react@19.2.6 react-dom@19.2.6
npm i @vercel/analytics@2.0.1 @vercel/speed-insights@2.0.0 zod@4.4.3
npm i -D typescript@6.0.3 eslint@10.4.0 eslint-config-next@16.2.6 prettier@3.8.3
npm i -D tailwindcss@4.3.0 @tailwindcss/postcss@4.3.0 postcss@8.5.15 autoprefixer@10.5.0
npm i -D playwright@1.60.0 @next/bundle-analyzer@16.2.6
```

---

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
