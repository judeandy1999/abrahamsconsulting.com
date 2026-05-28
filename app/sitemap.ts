import type { MetadataRoute } from "next";
import { getSiteUrl } from "../lib/seo/metadata";

const marketingRoutes = ["/", "/about", "/services", "/contracts", "/trust", "/consultation"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const now = new Date();

  return marketingRoutes.map((path) => ({
    url: new URL(path, baseUrl).toString(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.8,
    lastModified: now
  }));
}
