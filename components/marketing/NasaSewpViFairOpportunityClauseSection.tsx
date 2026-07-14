"use client";

import { motion } from "framer-motion";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { useMarketingMotionConfig } from "./marketing-motion";

type NasaSewpViFairOpportunityClauseSectionProps = {
  section: NasaSewpViPageContent["fairOpportunityClause"];
};

function FairOpportunityTitle({ title, accentWord }: { title: string; accentWord: string }) {
  if (!title.startsWith(accentWord)) {
    return <>{title}</>;
  }

  const remainder = title.slice(accentWord.length);

  return (
    <>
      <span className="sewp-vi-fair-opportunity__title-accent">{accentWord}</span>
      {remainder}
    </>
  );
}

export function NasaSewpViFairOpportunityClauseSection({
  section
}: NasaSewpViFairOpportunityClauseSectionProps) {
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();

  return (
    <section className="sewp-vi-fair-opportunity" aria-labelledby="sewp-vi-fair-opportunity-heading">
      <motion.div
        className="sewp-vi-fair-opportunity__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.header className="sewp-vi-fair-opportunity__header" variants={itemVariants} transition={itemTransition}>
          <div className="sewp-vi-fair-opportunity__header-copy">
            <h2 id="sewp-vi-fair-opportunity-heading" className="sewp-vi-fair-opportunity__title">
              <FairOpportunityTitle title={section.title} accentWord={section.titleAccentWord} />
            </h2>
            <p className="sewp-vi-fair-opportunity__intro">{section.intro}</p>
          </div>
        </motion.header>

        <motion.article className="sewp-vi-fair-opportunity__clause" variants={itemVariants} transition={itemTransition}>
          <header className="sewp-vi-fair-opportunity__clause-header">
            <h3 className="sewp-vi-fair-opportunity__clause-label">{section.clause.label}</h3>
          </header>

          <div className="sewp-vi-fair-opportunity__clause-body">
            <p className="sewp-vi-fair-opportunity__clause-paragraph">{section.clause.leadParagraph}</p>

            <ol className="sewp-vi-fair-opportunity__clause-sections">
              {section.clause.sections.map((clauseSection) => (
                <li key={clauseSection.id} className="sewp-vi-fair-opportunity__clause-section">
                  <h4 className="sewp-vi-fair-opportunity__clause-section-title">{clauseSection.title}</h4>
                  <ul className="sewp-vi-fair-opportunity__clause-bullets">
                    {clauseSection.bullets.map((bullet) => (
                      <li key={bullet.label} className="sewp-vi-fair-opportunity__clause-bullet">
                        <strong>{bullet.label}:</strong> {bullet.text}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            <p className="sewp-vi-fair-opportunity__clause-outcome">
              <strong>Outcome:</strong> {section.clause.outcome}
            </p>
          </div>
        </motion.article>
      </motion.div>
    </section>
  );
}
