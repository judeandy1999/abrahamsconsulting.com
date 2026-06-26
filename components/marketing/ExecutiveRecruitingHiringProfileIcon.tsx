import { BarChart3, Clock3, Crosshair, Lock, Search, Shield, Target, Users, Waypoints } from "lucide-react";
import type { ExecutiveRecruitingPageContent } from "../../src/content/schema";

type TabIconName = ExecutiveRecruitingPageContent["hiringProfilesSection"]["profiles"][number]["tabIcon"];
type HighlightIconName =
  ExecutiveRecruitingPageContent["hiringProfilesSection"]["profiles"][number]["highlights"][number]["icon"];

type ExecutiveRecruitingHiringProfileIconProps = {
  name: TabIconName | HighlightIconName;
  className?: string;
};

const iconProps = {
  strokeWidth: 1.75,
  "aria-hidden": true as const
};

export function ExecutiveRecruitingHiringProfileIcon({ name, className }: ExecutiveRecruitingHiringProfileIconProps) {
  switch (name) {
    case "advisory":
      return <Users className={className} {...iconProps} />;
    case "retained":
      return <Search className={className} {...iconProps} />;
    case "confidential":
      return <Lock className={className} {...iconProps} />;
    case "interim":
      return <Waypoints className={className} {...iconProps} />;
    case "users":
      return <Users className={className} {...iconProps} />;
    case "target":
      return <Target className={className} {...iconProps} />;
    case "chart":
      return <BarChart3 className={className} {...iconProps} />;
    case "search":
      return <Search className={className} {...iconProps} />;
    case "shield":
      return <Shield className={className} {...iconProps} />;
    case "lock":
      return <Lock className={className} {...iconProps} />;
    case "clock":
      return <Clock3 className={className} {...iconProps} />;
    case "precision":
      return <Crosshair className={className} {...iconProps} />;
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}
