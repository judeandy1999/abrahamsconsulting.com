import { siteContent } from "../../../src/content/site";
import { buildOrganizationJsonLd } from "../../../lib/seo/json-ld";
import { jsonLdResponse } from "../../../lib/seo/json-ld-response";

export const dynamic = "force-static";

export function GET() {
  return jsonLdResponse(buildOrganizationJsonLd(siteContent));
}
