---
status: complete
quick_id: 260715-fli
---

# Restyle SEWP text statements as a table

Merged Official GWAC Identification Statement, About NASA SEWP VI, and Fair Opportunity Clause into one Topic/Details table under **Contract Statements**.

## Changes
- Added `NasaSewpViStatementsTableSection.tsx` with a semantic HTML table (Topic | Details)
- Wired in `NasaSewpViBody.tsx` in place of the three separate sections
- Replaced GWAC / Fair Opportunity / About SEWP CSS with `.sewp-vi-statements*` table styles (stacked rows on small screens)
- Removed unused section components

## Notes
Content schema fields for Fair Opportunity graphics remain (validation still passes); they are unused in the UI.
