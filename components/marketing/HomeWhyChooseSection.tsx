import type { SiteContent } from "../../src/content/schema";
import { WhyChooseStatIcon } from "./WhyChooseStatIcon";

type HomeWhyChooseSectionProps = {
  site: SiteContent;
};

export function HomeWhyChooseSection({ site }: HomeWhyChooseSectionProps) {
  const { homeWhyChoose } = site;

  return (
    <section className="home-why-choose" aria-labelledby="home-why-choose-heading">
      <div className="home-why-choose__inner">
        <div className="home-why-choose__intro">
          <h2 id="home-why-choose-heading" className="home-why-choose__title">
            {homeWhyChoose.title}
          </h2>
          <p className="home-why-choose__body">{homeWhyChoose.body}</p>
        </div>

        <ul className="home-why-choose__stats">
          {homeWhyChoose.stats.map((stat) => (
            <li key={stat.id} className="home-why-choose__stat">
              <span className="home-why-choose__stat-icon" aria-hidden>
                <WhyChooseStatIcon name={stat.icon} />
              </span>
              <p className="home-why-choose__stat-value">{stat.value}</p>
              <p className="home-why-choose__stat-label">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
