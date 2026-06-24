import type { Metadata } from "next";
import { MarketingMotionGroup, MarketingMotionItem } from "../../../components/marketing/MarketingMotion";
import { buildMarketingMetadata } from "../../../lib/seo/metadata";
import { getStaticPageSeo } from "../../../lib/seo/page-seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata(getStaticPageSeo("/about")!);

export default function AboutPage() {
  return (
    <main id="main-content" className="marketing-main">
      <MarketingMotionGroup className="marketing-main__inner">
        <MarketingMotionItem>
          <h1>About Abrahams Consulting</h1>
          <p>
            Our team partners with public and private sector organizations to improve operational outcomes through tailored
            strategy, staffing, and contract alignment.
          </p>
        </MarketingMotionItem>
      </MarketingMotionGroup>
    </main>
  );
}
