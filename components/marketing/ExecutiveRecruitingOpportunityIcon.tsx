import type { ExecutiveRecruitingPageContent } from "../../src/content/schema";

type IconName = ExecutiveRecruitingPageContent["executiveOpportunitiesSection"]["opportunities"][number]["icon"];

type ExecutiveRecruitingOpportunityIconProps = {
  name: IconName;
  className?: string;
};

export function ExecutiveRecruitingOpportunityIcon({ name, className }: ExecutiveRecruitingOpportunityIconProps) {
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
    case "financial-services":
      return (
        <svg {...common}>
          <path
            d="M4.5 20.25V9.75L12 4.5l7.5 5.25v10.5H4.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M9.75 20.25v-6h4.5v6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "fintech":
      return (
        <svg {...common}>
          <rect x="5" y="5" width="14" height="14" rx="2" />
          <path d="M9 9h6M9 12h6M9 15h4" />
        </svg>
      );
    case "healthcare":
      return (
        <svg {...common}>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
      );
    case "engineering-growth":
      return (
        <svg {...common}>
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="M8 15v-4M12 15V8M16 15v-6" />
        </svg>
      );
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}
