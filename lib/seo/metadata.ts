import type { Metadata } from "next";

const DEFAULT_BASE_URL = "https://abrahamsconsulting.com";

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_BASE_URL;
}

type MarketingMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function buildMarketingMetadata(options: MarketingMetadataOptions): Metadata {
  const siteUrl = getSiteUrl();
  const canonical = new URL(options.path, siteUrl).toString();

  return {
    title: options.title,
    description: options.description,
    alternates: {
      canonical
    },
    openGraph: {
      title: options.title,
      description: options.description,
      url: canonical,
      type: "website"
    }
  };
}
