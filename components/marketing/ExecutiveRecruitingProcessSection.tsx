import type { ExecutiveRecruitingPageContent } from "../../src/content/schema";
import { ExecutiveRecruitingProcessIcon } from "./ExecutiveRecruitingProcessIcon";

type ExecutiveRecruitingProcessSectionProps = {
  section: ExecutiveRecruitingPageContent["processSection"];
};

function ProcessStepSeparator() {
  return (
    <span className="exec-recruiting-process__separator" aria-hidden="true">
      ›
    </span>
  );
}

export function ExecutiveRecruitingProcessSection({ section }: ExecutiveRecruitingProcessSectionProps) {
  return (
    <section className="exec-recruiting-process" aria-labelledby="exec-recruiting-process-heading">
      <div className="exec-recruiting-process__inner">
        <header className="exec-recruiting-process__header">
          <p className="exec-recruiting-process__eyebrow">{section.eyebrow}</p>
          <h2 id="exec-recruiting-process-heading" className="exec-recruiting-process__title">
            {section.title}
          </h2>
        </header>

        <div className="exec-recruiting-process__track">
          <div className="exec-recruiting-process__steps">
            {section.steps.map((step, index) => (
              <div key={step.id} className="exec-recruiting-process__step-group">
                {index > 0 ? <ProcessStepSeparator /> : null}
                <article className="exec-recruiting-process__step">
                  <span className="exec-recruiting-process__step-number">{step.stepNumber}</span>
                  <span className="exec-recruiting-process__step-icon" aria-hidden="true">
                    <ExecutiveRecruitingProcessIcon name={step.icon} />
                  </span>
                  <h3 className="exec-recruiting-process__step-title">{step.title}</h3>
                  <p className="exec-recruiting-process__step-description">{step.description}</p>
                </article>
              </div>
            ))}
          </div>

          <aside className="exec-recruiting-process__callout">
            <p>{section.callout}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
