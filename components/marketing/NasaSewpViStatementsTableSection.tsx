"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { accessibleExternalLinkLabel } from "../../lib/accessibility/accessible-external-label";
import { useMarketingMotionConfig } from "./marketing-motion";

type NasaSewpViStatementsTableSectionProps = {
  gwac: NasaSewpViPageContent["gwacIdentificationStatement"];
  aboutSewp: NasaSewpViPageContent["aboutSewp"];
  fairOpportunity: NasaSewpViPageContent["fairOpportunityClause"];
  postDeliverySupport: NasaSewpViPageContent["postDeliverySupport"];
  orderTroubleshooting: NasaSewpViPageContent["orderTroubleshooting"];
  programManager: NasaSewpViPageContent["programManagerContact"];
  externalResources: NasaSewpViPageContent["externalResourceLinks"];
};

function ContactValue({
  value,
  href,
  ariaLabel
}: {
  value: string;
  href?: string;
  ariaLabel?: string;
}) {
  if (href) {
    return (
      <a href={href} className="sewp-vi-statements__link" aria-label={ariaLabel ?? value}>
        {value}
      </a>
    );
  }

  return (
    <>
      {value.split("\n").map((line, index) => (
        <span key={index}>
          {index > 0 ? <br /> : null}
          {line}
        </span>
      ))}
    </>
  );
}

export function NasaSewpViStatementsTableSection({
  gwac,
  aboutSewp,
  fairOpportunity,
  postDeliverySupport,
  orderTroubleshooting,
  programManager,
  externalResources
}: NasaSewpViStatementsTableSectionProps) {
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();
  const clause = fairOpportunity.clause;
  const programManagerTitle = `${programManager.titlePrimary} ${programManager.titleSecondary}`;
  const supportContact = postDeliverySupport.primaryContact;

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
            NASA SEWP VI Details
          </h2>

          <div className="sewp-vi-statements__table-wrap">
            <table className="sewp-vi-statements__table">
              <caption className="sewp-vi-statements__caption">
                Official identification, policy statements, post-delivery support, order
                troubleshooting, program manager contact, and external resources for Abrahams
                Consulting LLC NASA SEWP VI
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

                <tr>
                  <th scope="row">{postDeliverySupport.title}</th>
                  <td>
                    <p className="sewp-vi-statements__paragraph">{postDeliverySupport.intro}</p>

                    <div className="sewp-vi-statements__subsections">
                      {postDeliverySupport.topics.map((topic) => (
                        <div key={topic.id} className="sewp-vi-statements__subsection">
                          <h3 className="sewp-vi-statements__subsection-title">{topic.title}</h3>
                          <p className="sewp-vi-statements__paragraph">{topic.description}</p>
                        </div>
                      ))}
                    </div>

                    <div className="sewp-vi-statements__profile">
                      <p className="sewp-vi-statements__subsection-title">{supportContact.heading}</p>
                      <p className="sewp-vi-statements__profile-name">{supportContact.name}</p>
                      <p className="sewp-vi-statements__profile-role">{supportContact.role}</p>

                      <dl className="sewp-vi-statements__meta">
                        {supportContact.contacts.map((contact) => (
                          <div key={contact.id} className="sewp-vi-statements__meta-row">
                            <dt>{contact.label}</dt>
                            <dd>
                              <ContactValue
                                value={contact.value}
                                href={contact.href}
                                ariaLabel={`${contact.label}: ${contact.value}`}
                              />
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">{orderTroubleshooting.title}</th>
                  <td>
                    {orderTroubleshooting.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="sewp-vi-statements__paragraph">
                        {paragraph}
                      </p>
                    ))}

                    <div className="sewp-vi-statements__contact-grid">
                      {orderTroubleshooting.contacts.map((contactGroup) => (
                        <div key={contactGroup.id} className="sewp-vi-statements__profile">
                          <p className="sewp-vi-statements__subsection-title">{contactGroup.heading}</p>
                          <p className="sewp-vi-statements__profile-name">{contactGroup.name}</p>

                          <dl className="sewp-vi-statements__meta">
                            {contactGroup.contacts.map((contact) => (
                              <div key={contact.id} className="sewp-vi-statements__meta-row">
                                <dt>{contact.label}</dt>
                                <dd>
                                  <ContactValue
                                    value={contact.value}
                                    href={contact.href}
                                    ariaLabel={`${contact.label}: ${contact.value}`}
                                  />
                                </dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">{programManagerTitle}</th>
                  <td>
                    <div className="sewp-vi-statements__profile">
                      <p className="sewp-vi-statements__profile-name">{programManager.profile.name}</p>

                      <dl className="sewp-vi-statements__meta">
                        {programManager.profile.contacts.map((contact) => (
                          <div key={contact.id} className="sewp-vi-statements__meta-row">
                            <dt>{contact.label}</dt>
                            <dd>
                              <ContactValue
                                value={contact.value}
                                href={contact.href}
                                ariaLabel={`${contact.label}: ${contact.value}`}
                              />
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <div className="sewp-vi-statements__meta sewp-vi-statements__meta--secondary">
                      <p className="sewp-vi-statements__paragraph">{programManager.intro}</p>

                      <dl className="sewp-vi-statements__meta">
                        {programManager.details.map((detail) => (
                          <div key={detail.id} className="sewp-vi-statements__meta-row">
                            <dt>{detail.label}</dt>
                            <dd>
                              <ContactValue value={detail.value} />
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">{externalResources.heading}</th>
                  <td>
                    <ul className="sewp-vi-statements__resources">
                      {externalResources.cards.map((card) => (
                        <li key={card.id} className="sewp-vi-statements__resource">
                          <p className="sewp-vi-statements__paragraph">{card.description}</p>
                          <p className="sewp-vi-statements__resource-action">
                            <a
                              href={card.href}
                              className="sewp-vi-statements__resource-link"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={accessibleExternalLinkLabel(card.ctaLabel)}
                            >
                              <ExternalLink size={16} strokeWidth={1.75} aria-hidden="true" />
                              {card.ctaLabel}
                            </a>
                          </p>
                        </li>
                      ))}
                    </ul>
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
