import type { BlogPost } from "./types";

function decodeXmlEntities(value: string): string {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(Number.parseInt(hex, 16)))
    .trim();
}

function stripHtml(value: string): string {
  return decodeXmlEntities(value)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function firstTag(block: string, tag: string): string | null {
  const patterns = [
    new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"),
    new RegExp(`<${tag}[^>]*\\/>`, "i")
  ];

  for (const pattern of patterns) {
    const match = block.match(pattern);
    if (match?.[1] !== undefined) {
      return decodeXmlEntities(match[1]);
    }
  }

  return null;
}

function extractThumbnail(block: string): string | null {
  const mediaMatch = block.match(/<media:thumbnail\b[^>]*\burl=(["'])(.*?)\1/i);
  if (mediaMatch?.[2]) {
    return decodeXmlEntities(mediaMatch[2]);
  }

  const enclosureMatch = block.match(/<enclosure\b[^>]*\burl=(["'])(.*?)\1[^>]*\btype=(["'])image\//i);
  if (enclosureMatch?.[2]) {
    return decodeXmlEntities(enclosureMatch[2]);
  }

  return null;
}

function formatPublishedLabel(raw: string | null): string | null {
  if (!raw) {
    return null;
  }

  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) {
    return raw;
  }

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}

export function parseBlogRssXml(xml: string): BlogPost[] {
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)];

  return items
    .map((match, index) => {
      const block = match[1] ?? "";
      const title = stripHtml(firstTag(block, "title") ?? "");
      const link = firstTag(block, "link")?.trim() ?? "";
      const description = stripHtml(firstTag(block, "description") ?? "");
      const guid = firstTag(block, "guid")?.trim() ?? link ?? String(index);
      const publishedAt = firstTag(block, "pubDate");
      const author = firstTag(block, "dc:creator") ?? firstTag(block, "author");
      const imageUrl = extractThumbnail(block);

      if (!title || !link) {
        return null;
      }

      return {
        id: guid || `${index}-${link}`,
        title,
        link,
        description,
        imageUrl,
        publishedAt,
        publishedLabel: formatPublishedLabel(publishedAt),
        author: author ? stripHtml(author) : null
      } satisfies BlogPost;
    })
    .filter((post): post is BlogPost => post !== null);
}
