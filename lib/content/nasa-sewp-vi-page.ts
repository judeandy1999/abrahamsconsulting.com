import { existsSync } from "node:fs";
import { join } from "node:path";
import { NASA_SEWP_VI_DOCUMENTS, nasaSewpViPageContent } from "../../src/content/nasa-sewp-vi";
import type { NasaSewpViPageContent } from "../../src/content/schema";

function documentIsAvailable(publicPath: string): boolean {
  const filePath = join(process.cwd(), "public", publicPath.replace(/^\//, ""));
  return existsSync(filePath);
}

export function loadNasaSewpViPageContent(): NasaSewpViPageContent {
  const orderingGuideAvailable = documentIsAvailable(NASA_SEWP_VI_DOCUMENTS.orderingGuide);
  const orderingGuideVpatAvailable = documentIsAvailable(NASA_SEWP_VI_DOCUMENTS.orderingGuideVpat);

  return {
    ...nasaSewpViPageContent,
    electronicOrderingGuide: {
      ...nasaSewpViPageContent.electronicOrderingGuide,
      download: {
        ...nasaSewpViPageContent.electronicOrderingGuide.download,
        isAvailable: orderingGuideAvailable
      },
      accessibility: {
        ...nasaSewpViPageContent.electronicOrderingGuide.accessibility,
        vpat: {
          ...nasaSewpViPageContent.electronicOrderingGuide.accessibility.vpat,
          isAvailable: orderingGuideVpatAvailable
        }
      }
    }
  };
}
