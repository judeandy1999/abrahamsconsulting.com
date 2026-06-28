import { existsSync } from "node:fs";
import { join } from "node:path";
import { NASA_SEWP_VI_DOCUMENTS, nasaSewpViPageContent } from "../../src/content/nasa-sewp-vi";
import type { NasaSewpViPageContent } from "../../src/content/schema";

export function loadNasaSewpViPageContent(): NasaSewpViPageContent {
  const orderingGuideFile = join(process.cwd(), "public", NASA_SEWP_VI_DOCUMENTS.orderingGuide.replace(/^\//, ""));
  const orderingGuideAvailable = existsSync(orderingGuideFile);

  return {
    ...nasaSewpViPageContent,
    resources: {
      ...nasaSewpViPageContent.resources,
      orderingGuide: {
        ...nasaSewpViPageContent.resources.orderingGuide,
        isAvailable: orderingGuideAvailable
      }
    }
  };
}
