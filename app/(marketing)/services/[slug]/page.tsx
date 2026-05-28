import Link from "next/link";
import { notFound } from "next/navigation";
import { loadMarketingContent } from "../../../../lib/content/load-content";

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

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { services } = loadMarketingContent();
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main style={{ margin: "0 auto", maxWidth: "64rem", padding: "3rem 1.5rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>{service.title}</h1>
      <p style={{ lineHeight: 1.6, marginBottom: "1.5rem" }}>{service.summary}</p>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Link href="/consultation">{service.consultationCtaLabel}</Link>
        <Link href="/contracts">{service.procurementLinkText}</Link>
        <Link href="/services">Back to all services</Link>
      </div>
    </main>
  );
}
