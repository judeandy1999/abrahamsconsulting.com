"use client";

import { motion } from "framer-motion";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { useMarketingMotionConfig } from "./marketing-motion";

type NasaSewpViStatementsTableSectionProps = {
  gwac: NasaSewpViPageContent["gwacIdentificationStatement"];
  aboutSewp: NasaSewpViPageContent["aboutSewp"];
  fairOpportunity: NasaSewpViPageContent["fairOpportunityClause"];
};

export function NasaSewpViStatementsTableSection({
  gwac,
  aboutSewp,
  fairOpportunity
}: NasaSewpViStatementsTableSectionProps) {
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();
  const clause = fairOpportunity.clause;

  return (
    <section className="sewp-vi-statements" aria-labelledby="sewp-vi-statements-heading">
      <motion.div
        className="sewp-vi-statements__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.div variants={itemVariants} transition={itemTransition}>
          <h2 id="sewp-vi-statements-heading" className="sewp-vi-statements__title">
            Contract Statements
          </h2>

          <div className="sewp-vi-statements__table-wrap">
            <table className="sewp-vi-statements__table">
              <caption className="sewp-vi-statements__caption">
                Official identification and policy statements for Abrahams Consulting LLC NASA SEWP VI
              </caption>
              <tbody>
                <tr>
                  <th scope="row">{gwac.title}</th>
                  <td>{gwac.statement}</td>
                </tr>

                <tr>
                  <th scope="row">{aboutSewp.title}</th>
                  <td>
                    {aboutSewp.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="sewp-vi-statements__paragraph">
                        {paragraph}
                      </p>
                    ))}
                  </td>
                </tr>

                <tr>
                  <th scope="row">{fairOpportunity.title}</th>
                  <td>
                    <p className="sewp-vi-statements__paragraph">{fairOpportunity.intro}</p>
                    <p className="sewp-vi-statements__paragraph">{clause.leadParagraph}</p>

                    <div className="sewp-vi-statements__subsections">
                      {clause.sections.map((section) => (
                        <div key={section.id} className="sewp-vi-statements__subsection">
                          <h3 className="sewp-vi-statements__subsection-title">{section.title}</h3>
                          <ul className="sewp-vi-statements__list">
                            {section.bullets.map((bullet) => (
                              <li key={bullet.label}>
                                <strong>{bullet.label}:</strong> {bullet.text}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <p className="sewp-vi-statements__outcome">
                      <strong>Outcome:</strong> {clause.outcome}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
