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
    <main id="main-content" className="marketing-main">
      <div className="marketing-main__inner">
        <h1>Services</h1>
        <p>
          We provide consulting, strategic staffing, and delivery support for teams operating in regulated enterprise and
          government environments.
        </p>
        <ul>
          {services.map((service) => (
            <li key={service.slug}>
              <h2>{service.title}</h2>
              <p>{service.summary}</p>
              <Link href={`/services/${service.slug}`}>{service.capabilityLinkText}</Link>
              <span> · </span>
              <Link href="/contracts">{service.procurementLinkText}</Link>
            </li>
          ))}
        </ul>
        <p>
          Validate credentials on the <Link href="/trust">trust page</Link> or{" "}
          <Link href="/consultation">request a consultation</Link> to align capabilities to your mission.
        </p>
      </div>
    </main>
  );
}
