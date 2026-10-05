import type { ExecutiveRecruitingPageContent } from "../../src/content/schema";

type IconName = ExecutiveRecruitingPageContent["executiveImpactSection"]["cards"][number]["icon"];

type ExecutiveRecruitingImpactIconProps = {
  name: IconName;
  className?: string;
};

export function ExecutiveRecruitingImpactIcon({ name, className }: ExecutiveRecruitingImpactIconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.65,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true
  };

  switch (name) {
    case "cio-placement":
      return (
        <svg {...common}>
          <path d="M6.75 16.25a3.25 3.25 0 0 1-.42-6.47A4.75 4.75 0 0 1 17.2 9.1a3.25 3.25 0 0 1 .05 6.4H6.75Z" />
          <path d="M9.25 14.75h5.5M10.25 14.75v-2.25M13.75 14.75v-2.25" />
          <path d="M12 7.75V6.25M9.75 8.5l-.9-.9M14.25 8.5l.9-.9" />
          <path d="M16.75 13.5 18.5 15.25M18.5 15.25v-2.75M18.5 15.25h-2.75" />
        </svg>
      );
    case "ciso-placement":
      return (
        <svg {...common}>
          <path d="M12 3.25 18.5 6.25v5.5c0 3.65-2.55 6.35-6.5 7.75-3.95-1.4-6.5-4.1-6.5-7.75v-5.5L12 3.25Z" />
          <rect x="10" y="10.25" width="4" height="4.5" rx="0.75" />
          <path d="M12 10.25V9.25a1.25 1.25 0 0 1 2.5 0V10.25" />
          <path d="M5.75 9.5a6.25 6.25 0 0 0 0 4M18.25 9.5a6.25 6.25 0 0 1 0 4" />
        </svg>
      );
    case "cto-hire":
      return (
        <svg {...common}>
          <circle cx="12" cy="5.75" r="1.65" />
          <circle cx="7.25" cy="11.25" r="1.35" />
          <circle cx="12" cy="11.25" r="1.35" />
          <circle cx="16.75" cy="11.25" r="1.35" />
          <circle cx="5.5" cy="16.75" r="1.15" />
          <circle cx="9.25" cy="16.75" r="1.15" />
          <circle cx="14.75" cy="16.75" r="1.15" />
          <circle cx="18.5" cy="16.75" r="1.15" />
          <path d="M12 7.4v1.35M12 12.6v1.35M7.25 12.6v1.35M16.75 12.6v1.35" />
          <path d="M9.8 6.35 7.8 9.35M14.2 6.35l2 3M8.6 12.6H6.65M15.4 12.6h1.95" />
          <path d="M19.25 6.5v5.5M19.25 6.5l2 2M19.25 12l2-2" />
        </svg>
      );
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}
