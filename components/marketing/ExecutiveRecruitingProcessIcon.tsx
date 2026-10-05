import type { ExecutiveRecruitingPageContent } from "../../src/content/schema";

type IconName = ExecutiveRecruitingPageContent["processSection"]["steps"][number]["icon"];

type ExecutiveRecruitingProcessIconProps = {
  name: IconName;
  className?: string;
};

export function ExecutiveRecruitingProcessIcon({ name, className }: ExecutiveRecruitingProcessIconProps) {
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
    case "discovery":
      return (
        <svg {...common}>
          <path d="M7.5 8.5h-.01M12 8.5h-.01M16.5 8.5h-.01M7 13.5c1.2 1.2 2.8 1.8 5 1.8s3.8-.6 5-1.8" />
          <path d="M6.5 5.5h11a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16V8a2.5 2.5 0 0 1 2.5-2.5Z" />
        </svg>
      );
    case "alignment":
      return (
        <svg {...common}>
          <path d="M7 4.5h10a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 18V6A1.5 1.5 0 0 1 7 4.5Z" />
          <path d="M8.5 9h7M8.5 12h7M8.5 15h4.5" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 5v2M12 17v2M5 12h2M17 12h2" />
        </svg>
      );
    case "shortlist":
      return (
        <svg {...common}>
          <path d="M8.5 11.25c1.66 0 3-1.45 3-3.25S10.16 4.75 8.5 4.75 5.5 6.2 5.5 8s1.34 3.25 3 3.25ZM15.5 11.25c1.66 0 3-1.45 3-3.25s-1.34-3.25-3-3.25-3 1.45-3 3.25 1.34 3.25 3 3.25Z" />
          <path d="M3.75 19.25c0-2.45 2.13-4.5 4.75-4.5h.5c1.2 0 2.3.45 3.1 1.2.8-.75 1.9-1.2 3.1-1.2h.5c2.62 0 4.75 2.05 4.75 4.5" />
        </svg>
      );
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}
