import { launchPageSeoContent } from "../../src/content/seo";
import { loadMarketingContent } from "../content/load-content";
import type { MarketingMetadataOptions } from "./metadata";

const staticPageSeoByPath = new Map<string, (typeof launchPageSeoContent)[number]>(
  launchPageSeoContent.map((entry) => [entry.path, entry])
);

export function getStaticPageSeo(path: string): MarketingMetadataOptions | undefined {
  const entry = staticPageSeoByPath.get(path);

  if (!entry) {
    return undefined;
  }

  return {
    title: entry.title,
    description: entry.description,
    path: entry.path
  };
}

export function getServicePageSeo(slug: string): MarketingMetadataOptions | undefined {
  const { services } = loadMarketingContent();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return undefined;
  }

  return {
    title: `${service.title} | Abrahams Consulting`,
    description: service.summary,
    path: `/services/${service.slug}`
  };
}
