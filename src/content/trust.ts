import type { TrustContent } from "./schema";

export const trustContent: TrustContent = {
  certifications: [
    {
      id: "mwbe-certification",
      title: "Minority and Woman-Owned Business Enterprise (MWBE)",
      issuer: "State and local certification authorities",
      summary:
        "Abrahams Consulting maintains active MWBE certification status to support public-sector and enterprise supplier-diversity goals.",
      qualificationSignals: ["MWBE", "Minority-owned", "Woman-owned", "Supplier diversity eligible"]
    },
    {
      id: "iso-aligned-delivery",
      title: "ISO-Aligned Delivery Practices",
      issuer: "Internal quality management program",
      summary:
        "Delivery governance aligns with ISO-style quality management practices for repeatable program outcomes.",
      qualificationSignals: ["Quality management", "Governance-ready delivery"]
    }
  ],
  caseSnapshots: [
    {
      id: "federal-program-acceleration",
      title: "Federal program acceleration under compressed timelines",
      clientContext: "Federal agency modernization program with overlapping vendor workstreams",
      outcomesSummary:
        "Reduced milestone slip risk by 35% through integrated staffing and advisory governance, enabling on-time release of two priority capabilities."
    },
    {
      id: "enterprise-staffing-surge",
      title: "Enterprise staffing surge for regulated operations",
      clientContext: "Fortune 500 operations team facing seasonal demand and compliance deadlines",
      outcomesSummary:
        "Filled 18 specialized roles in six weeks while maintaining audit-ready onboarding documentation and 94% retention through the first quarter."
    }
  ],
  partnerIndicators: [
    {
      id: "partner-public-sector-alliance",
      name: "Public Sector Delivery Alliance",
      imageSrc: "/images/trust/partner-public-sector.svg",
      imageAlt: "Public Sector Delivery Alliance partner logo",
      imageWidth: 160,
      imageHeight: 48
    },
    {
      id: "partner-enterprise-cohort",
      name: "Enterprise Transformation Cohort",
      imageSrc: "/images/trust/partner-enterprise.svg",
      imageAlt: "Enterprise Transformation Cohort partner logo",
      imageWidth: 160,
      imageHeight: 48
    }
  ]
};
