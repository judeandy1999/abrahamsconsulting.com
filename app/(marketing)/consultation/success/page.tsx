import type { Metadata } from "next";
import Link from "next/link";
import { buildMarketingMetadata } from "../../../../lib/seo/metadata";
import { getStaticPageSeo } from "../../../../lib/seo/page-seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata(getStaticPageSeo("/consultation/success")!);

export default function ConsultationSuccessPage() {
  return (
    <main id="main-content" className="marketing-main">
      <div className="marketing-main__inner">
        <h1>Submission received</h1>
        <h2>What happens next</h2>
        <p>
          Thank you. Your consultation request was submitted successfully and routed to our team for review.
        </p>
        <p style={{ marginBottom: 0 }}>
          <Link href="/consultation">Submit another consultation request</Link>, return to the{" "}
          <Link href="/">home page</Link>, or review <Link href="/trust">trust credentials</Link> while you wait for
          follow-up.
        </p>
      </div>
    </main>
  );
}
