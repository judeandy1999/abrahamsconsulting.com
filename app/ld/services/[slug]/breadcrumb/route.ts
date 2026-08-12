import { loadMarketingContent } from "../../../../../lib/content/load-content";
import { buildServiceDetailBreadcrumbs } from "../../../../../lib/seo/breadcrumbs";
import { buildBreadcrumbJsonLd } from "../../../../../lib/seo/json-ld";
import { jsonLdResponse } from "../../../../../lib/seo/json-ld-response";

export const dynamic = "force-static";

type RouteContext = Readonly<{
  params: Promise<{ slug: string }>;
}>;

export async function generateStaticParams() {
  const { services } = loadMarketingContent();
  return services.map((service) => ({ slug: service.slug }));
}

export async function GET(_request: Request, context: RouteContext) {
  const { slug } = await context.params;
  const { services } = loadMarketingContent();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return new Response("Not found", { status: 404 });
  }

  const breadcrumbs = buildServiceDetailBreadcrumbs(service.title, service.slug);
  return jsonLdResponse(buildBreadcrumbJsonLd(breadcrumbs));
}
