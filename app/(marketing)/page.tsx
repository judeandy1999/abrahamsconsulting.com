import type { Metadata } from "next";
import { buildMarketingMetadata } from "../../lib/seo/metadata";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata({
  title: "Abrahams Consulting",
  description: "Strategic consulting and staffing services for enterprise and government teams.",
  path: "/"
});

export default function HomePage() {
  return (
    <main style={{ margin: "0 auto", maxWidth: "64rem", padding: "3rem 1.5rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>Abrahams Consulting</h1>
      <p style={{ marginBottom: "1.5rem", lineHeight: 1.6 }}>
        We help enterprise and government teams deliver compliant, outcomes-focused consulting and staffing programs.
      </p>
    </main>
  );
}
