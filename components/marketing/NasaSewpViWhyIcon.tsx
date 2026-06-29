"use client";

import type { NasaSewpViPageContent } from "../../src/content/schema";

type WhyIconName = NasaSewpViPageContent["whyChoose"]["items"][number]["icon"];

type NasaSewpViWhyIconProps = {
  name: WhyIconName;
};

export function NasaSewpViWhyIcon({ name }: NasaSewpViWhyIconProps) {
  switch (name) {
    case "handshake":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M8.25 11.25 5.5 8.5a2.12 2.12 0 0 1 3-3L11 8M13 10l6.75-2.25a2.12 2.12 0 0 1 2.7 2.7L16.5 13.5M10.5 13.5 9 15l-1.5 2.25a1.5 1.5 0 0 0 2.12 2.12L12 18.75M13.5 12l3.75 3.75a1.5 1.5 0 0 1-2.12 2.12L12.75 16.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "wosb":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="9" r="3.25" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6.25 18.75c.95-2.85 3.15-4.5 5.75-4.5s4.8 1.65 5.75 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path
            d="M16.75 5.5 18 3.75l1.25 1.75L21 6.75l-1.75 1.25L18 9.75l-1.25-1.75L15 6.75l1.75-1.25Z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "experience":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4.75" y="6.25" width="14.5" height="13" rx="1.75" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 4.75v3M16 4.75v3M4.75 10h14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "iso":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 4.25 16.75 6.5V11.5c0 3.15-2.05 5.95-4.75 7-2.7-1.05-4.75-3.85-4.75-7V6.5L12 4.25Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="m9.5 12 1.5 1.5 3.5-3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "ai":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="5.25" y="5.25" width="13.5" height="13.5" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9.5 9.5h.01M14.5 9.5h.01M9.5 14.5h.01M14.5 14.5h.01M12 12h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M8.25 12h7.5M12 8.25v7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "federal":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5.25 20.25V9.75l6.75-4 6.75 4v10.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M9.75 20.25v-5.5h4.5v5.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5.25 12.25h13.5M12 5.75v3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}
