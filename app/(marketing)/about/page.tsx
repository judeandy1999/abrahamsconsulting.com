import type { Metadata } from "next";
import { buildMarketingMetadata } from "../../../lib/seo/metadata";
import { getStaticPageSeo } from "../../../lib/seo/page-seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata(getStaticPageSeo("/about")!);

export default function AboutPage() {
  return (
    <main id="main-content" style={{ margin: "0 auto", maxWidth: "64rem", padding: "3rem 1.5rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>About Abrahams Consulting</h1>
      <p style={{ lineHeight: 1.6 }}>
        Our team partners with public and private sector organizations to improve operational outcomes through tailored
        strategy, staffing, and contract alignment.
      </p>
    </main>
  );
}
