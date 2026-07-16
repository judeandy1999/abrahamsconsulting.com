"use client";

import type { NasaSewpViPageContent } from "../../src/content/schema";

type HighlightIconName = NasaSewpViPageContent["aboutCompany"]["highlights"][number]["icon"];

type NasaSewpViAboutHighlightIconProps = {
  name: HighlightIconName;
};

export function NasaSewpViAboutHighlightIcon({ name }: NasaSewpViAboutHighlightIconProps) {
  switch (name) {
    case "mwbe":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="8.25" r="3.25" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6.25 18.75c.95-2.85 3.15-4.5 5.75-4.5s4.8 1.65 5.75 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path
            d="M16.75 5.5 18 3.75l1.25 1.75L21 6.75l-1.75 1.25L18 9.75l-1.25-1.75L15 6.75l1.75-1.25Z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "established":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4.75" y="6.25" width="14.5" height="13" rx="1.75" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 4.75v3M16 4.75v3M4.75 10h14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M9.25 13.25h2.25M9.25 16h5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "federal-partner":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5.25 20.25V9.75l6.75-4 6.75 4v10.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M9.75 20.25v-5.5h4.5v5.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5.25 12.25h13.5M12 5.75v3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10.25 9.25h3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}
