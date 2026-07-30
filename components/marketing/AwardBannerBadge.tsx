import { Trophy } from "lucide-react";
import { pillarIconProps } from "./pillarIconProps";

type AwardBannerBadgeProps = {
  className?: string;
};

export function AwardBannerBadge({ className }: AwardBannerBadgeProps) {
  return (
    <Trophy
      {...pillarIconProps}
      className={["home-pillar__glyph", className].filter(Boolean).join(" ")}
      aria-hidden
    />
  );
}
