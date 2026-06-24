import { Crosshair, Handshake, ShieldCheck } from "lucide-react";
import type { ExecutiveRecruitingPageContent } from "../../src/content/schema";

type HighlightIconName = ExecutiveRecruitingPageContent["hiringProfileCta"]["highlights"][number]["icon"];

type ExecutiveRecruitingCtaHighlightIconProps = {
  name: HighlightIconName;
  className?: string;
};

const iconProps = {
  strokeWidth: 1.75,
  "aria-hidden": true as const
};

export function ExecutiveRecruitingCtaHighlightIcon({ name, className }: ExecutiveRecruitingCtaHighlightIconProps) {
  switch (name) {
    case "confidential":
      return <ShieldCheck className={className} {...iconProps} />;
    case "precision":
      return <Crosshair className={className} {...iconProps} />;
    case "partnership":
      return <Handshake className={className} {...iconProps} />;
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}
