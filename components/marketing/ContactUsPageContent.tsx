import { loadMarketingContent } from "../../lib/content/load-content";
import { ContactUsIcon } from "./ContactUsIcon";
import { HubSpotContactForm } from "./HubSpotContactForm";

function ChannelValue({ value, href }: { value: string; href?: string }) {
  const lines = value.split("\n");

  if (href) {
    return (
      <a href={href} className="contact-us__channel-link">
        {lines.map((line, index) => (
          <span key={index}>
            {index > 0 ? <br /> : null}
            {line}
          </span>
        ))}
      </a>
    );
  }

  return (
    <>
      {lines.map((line, index) => (
        <span key={index}>
          {index > 0 ? <br /> : null}
          {line}
        </span>
      ))}
    </>
  );
}

export function ContactUsPageContent() {
  const { site } = loadMarketingContent();
  const { contactPage } = site;

  return (
    <main id="main-content" className="marketing-main marketing-main--contact-us">
      <div className="contact-us">
        <div className="contact-us__card">
          <div className="contact-us__layout">
            <section className="contact-us__info" aria-labelledby="contact-us-heading">
              <header className="contact-us__header">
                <h1 id="contact-us-heading" className="contact-us__title">
                  {contactPage.title}
                </h1>
                <p className="contact-us__description">{contactPage.description}</p>
              </header>

              <ul className="contact-us__channels">
                {contactPage.channels.map((channel) => (
                  <li key={channel.id} className="contact-us__channel">
                    <span className="contact-us__channel-icon" aria-hidden="true">
                      <ContactUsIcon name={channel.icon} className="contact-us__channel-glyph" />
                    </span>
                    <div className="contact-us__channel-copy">
                      <p className="contact-us__channel-label">{channel.label}</p>
                      <p className="contact-us__channel-value">
                        <ChannelValue value={channel.value} href={channel.href} />
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <HubSpotContactForm config={contactPage.hubspotForm} />
          </div>
        </div>
      </div>
    </main>
  );
}
