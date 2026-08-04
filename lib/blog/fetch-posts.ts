import { blogPageContent } from "../../src/content/blog";
import { parseBlogRssXml } from "./parse-rss";
import type { BlogPost } from "./types";

export type BlogFeedResult =
  | { ok: true; posts: BlogPost[] }
  | { ok: false; posts: []; error: string };

export async function fetchBlogPosts(): Promise<BlogFeedResult> {
  const { url, revalidateSeconds } = blogPageContent.feed;

  try {
    const response = await fetch(url, {
      next: { revalidate: revalidateSeconds },
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml, */*"
      }
    });

    if (!response.ok) {
      return {
        ok: false,
        posts: [],
        error: `Feed request failed (${response.status})`
      };
    }

    const xml = await response.text();
    const posts = parseBlogRssXml(xml);

    if (posts.length === 0) {
      return {
        ok: false,
        posts: [],
        error: "Feed returned no posts"
      };
    }

    return { ok: true, posts };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown feed error";
    return { ok: false, posts: [], error: message };
  }
}
