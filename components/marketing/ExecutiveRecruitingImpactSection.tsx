import type { ExecutiveRecruitingPageContent } from "../../src/content/schema";
import { ExecutiveRecruitingImpactIcon } from "./ExecutiveRecruitingImpactIcon";

type ExecutiveRecruitingImpactSectionProps = {
  section: ExecutiveRecruitingPageContent["executiveImpactSection"];
};

export function ExecutiveRecruitingImpactSection({ section }: ExecutiveRecruitingImpactSectionProps) {
  return (
    <section className="exec-recruiting-impact" aria-labelledby="exec-recruiting-impact-heading">
      <div className="exec-recruiting-impact__inner">
        <header className="exec-recruiting-impact__header">
          <p className="exec-recruiting-impact__eyebrow">{section.eyebrow}</p>
          <h2 id="exec-recruiting-impact-heading" className="exec-recruiting-impact__title">
            {section.title}
          </h2>
        </header>

        <div className="exec-recruiting-impact__body">
          <ul className="exec-recruiting-impact__cards">
            {section.cards.map((card) => (
              <li key={card.id}>
                <article className="exec-recruiting-impact__card">
                  <span className="exec-recruiting-impact__card-icon" aria-hidden="true">
                    <ExecutiveRecruitingImpactIcon name={card.icon} />
                  </span>
                  <h3 className="exec-recruiting-impact__card-title">{card.title}</h3>
                  <p className="exec-recruiting-impact__card-outcome">
                    {card.outcome.map((segment, index) =>
                      segment.emphasis ? (
                        <strong key={index}>{segment.text}</strong>
                      ) : (
                        <span key={index}>{segment.text}</span>
                      )
                    )}
                  </p>
                </article>
              </li>
            ))}
          </ul>

          <aside className="exec-recruiting-impact__aside" aria-label="Executive impact summary">
            <p className="exec-recruiting-impact__aside-quote">{section.sidebarQuote}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
