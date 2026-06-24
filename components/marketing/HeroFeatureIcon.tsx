type HeroFeatureIconName = "shield" | "document" | "lock" | "people";

type HeroFeatureIconProps = {
  name: HeroFeatureIconName;
};

export function HeroFeatureIcon({ name }: HeroFeatureIconProps) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true
  };

  switch (name) {
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" />
        </svg>
      );
    case "document":
      return (
        <svg {...common}>
          <path d="M8 3h6l4 4v14H8V3Z" />
          <path d="M14 3v4h4" />
          <path d="M10 13h6M10 17h6" />
        </svg>
      );
    case "lock":
      return (
        <svg {...common}>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        </svg>
      );
    case "people":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M4 20c0-3 2.2-5 5-5s5 2 5 5M14 20c0-2.2 1.6-4 3.5-4.2" />
        </svg>
      );
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}

// Re-export for type alignment with content schema
export type { HeroFeatureIconName };
