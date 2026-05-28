import type { ServiceItem } from "../../src/content/schema";
import type { SiteContent } from "../../src/content/schema";
import type { BreadcrumbItem } from "./breadcrumbs";
import { getSiteUrl } from "./metadata";

function absoluteUrl(path: string): string {
  return new URL(path, getSiteUrl()).toString();
}

export function buildOrganizationJsonLd(site: SiteContent) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    description: site.tagline,
    url: absoluteUrl("/")
  };
}

export function buildServiceJsonLd(service: ServiceItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: {
      "@type": "Organization",
      name: "Abrahams Consulting",
      url: absoluteUrl("/")
    }
  };
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function serializeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data);
}
