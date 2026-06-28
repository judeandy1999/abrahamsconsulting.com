"use client";

import { motion } from "framer-motion";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { IconArrowRight } from "./NavIcons";
import { NasaSewpViContractOverviewSection } from "./NasaSewpViContractOverviewSection";
import { NasaSewpViCompetencyIcon } from "./NasaSewpViCompetencyIcon";
import { NasaSewpViOrderingGuideCard } from "./NasaSewpViOrderingGuideCard";
import { useMarketingMotionConfig } from "./marketing-motion";

type NasaSewpViBodyProps = {
  content: Omit<NasaSewpViPageContent, "hero">;
};

function SectionHeader({ title, id }: { title: string; id: string }) {
  return (
    <header className="sewp-vi-section__header">
      <h2 id={id} className="sewp-vi-section__title">
        {title}
      </h2>
    </header>
  );
}

export function NasaSewpViBody({ content }: NasaSewpViBodyProps) {
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();
  const federalMailto = `mailto:${content.federalSalesContact.email}`;

  return (
    <>
      <NasaSewpViContractOverviewSection section={content.contractOverview} />

      <section className="sewp-vi-section sewp-vi-section--alt" aria-labelledby="sewp-vi-about-sewp-heading">
        <motion.div
          className="sewp-vi-section__inner sewp-vi-section__inner--narrow"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={itemVariants} transition={itemTransition}>
            <SectionHeader title={content.aboutSewp.title} id="sewp-vi-about-sewp-heading" />
          </motion.div>
          {content.aboutSewp.paragraphs.map((paragraph) => (
            <motion.p key={paragraph} className="sewp-vi-section__text" variants={itemVariants} transition={itemTransition}>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </section>

      <section className="sewp-vi-section" aria-labelledby="sewp-vi-about-company-heading">
        <motion.div
          className="sewp-vi-section__inner sewp-vi-section__inner--narrow"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={itemVariants} transition={itemTransition}>
            <SectionHeader title={content.aboutCompany.title} id="sewp-vi-about-company-heading" />
          </motion.div>
          {content.aboutCompany.paragraphs.map((paragraph) => (
            <motion.p key={paragraph} className="sewp-vi-section__text" variants={itemVariants} transition={itemTransition}>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </section>

      <section className="sewp-vi-section" aria-labelledby="sewp-vi-why-heading">
        <motion.div
          className="sewp-vi-section__inner"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={itemVariants} transition={itemTransition}>
            <SectionHeader title={content.whyChoose.title} id="sewp-vi-why-heading" />
          </motion.div>
          <motion.ul className="sewp-vi-why__grid" variants={containerVariants}>
            {content.whyChoose.items.map((item) => (
              <motion.li key={item.id} className="sewp-vi-why__card" variants={itemVariants} transition={itemTransition}>
                <p className="sewp-vi-why__title">{item.title}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>

      <section className="sewp-vi-section sewp-vi-section--alt" aria-labelledby="sewp-vi-competencies-heading">
        <motion.div
          className="sewp-vi-section__inner"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={itemVariants} transition={itemTransition}>
            <SectionHeader title={content.coreCompetencies.title} id="sewp-vi-competencies-heading" />
          </motion.div>
          <motion.ul className="sewp-vi-competencies__grid" variants={containerVariants}>
            {content.coreCompetencies.items.map((item) => (
              <motion.li key={item.id} className="sewp-vi-competencies__item" variants={itemVariants} transition={itemTransition}>
                <span className="sewp-vi-competencies__icon home-pillar__icon" aria-hidden="true">
                  <NasaSewpViCompetencyIcon name={item.icon} />
                </span>
                <h3 className="sewp-vi-competencies__title">{item.title}</h3>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>

      <section className="sewp-vi-section" aria-labelledby="sewp-vi-category-a-heading">
        <motion.div
          className="sewp-vi-section__inner"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={itemVariants} transition={itemTransition}>
            <SectionHeader title={content.categoryACapabilities.title} id="sewp-vi-category-a-heading" />
          </motion.div>
          <motion.ul className="sewp-vi-tag-grid" variants={containerVariants}>
            {content.categoryACapabilities.items.map((item) => (
              <motion.li key={item} className="sewp-vi-tag-grid__item" variants={itemVariants} transition={itemTransition}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>

      <section className="sewp-vi-section sewp-vi-section--alt" aria-labelledby="sewp-vi-vehicles-heading">
        <motion.div
          className="sewp-vi-section__inner sewp-vi-section__inner--narrow"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={itemVariants} transition={itemTransition}>
            <SectionHeader title={content.contractVehicles.title} id="sewp-vi-vehicles-heading" />
          </motion.div>
          <motion.ul className="sewp-vi-vehicles__list" variants={containerVariants}>
            {content.contractVehicles.items.map((item) => (
              <motion.li key={item} className="sewp-vi-vehicles__item" variants={itemVariants} transition={itemTransition}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>

      <section className="sewp-vi-section" aria-labelledby="sewp-vi-ordering-heading">
        <motion.div
          className="sewp-vi-section__inner sewp-vi-section__inner--narrow"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={itemVariants} transition={itemTransition}>
            <SectionHeader title={content.orderingProcess.title} id="sewp-vi-ordering-heading" />
          </motion.div>
          <motion.ol className="sewp-vi-ordering__steps" variants={containerVariants}>
            {content.orderingProcess.steps.map((step, index) => (
              <motion.li key={step.id} className="sewp-vi-ordering__step" variants={itemVariants} transition={itemTransition}>
                <span className="sewp-vi-ordering__step-number" aria-hidden="true">
                  {index + 1}
                </span>
                <p className="sewp-vi-ordering__step-text">{step.description}</p>
              </motion.li>
            ))}
          </motion.ol>
          <motion.div className="sewp-vi-ordering__actions" variants={itemVariants} transition={itemTransition}>
            <NasaSewpViOrderingGuideCard guide={content.resources.orderingGuide} />
            <a href={federalMailto} className="btn btn--primary sewp-vi-ordering__cta">
              {content.federalSalesContact.ctaLabel}
              <IconArrowRight className="btn__icon" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      <section className="sewp-vi-section sewp-vi-section--alt" aria-labelledby="sewp-vi-experience-heading">
        <motion.div
          className="sewp-vi-section__inner"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={itemVariants} transition={itemTransition}>
            <SectionHeader title={content.pastPerformance.title} id="sewp-vi-experience-heading" />
          </motion.div>
          <motion.ul className="sewp-vi-past-performance__grid" variants={containerVariants}>
            {content.pastPerformance.items.map((item) => (
              <motion.li key={item.id} className="sewp-vi-past-performance__card" variants={itemVariants} transition={itemTransition}>
                <article>
                  <h3 className="sewp-vi-past-performance__org">{item.organization}</h3>
                  {item.description ? <p className="sewp-vi-past-performance__desc">{item.description}</p> : null}
                </article>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>

      <section className="sewp-vi-section" aria-labelledby="sewp-vi-company-info-heading">
        <motion.div
          className="sewp-vi-section__inner"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={itemVariants} transition={itemTransition}>
            <SectionHeader title={content.companyInformation.title} id="sewp-vi-company-info-heading" />
          </motion.div>
          <motion.dl className="sewp-vi-company__grid" variants={containerVariants}>
            {content.companyInformation.items.map((item) => (
              <motion.div key={item.id} className="sewp-vi-company__item" variants={itemVariants} transition={itemTransition}>
                <dt className="sewp-vi-company__label">{item.label}</dt>
                <dd className="sewp-vi-company__value">
                  {item.href ? (
                    <a href={item.href} className="sewp-vi-company__link">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>
      </section>

      <section className="sewp-vi-section sewp-vi-section--alt" aria-labelledby="sewp-vi-certifications-heading">
        <motion.div
          className="sewp-vi-section__inner"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={itemVariants} transition={itemTransition}>
            <SectionHeader title={content.certifications.title} id="sewp-vi-certifications-heading" />
          </motion.div>
          <motion.ul className="sewp-vi-tag-grid sewp-vi-tag-grid--certifications" variants={containerVariants}>
            {content.certifications.items.map((item) => (
              <motion.li key={item} className="sewp-vi-tag-grid__item" variants={itemVariants} transition={itemTransition}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>

      <section className="sewp-vi-contact" aria-labelledby="sewp-vi-contact-heading">
        <motion.div
          className="sewp-vi-contact__inner"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h2 id="sewp-vi-contact-heading" className="sewp-vi-contact__title" variants={itemVariants} transition={itemTransition}>
            {content.federalSalesContact.title}
          </motion.h2>
          <motion.p className="sewp-vi-contact__prompt" variants={itemVariants} transition={itemTransition}>
            {content.federalSalesContact.prompt}
          </motion.p>
          <motion.p className="sewp-vi-contact__subtitle" variants={itemVariants} transition={itemTransition}>
            {content.federalSalesContact.subtitle}
          </motion.p>
          <motion.dl className="sewp-vi-contact__details" variants={itemVariants} transition={itemTransition}>
            <div className="sewp-vi-contact__detail">
              <dt>Email</dt>
              <dd>
                <a href={federalMailto}>{content.federalSalesContact.email}</a>
              </dd>
            </div>
            <div className="sewp-vi-contact__detail">
              <dt>Phone</dt>
              <dd>
                {content.federalSalesContact.phones.map((phone, index) => (
                  <span key={phone}>
                    {index > 0 ? <br /> : null}
                    <a href={`tel:${phone.replace(/[^\d+]/g, "")}`}>{phone}</a>
                  </span>
                ))}
              </dd>
            </div>
          </motion.dl>
          <motion.div className="sewp-vi-contact__actions" variants={itemVariants} transition={itemTransition}>
            <a href={federalMailto} className="btn btn--primary sewp-vi-contact__cta">
              {content.federalSalesContact.ctaLabel}
              <IconArrowRight className="btn__icon" />
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
