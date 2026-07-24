"use client";

import type { NasaSewpViPageContent } from "../../src/content/schema";
import { NasaSewpViAboutCompanySection } from "./NasaSewpViAboutCompanySection";
import { NasaSewpViCapabilitiesVehiclesSection } from "./NasaSewpViCapabilitiesVehiclesSection";
import { NasaSewpViCertificationsSection } from "./NasaSewpViCertificationsSection";
import { NasaSewpViCompanyInformationSection } from "./NasaSewpViCompanyInformationSection";
import { NasaSewpViContractOverviewSection } from "./NasaSewpViContractOverviewSection";
import { NasaSewpViElectronicOrderingGuideSection } from "./NasaSewpViElectronicOrderingGuideSection";
import { NasaSewpViCoreCompetenciesSection } from "./NasaSewpViCoreCompetenciesSection";
import { NasaSewpViFederalSalesContactSection } from "./NasaSewpViFederalSalesContactSection";
import { NasaSewpViPastPerformanceSection } from "./NasaSewpViPastPerformanceSection";
import { NasaSewpViStatementsTableSection } from "./NasaSewpViStatementsTableSection";
import { NasaSewpViObtainQuoteSection } from "./NasaSewpViObtainQuoteSection";
import { NasaSewpViWhyChooseSection } from "./NasaSewpViWhyChooseSection";

type NasaSewpViBodyProps = {
  content: Omit<NasaSewpViPageContent, "hero">;
};

export function NasaSewpViBody({ content }: NasaSewpViBodyProps) {
  return (
    <>
      {/* <NasaSewpViContractOverviewSection section={content.contractOverview} /> */}

      <NasaSewpViElectronicOrderingGuideSection section={content.electronicOrderingGuide} />

      <NasaSewpViStatementsTableSection
        contractOverview={content.contractOverview}
        gwac={content.gwacIdentificationStatement}
        aboutSewp={content.aboutSewp}
        fairOpportunity={content.fairOpportunityClause}
        postDeliverySupport={content.postDeliverySupport}
        orderTroubleshooting={content.orderTroubleshooting}
        programManager={content.programManagerContact}
        externalResources={content.externalResourceLinks}
      />

      <NasaSewpViObtainQuoteSection section={content.obtainQuote} />

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
