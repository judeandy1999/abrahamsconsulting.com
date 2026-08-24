"use client";

import type { NasaSewpViPageContent } from "../../src/content/schema";
import { NasaSewpViCompanyHubSection } from "./NasaSewpViCompanyHubSection";
import { NasaSewpViElectronicOrderingGuideSection } from "./NasaSewpViElectronicOrderingGuideSection";
import { NasaSewpViFederalSalesContactSection } from "./NasaSewpViFederalSalesContactSection";
import { NasaSewpViStatementsTableSection } from "./NasaSewpViStatementsTableSection";

type NasaSewpViBodyProps = {
  content: Omit<NasaSewpViPageContent, "hero">;
};

export function NasaSewpViBody({ content }: NasaSewpViBodyProps) {
  return (
    <>
      <NasaSewpViStatementsTableSection
        contactBanner={content.contactInformationBanner}
        contractOverview={content.contractOverview}
        inScopeForSewpVi={content.inScopeForSewpVi}
        gwac={content.gwacIdentificationStatement}
        naicsCodes={content.naicsCodes}
        fairOpportunity={content.fairOpportunityClause}
        postDeliverySupport={content.postDeliverySupport}
        orderTroubleshooting={content.orderTroubleshooting}
        programManager={content.programManagerContact}
        externalResources={content.externalResourceLinks}
        obtainQuote={content.obtainQuote}
      />

      <NasaSewpViElectronicOrderingGuideSection section={content.electronicOrderingGuide} />

      <NasaSewpViCompanyHubSection
        aboutCompany={content.aboutCompany}
        whyChoose={content.whyChoose}
        coreCompetencies={content.coreCompetencies}
        categoryACapabilities={content.categoryACapabilities}
        contractVehicles={content.contractVehicles}
        companyInformation={content.companyInformation}
        certifications={content.certifications}
      />

      <NasaSewpViFederalSalesContactSection section={content.federalSalesContact} />
    </>
  );
}
