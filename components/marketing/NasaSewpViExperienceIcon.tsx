"use client";

import { Brain, Building2, GraduationCap, Network, Scale, UserCog } from "lucide-react";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { pillarIconProps } from "./pillarIconProps";

type ExperienceIconName = NasaSewpViPageContent["pastPerformance"]["items"][number]["icon"];

type NasaSewpViExperienceIconProps = {
  name: ExperienceIconName;
};

export function NasaSewpViExperienceIcon({ name }: NasaSewpViExperienceIconProps) {
  switch (name) {
    case "government-building":
      return <Building2 {...pillarIconProps} />;
    case "network":
      return <Network {...pillarIconProps} />;
    case "ai-brain":
      return <Brain {...pillarIconProps} />;
    case "managed-services":
      return <UserCog {...pillarIconProps} />;
    case "education":
      return <GraduationCap {...pillarIconProps} />;
    case "justice":
      return <Scale {...pillarIconProps} />;
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}
