import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarketingMotionGroup, MarketingMotionItem } from "../../../../components/marketing/MarketingMotion";
import { JsonLdScript } from "../../../../components/seo/JsonLdScript";
import { loadMarketingContent } from "../../../../lib/content/load-content";
import { buildMarketingMetadata } from "../../../../lib/seo/metadata";
import { getServicePageSeo } from "../../../../lib/seo/page-seo";

export const dynamic = "force-static";

type ServiceDetailPageProps = Readonly<{
  params: Promise<{
    slug: string;
  }>;
}>;

export async function generateStaticParams() {
  const { services } = loadMarketingContent();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const seo = getServicePageSeo(slug);

  if (!seo) {
    return {};
  }

  return buildMarketingMetadata(seo);
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { services } = loadMarketingContent();
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main id="main-content" className="marketing-main">
      <MarketingMotionGroup className="marketing-main__inner">
        <JsonLdScript src={`/ld/services/${slug}/service`} />
        <JsonLdScript src={`/ld/services/${slug}/breadcrumb`} />
        <MarketingMotionItem>
          <h1>{service.title}</h1>
          <p>{service.summary}</p>
          <div className="marketing-main__actions">
            <Link href="/contact-us">{service.consultationCtaLabel}</Link>
            <Link href="/contracts">{service.procurementLinkText}</Link>
            <Link href="/services">Back to all services</Link>
            <Link href="/trust">Review trust credentials</Link>
          </div>
        </MarketingMotionItem>
      </MarketingMotionGroup>
    </main>
  );
}
