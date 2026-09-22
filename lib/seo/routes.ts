import { launchPageSeoContent } from "../../src/content/seo";
import { loadMarketingContent } from "../content/load-content";
import { getSiteUrl } from "./metadata";

export type LaunchRouteEntry = {
  path: string;
  url: string;
  indexable: boolean;
};

export function getLaunchRoutePaths(): string[] {
  const { services, eventsPage } = loadMarketingContent();
  const staticPaths = launchPageSeoContent.map((entry) => entry.path);
  const servicePaths = services.map((service) => `/services/${service.slug}`);
  const eventRecordingPaths = eventsPage.events
    .filter((event) => event.recording)
    .map((event) => `/events/${event.slug}`);

  return [...staticPaths, ...servicePaths, ...eventRecordingPaths];
}

export function getLaunchSitemapEntries(): LaunchRouteEntry[] {
  const siteUrl = getSiteUrl();

  return getLaunchRoutePaths().map((path) => ({
    path,
    url: new URL(path, siteUrl).toString(),
    indexable: true
  }));
}
