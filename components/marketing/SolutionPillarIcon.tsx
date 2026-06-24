"use client";

import { Brain, ClipboardCheck, Cloud, Shield, Users } from "lucide-react";
import { pillarIconProps } from "./pillarIconProps";

type SolutionPillarIconName = "cybersecurity" | "cloud" | "procurement" | "ai" | "staffing";

type SolutionPillarIconProps = {
  name: SolutionPillarIconName;
};

export function SolutionPillarIcon({ name }: SolutionPillarIconProps) {
  switch (name) {
    case "cybersecurity":
      return <Shield {...pillarIconProps} />;
    case "cloud":
      return <Cloud {...pillarIconProps} />;
    case "procurement":
      return <ClipboardCheck {...pillarIconProps} />;
    case "ai":
      return <Brain {...pillarIconProps} />;
    case "staffing":
      return <Users {...pillarIconProps} />;
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}

export type { SolutionPillarIconName };
