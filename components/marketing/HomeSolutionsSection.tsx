import Link from "next/link";
import type { SiteContent } from "../../src/content/schema";
import { IconArrowRight } from "./NavIcons";
import { SolutionPillarIcon } from "./SolutionPillarIcon";

type HomeSolutionsSectionProps = {
  site: SiteContent;
};

export function HomeSolutionsSection({ site }: HomeSolutionsSectionProps) {
  const { homeSolutions } = site;

  return (
    <section className="home-solutions" aria-labelledby="home-solutions-heading">
      <div className="home-solutions__inner">
        <h2 id="home-solutions-heading" className="home-solutions__title">
          {homeSolutions.title}
        </h2>

        <ul className="home-solutions__grid">
          {homeSolutions.items.map((item) => (
            <li key={item.id} className="home-solutions__item">
              <span className="home-solutions__icon home-pillar__icon" aria-hidden>
                <SolutionPillarIcon name={item.icon} />
              </span>
              <h3 className="home-solutions__item-title">{item.title}</h3>
              <p className="home-solutions__item-description">{item.description}</p>
            </li>
          ))}
        </ul>

        <div className="home-solutions__actions">
          <Link href={homeSolutions.ctaHref} className="home-solutions__cta">
            {homeSolutions.ctaLabel}
            <IconArrowRight className="home-solutions__cta-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
}
