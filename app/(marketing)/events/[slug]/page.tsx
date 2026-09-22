import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EventRecordingPageContent } from "../../../../components/marketing/EventRecordingPageContent";
import { getEventBySlug, getEventRecordingSlugs } from "../../../../lib/content/get-event-by-slug";
import { loadMarketingContent } from "../../../../lib/content/load-content";
import { buildMarketingMetadata } from "../../../../lib/seo/metadata";
import { getEventRecordingPageSeo } from "../../../../lib/seo/page-seo";

export const dynamic = "force-static";

type EventRecordingPageProps = Readonly<{
  params: Promise<{
    slug: string;
  }>;
}>;

export async function generateStaticParams() {
  return getEventRecordingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: EventRecordingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const seo = getEventRecordingPageSeo(slug);

  if (!seo) {
    return {};
  }

  return buildMarketingMetadata(seo);
}

export default async function EventRecordingPage({ params }: EventRecordingPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event?.recording) {
    notFound();
  }

  const { eventsPage } = loadMarketingContent();

  return (
    <main id="main-content" className="marketing-main marketing-main--event-recording">
      <EventRecordingPageContent event={event} page={eventsPage} />
    </main>
  );
}
