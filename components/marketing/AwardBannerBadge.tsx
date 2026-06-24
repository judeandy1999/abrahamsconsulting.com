"use client";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

type AwardBannerBadgeProps = {
  className?: string;
};

export function AwardBannerBadge({ className }: AwardBannerBadgeProps) {
  return <EmojiEventsIcon className={className} fontSize="inherit" aria-hidden />;
}
