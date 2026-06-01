import type { Metadata } from "next";
import Link from "next/link";
import { loadMarketingContent } from "../../../lib/content/load-content";
import type { ConsultationField } from "../../../src/content/schema";
import { buildMarketingMetadata } from "../../../lib/seo/metadata";
import { getStaticPageSeo } from "../../../lib/seo/page-seo";

export const dynamic = "force-static";

export const metadata: Metadata = buildMarketingMetadata(getStaticPageSeo("/consultation")!);

function fieldHintId(name: string) {
  return `${name}-hint`;
}

function renderField(field: ConsultationField) {
  const hintId = fieldHintId(field.name);
  const commonProps = {
    id: field.name,
    name: field.name,
    required: field.required,
    placeholder: field.placeholder,
    className: "marketing-main__field",
    "aria-describedby": field.required ? hintId : undefined
  };

  if (field.type === "textarea") {
    return <textarea {...commonProps} rows={5} />;
  }

  if (field.type === "select") {
    return (
      <select {...commonProps} defaultValue="">
        <option value="" disabled>
          Select an option
        </option>
        {(field.options ?? []).map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  return <input {...commonProps} type={field.type} />;
}

export default function ConsultationPage() {
  const { site } = loadMarketingContent();
  const { consultationForm } = site;

  return (
    <main id="main-content" className="marketing-main">
      <div className="marketing-main__inner">
        <h1>{site.consultationCta.label}</h1>
        <p>
          Share your timeline, delivery priorities, and procurement context so we can recommend the right consulting or
          staffing path.
        </p>

        <form action="/api/lead" method="POST" className="marketing-main__form">
          <input
            type="text"
            name={consultationForm.honeypotFieldName}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="marketing-main__honeypot"
          />

          <fieldset style={{ border: 0, margin: 0, padding: 0 }}>
            <legend className="sr-only">Consultation request details</legend>
            <div className="marketing-main__form-grid">
              {consultationForm.fields.map((field) => {
                const hintId = fieldHintId(field.name);

                return (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="marketing-main__label">
                      {field.label}
                      {field.required ? " *" : ""}
                    </label>
                    {renderField(field)}
                    {field.required ? (
                      <p id={hintId} className="marketing-main__hint">
                        Required field
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </fieldset>

          <button type="submit" className="btn btn--primary marketing-main__submit">
            Submit consultation request
          </button>
        </form>

        <section className="marketing-main__section" aria-label="Consultation next steps">
          <h2>Prepare before we connect</h2>
          <ul>
            <li>Outline the mission outcomes and delivery constraints your team is managing.</li>
            <li>List the capability areas where you need consulting or staffing support first.</li>
            <li>Identify contract vehicles your organization already prefers or requires.</li>
          </ul>
        </section>
        <p style={{ marginBottom: 0 }}>
          Need more context first? Explore <Link href="/services">service capabilities</Link> or review{" "}
          <Link href="/contracts">contract vehicle pathways</Link>.
        </p>
      </div>
    </main>
  );
}
