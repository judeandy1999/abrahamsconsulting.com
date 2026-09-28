import type { ExecutiveRecruitingPageContent } from "../../src/content/schema";
import { HubSpotFormFrame } from "./HubSpotFormFrame";

type ExecutiveRecruitingEmbedFormSectionProps = {
  section: ExecutiveRecruitingPageContent["embedFormSection"];
};

export function ExecutiveRecruitingEmbedFormSection({ section }: ExecutiveRecruitingEmbedFormSectionProps) {
  return (
    <section
      id="exec-recruiting-embed-form"
      className="exec-recruiting-embed-form"
      aria-labelledby="exec-recruiting-embed-form-heading"
    >
      <div className="exec-recruiting-embed-form__inner">
        <header className="exec-recruiting-embed-form__header">
          <p className="exec-recruiting-embed-form__eyebrow">{section.eyebrow}</p>
          <h2 id="exec-recruiting-embed-form-heading" className="exec-recruiting-embed-form__title">
            {section.title}
          </h2>
          <p className="exec-recruiting-embed-form__description">{section.description}</p>
        </header>

        <div className="exec-recruiting-embed-form__frame-wrap">
          <HubSpotFormFrame
            config={section.hubspotForm}
            className="exec-recruiting-embed-form__hubspot"
          />
        </div>
      </div>
    </section>
  );
}
