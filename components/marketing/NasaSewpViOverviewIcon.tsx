"use client";

import type { NasaSewpViPageContent } from "../../src/content/schema";

type OverviewIconName = NasaSewpViPageContent["contractOverview"]["items"][number]["icon"];

type NasaSewpViOverviewIconProps = {
  name: OverviewIconName;
};

export function NasaSewpViOverviewIcon({ name }: NasaSewpViOverviewIconProps) {
  switch (name) {
    case "document":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M8 3.75h5.17L17 7.58V20.25A1.75 1.75 0 0 1 15.25 22H8.75A1.75 1.75 0 0 1 7 20.25V5.5A1.75 1.75 0 0 1 8.75 3.75H8Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M13 3.75V8.25H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "tag":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4.75 12.75V6.5A1.75 1.75 0 0 1 6.5 4.75H12.75L19.25 11.25 12.75 17.75 6.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="9.25" cy="9.25" r="1.1" fill="currentColor" />
        </svg>
      );
    case "ceiling":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 7.5v8.25M9.75 12h4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "calendar":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4.75" y="6.25" width="14.5" height="13" rx="1.75" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 4.75v3M16 4.75v3M4.75 10h14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "award":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="9" r="4.25" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8.5 13.25 7 20l5-2.5L17 20l-1.5-6.75" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "customers":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="9" cy="9.5" r="2.75" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="16.5" cy="10.25" r="2.25" stroke="currentColor" strokeWidth="1.5" />
          <path d="M4.75 18.5c.65-2.45 2.45-3.75 4.25-3.75s3.6 1.3 4.25 3.75M13.75 18.5c.45-1.95 1.65-3 3.5-3 1.2 0 2.25.55 3 1.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "uei":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="5.25" y="4.75" width="13.5" height="14.5" rx="1.75" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="10" r="2.25" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8.25 16.25c.85-1.45 2.2-2.25 3.75-2.25s2.9.8 3.75 2.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "cage":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5.25 20.25V9.5l6.75-4.25 6.75 4.25v10.75" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M9.5 20.25v-6h5v6M5.25 12.25h13.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "business-size":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="8.25" r="3.25" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6.25 19.25c.95-2.85 3.15-4.5 5.75-4.5s4.8 1.65 5.75 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "founded":
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 3.25c2.35 2.55 3.75 5.85 3.75 9.25a3.75 3.75 0 1 1-7.5 0c0-3.4 1.4-6.7 3.75-9.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M9.25 16.75h5.5M12 12.5V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8.5 20h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}
