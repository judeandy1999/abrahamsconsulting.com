"use client";

import {
  Cloud,
  Database,
  Headphones,
  Network,
  Package,
  Scale,
  Server,
  Shield,
  Sparkles,
  Users
} from "lucide-react";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { pillarIconProps } from "./pillarIconProps";

type CompetencyIconName = NasaSewpViPageContent["coreCompetencies"]["items"][number]["icon"];

type NasaSewpViCompetencyIconProps = {
  name: CompetencyIconName;
};

export function NasaSewpViCompetencyIcon({ name }: NasaSewpViCompetencyIconProps) {
  switch (name) {
    case "infrastructure":
      return <Server {...pillarIconProps} />;
    case "cybersecurity":
      return <Shield {...pillarIconProps} />;
    case "cloud":
      return <Cloud {...pillarIconProps} />;
    case "ai":
      return <Sparkles {...pillarIconProps} />;
    case "staffing":
      return <Users {...pillarIconProps} />;
    case "network":
      return <Network {...pillarIconProps} />;
    case "storage":
      return <Database {...pillarIconProps} />;
    case "lifecycle":
      return <Package {...pillarIconProps} />;
    case "compliance":
      return <Scale {...pillarIconProps} />;
    case "helpdesk":
      return <Headphones {...pillarIconProps} />;
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}
