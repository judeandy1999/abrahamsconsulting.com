import type { SiteContent } from "./schema";

export const siteContent: SiteContent = {
  name: "Abrahams Consulting",
  tagline: "Consulting and staffing expertise for enterprise and government delivery teams.",
  consultationCta: {
    label: "Request a Consultation",
    path: "/consultation"
  },
  consultationForm: {
    honeypotFieldName: "companyWebsite",
    fields: [
      {
        name: "fullName",
        label: "Full name",
        type: "text",
        required: true,
        placeholder: "Jane Doe"
      },
      {
        name: "email",
        label: "Work email",
        type: "email",
        required: true,
        placeholder: "jane.doe@agency.gov"
      },
      {
        name: "organization",
        label: "Organization",
        type: "text",
        required: true,
        placeholder: "Agency or company name"
      },
      {
        name: "phone",
        label: "Phone (optional)",
        type: "tel",
        required: false,
        placeholder: "+1 (555) 555-0100"
      },
      {
        name: "timeline",
        label: "Desired engagement timeline",
        type: "select",
        required: true,
        options: ["Immediate (0-30 days)", "Near-term (1-3 months)", "Planning (3+ months)"]
      },
      {
        name: "qualificationSummary",
        label: "What outcomes or capabilities do you need support with?",
        type: "textarea",
        required: true,
        placeholder: "Describe mission priorities, delivery constraints, and procurement context."
      }
    ]
  }
};
