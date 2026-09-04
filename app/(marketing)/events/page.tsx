import type { Metadata } from "next";
import { EventsPageContent } from "../../../components/marketing/EventsPageContent";
import { loadMarketingContent } from "../../../lib/content/load-content";
import { buildMarketingMetadata } from "../../../lib/seo/metadata";
import { getStaticPageSeo } from "../../../lib/seo/page-seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata(getStaticPageSeo("/events")!);

export default function EventsPage() {
  const { eventsPage } = loadMarketingContent();

  return (
    <main id="main-content" className="marketing-main marketing-main--events">
      <EventsPageContent content={eventsPage} />
    </main>
  );
}
