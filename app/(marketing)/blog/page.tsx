import type { Metadata } from "next";
import "../../styles/pages/marketing-secondary.css";
import { ContentMxBlogEmbed } from "../../../components/marketing/ContentMxBlogEmbed";
import { buildMarketingMetadata } from "../../../lib/seo/metadata";
import { getStaticPageSeo } from "../../../lib/seo/page-seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata(getStaticPageSeo("/blog")!);

export default function BlogPage() {
  return (
    <main id="main-content" className="marketing-main marketing-main--blog">
      <ContentMxBlogEmbed />
    </main>
  );
}
