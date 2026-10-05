"use client";

import { useId } from "react";
import type { ExecutiveRecruitingPageContent } from "../../src/content/schema";
import { useExecutiveRecruitingForm } from "./executive-recruiting-form-context";
import { HubSpotFormFrame } from "./HubSpotFormFrame";
import { IconArrowRight } from "./NavIcons";

type ExecutiveRecruitingEmbedFormSectionProps = {
  section: ExecutiveRecruitingPageContent["embedFormSection"];
};

function PathIcon({ variant }: { variant: "employer" | "candidate" }) {
  if (variant === "employer") {
    return (
      <span className="exec-recruiting-embed-form__path-icon exec-recruiting-embed-form__path-icon--employer" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M4.5 20.25V9.75L12 4.5l7.5 5.25v10.5H4.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M9.75 20.25v-6h4.5v6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }

  return (
    <span className="exec-recruiting-embed-form__path-icon exec-recruiting-embed-form__path-icon--candidate" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M8.5 11.25c1.66 0 3-1.45 3-3.25S10.16 4.75 8.5 4.75 5.5 6.2 5.5 8s1.34 3.25 3 3.25ZM15.5 11.25c1.66 0 3-1.45 3-3.25s-1.34-3.25-3-3.25-3 1.45-3 3.25 1.34 3.25 3 3.25Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M3.75 19.25c0-2.45 2.13-4.5 4.75-4.5h.5c1.2 0 2.3.45 3.1 1.2.8-.75 1.9-1.2 3.1-1.2h.5c2.62 0 4.75 2.05 4.75 4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function ExecutiveRecruitingEmbedFormSection({ section }: ExecutiveRecruitingEmbedFormSectionProps) {
  const baseId = useId();
  const { activePath, setActivePath } = useExecutiveRecruitingForm();

  const employerPanelId = `${baseId}-employer-form`;
  const candidatePanelId = `${baseId}-candidate-form`;

  return (
    <section
      id="exec-recruiting-embed-form"
      className="exec-recruiting-embed-form"
      aria-labelledby="exec-recruiting-embed-form-heading"
    >
      <div className="exec-recruiting-embed-form__inner">
        <header className="exec-recruiting-embed-form__header">
          <h2 id="exec-recruiting-embed-form-heading" className="exec-recruiting-embed-form__title">
            {section.title}
          </h2>
          <p className="exec-recruiting-embed-form__description">{section.description}</p>
        </header>

        {activePath === null ? (
          <div
            className="exec-recruiting-embed-form__cards"
            role="group"
            aria-label="Choose how you want to connect with executive recruiting"
          >
            <article className="exec-recruiting-embed-form__card">
              <div className="exec-recruiting-embed-form__card-body">
                <PathIcon variant="employer" />
                <div className="exec-recruiting-embed-form__card-copy">
                  <h3 className="exec-recruiting-embed-form__card-title">{section.employerPath.title}</h3>
                  <p className="exec-recruiting-embed-form__card-description">{section.employerPath.description}</p>
                </div>
              </div>
              <button
                type="button"
                className="exec-recruiting-embed-form__card-cta exec-recruiting-embed-form__card-cta--employer"
                onClick={() => setActivePath("employer")}
              >
                {section.employerPath.ctaLabel}
                <IconArrowRight className="exec-recruiting-embed-form__card-cta-icon" />
              </button>
            </article>

            <article className="exec-recruiting-embed-form__card">
              <div className="exec-recruiting-embed-form__card-body">
                <PathIcon variant="candidate" />
                <div className="exec-recruiting-embed-form__card-copy">
                  <h3 className="exec-recruiting-embed-form__card-title">{section.candidatePath.title}</h3>
                  <p className="exec-recruiting-embed-form__card-description">{section.candidatePath.description}</p>
                </div>
              </div>
              <button
                type="button"
                className="exec-recruiting-embed-form__card-cta exec-recruiting-embed-form__card-cta--candidate"
                onClick={() => setActivePath("candidate")}
              >
                {section.candidatePath.ctaLabel}
                <IconArrowRight className="exec-recruiting-embed-form__card-cta-icon" />
              </button>
            </article>
          </div>
        ) : null}

        <div
          className={`exec-recruiting-embed-form__form-wrap${activePath === null ? " exec-recruiting-embed-form__form-wrap--preload" : ""}`}
          aria-hidden={activePath === null}
        >
          <button
            type="button"
            className="exec-recruiting-embed-form__back"
            onClick={() => setActivePath(null)}
            aria-label="Back to path selection"
          >
            ← Back
          </button>

          <div
            id={employerPanelId}
            className="exec-recruiting-embed-form__form-panel"
            hidden={activePath === "candidate"}
          >
            {activePath === null || activePath === "employer" ? (
              <HubSpotFormFrame
                config={section.employerPath.hubspotForm}
                className="exec-recruiting-embed-form__hubspot"
                loadPortalScript={false}
              />
            ) : null}
          </div>
          <div
            id={candidatePanelId}
            className="exec-recruiting-embed-form__form-panel"
            hidden={activePath !== "candidate"}
          >
            {activePath === "candidate" ? (
              <HubSpotFormFrame
                config={section.candidatePath.hubspotForm}
                className="exec-recruiting-embed-form__hubspot"
                loadPortalScript={false}
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
