import type { Metadata } from "next";
import "../../styles/pages/marketing-secondary.css";
import { BlogFeedSection } from "../../../components/marketing/BlogFeedSection";
import { fetchBlogPosts } from "../../../lib/blog/fetch-posts";
import { buildMarketingMetadata } from "../../../lib/seo/metadata";
import { getStaticPageSeo } from "../../../lib/seo/page-seo";

export const revalidate = 300;

export const metadata: Metadata = buildMarketingMetadata(getStaticPageSeo("/blog")!);

export default async function BlogPage() {
  const feed = await fetchBlogPosts();

  return (
    <main id="main-content" className="marketing-main marketing-main--blog">
      <BlogFeedSection posts={feed.posts} feedError={feed.ok ? null : feed.error} />
    </main>
  );
}
