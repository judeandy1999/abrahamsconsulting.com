"use client";

import { Suspense } from "react";
import type { ExecutiveRecruitingPageContent as ExecutiveRecruitingPageContentType } from "../../src/content/schema";
import { ExecutiveRecruitingFormProvider } from "./executive-recruiting-form-context";
import { HubSpotPortalEmbedScript } from "./HubSpotPortalEmbedScript";
import { ExecutiveRecruitingEmbedFormSection } from "./ExecutiveRecruitingEmbedFormSection";
import { ExecutiveRecruitingHero } from "./ExecutiveRecruitingHero";
import { ExecutiveRecruitingHiringCta } from "./ExecutiveRecruitingHiringCta";
import { ExecutiveRecruitingHiringProfilesSection } from "./ExecutiveRecruitingHiringProfilesSection";
import { ExecutiveRecruitingImpactSection } from "./ExecutiveRecruitingImpactSection";
import { ExecutiveRecruitingOpportunitiesSection } from "./ExecutiveRecruitingOpportunitiesSection";
import { ExecutiveRecruitingProcessSection } from "./ExecutiveRecruitingProcessSection";
import { ExecutiveRecruitingWhyAbrahamsSection } from "./ExecutiveRecruitingWhyAbrahamsSection";
import { ExecutiveRecruitingWhoThisIsForSection } from "./ExecutiveRecruitingWhoThisIsForSection";
import { ExecutiveRecruitingWrongHireSection } from "./ExecutiveRecruitingWrongHireSection";

type ExecutiveRecruitingPageContentProps = {
  content: ExecutiveRecruitingPageContentType;
};

function ExecutiveRecruitingPageInner({ content }: ExecutiveRecruitingPageContentProps) {
  const hubspotPortalId = content.embedFormSection.employerPath.hubspotForm.portalId;

  return (
    <ExecutiveRecruitingFormProvider>
      <HubSpotPortalEmbedScript portalId={hubspotPortalId} />
      <ExecutiveRecruitingHero hero={content.hero} />
      <ExecutiveRecruitingEmbedFormSection section={content.embedFormSection} />
      <ExecutiveRecruitingWhoThisIsForSection section={content.whoThisIsForSection} />
      <ExecutiveRecruitingProcessSection section={content.processSection} />
      <ExecutiveRecruitingOpportunitiesSection
        section={content.executiveOpportunitiesSection}
        candidateHubspotForm={content.embedFormSection.candidatePath.hubspotForm}
      />
      <ExecutiveRecruitingWhyAbrahamsSection section={content.whyAbrahamsSection} />
      <ExecutiveRecruitingImpactSection section={content.executiveImpactSection} />
      <ExecutiveRecruitingWrongHireSection section={content.wrongHireSection} />
      <ExecutiveRecruitingHiringCta cta={content.hiringProfileCta} />
      <ExecutiveRecruitingHiringProfilesSection section={content.hiringProfilesSection} />
    </ExecutiveRecruitingFormProvider>
  );
}

export function ExecutiveRecruitingPageContent({ content }: ExecutiveRecruitingPageContentProps) {
  return (
    <Suspense fallback={null}>
      <ExecutiveRecruitingPageInner content={content} />
    </Suspense>
  );
}
