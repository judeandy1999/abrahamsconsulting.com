import Image from "next/image";
import Link from "next/link";
import type {
  CapabilitiesStatementFederalPageContent,
  CapabilitiesStatementProductsPageContent,
  CapabilitiesStatementServicesPageContent
} from "../../src/content/schema";
import { ContactUsIcon } from "./ContactUsIcon";
import { SolutionsHero } from "./SolutionsHero";

type ServicesContent = CapabilitiesStatementServicesPageContent;
type ProductsContent = CapabilitiesStatementProductsPageContent;
type FederalContent = CapabilitiesStatementFederalPageContent;

type CapabilitiesStatementPageContentProps =
  | { variant: "services"; content: ServicesContent }
  | { variant: "products"; content: ProductsContent }
  | { variant: "federal"; content: FederalContent };

function CatalogLink({ href, label }: { href?: string; label: string }) {
  if (!href) {
    return <>{label}</>;
  }

  if (href.startsWith("http://") || href.startsWith("https://")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }

  return <Link href={href}>{label}</Link>;
}

function ServicesCatalog({
  services
}: {
  services: ServicesContent["services"] | FederalContent["services"];
}) {
  return (
    <div>
      <h2 id="cap-stmt-catalog-heading" className="cap-stmt-services__section-title">
        {services.title}
      </h2>
      <div className="cap-stmt-services__service-columns">
        {services.columns.map((column, columnIndex) => (
          <ul key={`services-col-${columnIndex}`} className="cap-stmt-services__service-list">
            {column.map((item) => (
              <li key={item.label}>
                <CatalogLink href={item.href} label={item.label} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

function CatalogSection(props: CapabilitiesStatementPageContentProps) {
  if (props.variant === "services" || props.variant === "federal") {
    return <ServicesCatalog services={props.content.services} />;
  }

  const { content } = props;
  const title = content.products.href ? (
    <a href={content.products.href} target="_blank" rel="noopener noreferrer">
      {content.products.title}
    </a>
  ) : (
    content.products.title
  );

  return (
    <div>
      <h2 id="cap-stmt-catalog-heading" className="cap-stmt-services__section-title">
        {title}
      </h2>
      <div className="cap-stmt-services__product-categories">
        {content.products.categories.map((category) => (
          <div key={category.id} className="cap-stmt-services__product-category">
            <h3 className="cap-stmt-services__product-category-title">{category.title}</h3>
            <ul className="cap-stmt-services__service-list">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CapabilitiesStatementPageContent(props: CapabilitiesStatementPageContentProps) {
  const { content } = props;
  const statementFile = props.variant === "federal" ? props.content.statementFile : null;

  return (
    <div className="cap-stmt-services">
      <SolutionsHero hero={content.hero} headingId="cap-stmt-hero-heading" />

      <section className="cap-stmt-services__intro" aria-labelledby="cap-stmt-intro-heading">
        <div className="cap-stmt-services__inner cap-stmt-services__intro-grid">
          <div className="cap-stmt-services__contacts">
            <h2 id="cap-stmt-intro-heading" className="cap-stmt-services__section-title">
              Leadership Contact
            </h2>
            <ul className="cap-stmt-services__people">
              {content.contacts.people.map((person) => (
                <li key={`${person.name}-${person.role}`}>
                  <span className="cap-stmt-services__person-name">{person.name}</span>
                  <span className="cap-stmt-services__person-role">{person.role}</span>
                </li>
              ))}
            </ul>
            <dl className="cap-stmt-services__contact-meta">
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${content.contacts.phone.replace(/[^\d+]/g, "")}`}>{content.contacts.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Cell</dt>
                <dd>
                  <a href={`tel:${content.contacts.cell.replace(/[^\d+]/g, "")}`}>{content.contacts.cell}</a>
                </dd>
              </div>
              <div>
                <dt>Fax</dt>
                <dd>{content.contacts.fax}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${content.contacts.email}`}>{content.contacts.email}</a>
                </dd>
              </div>
              <div>
                <dt>Web</dt>
                <dd>
                  <Link href={content.contacts.websiteHref}>{content.contacts.websiteLabel}</Link>
                </dd>
              </div>
              {statementFile ? (
                <div>
                  <dt>File</dt>
                  <dd>
                    <a href={statementFile.href} download className="cap-stmt-services__file-link">
                      {statementFile.label}
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>
          </div>

          <div className="cap-stmt-services__certs">
            <div className="cap-stmt-services__certs-header">
              <h2 className="cap-stmt-services__section-title">{content.certifications.title}</h2>
              <Link href={content.certifications.href} className="cap-stmt-services__certs-link">
                View all certifications
              </Link>
            </div>
            <ul className="cap-stmt-services__cert-grid">
              {content.certifications.items.map((item) => (
                <li key={item.id}>
                  <Link href={content.certifications.href} className="cap-stmt-services__cert-link">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      width={140}
                      height={90}
                      className="cap-stmt-services__cert-image"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="cap-stmt-services__focus" aria-label="Primary service focus areas">
        <div className="cap-stmt-services__inner">
          <ul className="cap-stmt-services__focus-list">
            {content.focusAreas.map((area) => (
              <li key={area.id} className="cap-stmt-services__focus-item">
                <span className="cap-stmt-services__focus-title">{area.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cap-stmt-services__overview" aria-labelledby="cap-stmt-overview-heading">
        <div className="cap-stmt-services__inner cap-stmt-services__overview-inner">
          <h2 id="cap-stmt-overview-heading" className="cap-stmt-services__section-title">
            {content.overview.title}
          </h2>
          <p className="cap-stmt-services__overview-body">{content.overview.body}</p>
        </div>
      </section>

      <section className="cap-stmt-services__services-partners" aria-labelledby="cap-stmt-catalog-heading">
        <div className="cap-stmt-services__inner cap-stmt-services__split">
          <CatalogSection {...props} />

          <div aria-labelledby="cap-stmt-partners-heading">
            <h2 id="cap-stmt-partners-heading" className="cap-stmt-services__section-title">
              {content.partners.title}
            </h2>
            <ul className="cap-stmt-services__partner-grid">
              {content.partners.items.map((partner) => (
                <li key={partner.id} className="cap-stmt-services__partner-item">
                  <Image
                    src={partner.imageSrc}
                    alt={`${partner.name} logo`}
                    width={120}
                    height={64}
                    className="cap-stmt-services__partner-image"
                    unoptimized={partner.imageSrc.endsWith(".svg")}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="cap-stmt-services__performance" aria-labelledby="cap-stmt-performance-heading">
        <div className="cap-stmt-services__inner">
          <h2 id="cap-stmt-performance-heading" className="cap-stmt-services__section-title">
            {content.pastPerformance.title}
          </h2>
          <ul className="cap-stmt-services__performance-list">
            {content.pastPerformance.items.map((item) => (
              <li key={item.id}>{item.body}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cap-stmt-services__naics" aria-labelledby="cap-stmt-naics-heading">
        <div className="cap-stmt-services__inner">
          <h2 id="cap-stmt-naics-heading" className="cap-stmt-services__section-title">
            {content.naics.title}
          </h2>
          <ul className="cap-stmt-services__naics-grid">
            {content.naics.items.map((item) => (
              <li key={item.code} className="cap-stmt-services__naics-item">
                <span className="cap-stmt-services__naics-code">{item.code}</span>
                <span className="cap-stmt-services__naics-label">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cap-stmt-services__cta" aria-labelledby="cap-stmt-cta-heading">
        <div className="cap-stmt-services__cta-inner">
          <div className="cap-stmt-services__cta-copy">
            <h2 id="cap-stmt-cta-heading" className="cap-stmt-services__cta-title">
              {content.cta.title}
            </h2>
            <p className="cap-stmt-services__cta-description">{content.cta.description}</p>
          </div>
          <Link href={content.cta.href} className="btn btn--primary cap-stmt-services__cta-button">
            <ContactUsIcon name="mail" className="cap-stmt-services__cta-button-icon" />
            {content.cta.buttonLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}
