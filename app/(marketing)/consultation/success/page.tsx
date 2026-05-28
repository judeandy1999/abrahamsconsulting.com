import type { Metadata } from "next";
import Link from "next/link";
import { buildMarketingMetadata } from "../../../../lib/seo/metadata";
import { getStaticPageSeo } from "../../../../lib/seo/page-seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata(getStaticPageSeo("/consultation/success")!);

export default function ConsultationSuccessPage() {
  return (
    <main id="main-content" style={{ margin: "0 auto", maxWidth: "64rem", padding: "3rem 1.5rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>Submission received</h1>
      <p style={{ lineHeight: 1.6, marginBottom: "1rem" }}>
        Thank you. Your consultation request was submitted successfully and routed to our team for review.
      </p>
      <p style={{ lineHeight: 1.6 }}>
        Return to the <Link href="/">home page</Link> or review <Link href="/trust">trust credentials</Link> while you
        wait for follow-up.
      </p>
    </main>
  );
}
