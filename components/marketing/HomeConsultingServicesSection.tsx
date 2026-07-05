import Link from "next/link";
import type { SiteContent } from "../../src/content/schema";
import { ConsultingServiceIcon } from "./ConsultingServiceIcon";
import { IconArrowRight } from "./NavIcons";

type HomeConsultingServicesSectionProps = {
  site: SiteContent;
};

export function HomeConsultingServicesSection({ site }: HomeConsultingServicesSectionProps) {
  const { homeConsultingServices } = site;

  return (
    <section className="home-consulting" aria-labelledby="home-consulting-heading">
      <div className="home-consulting__inner">
        <div className="home-consulting__header">
          <h2 id="home-consulting-heading" className="home-consulting__title">
            {homeConsultingServices.title}
          </h2>
          <p className="home-consulting__subtitle">{homeConsultingServices.subtitle}</p>
        </div>

        <ul className="home-consulting__grid">
          {homeConsultingServices.items.map((item) => (
            <li key={item.id} className="home-consulting__item">
              <span className="home-consulting__icon home-pillar__icon" aria-hidden>
                <ConsultingServiceIcon name={item.icon} />
              </span>
              <h3 className="home-consulting__item-title">{item.title}</h3>
              <p className="home-consulting__item-description">{item.description}</p>
            </li>
          ))}
        </ul>

        <div className="home-consulting__actions">
          <Link href={homeConsultingServices.ctaHref} className="home-consulting__cta">
            {homeConsultingServices.ctaLabel}
            <IconArrowRight className="home-consulting__cta-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
}
