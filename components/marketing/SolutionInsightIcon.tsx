"use client";

import { Award, Calendar, Eye, PlayCircle, type LucideProps } from "lucide-react";
import { PILLAR_ICON_STROKE_WIDTH } from "./pillarIconProps";

export type SolutionInsightIconName = "play-circle" | "calendar" | "eye" | "award";

type SolutionInsightIconProps = {
  name: SolutionInsightIconName;
  className?: string;
};

const iconProps: Pick<LucideProps, "strokeWidth" | "absoluteStrokeWidth" | "aria-hidden"> = {
  strokeWidth: PILLAR_ICON_STROKE_WIDTH,
  absoluteStrokeWidth: true,
  "aria-hidden": true
};

export function SolutionInsightIcon({ name, className = "solutions-insight__glyph" }: SolutionInsightIconProps) {
  const props = { ...iconProps, className };

  switch (name) {
    case "play-circle":
      return <PlayCircle {...props} />;
    case "calendar":
      return <Calendar {...props} />;
    case "eye":
      return <Eye {...props} />;
    case "award":
      return <Award {...props} />;
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}
