"use client";

import { motion } from "framer-motion";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { NasaSewpViCompanyInfoIcon } from "./NasaSewpViCompanyInfoIcon";
import { useMarketingMotionConfig } from "./marketing-motion";

type NasaSewpViCompanyInformationSectionProps = {
  section: NasaSewpViPageContent["companyInformation"];
  embedded?: boolean;
};

type CompanyInfoItem = NasaSewpViPageContent["companyInformation"]["items"][number];

const COLUMN_SPLIT = 4;

function CompanyInfoColumn({ items }: { items: CompanyInfoItem[] }) {
  return (
    <dl className="sewp-vi-company-info__column">
      {items.map((item) => (
        <div key={item.id} className="sewp-vi-company-info__row">
          <span className="sewp-vi-company-info__icon" aria-hidden="true">
            <NasaSewpViCompanyInfoIcon name={item.icon} />
          </span>
          <div className="sewp-vi-company-info__copy">
            <dt className="sewp-vi-company-info__label">{item.label}</dt>
            <dd className="sewp-vi-company-info__value">
              {item.href ? (
                <a href={item.href} className="sewp-vi-company-info__link" aria-label={`${item.label}: ${item.value}`}>
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </dd>
          </div>
        </div>
      ))}
    </dl>
  );
}

export function NasaSewpViCompanyInformationSection({
  section,
  embedded = false
}: NasaSewpViCompanyInformationSectionProps) {
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();
  const leftColumn = section.items.slice(0, COLUMN_SPLIT);
  const rightColumn = section.items.slice(COLUMN_SPLIT);

  const columns = (
    <motion.div
      className="sewp-vi-company-info__columns"
      variants={containerVariants}
      initial={embedded ? "visible" : undefined}
      animate={embedded ? "visible" : undefined}
    >
      <CompanyInfoColumn items={leftColumn} />
      <CompanyInfoColumn items={rightColumn} />
    </motion.div>
  );

  if (embedded) {
    return <div className="sewp-vi-company-info sewp-vi-company-info--embedded">{columns}</div>;
  }

  return (
    <section className="sewp-vi-company-info" aria-labelledby="sewp-vi-company-info-heading">
      <motion.div
        className="sewp-vi-company-info__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.header className="sewp-vi-company-info__header" variants={itemVariants} transition={itemTransition}>
          <h2 id="sewp-vi-company-info-heading" className="sewp-vi-company-info__title">
            {section.title}
          </h2>
        </motion.header>

        {columns}
      </motion.div>
    </section>
  );
}
