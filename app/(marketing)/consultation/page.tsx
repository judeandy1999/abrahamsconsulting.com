import type { Metadata } from "next";
import Link from "next/link";
import { loadMarketingContent } from "../../../lib/content/load-content";
import { buildMarketingMetadata } from "../../../lib/seo/metadata";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata({
  title: "Consultation",
  description: "Start a consultation with Abrahams Consulting to align services and contract vehicles to your mission needs.",
  path: "/consultation"
});

export default function ConsultationPage() {
  const { site } = loadMarketingContent();

  return (
    <main style={{ margin: "0 auto", maxWidth: "64rem", padding: "3rem 1.5rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>{site.consultationCta.label}</h1>
      <p style={{ lineHeight: 1.6, marginBottom: "1.5rem" }}>
        Share your timeline, delivery priorities, and procurement context so we can recommend the right consulting or
        staffing path.
      </p>
      <section aria-label="Consultation next steps" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ marginBottom: "0.75rem" }}>Prepare before we connect</h2>
        <ul style={{ lineHeight: 1.7, paddingLeft: "1.25rem" }}>
          <li>Outline the mission outcomes and delivery constraints your team is managing.</li>
          <li>List the capability areas where you need consulting or staffing support first.</li>
          <li>Identify contract vehicles your organization already prefers or requires.</li>
        </ul>
      </section>
      <p style={{ lineHeight: 1.6 }}>
        Need more context first? Explore <Link href="/services">service capabilities</Link> or review{" "}
        <Link href="/contracts">contract vehicle pathways</Link>.
      </p>
    </main>
  );
}
