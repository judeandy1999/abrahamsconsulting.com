"use client";

import {
  Cloud,
  HardDrive,
  LayoutGrid,
  MessageCircle,
  Network,
  Settings,
  Shield,
  Smartphone,
  type LucideProps
} from "lucide-react";
import { PILLAR_ICON_STROKE_WIDTH } from "./pillarIconProps";

export type SolutionSectionIconName =
  | "shield"
  | "network"
  | "hard-drive"
  | "layout-grid"
  | "cloud"
  | "settings"
  | "messages"
  | "smartphone";

type SolutionSectionIconProps = {
  name: SolutionSectionIconName;
  className?: string;
};

const iconProps: Pick<LucideProps, "strokeWidth" | "absoluteStrokeWidth" | "aria-hidden"> = {
  strokeWidth: PILLAR_ICON_STROKE_WIDTH,
  absoluteStrokeWidth: true,
  "aria-hidden": true
};

export function SolutionSectionIcon({ name, className = "solution-section__glyph" }: SolutionSectionIconProps) {
  const props = { ...iconProps, className };

  switch (name) {
    case "shield":
      return <Shield {...props} />;
    case "network":
      return <Network {...props} />;
    case "hard-drive":
      return <HardDrive {...props} />;
    case "layout-grid":
      return <LayoutGrid {...props} />;
    case "cloud":
      return <Cloud {...props} />;
    case "settings":
      return <Settings {...props} />;
    case "messages":
      return <MessageCircle {...props} />;
    case "smartphone":
      return <Smartphone {...props} />;
    default: {
      const _exhaustive: never = name;
      return _exhaustive;
    }
  }
}
