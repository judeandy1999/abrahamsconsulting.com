import type { ExecutiveRecruitingPageContent } from "../../src/content/schema";

type IconName = ExecutiveRecruitingPageContent["whoThisIsForSection"]["items"][number]["icon"];

type ExecutiveRecruitingWhoThisIsForIconProps = {
  name: IconName;
  className?: string;
};

export function ExecutiveRecruitingWhoThisIsForIcon({ name, className }: ExecutiveRecruitingWhoThisIsForIconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true
  };

  switch (name) {
    case "ceos":
      return (
        <svg {...common}>
          <path d="M8.5 11.25c1.66 0 3-1.45 3-3.25S10.16 4.75 8.5 4.75 5.5 6.2 5.5 8s1.34 3.25 3 3.25ZM15.5 11.25c1.66 0 3-1.45 3-3.25s-1.34-3.25-3-3.25-3 1.45-3 3.25 1.34 3.25 3 3.25Z" />
          <path d="M3.75 19.25c0-2.45 2.13-4.5 4.75-4.5h.5c1.2 0 2.3.45 3.1 1.2.8-.75 1.9-1.2 3.1-1.2h.5c2.62 0 4.75 2.05 4.75 4.5" />
        </svg>
      );
    case "cios":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      );
    case "ctos":
      return (
        <svg {...common}>
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="M8 15v-4M12 15V8M16 15v-6" />
        </svg>
      );
    case "boards":
      return (
        <svg {...common}>
          <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" />
        </svg>
      );
    case "confidential-transitions":
      return (
        <svg {...common}>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
      );
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}
