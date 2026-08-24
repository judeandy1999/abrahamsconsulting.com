"use client";

import type { NasaSewpViPageContent } from "../../src/content/schema";
import { NasaSewpViOrderingGuideCard } from "./NasaSewpViOrderingGuideCard";

type NasaSewpViElectronicOrderingGuideSectionProps = {
  section: NasaSewpViPageContent["electronicOrderingGuide"];
};

export function NasaSewpViElectronicOrderingGuideSection({
  section
}: NasaSewpViElectronicOrderingGuideSectionProps) {
  return (
    <section className="sewp-vi-eordering" aria-labelledby="sewp-vi-eordering-heading">
      <div className="sewp-vi-eordering__inner">
        <h2 id="sewp-vi-eordering-heading" className="sr-only">
          {section.title}
        </h2>

        <div className="sewp-vi-eordering__card-wrap">
          <NasaSewpViOrderingGuideCard section={section} />
        </div>
      </div>
    </section>
  );
}
