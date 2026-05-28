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
    "aria-describedby": field.required ? hintId : undefined
  };

  if (field.type === "textarea") {
    return <textarea {...commonProps} rows={5} style={{ width: "100%", padding: "0.5rem" }} />;
  }

  if (field.type === "select") {
    return (
      <select {...commonProps} defaultValue="" style={{ width: "100%", padding: "0.5rem" }}>
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

  return <input {...commonProps} type={field.type} style={{ width: "100%", padding: "0.5rem" }} />;
}

export default function ConsultationPage() {
  const { site } = loadMarketingContent();
  const { consultationForm } = site;

  return (
    <main id="main-content" style={{ margin: "0 auto", maxWidth: "64rem", padding: "3rem 1.5rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>{site.consultationCta.label}</h1>
      <p style={{ lineHeight: 1.6, marginBottom: "1.5rem" }}>
        Share your timeline, delivery priorities, and procurement context so we can recommend the right consulting or
        staffing path.
      </p>

      <form action="/api/lead" method="POST" style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          name={consultationForm.honeypotFieldName}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
        />

        <fieldset style={{ border: 0, margin: 0, padding: 0 }}>
          <legend className="sr-only">Consultation request details</legend>
          <div style={{ display: "grid", gap: "1rem" }}>
            {consultationForm.fields.map((field) => {
              const hintId = fieldHintId(field.name);

              return (
                <div key={field.name}>
                  <label htmlFor={field.name} style={{ display: "block", marginBottom: "0.35rem", fontWeight: 600 }}>
                    {field.label}
                    {field.required ? " *" : ""}
                  </label>
                  {renderField(field)}
                  {field.required ? (
                    <p id={hintId} style={{ margin: "0.35rem 0 0", fontSize: "0.875rem" }}>
                      Required field
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </fieldset>

        <button type="submit" style={{ marginTop: "1.25rem", padding: "0.65rem 1.25rem" }}>
          Submit consultation request
        </button>
      </form>

      <section aria-label="Consultation next steps" style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ marginBottom: "0.75rem" }}>Prepare before we connect</h2>
        <ul style={{ lineHeight: 1.7, paddingLeft: "1.25rem" }}>
          <li>Outline the mission outcomes and delivery constraints your team is managing.</li>
          <li>List the capability areas where you need consulting or staffing support first.</li>
          <li>Identify contract vehicles your organization already prefers or requires.</li>
        </ul>
      </section>
      <p style={{ lineHeight: 1.6 }}>
        Need more context first? Explore <Link href="/services">service capabilities</Link> or review{" "}
        <Link href="/contracts">contract vehicle pathways</Link>.
      </p>
    </main>
  );
}
