import type { ExecutiveRecruitingPageContent } from "../../src/content/schema";
import { ExecutiveRecruitingWhoThisIsForIcon } from "./ExecutiveRecruitingWhoThisIsForIcon";

type ExecutiveRecruitingWhoThisIsForSectionProps = {
  section: ExecutiveRecruitingPageContent["whoThisIsForSection"];
};

export function ExecutiveRecruitingWhoThisIsForSection({ section }: ExecutiveRecruitingWhoThisIsForSectionProps) {
  return (
    <section className="exec-recruiting-audience" aria-labelledby="exec-recruiting-audience-heading">
      <div className="exec-recruiting-audience__inner">
        <header className="exec-recruiting-audience__intro">
          <p className="exec-recruiting-audience__eyebrow">{section.eyebrow}</p>
          <h2 id="exec-recruiting-audience-heading" className="exec-recruiting-audience__title">
            {section.title}
          </h2>
          <p className="exec-recruiting-audience__description">{section.description}</p>
        </header>

        <ul className="exec-recruiting-audience__list">
          {section.items.map((item) => (
            <li key={item.id} className="exec-recruiting-audience__item">
              <span className="exec-recruiting-audience__item-icon" aria-hidden="true">
                <ExecutiveRecruitingWhoThisIsForIcon name={item.icon} />
              </span>
              <span className="exec-recruiting-audience__item-label">{item.label}</span>
            </li>
          ))}
        </ul>

        <aside className="exec-recruiting-audience__callout">
          <p>{section.callout}</p>
        </aside>
      </div>
    </section>
  );
}
