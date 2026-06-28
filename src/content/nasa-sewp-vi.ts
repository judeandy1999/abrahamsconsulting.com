import type { NasaSewpViPageContent } from "./schema";

/** Replace PDFs in public/documents/nasa-sewp-vi/ — no code changes required when files are added. */
export const NASA_SEWP_VI_DOCUMENTS = {
  capabilityStatement: "/documents/nasa-sewp-vi/capability-statement.pdf",
  orderingGuide: "/documents/nasa-sewp-vi/ordering-guide.pdf"
} as const;

export const NASA_SEWP_VI_HERO_ASSETS = {
  visualImageSrc: "/images/nasa-sewp-vi/hero-visual.png",
  visualImageAlt: "Earth at night with a digital network overlay representing global connectivity",
  nasaLogoSrc: "/images/nasa-sewp-vi/nasa-logo.svg",
  nasaLogoAlt: "NASA"
} as const;

export const NASA_SEWP_VI_OVERVIEW_ASSETS = {
  backgroundImageSrc: "/images/nasa-sewp-vi/contract-overview-bg.png"
} as const;

export const nasaSewpViPageContent: NasaSewpViPageContent = {
  hero: {
    eyebrow: "NASA SEWP VI — PRIME CONTRACTOR",
    title: "NASA SEWP VI Prime Contractor",
    subtitle: "Category A – ITC/AV Solutions",
    description:
      "Abrahams Consulting LLC provides IT products and related technology solutions through its NASA SEWP VI Prime Contract under Category A – ITC/AV Solutions.",
    contractNumber: "80TECH26D1658",
    category: "Category A – ITC/AV Solutions",
    capabilityStatementCtaLabel: "Download Capability Statement"
  },
  contractOverview: {
    eyebrow: "NASA SEWP VI — PRIME CONTRACTOR",
    title: "Contract Overview",
    description:
      "Abrahams Consulting LLC is an awarded contractor under the NASA SEWP VI Government-Wide Acquisition Contract (GWAC) for Category A – ITC/AV Solutions.",
    items: [
      { id: "contract-number", icon: "document", label: "Contract Number", value: "80TECH26D1658" },
      { id: "contract-category", icon: "tag", label: "Category", value: "Category A – ITC/AV Solutions" },
      { id: "contract-ceiling", icon: "ceiling", label: "Contract Ceiling", value: "$20 Billion GWAC" },
      { id: "period-of-performance", icon: "calendar", label: "Period of Performance", value: "10 Years" },
      { id: "award-date", icon: "award", label: "Award Date", value: "June 24, 2026" },
      {
        id: "eligible-customers",
        icon: "customers",
        label: "Eligible Customers",
        value: "NASA and all U.S. Federal Agencies, including civilian agencies and the Department of Defense"
      },
      { id: "uei", icon: "uei", label: "UEI", value: "XXCXV1SXKNA5" },
      { id: "cage", icon: "cage", label: "CAGE Code", value: "6KZZ4" },
      { id: "business-size", icon: "business-size", label: "Business Size", value: "Woman-Owned Small Business" },
      { id: "founded", icon: "founded", label: "Founded", value: "2006" }
    ]
  },
  aboutSewp: {
    title: "About NASA SEWP VI",
    paragraphs: [
      "NASA Solutions for Enterprise-Wide Procurement (SEWP VI) is a Government-Wide Acquisition Contract (GWAC) that provides a streamlined procurement vehicle for IT products and related technology solutions for NASA and U.S. Federal Agencies.",
      "Abrahams Consulting LLC is a NASA SEWP VI Prime Contractor under Category A – ITC/AV Solutions."
    ]
  },
  aboutCompany: {
    title: "About Abrahams Consulting",
    paragraphs: [
      "Abrahams Consulting LLC is a Woman-Owned Small Business delivering full-lifecycle Enterprise IT Services since 2006.",
      "With the award of the NASA SEWP VI Prime Contract, Abrahams Consulting has expanded its proven delivery model into the federal marketplace while continuing to deliver enterprise technology solutions backed by nearly two decades of experience."
    ]
  },
  whyChoose: {
    title: "Why Abrahams Consulting",
    items: [
      { id: "sewp-prime", title: "NASA SEWP VI Prime Contractor" },
      { id: "wosb", title: "Woman-Owned Small Business" },
      { id: "experience", title: "Nearly 20 Years of Experience" },
      { id: "iso", title: "ISO 9001 Certified" },
      { id: "ai", title: "AI Implementation & Digital Transformation" },
      { id: "low-fee", title: "Low-Fee Federal Procurement Vehicle" }
    ]
  },
  coreCompetencies: {
    title: "Core Competencies",
    items: [
      { id: "infrastructure", icon: "infrastructure", title: "Enterprise IT Infrastructure & Managed Services" },
      { id: "cybersecurity", icon: "cybersecurity", title: "Cybersecurity & 24×7 SOC" },
      { id: "cloud", icon: "cloud", title: "Cloud Services (IaaS, PaaS, SaaS & DRaaS)" },
      { id: "ai", icon: "ai", title: "AI Implementation & Digital Transformation" },
      { id: "staffing", icon: "staffing", title: "IT Executive Recruiting & Technical Staffing" },
      { id: "network", icon: "network", title: "Network Assessment, Design & Deployment" },
      { id: "storage", icon: "storage", title: "Storage, Backup & Data Management" },
      { id: "lifecycle", icon: "lifecycle", title: "Hardware & Software Lifecycle Management" },
      { id: "compliance", icon: "compliance", title: "Compliance, Governance & Risk Management" },
      { id: "helpdesk", icon: "helpdesk", title: "24×7 Help Desk & End-User Support" }
    ]
  },
  categoryACapabilities: {
    title: "Category A Capabilities",
    items: [
      "Computer Systems",
      "IT Storage Systems",
      "Networking & Communications",
      "Imaging Equipment",
      "Power & Cabling",
      "Audio / Visual",
      "Security & Sensors",
      "Software & Cloud",
      "Product-Based Services"
    ]
  },
  contractVehicles: {
    title: "Contract Vehicles",
    items: ["NASA SEWP VI (Prime Contractor)", "NY State OGS / PBITS"]
  },
  orderingProcess: {
    title: "Ordering Through NASA SEWP VI",
    steps: [
      { id: "contact", description: "Contact Abrahams Consulting's Federal Sales Team." },
      { id: "quote", description: "Request a quote through NASA SEWP VI." },
      { id: "procure", description: "Procure eligible IT products through the SEWP ordering process." }
    ]
  },
  pastPerformance: {
    title: "Representative Experience",
    items: [
      { id: "nyc-oti", organization: "NYC OTI", description: "Technical Staffing & AD Migration" },
      { id: "fdny", organization: "FDNY", description: "Network Infrastructure Upgrade" },
      { id: "panynj", organization: "PANYNJ", description: "AI Implementation & Automation" },
      { id: "nyc-acs", organization: "NYC ACS", description: "Managed IT Services & Operations" },
      { id: "nyc-doe", organization: "NYC DOE" },
      { id: "nyc-law", organization: "NYC Law Department" }
    ]
  },
  companyInformation: {
    title: "Company Information",
    items: [
      { id: "headquarters", label: "Headquarters", value: "172-61 Highland Ave\nJamaica, NY 11432" },
      { id: "phone", label: "Phone", value: "877-541-1938\n646-558-3887" },
      {
        id: "federal-sales",
        label: "Federal Sales",
        value: "federal.sales@abrahamsconsulting.com",
        href: "mailto:federal.sales@abrahamsconsulting.com"
      },
      { id: "website", label: "Website", value: "www.abrahamsconsulting.com", href: "https://www.abrahamsconsulting.com" },
      { id: "uei", label: "UEI", value: "XXCXV1SXKNA5" },
      { id: "cage", label: "CAGE", value: "6KZZ4" },
      { id: "business-size", label: "Business Size", value: "Woman-Owned Small Business" },
      { id: "founded", label: "Founded", value: "2006" }
    ]
  },
  certifications: {
    title: "Certifications & Contract Status",
    items: [
      "NASA SEWP VI Prime",
      "Small Business",
      "ISO 9001 Certified",
      "ITIL Certified",
      "OMNIA Partners",
      "MWBE",
      "Maryland MBE",
      "Maryland SBR",
      "SAM.gov Active",
      "Ariba Network"
    ]
  },
  resources: {
    title: "Resources",
    capabilityStatement: {
      label: "Capability Statement (PDF)",
      href: NASA_SEWP_VI_DOCUMENTS.capabilityStatement
    },
    orderingGuide: {
      label: "Ordering Guide (PDF)",
      comingSoonLabel: "Ordering Guide (Coming Soon)",
      href: NASA_SEWP_VI_DOCUMENTS.orderingGuide
    }
  },
  federalSalesContact: {
    title: "Federal Sales Contact",
    prompt: "Need assistance with a NASA SEWP VI procurement?",
    subtitle: "Contact our Federal Sales Team.",
    email: "federal.sales@abrahamsconsulting.com",
    phones: ["877-541-1938", "646-558-3887"],
    ctaLabel: "Contact Federal Sales"
  }
};
