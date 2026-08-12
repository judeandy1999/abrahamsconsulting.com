export function jsonLdResponse(data: Record<string, unknown>): Response {
  return new Response(JSON.stringify(data).replace(/</g, "\\u003c"), {
    headers: {
      "Content-Type": "application/ld+json; charset=utf-8",
      "Cache-Control": "public, max-age=86400, immutable"
    }
  });
}
