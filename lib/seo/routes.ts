import { launchPageSeoContent } from "../../src/content/seo";
import { loadMarketingContent } from "../content/load-content";
import { getSiteUrl } from "./metadata";

export type LaunchRouteEntry = {
  path: string;
  url: string;
  indexable: boolean;
};

export function getLaunchRoutePaths(): string[] {
  const { services } = loadMarketingContent();
  const staticPaths = launchPageSeoContent.map((entry) => entry.path);
  const servicePaths = services.map((service) => `/services/${service.slug}`);

  return [...staticPaths, ...servicePaths];
}

export function getLaunchSitemapEntries(): LaunchRouteEntry[] {
  const siteUrl = getSiteUrl();

  return getLaunchRoutePaths().map((path) => ({
    path,
    url: new URL(path, siteUrl).toString(),
    indexable: true
  }));
}
