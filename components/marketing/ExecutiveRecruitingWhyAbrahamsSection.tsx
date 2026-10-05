import Image from "next/image";
import type { ExecutiveRecruitingPageContent } from "../../src/content/schema";

type ExecutiveRecruitingWhyAbrahamsSectionProps = {
  section: ExecutiveRecruitingPageContent["whyAbrahamsSection"];
};

export function ExecutiveRecruitingWhyAbrahamsSection({ section }: ExecutiveRecruitingWhyAbrahamsSectionProps) {
  return (
    <section className="exec-recruiting-why" aria-labelledby="exec-recruiting-why-heading">
      <div className="exec-recruiting-why__scene" aria-hidden="true">
        <div className="exec-recruiting-why__scene-media">
          <Image
            src={section.sidebarImageSrc}
            alt=""
            fill
            sizes="100vw"
            className="exec-recruiting-why__scene-image"
          />
        </div>
        <div className="exec-recruiting-why__scene-gradient" />
      </div>

      <div className="exec-recruiting-why__inner">
        <header className="exec-recruiting-why__header">
          <p className="exec-recruiting-why__eyebrow">{section.eyebrow}</p>
          <h2 id="exec-recruiting-why-heading" className="exec-recruiting-why__title">
            {section.title}
          </h2>
        </header>

        <div className="exec-recruiting-why__body">
          <div className="exec-recruiting-why__table-wrap">
            <table className="exec-recruiting-why__table">
              <thead>
                <tr>
                  <th scope="col" className="exec-recruiting-why__th exec-recruiting-why__th--traditional">
                    {section.traditionalColumnLabel}
                  </th>
                  <th scope="col" className="exec-recruiting-why__th exec-recruiting-why__th--abrahams">
                    {section.abrahamsColumnLabel}
                  </th>
                </tr>
              </thead>
              <tbody>
                {section.comparisonRows.map((row) => (
                  <tr key={row.id}>
                    <td className="exec-recruiting-why__td exec-recruiting-why__td--traditional">{row.traditional}</td>
                    <td className="exec-recruiting-why__td exec-recruiting-why__td--abrahams">{row.abrahams}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <aside className="exec-recruiting-why__aside" aria-label="Why Abrahams">
            <p className="exec-recruiting-why__aside-quote">{section.sidebarQuote}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
