# Plan 05-01 Summary: Site Layout & Home Visual Scale

**Executed:** 2026-06-01
**Status:** Complete

## What shipped

Widened site-wide content container to 84rem and scaled homepage typography, spacing, and visual elements per Phase 5 CONTEXT.md. AwardBanner internal sizing left unchanged.

## Changes

### `app/globals.css`
- `--container-max`: 72rem → 84rem
- `--home-section-heading-size`: ~12% clamp bump
- Shared container horizontal padding: 1.5rem → 1.75rem
- Hero: larger headline clamp, description (1.125rem), features (1rem), logo (38rem), reduced margin-left (3rem), increased section padding
- Certification bar: padding 2rem on heading/media
- About: eyebrow, body, lead paragraph scale; grid gap and section padding increased
- Buttons: 0.875rem font, ~10% padding bump
- Nav links and footer text: modest scale to 1rem / 1.2rem
- Partner carousel logo max-width: 13rem → 14rem
- Marketing main vertical padding increased

### Unchanged (per requirements)
- All `.award-banner__*` internal sizing (fonts, badge, padding)
- Utility bar font size (0.8125rem)
- Responsive breakpoint structure

## Verification

- `node --test tests/plan02-home-hero-design.test.mjs tests/plan02-home-conversion-journey.test.mjs` — pass
- `npm run typecheck` — pass

## Requirements covered

- LAYT-01: Site-wide 84rem container ✓
- LAYT-02: AwardBanner compact internals preserved ✓
- TYPE-01: Homepage typography scaled ✓
- TYPE-02: Homepage spacing/buttons scaled ✓
