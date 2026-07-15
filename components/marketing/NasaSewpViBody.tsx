"use client";

import type { NasaSewpViPageContent } from "../../src/content/schema";
import { NasaSewpViAboutCompanySection } from "./NasaSewpViAboutCompanySection";
import { NasaSewpViCapabilitiesVehiclesSection } from "./NasaSewpViCapabilitiesVehiclesSection";
import { NasaSewpViCertificationsSection } from "./NasaSewpViCertificationsSection";
import { NasaSewpViCompanyInformationSection } from "./NasaSewpViCompanyInformationSection";
import { NasaSewpViContractOverviewSection } from "./NasaSewpViContractOverviewSection";
import { NasaSewpViElectronicOrderingGuideSection } from "./NasaSewpViElectronicOrderingGuideSection";
import { NasaSewpViExternalResourceLinksSection } from "./NasaSewpViExternalResourceLinksSection";
import { NasaSewpViCoreCompetenciesSection } from "./NasaSewpViCoreCompetenciesSection";
import { NasaSewpViFederalSalesContactSection } from "./NasaSewpViFederalSalesContactSection";
import { NasaSewpViPastPerformanceSection } from "./NasaSewpViPastPerformanceSection";
import { NasaSewpViProgramManagerContactSection } from "./NasaSewpViProgramManagerContactSection";
import { NasaSewpViStatementsTableSection } from "./NasaSewpViStatementsTableSection";
import { NasaSewpViWhyChooseSection } from "./NasaSewpViWhyChooseSection";

type NasaSewpViBodyProps = {
  content: Omit<NasaSewpViPageContent, "hero">;
};

export function NasaSewpViBody({ content }: NasaSewpViBodyProps) {
  return (
    <>
      <NasaSewpViContractOverviewSection section={content.contractOverview} />

      <NasaSewpViElectronicOrderingGuideSection section={content.electronicOrderingGuide} />

      <NasaSewpViStatementsTableSection
        gwac={content.gwacIdentificationStatement}
        aboutSewp={content.aboutSewp}
        fairOpportunity={content.fairOpportunityClause}
      />

      <NasaSewpViProgramManagerContactSection section={content.programManagerContact} />

      <NasaSewpViExternalResourceLinksSection section={content.externalResourceLinks} />

      <NasaSewpViAboutCompanySection section={content.aboutCompany} />

      <NasaSewpViWhyChooseSection section={content.whyChoose} />

      <NasaSewpViCoreCompetenciesSection section={content.coreCompetencies} />

      <NasaSewpViCapabilitiesVehiclesSection
        capabilities={content.categoryACapabilities}
        vehicles={content.contractVehicles}
      />

      {/*<NasaSewpViPastPerformanceSection section={content.pastPerformance} />*/}

      <NasaSewpViCompanyInformationSection section={content.companyInformation} />

      <NasaSewpViCertificationsSection section={content.certifications} />

      <NasaSewpViFederalSalesContactSection section={content.federalSalesContact} />
    </>
  );
}
