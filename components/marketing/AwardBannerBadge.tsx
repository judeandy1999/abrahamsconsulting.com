import { Trophy } from "lucide-react";
import { pillarIconProps } from "./pillarIconProps";

type AwardBannerBadgeProps = {
  className?: string;
};

export function AwardBannerBadge({ className }: AwardBannerBadgeProps) {
  return <Trophy {...pillarIconProps} className={className} aria-hidden />;
}
