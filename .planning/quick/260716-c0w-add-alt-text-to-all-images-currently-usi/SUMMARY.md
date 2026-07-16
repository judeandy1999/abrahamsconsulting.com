---
status: complete
quick_id: 260716-c0w
---

# Add alt text to all images with empty alt

Replaced every `alt=""` image with descriptive alt text, wiring existing content fields where available.

## Changes
- SEWP hero / overview: added alt strings on asset constants and removed decorative `aria-hidden` wrappers that hid those images
- SEWP + Contract Vehicles logos: use `logoAlt` / `badgeAlt` / `partnerLogoAlt` from content
- Home hero logo: `${site.name} logo`
- Partner carousel: `${logo.name} logo` (removed redundant `sr-only` name)
- YouTube facade poster: `${title} video thumbnail`

## Notes
No remaining `alt=""` matches in TSX components.
