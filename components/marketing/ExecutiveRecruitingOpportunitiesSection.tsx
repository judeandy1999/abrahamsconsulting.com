"use client";

import { useState } from "react";
import Image from "next/image";
import type { ExecutiveRecruitingPageContent, HubspotFormConfig } from "../../src/content/schema";
import { HubSpotFormFrame } from "./HubSpotFormFrame";
import { ExecutiveRecruitingOpportunityIcon } from "./ExecutiveRecruitingOpportunityIcon";
import { IconArrowRight } from "./NavIcons";

type ExecutiveRecruitingOpportunitiesSectionProps = {
  section: ExecutiveRecruitingPageContent["executiveOpportunitiesSection"];
  candidateHubspotForm: HubspotFormConfig;
};

export function ExecutiveRecruitingOpportunitiesSection({
  section,
  candidateHubspotForm
}: ExecutiveRecruitingOpportunitiesSectionProps) {
  const [showCandidateForm, setShowCandidateForm] = useState(false);
  const { candidatePanel } = section;

  const openCandidateForm = () => setShowCandidateForm(true);

  return (
    <section className="exec-recruiting-opportunities" aria-labelledby="exec-recruiting-opportunities-heading">
      <div
        className={`exec-recruiting-opportunities__inner${showCandidateForm ? " exec-recruiting-opportunities__inner--form" : ""}`}
      >
        {showCandidateForm ? (
          <>
            <header className="exec-recruiting-opportunities__header exec-recruiting-opportunities__header--section">
              <p className="exec-recruiting-opportunities__eyebrow">{section.eyebrow}</p>
              <h2 id="exec-recruiting-opportunities-heading" className="exec-recruiting-opportunities__title">
                {section.title}
              </h2>
              <p className="exec-recruiting-opportunities__description">{section.description}</p>
            </header>
            <div className="exec-recruiting-opportunities__form-wrap">
              <button
                type="button"
                className="exec-recruiting-opportunities__back"
                onClick={() => setShowCandidateForm(false)}
                aria-label="Back to executive opportunities"
              >
                ← Back
              </button>
              <HubSpotFormFrame
                config={candidateHubspotForm}
                className="exec-recruiting-opportunities__hubspot"
                loadPortalScript={false}
              />
            </div>
          </>
        ) : (
          <div className="exec-recruiting-opportunities__layout">
            <div className="exec-recruiting-opportunities__main">
              <header className="exec-recruiting-opportunities__header exec-recruiting-opportunities__header--section">
                <p className="exec-recruiting-opportunities__eyebrow">{section.eyebrow}</p>
                <h2 id="exec-recruiting-opportunities-heading" className="exec-recruiting-opportunities__title">
                  {section.title}
                </h2>
                <p className="exec-recruiting-opportunities__description">{section.description}</p>
              </header>

              <ul className="exec-recruiting-opportunities__grid">
                {section.opportunities.map((opportunity) => (
                  <li key={opportunity.id}>
                    <article className="exec-recruiting-opportunities__card">
                      <div className="exec-recruiting-opportunities__card-top">
                        <div className="exec-recruiting-opportunities__card-heading">
                          <h3 className="exec-recruiting-opportunities__card-title">{opportunity.title}</h3>
                          <p className="exec-recruiting-opportunities__card-industry">{opportunity.industry}</p>
                        </div>
                        <span className="exec-recruiting-opportunities__card-icon" aria-hidden="true">
                          <ExecutiveRecruitingOpportunityIcon name={opportunity.icon} />
                        </span>
                      </div>
                      <button type="button" className="exec-recruiting-opportunities__apply" onClick={openCandidateForm}>
                        {section.applyLabel}
                        <IconArrowRight className="exec-recruiting-opportunities__apply-icon" />
                      </button>
                    </article>
                  </li>
                ))}
              </ul>
            </div>

            <aside
              className="exec-recruiting-opportunities__panel"
              aria-labelledby="exec-recruiting-candidate-panel-heading"
            >
              <div className="exec-recruiting-opportunities__panel-media" aria-hidden="true">
                <Image
                  src={candidatePanel.imageSrc}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 22rem"
                  className="exec-recruiting-opportunities__panel-image"
                />
              </div>
              <div className="exec-recruiting-opportunities__panel-content">
                <p className="exec-recruiting-opportunities__panel-eyebrow">{candidatePanel.eyebrow}</p>
                <h3 id="exec-recruiting-candidate-panel-heading" className="exec-recruiting-opportunities__panel-title">
                  {candidatePanel.title}
                </h3>
                <p className="exec-recruiting-opportunities__panel-description">{candidatePanel.description}</p>
                <ul className="exec-recruiting-opportunities__panel-list">
                  {candidatePanel.bullets.map((bullet) => (
                    <li key={bullet}>
                      <span className="exec-recruiting-opportunities__panel-check" aria-hidden="true">
                        ✓
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <button type="button" className="exec-recruiting-opportunities__panel-cta" onClick={openCandidateForm}>
                  {candidatePanel.ctaLabel}
                  <IconArrowRight className="exec-recruiting-opportunities__panel-cta-icon" />
                </button>
                <p className="exec-recruiting-opportunities__panel-note">
                  <span className="exec-recruiting-opportunities__panel-lock" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <rect x="5" y="11" width="14" height="10" rx="2" />
                      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
                    </svg>
                  </span>
                  {candidatePanel.confidentialityNote}
                </p>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
