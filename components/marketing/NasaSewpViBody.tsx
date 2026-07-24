"use client";

import type { NasaSewpViPageContent } from "../../src/content/schema";
import { NasaSewpViAboutCompanySection } from "./NasaSewpViAboutCompanySection";
import { NasaSewpViCapabilitiesVehiclesSection } from "./NasaSewpViCapabilitiesVehiclesSection";
import { NasaSewpViCertificationsSection } from "./NasaSewpViCertificationsSection";
import { NasaSewpViCompanyInformationSection } from "./NasaSewpViCompanyInformationSection";
import { NasaSewpViElectronicOrderingGuideSection } from "./NasaSewpViElectronicOrderingGuideSection";
import { NasaSewpViCoreCompetenciesSection } from "./NasaSewpViCoreCompetenciesSection";
import { NasaSewpViFederalSalesContactSection } from "./NasaSewpViFederalSalesContactSection";
import { NasaSewpViStatementsTableSection } from "./NasaSewpViStatementsTableSection";
import { NasaSewpViWhyChooseSection } from "./NasaSewpViWhyChooseSection";

type NasaSewpViBodyProps = {
  content: Omit<NasaSewpViPageContent, "hero">;
};

export function NasaSewpViBody({ content }: NasaSewpViBodyProps) {
  return (
    <>
      {/* Contract Overview and How to Obtain a Quote live in the details tabs below. */}

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
        obtainQuote={content.obtainQuote}
      />

      <NasaSewpViAboutCompanySection section={content.aboutCompany} />

      <NasaSewpViWhyChooseSection section={content.whyChoose} />

      <NasaSewpViCoreCompetenciesSection section={content.coreCompetencies} />

      <NasaSewpViCapabilitiesVehiclesSection
        capabilities={content.categoryACapabilities}
        vehicles={content.contractVehicles}
      />

      {/* Past Performance section temporarily hidden */}

      <NasaSewpViCompanyInformationSection section={content.companyInformation} />

      <NasaSewpViCertificationsSection section={content.certifications} />

      <NasaSewpViFederalSalesContactSection section={content.federalSalesContact} />
    </>
  );
}
