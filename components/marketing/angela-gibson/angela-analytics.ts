"use client";

import { useCallback, useMemo } from "react";
import { trackMarketingEvent } from "../../../lib/analytics/track-marketing-event";
import { useCampaignSource } from "../../../lib/angela-gibson/use-campaign-source";

export type AngelaAnalyticsHandlers = {
  trackHeroAbrahams: () => void;
  trackHeroCobwiit: () => void;
  trackHeroBookAngela: () => void;
  trackStayConnectedSubmitted: () => void;
  trackAbrahamsCard: () => void;
  trackCobwiitCard: () => void;
  trackEveSpeaksCard: () => void;
  source: string | undefined;
};

export function useAngelaPageAnalytics(): AngelaAnalyticsHandlers {
  const source = useCampaignSource();

  const withSource = useCallback(
    (eventName: string) => {
      trackMarketingEvent(eventName, { src: source });
    },
    [source]
  );

  return useMemo(
    () => ({
      source,
      trackHeroAbrahams: () => withSource("hero_abrahams_clicked"),
      trackHeroCobwiit: () => withSource("hero_cobwiit_clicked"),
      trackHeroBookAngela: () => withSource("hero_book_angela_clicked"),
      trackStayConnectedSubmitted: () => withSource("stay_connected_submitted"),
      trackAbrahamsCard: () => withSource("abrahams_card_clicked"),
      trackCobwiitCard: () => withSource("cobwiit_card_clicked"),
      trackEveSpeaksCard: () => withSource("eve_speaks_card_clicked")
    }),
    [source, withSource]
  );
}
