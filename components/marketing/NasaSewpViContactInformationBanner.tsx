import type { NasaSewpViPageContent } from "../../src/content/schema";
import { accessibleExternalLinkLabel } from "../../lib/accessibility/accessible-external-label";

type NasaSewpViContactInformationBannerProps = {
  banner: NasaSewpViPageContent["contactInformationBanner"];
};

type ContactEntry = NasaSewpViPageContent["contactInformationBanner"]["contacts"][number];

function ContactColumn({ contact }: { contact: ContactEntry }) {
  return (
    <div className="sewp-vi-contact-banner__column">
      <h3 className="sewp-vi-contact-banner__column-heading">{contact.heading}</h3>
      {contact.name ? <p className="sewp-vi-contact-banner__name">{contact.name}</p> : null}
      {contact.role ? <p className="sewp-vi-contact-banner__role">{contact.role}</p> : null}
      {contact.phone ? (
        <p className="sewp-vi-contact-banner__detail">
          {contact.phoneHref ? (
            <a href={contact.phoneHref} className="sewp-vi-contact-banner__link">
              {contact.phone}
            </a>
          ) : (
            contact.phone
          )}
        </p>
      ) : null}
      {contact.email ? (
        <p className="sewp-vi-contact-banner__detail">
          {contact.emailHref ? (
            <a href={contact.emailHref} className="sewp-vi-contact-banner__link">
              {contact.email}
            </a>
          ) : (
            contact.email
          )}
        </p>
      ) : null}
    </div>
  );
}

export function NasaSewpViContactInformationBanner({ banner }: NasaSewpViContactInformationBannerProps) {
  return (
    <article className="sewp-vi-contact-banner" aria-labelledby="sewp-vi-contact-banner-heading">
      <div className="sewp-vi-contact-banner__grid">
        <div className="sewp-vi-contact-banner__intro">
          <h2 id="sewp-vi-contact-banner-heading" className="sewp-vi-contact-banner__title">
            {banner.title}
          </h2>
          <p className="sewp-vi-contact-banner__poc">{banner.companyPocLabel}</p>
        </div>

        {banner.contacts.map((contact) => (
          <ContactColumn key={contact.id} contact={contact} />
        ))}
      </div>

      <p className="sewp-vi-contact-banner__footer">
        {banner.footerText}{" "}
        <a
          href={banner.footerLinkHref}
          className="sewp-vi-contact-banner__link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={accessibleExternalLinkLabel(banner.footerLinkLabel)}
        >
          {banner.footerLinkLabel}
        </a>
      </p>
    </article>
  );
}
