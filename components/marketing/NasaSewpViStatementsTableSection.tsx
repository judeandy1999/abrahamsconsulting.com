"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useId, useState, type KeyboardEvent } from "react";
import type { NasaSewpViPageContent } from "../../src/content/schema";
import { NASA_SEWP_VI_HERO_ASSETS } from "../../src/content/nasa-sewp-vi";
import { accessibleExternalLinkLabel } from "../../lib/accessibility/accessible-external-label";
import { NasaSewpViObtainQuoteSection } from "./NasaSewpViObtainQuoteSection";
import { useMarketingMotionConfig } from "./marketing-motion";

type NasaSewpViStatementsTableSectionProps = {
  contractOverview: NasaSewpViPageContent["contractOverview"];
  gwac: NasaSewpViPageContent["gwacIdentificationStatement"];
  aboutSewp: NasaSewpViPageContent["aboutSewp"];
  fairOpportunity: NasaSewpViPageContent["fairOpportunityClause"];
  postDeliverySupport: NasaSewpViPageContent["postDeliverySupport"];
  orderTroubleshooting: NasaSewpViPageContent["orderTroubleshooting"];
  programManager: NasaSewpViPageContent["programManagerContact"];
  externalResources: NasaSewpViPageContent["externalResourceLinks"];
  obtainQuote: NasaSewpViPageContent["obtainQuote"];
};

type TabId =
  | "contract-overview"
  | "obtain-quote"
  | "gwac"
  | "fair-opportunity"
  | "post-delivery"
  | "order-troubleshooting"
  | "program-manager"
  | "external-resources";

type TabDefinition = {
  id: TabId;
  label: string;
};

const TABS: TabDefinition[] = [
  { id: "contract-overview", label: "Contract Overview" },
  { id: "obtain-quote", label: "How to Obtain a Quote" },
  { id: "gwac", label: "Official GWAC Identification Statement" },
  { id: "fair-opportunity", label: "Fair Opportunity Clause" },
  { id: "post-delivery", label: "Post-Delivery Support Information" },
  { id: "order-troubleshooting", label: "Order Troubleshooting Information" },
  { id: "program-manager", label: "Program Manager Contact Information" },
  { id: "external-resources", label: "External Resources" }
];

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

function PostDeliveryTopics({
  topics
}: {
  topics: NasaSewpViPageContent["postDeliverySupport"]["topics"];
}) {
  const baseId = useId();
  const [activeTopicId, setActiveTopicId] = useState(topics[0]?.id ?? "");
  const activeTopic = topics.find((topic) => topic.id === activeTopicId) ?? topics[0];

  if (!activeTopic) {
    return null;
  }

  function focusTopicAt(index: number) {
    const next = topics[(index + topics.length) % topics.length];
    setActiveTopicId(next.id);
    document.getElementById(`${baseId}-topic-tab-${next.id}`)?.focus();
  }

  function onTopicKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      focusTopicAt(index + 1);
      return;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      focusTopicAt(index - 1);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      focusTopicAt(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      focusTopicAt(topics.length - 1);
    }
  }

  return (
    <div className="sewp-vi-statements__topic-tabs">
      <div
        className="sewp-vi-statements__topic-tablist"
        role="tablist"
        aria-label="Post-delivery support topics"
      >
        {topics.map((topic, index) => {
          const isActive = topic.id === activeTopic.id;

          return (
            <button
              key={topic.id}
              id={`${baseId}-topic-tab-${topic.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`${baseId}-topic-panel-${topic.id}`}
              tabIndex={isActive ? 0 : -1}
              className={`sewp-vi-statements__topic-tab${isActive ? " sewp-vi-statements__topic-tab--active" : ""}`}
              onClick={() => setActiveTopicId(topic.id)}
              onKeyDown={(event) => onTopicKeyDown(event, index)}
            >
              {topic.title}
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-topic-panel-${activeTopic.id}`}
        role="tabpanel"
        aria-labelledby={`${baseId}-topic-tab-${activeTopic.id}`}
        className="sewp-vi-statements__topic-panel"
      >
        <p className="sewp-vi-statements__paragraph">{activeTopic.description}</p>
      </div>
    </div>
  );
}

export function NasaSewpViStatementsTableSection({
  contractOverview,
  gwac,
  aboutSewp,
  fairOpportunity,
  postDeliverySupport,
  orderTroubleshooting,
  programManager,
  externalResources,
  obtainQuote
}: NasaSewpViStatementsTableSectionProps) {
  const baseId = useId();
  const [activeTab, setActiveTab] = useState<TabId>("contract-overview");
  const { containerVariants, itemVariants, itemTransition, viewport } = useMarketingMotionConfig();
  const supportContact = postDeliverySupport.primaryContact;
  const fairOpportunityGuidance = fairOpportunity.officialGuidance;
  const activeIndex = TABS.findIndex((tab) => tab.id === activeTab);

  function focusTabAt(index: number) {
    const next = TABS[(index + TABS.length) % TABS.length];
    setActiveTab(next.id);
    document.getElementById(`${baseId}-tab-${next.id}`)?.focus();
  }

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      focusTabAt(index + 1);
      return;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      focusTabAt(index - 1);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      focusTabAt(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      focusTabAt(TABS.length - 1);
    }
  }

  return (
    <section className="sewp-vi-statements" aria-labelledby="sewp-vi-statements-heading">
      <motion.div
        className="sewp-vi-statements__inner"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.header className="sewp-vi-statements__header" variants={itemVariants} transition={itemTransition}>
          <h2 id="sewp-vi-statements-heading" className="sewp-vi-statements__title">
            {aboutSewp.title}
          </h2>
          <span className="sewp-vi-statements__logo">
            <Image
              src={NASA_SEWP_VI_HERO_ASSETS.nasaLogoSrc}
              alt={NASA_SEWP_VI_HERO_ASSETS.nasaLogoAlt}
              width={112}
              height={112}
              className="sewp-vi-statements__logo-image"
            />
          </span>
          {aboutSewp.paragraphs.map((paragraph) => (
            <p key={paragraph} className="sewp-vi-statements__intro">
              {paragraph}
            </p>
          ))}
        </motion.header>

        <motion.div className="sewp-vi-statements__layout" variants={itemVariants} transition={itemTransition}>
          <aside className="sewp-vi-statements__sidebar">
            <nav className="sewp-vi-statements__side-nav" aria-label="NASA SEWP VI details">
              <ul className="sewp-vi-statements__side-nav-list" role="tablist" aria-orientation="vertical">
                {TABS.map((tab, index) => {
                  const isActive = tab.id === activeTab;

                  return (
                    <li key={tab.id} role="presentation">
                      <button
                        id={`${baseId}-tab-${tab.id}`}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-controls={`${baseId}-panel-${tab.id}`}
                        tabIndex={isActive ? 0 : -1}
                        className={`sewp-vi-statements__side-nav-link${isActive ? " sewp-vi-statements__side-nav-link--active" : ""}`}
                        onClick={() => setActiveTab(tab.id)}
                        onKeyDown={(event) => onTabKeyDown(event, index)}
                      >
                        {tab.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          <div
            id={`${baseId}-panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${activeTab}`}
            className="sewp-vi-statements__panel"
          >
            {activeTab === "contract-overview" ? (
              <div id="sewp-vi-overview-heading">
                <p className="sewp-vi-statements__paragraph">{contractOverview.description}</p>
                <dl className="sewp-vi-statements__meta">
                  {contractOverview.items.map((item) => (
                    <div key={item.id} className="sewp-vi-statements__meta-row">
                      <dt>{item.label}</dt>
                      <dd>
                        <ContactValue value={item.value} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : null}

            {activeTab === "gwac" ? (
              <div>
                <p className="sewp-vi-statements__paragraph">{gwac.statement}</p>
              </div>
            ) : null}

            {activeTab === "fair-opportunity" ? (
              <div>
                {fairOpportunity.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="sewp-vi-statements__paragraph">
                    {paragraph}
                  </p>
                ))}
                <p className="sewp-vi-statements__paragraph">
                  {fairOpportunityGuidance.prefix}
                  <a
                    href={fairOpportunityGuidance.href}
                    className="sewp-vi-statements__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={accessibleExternalLinkLabel(fairOpportunityGuidance.linkLabel)}
                  >
                    {fairOpportunityGuidance.linkLabel}
                  </a>
                  {fairOpportunityGuidance.suffix}
                </p>
              </div>
            ) : null}

            {activeTab === "post-delivery" ? (
              <div>
                <p className="sewp-vi-statements__paragraph">{postDeliverySupport.intro}</p>

                <PostDeliveryTopics topics={postDeliverySupport.topics} />

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
              </div>
            ) : null}

            {activeTab === "order-troubleshooting" ? (
              <div>
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
              </div>
            ) : null}

            {activeTab === "program-manager" ? (
              <div>
                <div className="sewp-vi-statements__profile">
                  <p className="sewp-vi-statements__profile-name">{programManager.profile.name}</p>
                  <p className="sewp-vi-statements__profile-role">{programManager.profile.role}</p>

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
              </div>
            ) : null}

            {activeTab === "external-resources" ? (
              <div>
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
              </div>
            ) : null}

            {activeTab === "obtain-quote" ? (
              <NasaSewpViObtainQuoteSection section={obtainQuote} embedded />
            ) : null}
          </div>
        </motion.div>

        <p className="sewp-vi-statements__caption">
          Showing {TABS[activeIndex]?.label ?? "details"} for Abrahams Consulting LLC NASA SEWP VI
        </p>
      </motion.div>
    </section>
  );
}
