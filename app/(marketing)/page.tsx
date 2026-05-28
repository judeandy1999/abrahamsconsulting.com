import type { Metadata } from "next";
import Link from "next/link";
import { loadMarketingContent } from "../../lib/content/load-content";
import { buildMarketingMetadata } from "../../lib/seo/metadata";
import { getStaticPageSeo } from "../../lib/seo/page-seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata(getStaticPageSeo("/")!);

export default function HomePage() {
  const { site, services, contracts } = loadMarketingContent();
  const featuredServices = services.slice(0, 2);
  const featuredContracts = contracts.slice(0, 2);

  return (
    <main id="main-content" style={{ margin: "0 auto", maxWidth: "64rem", padding: "3rem 1.5rem" }}>
      <section id="home-value-proposition" style={{ marginBottom: "2rem" }}>
        <h1 style={{ marginBottom: "1rem" }}>{site.name}</h1>
        <p style={{ marginBottom: "1.25rem", lineHeight: 1.6 }}>{site.tagline}</p>
        <p style={{ marginBottom: "1.5rem", lineHeight: 1.6 }}>
          We help enterprise and government teams align consulting strategy, strategic staffing, and procurement-ready
          execution for mission-critical outcomes.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/consultation">{site.consultationCta.label}</Link>
          <Link href="/services">Explore Services</Link>
          <Link href="/contracts">View Contract Vehicles</Link>
          <Link href="/trust">Review Trust Credentials</Link>
        </div>
      </section>

      <section id="home-offer-summary" aria-label="Offer summary" style={{ lineHeight: 1.7 }}>
        <h2 style={{ marginBottom: "0.75rem" }}>How we support delivery teams</h2>
        <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.25rem" }}>
          {featuredServices.map((service) => (
            <li key={service.slug}>
              <strong>{service.title}:</strong> {service.summary}
            </li>
          ))}
        </ul>
        <h3 style={{ marginBottom: "0.75rem" }}>Procurement pathways</h3>
        <ul style={{ paddingLeft: "1.25rem" }}>
          {featuredContracts.map((contract) => (
            <li key={contract.code}>
              <strong>{contract.name}:</strong> {contract.description}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
