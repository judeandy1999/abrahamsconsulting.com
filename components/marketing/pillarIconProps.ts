import type { LucideProps } from "lucide-react";

export const PILLAR_ICON_STROKE_WIDTH = 1.25;

export const pillarIconProps: Pick<LucideProps, "className" | "strokeWidth" | "absoluteStrokeWidth" | "aria-hidden"> = {
  className: "home-pillar__glyph",
  strokeWidth: PILLAR_ICON_STROKE_WIDTH,
  absoluteStrokeWidth: true,
  "aria-hidden": true
};
