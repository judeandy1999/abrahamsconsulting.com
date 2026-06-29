"use client";

import type { NasaSewpViPageContent } from "../../src/content/schema";
import { NasaSewpViAboutCompanySection } from "./NasaSewpViAboutCompanySection";
import { NasaSewpViAboutSewpSection } from "./NasaSewpViAboutSewpSection";
import { NasaSewpViCapabilitiesVehiclesSection } from "./NasaSewpViCapabilitiesVehiclesSection";
import { NasaSewpViCertificationsSection } from "./NasaSewpViCertificationsSection";
import { NasaSewpViCompanyInformationSection } from "./NasaSewpViCompanyInformationSection";
import { NasaSewpViContractOverviewSection } from "./NasaSewpViContractOverviewSection";
import { NasaSewpViCoreCompetenciesSection } from "./NasaSewpViCoreCompetenciesSection";
import { NasaSewpViFederalSalesContactSection } from "./NasaSewpViFederalSalesContactSection";
import { NasaSewpViPastPerformanceSection } from "./NasaSewpViPastPerformanceSection";
import { NasaSewpViWhyChooseSection } from "./NasaSewpViWhyChooseSection";

type NasaSewpViBodyProps = {
  content: Omit<NasaSewpViPageContent, "hero">;
};

export function NasaSewpViBody({ content }: NasaSewpViBodyProps) {
  return (
    <>
      <NasaSewpViContractOverviewSection section={content.contractOverview} />

      <NasaSewpViAboutSewpSection section={content.aboutSewp} />

      <NasaSewpViAboutCompanySection section={content.aboutCompany} />

      <NasaSewpViWhyChooseSection section={content.whyChoose} />

      <NasaSewpViCoreCompetenciesSection section={content.coreCompetencies} />

      <NasaSewpViCapabilitiesVehiclesSection
        capabilities={content.categoryACapabilities}
        vehicles={content.contractVehicles}
      />

      <NasaSewpViPastPerformanceSection section={content.pastPerformance} />

      <NasaSewpViCompanyInformationSection section={content.companyInformation} />

      <NasaSewpViCertificationsSection section={content.certifications} />

      <NasaSewpViFederalSalesContactSection section={content.federalSalesContact} />
    </>
  );
}
