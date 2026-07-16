---
status: complete
quick_id: 260716-by7
---

# Add Program Manager Contact and External Resources to statements table

Added Program Manager Contact Information and External Resources as rows 4–5 in the Contract Statements Topic/Details table.

## Changes
- Extended `NasaSewpViStatementsTableSection.tsx` with PM contact details (phone/email links) and external resource links
- Wired new props in `NasaSewpViBody.tsx`; removed standalone PM and External Resources sections
- Added `.sewp-vi-statements__*` styles for meta rows, profile, and resource links
- Removed unused `NasaSewpViProgramManagerContactSection`, `NasaSewpViExternalResourceLinksSection`, and `NasaSewpViProgramManagerIcon`
- Updated `NASA-SEWP-VI-Page-Content.md` to reflect the merged table layout

## Notes
Help callout copy remains in content schema but is not rendered in the table (same pattern as unused Fair Opportunity graphics).
