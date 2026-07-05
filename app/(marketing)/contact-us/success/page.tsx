import type { Metadata } from "next";
import Link from "next/link";
import { MarketingMotionGroup, MarketingMotionItem } from "../../../../components/marketing/MarketingMotion";
import { buildMarketingMetadata } from "../../../../lib/seo/metadata";
import { getStaticPageSeo } from "../../../../lib/seo/page-seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata(getStaticPageSeo("/contact-us/success")!);

export default function ContactUsSuccessPage() {
  return (
    <main id="main-content" className="marketing-main">
      <MarketingMotionGroup className="marketing-main__inner">
        <MarketingMotionItem>
          <h1>Submission received</h1>
          <h2>What happens next</h2>
          <p>
            Thank you. Your message was submitted successfully and routed to our team for review.
          </p>
          <p style={{ marginBottom: 0 }}>
            <Link href="/contact-us">Send another message</Link>, return to the{" "}
            <Link href="/">home page</Link>, or review <Link href="/trust">trust credentials</Link> while you wait for
            follow-up.
          </p>
        </MarketingMotionItem>
      </MarketingMotionGroup>
    </main>
  );
}
