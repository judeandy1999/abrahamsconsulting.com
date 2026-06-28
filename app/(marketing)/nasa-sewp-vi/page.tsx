import type { Metadata } from "next";
import { NasaSewpViBody } from "../../../components/marketing/NasaSewpViBody";
import { NasaSewpViHero } from "../../../components/marketing/NasaSewpViHero";
import { loadMarketingContent } from "../../../lib/content/load-content";
import { buildMarketingMetadata } from "../../../lib/seo/metadata";
import { getStaticPageSeo } from "../../../lib/seo/page-seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata(getStaticPageSeo("/nasa-sewp-vi")!);

export default function NasaSewpViPage() {
  const { nasaSewpViPage } = loadMarketingContent();
  const { hero, ...bodyContent } = nasaSewpViPage;

  return (
    <main id="main-content" className="marketing-main marketing-main--sewp-vi">
      <NasaSewpViHero hero={hero} capabilityStatementHref={nasaSewpViPage.resources.capabilityStatement.href} />
      <NasaSewpViBody content={bodyContent} />
    </main>
  );
}
