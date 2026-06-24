"use client";

import { Award, Building2, Target, Users } from "lucide-react";
import { PILLAR_ICON_STROKE_WIDTH } from "./pillarIconProps";

type WhyChooseStatIconName = "experience" | "government-clients" | "technology-partners" | "client-success";

type WhyChooseStatIconProps = {
  name: WhyChooseStatIconName;
};

const iconProps = {
  className: "home-why-choose__stat-glyph",
  strokeWidth: PILLAR_ICON_STROKE_WIDTH,
  absoluteStrokeWidth: true,
  "aria-hidden": true as const
};

export function WhyChooseStatIcon({ name }: WhyChooseStatIconProps) {
  switch (name) {
    case "experience":
      return <Award {...iconProps} />;
    case "government-clients":
      return <Building2 {...iconProps} />;
    case "technology-partners":
      return <Users {...iconProps} />;
    case "client-success":
      return <Target {...iconProps} />;
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}

export type { WhyChooseStatIconName };
