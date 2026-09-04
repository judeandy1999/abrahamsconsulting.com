import { EventSplashModal } from "./EventSplashModal";
import type { EventsPageContent } from "../../src/content/schema";

type MarketingEventSplashProps = {
  splash: EventsPageContent["splash"];
};

export function MarketingEventSplash({ splash }: MarketingEventSplashProps) {
  return <EventSplashModal splash={splash} />;
}
