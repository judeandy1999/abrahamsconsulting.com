# Architecture Patterns: High-Performance Next.js on Vercel Marketing Site

**Domain:** Consulting company marketing website (enterprise + government buyer audience)  
**Researched:** 2026-05-28  
**Recommendation confidence:** HIGH (official Next.js and Vercel docs)

## Recommended Architecture

Build on **Next.js App Router** with **Server Components by default**, deployed on **Vercel** with Preview + Production environments.

Design principle for v1:
- Keep most routes **prerendered and cacheable** (SSG/ISR behavior)
- Isolate truly request-specific behavior to **small SSR islands** (or route handlers), not whole pages
- Keep content **code-managed** in typed local modules/MDX so the team ships quickly without CMS overhead

### Target project structure

```text
src/
  app/
    (marketing)/
      layout.tsx
      page.tsx                      # Home
      services/page.tsx
      contract-vehicles/page.tsx
      certifications/page.tsx
      clients/page.tsx
      careers/page.tsx
      about/page.tsx
      contact/page.tsx
      blog/
        page.tsx                    # Blog index
        [slug]/page.tsx             # Blog detail
      loading.tsx
      error.tsx
    api/
      lead/route.ts                 # Form submit endpoint
      revalidate/route.ts           # Optional on-demand cache invalidation
  components/
    layout/
    sections/
    marketing/
    shared/
  content/
    site.ts                         # Global site settings + nav + metadata defaults
    pages/
      home.ts
      services.ts
      contract-vehicles.ts
      certifications.ts
      clients.ts
      careers.ts
      about.ts
      contact.ts
    blog/
      *.mdx
  lib/
    content/
      get-page-content.ts
      get-posts.ts
      schema.ts                     # zod validators for content integrity
    seo/
      metadata.ts
      jsonld.ts
```

## Component and Route Boundaries (Prescriptive)

### Route boundaries

- Use one top-level route group `(marketing)` for all public pages to share a common shell.
- Keep `app/layout.tsx` minimal (html/body, global providers only).
- Put full site header/footer/nav in `app/(marketing)/layout.tsx` so every marketing route shares one layout boundary.
- Use `app/api/lead/route.ts` for lead form submission logic; keep it separate from page rendering paths.
- Use `app/blog/[slug]/page.tsx` with `generateStaticParams()` for known posts and `revalidate` for new/updated posts.

### Component boundaries

- **Server Components default** for all sections that only render content (`Hero`, `CapabilitiesGrid`, `ContractsTable`, `TrustLogos`, `CaseStudyTeasers`).
- **Client Components only where interactivity is required** (`ContactForm`, lightweight carousels, animated counters, cookie banner).
- Keep each page composed from section-level components:
  - `components/sections/<SectionName>.tsx` for page sections
  - `components/shared/*` for reusable primitives
- Keep data access in `lib/content/*` so pages/components do not parse raw content files directly.

## Content/Data Flow for Code-Managed v1

### Source of truth

- Store canonical content in `src/content/` as typed TS objects for core pages and MDX for blog.
- Validate content at build/startup with zod (`lib/content/schema.ts`) to fail fast on malformed entries.
- Derive all page props through `lib/content/get-page-content.ts` and `lib/content/get-posts.ts`.

### Flow

1. Author edits content files (`src/content/pages/*.ts`, `src/content/blog/*.mdx`)
2. Content loaders validate and normalize data
3. Page Server Components consume normalized content
4. Metadata (`generateMetadata`) and JSON-LD are generated from the same content source
5. Route output is prerendered/cached based on page strategy (SSG/ISR/SSR)

### Why this is right for v1

- Fastest route to launch (no CMS modeling/admin UI)
- Full version control and PR review for messaging changes
- Strong SEO consistency because metadata and content share one typed source

## Rendering Strategy by Page Type (SSG / ISR / SSR)

Use **caching without Cache Components** patterns for explicit control and easy team understanding in v1 (`revalidate`, `dynamic`, `fetch cache options`).

| Page type | Strategy | Implementation | Rationale |
|---|---|---|---|
| Home, About, Services, Contract Vehicles, Certifications, Clients, Careers | SSG + periodic ISR | `export const revalidate = 3600` (or 86400 for very stable pages) | Mostly static marketing content; global performance and low runtime cost. |
| Blog index | ISR | `export const revalidate = 900` | Keep recent posts fresh without redeploying constantly. |
| Blog detail (`/blog/[slug]`) | SSG + ISR | `generateStaticParams()` + `export const revalidate = 3600` | Fast delivery for known posts, with background refresh when content changes. |
| Contact page (content shell) | SSG | Static page with client form posting to API route | Keep page fast; move dynamic behavior to API endpoint. |
| Lead form submit endpoint (`/api/lead`) | SSR/Runtime | Route Handler (`POST`) + `cache: no-store` semantics | Must process per-request payload, no caching. |
| Any future personalized page | SSR (scoped) | `export const dynamic = 'force-dynamic'` only for that route | Avoid turning broad marketing routes dynamic. |

### Operational defaults

- Default route behavior should remain static/cached.
- Only use `dynamic = 'force-dynamic'` for routes with unavoidable request-specific data.
- For fetches:
  - shared public data: `cache: 'force-cache'` + `next: { revalidate: n }`
  - sensitive/volatile data: `cache: 'no-store'`

## Caching Strategy

### 1) Route/content caching (Next.js)

- Set route-level `revalidate` per page class:
  - `900s` for frequently updated marketing modules (blog index)
  - `3600s` for standard pages
  - `86400s` for highly stable pages (certifications/contracts if infrequently updated)
- Tag key fetches with `next: { tags: [...] }` and use `revalidateTag()` for targeted updates later.
- For non-fetch data sources (filesystem/DB), wrap loaders with `unstable_cache` where applicable.

### 2) CDN caching (Vercel)

- Let Next.js manage HTML/RSC caching for app routes.
- For custom route handlers, set explicit headers:
  - `Cache-Control`
  - optionally `CDN-Cache-Control` / `Vercel-CDN-Cache-Control` for finer control
- Never cache user-specific responses unless `Vary` is set correctly (prefer private/no-store for sensitive paths).

### 3) Cache invalidation

- MVP: rely on time-based ISR.
- Phase 2+: add `/api/revalidate` endpoint secured by secret token for on-demand invalidation on content publish events.

## Image Strategy

- Use `next/image` for all marketing imagery.
- Prefer static imports for local assets where possible (automatic dimension metadata + optimization).
- Configure `images.remotePatterns` only for approved hosts (if external imagery is used).
- Always provide:
  - explicit width/height or `fill`
  - meaningful `alt` text
  - `sizes` when using responsive/fill images
- Use `preload` only for the LCP hero image on the home page.
- Store brand assets in `/public/` with stable naming and avoid oversized source files.

## Deployment and Environment Strategy (Vercel)

### Environments

- **Local**: `vercel env pull` to sync development variables.
- **Preview**: every non-main branch/PR deploys automatically; used for content and QA review.
- **Production**: main branch deploys to primary domain.

### Environment variables policy

- Separate variable sets per environment (Preview vs Production minimum).
- Do not embed secrets in content modules.
- Treat changes to env vars as deployment-triggering config changes (new deployment required).

### Deployment policy

- Require preview verification checklist before merge:
  - Lighthouse/perf sanity check on Home
  - metadata/social card checks
  - lead form smoke test
- Roll forward by default; use Vercel rollback for urgent regressions.

## Suggested Build Order for Rapid MVP

1. **Foundation and shell**
   - Initialize Next.js App Router + TypeScript + ESLint
   - Create `(marketing)` layout, global styles, header/footer/nav, SEO base metadata
2. **Home page vertical slice**
   - Implement content model (`src/content/site.ts`, `src/content/pages/home.ts`)
   - Build Home sections and achieve performance/SEO baseline
   - Configure `revalidate` and image optimization on Home first
3. **Core conversion flow**
   - Build Contact page + `api/lead` route handler
   - Add validation, spam controls (basic honeypot/rate limit strategy), success/failure UX
4. **High-priority business proof pages**
   - Services, Contract Vehicles, Certifications, Clients
   - Keep static/ISR-first; avoid dynamic features
5. **Blog foundation**
   - MDX content pipeline, blog index, blog detail route with `generateStaticParams` + ISR
6. **Hardening and launch**
   - 404/error/loading states
   - structured data, sitemap, robots, OG images
   - preview workflow, deployment checklist, production launch

## Phase Delivery Map (MVP-oriented)

| Phase | Deliverable | Exit criteria |
|---|---|---|
| Phase 1 | Base app shell and route skeleton | Shared layout works and deploys to Vercel preview |
| Phase 2 | Home page production-ready | Home meets performance + SEO baseline |
| Phase 3 | Lead capture flow | Contact submit path validated end-to-end |
| Phase 4 | Core trust/capability pages | Services/contracts/certs/clients live and internally reviewed |
| Phase 5 | Blog + final SEO hardening | Blog routes + metadata + sitemap + launch checklist complete |

## Implementation Defaults to Adopt Immediately

- Route model: App Router with Server Components by default
- Content model: code-managed typed modules + MDX
- Rendering baseline: static/ISR-first, SSR only for explicit per-request needs
- Revalidation baseline: `3600s` unless page needs faster freshness
- Image baseline: `next/image`, responsive `sizes`, preload only LCP hero
- Deploy baseline: Vercel Preview-first workflow with env separation

## Sources

- Next.js docs: Caching (getting started): https://nextjs.org/docs/app/getting-started/caching
- Next.js docs: Caching without Cache Components: https://nextjs.org/docs/app/guides/caching-without-cache-components
- Next.js docs: Incremental Static Regeneration: https://nextjs.org/docs/app/guides/incremental-static-regeneration
- Next.js docs: Public Static Pages: https://nextjs.org/docs/app/guides/public-static-pages
- Next.js docs: Route Segment Config (v16 notes): https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
- Next.js docs: fetch API reference: https://nextjs.org/docs/app/api-reference/functions/fetch
- Next.js docs: CDN Caching: https://nextjs.org/docs/app/guides/cdn-caching
- Next.js docs: Image component: https://nextjs.org/docs/app/api-reference/components/image
- Vercel docs: CDN Cache: https://vercel.com/docs/caching/cdn-cache
- Vercel docs: Cache-Control headers: https://vercel.com/docs/caching/cache-control-headers
- Vercel docs: Environment variables: https://vercel.com/docs/environment-variables
- Vercel docs: Environments: https://vercel.com/docs/deployments/environments
