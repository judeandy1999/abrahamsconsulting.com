import type { Metadata } from "next";
import Link from "next/link";
import { loadMarketingContent } from "../../../lib/content/load-content";
import { buildMarketingMetadata } from "../../../lib/seo/metadata";
import { getStaticPageSeo } from "../../../lib/seo/page-seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata(getStaticPageSeo("/services")!);

export default function ServicesPage() {
  const { services } = loadMarketingContent();

  return (
    <main id="main-content" style={{ margin: "0 auto", maxWidth: "64rem", padding: "3rem 1.5rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>Services</h1>
      <p style={{ lineHeight: 1.6, marginBottom: "1.5rem" }}>
        We provide consulting, strategic staffing, and delivery support for teams operating in regulated enterprise and
        government environments.
      </p>
      <ul style={{ lineHeight: 1.7, paddingLeft: "1.25rem" }}>
        {services.map((service) => (
          <li key={service.slug} style={{ marginBottom: "1rem" }}>
            <h2 style={{ marginBottom: "0.5rem" }}>{service.title}</h2>
            <p style={{ marginBottom: "0.5rem" }}>{service.summary}</p>
            <Link href={`/services/${service.slug}`}>{service.capabilityLinkText}</Link>
            <span> · </span>
            <Link href="/contracts">{service.procurementLinkText}</Link>
          </li>
        ))}
      </ul>
      <p style={{ lineHeight: 1.6, marginTop: "1.5rem" }}>
        Validate credentials on the <Link href="/trust">trust page</Link> or{" "}
        <Link href="/consultation">request a consultation</Link> to align capabilities to your mission.
      </p>
    </main>
  );
}
