type ExecutiveRecruitingFeatureIconName = "talent" | "vetting" | "leadership" | "impact";

type ExecutiveRecruitingFeatureIconProps = {
  name: ExecutiveRecruitingFeatureIconName;
};

export function ExecutiveRecruitingFeatureIcon({ name }: ExecutiveRecruitingFeatureIconProps) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true
  };

  switch (name) {
    case "talent":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M6 20c0-3.2 2.6-5.5 6-5.5s6 2.3 6 5.5" />
        </svg>
      );
    case "vetting":
      return (
        <svg {...common}>
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="M8 15v-4M12 15V8M16 15v-6" />
        </svg>
      );
    case "leadership":
      return (
        <svg {...common}>
          <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" />
        </svg>
      );
    case "impact":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="4" />
          <path d="M8.5 14.5 10 18l2-1 2 1 1.5-3.5" />
          <path d="M9 22h6" />
        </svg>
      );
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}
