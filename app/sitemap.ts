import type { MetadataRoute } from "next";
import { getLaunchSitemapEntries } from "../lib/seo/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return getLaunchSitemapEntries().map((entry) => ({
    url: entry.url,
    changeFrequency: "weekly",
    priority: entry.path === "/" ? 1 : 0.8,
    lastModified: now
  }));
}
