import type { NasaSewpViPageContent } from "./schema";

/** Replace PDFs in public/documents/nasa-sewp-vi/ — no code changes required when files are added. */
export const NASA_SEWP_VI_DOCUMENTS = {
  capabilityStatement: "/documents/nasa-sewp-vi/capability-statement.pdf",
  orderingGuide: "/documents/nasa-sewp-vi/ordering-guide.pdf"
} as const;

export const NASA_SEWP_VI_HERO_ASSETS = {
  visualImageSrc: "/images/nasa-sewp-vi/hero-visual.webp",
  visualImageAlt: "Earth at night with a digital network overlay representing global connectivity",
  nasaLogoSrc: "/images/nasa-sewp-vi/nasa-logo.svg",
  nasaLogoAlt: "NASA"
} as const;

export const NASA_SEWP_VI_OVERVIEW_ASSETS = {
  backgroundImageSrc: "/images/nasa-sewp-vi/contract-overview-bg.webp"
} as const;

export const NASA_SEWP_VI_WHY_ASSETS = {
  backgroundImageSrc: "/images/nasa-sewp-vi/contract-overview-bg.webp"
} as const;

export const NASA_SEWP_VI_COMPETENCIES_ASSETS = {
  backgroundImageSrc: "/images/nasa-sewp-vi/contract-overview-bg.webp"
} as const;

export const NASA_SEWP_VI_CERTIFICATION_LOGOS = {
  nasa: "/images/nasa-sewp-vi/nasa-logo.svg",
  iso9001: "/images/footer/NQA_ISO9001_CMYK-r73wyfb5ibpt2lplhin19cgeda5cvm507ujjlrujdq.webp",
  marylandMbe: "/images/footer/Maryland-MBE-Seal-r8yaep2c5rsdh2q6oah4rj1ltxm182b5v7189otwbs.webp",
  marylandSbr: "/images/footer/Maryland-SBR-Seal-r8yaekd57llxv0x0fqfzx28av0975ksi6jrsvb0v6w.webp"
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
    eyebrow: "NASA SEWP VI",
    title: "About NASA SEWP VI",
    paragraphs: [
      "NASA Solutions for Enterprise-Wide Procurement (SEWP VI) is a Government-Wide Acquisition Contract (GWAC) that provides a streamlined procurement vehicle for IT products and related technology solutions for NASA and U.S. Federal Agencies.",
      "Abrahams Consulting LLC is a NASA SEWP VI Prime Contractor under Category A – ITC/AV Solutions."
    ]
  },
  aboutCompany: {
    eyebrow: "About Us",
    title: "About Abrahams Consulting",
    paragraphs: [
      "Abrahams Consulting LLC is a Woman-Owned Small Business delivering full-lifecycle Enterprise IT Services since 2006.",
      "With the award of the NASA SEWP VI Prime Contract, Abrahams Consulting has expanded its proven delivery model into the federal marketplace while continuing to deliver enterprise technology solutions backed by nearly two decades of experience."
    ],
    highlights: [
      {
        id: "wosb",
        icon: "wosb",
        title: "Woman-Owned Small Business",
        description: "Certified WOSB delivering enterprise IT services with proven commercial and public-sector experience."
      },
      {
        id: "established",
        icon: "established",
        title: "Established in 2006",
        description: "Nearly two decades of full-lifecycle IT services across commercial and public sectors."
      },
      {
        id: "federal-partner",
        icon: "federal-partner",
        title: "Proven Federal Partner",
        description: "Expanding deep enterprise expertise into federal technology procurement through NASA SEWP VI."
      }
    ]
  },
  whyChoose: {
    title: "Why Abrahams Consulting",
    description:
      "Delivering enterprise technology solutions with proven expertise, trusted partnerships, and a commitment to excellence.",
    items: [
      {
        id: "sewp-prime",
        icon: "handshake",
        title: "NASA SEWP VI Prime Contractor",
        description: "Authorized NASA SEWP VI Prime Contractor under Category A – ITC/AV Solutions."
      },
      {
        id: "wosb",
        icon: "wosb",
        title: "Woman-Owned Small Business",
        description: "Proudly a certified Woman-Owned Small Business (WOSB)."
      },
      {
        id: "experience",
        icon: "experience",
        title: "Nearly 20 Years of Experience",
        description: "Nearly two decades of delivering trusted IT solutions and exceptional service."
      },
      {
        id: "iso",
        icon: "iso",
        title: "ISO 9001 Certified",
        description: "ISO 9001 certified for our commitment to quality management and continuous improvement."
      },
      {
        id: "ai",
        icon: "ai",
        title: "AI Implementation & Digital Transformation",
        description: "Empowering organizations with AI solutions and digital transformation expertise."
      },
      {
        id: "low-fee",
        icon: "federal",
        title: "Low-Fee Federal Procurement Vehicle",
        description: "Providing a streamlined, low-fee procurement vehicle to maximize value for federal agencies."
      }
    ]
  },
  coreCompetencies: {
    eyebrow: "WHAT WE DO BEST",
    title: "Core Competencies",
    description:
      "Strategic IT solutions and expertise that empower government agencies to operate securely, efficiently, and with confidence.",
    items: [
      {
        id: "infrastructure",
        icon: "infrastructure",
        title: "Enterprise IT Infrastructure & Managed Services",
        description: "Reliable infrastructure and managed services that keep your business running."
      },
      {
        id: "cybersecurity",
        icon: "cybersecurity",
        title: "Cybersecurity & 24×7 SOC",
        description: "Proactive security monitoring and protection around the clock to safeguard your assets."
      },
      {
        id: "cloud",
        icon: "cloud",
        title: "Cloud Services (IaaS, PaaS, SaaS & DRaaS)",
        description: "Scalable, flexible, and secure cloud solutions designed for modern business needs."
      },
      {
        id: "ai",
        icon: "ai",
        title: "AI Implementation & Digital Transformation",
        description: "Intelligent solutions and digital transformation that drive innovation and efficiency."
      },
      {
        id: "staffing",
        icon: "staffing",
        title: "IT Executive Recruiting & Technical Staffing",
        description: "Connecting you with top IT talent to build strong teams and drive your mission forward."
      },
      {
        id: "network",
        icon: "network",
        title: "Network Assessment, Design & Deployment",
        description: "Optimized network design and deployment for performance, reliability, and growth."
      },
      {
        id: "storage",
        icon: "storage",
        title: "Storage, Backup & Data Management",
        description: "Secure data storage, backup, and management to ensure business continuity."
      },
      {
        id: "lifecycle",
        icon: "lifecycle",
        title: "Hardware & Software Lifecycle Management",
        description: "End-to-end lifecycle management to maximize performance and extend IT investments."
      },
      {
        id: "compliance",
        icon: "compliance",
        title: "Compliance, Governance & Risk Management",
        description: "Ensure compliance and manage risk with strong governance and best practice frameworks."
      },
      {
        id: "helpdesk",
        icon: "helpdesk",
        title: "24×7 Help Desk & End-User Support",
        description: "Responsive support whenever you need it, keeping your users productive and satisfied."
      }
    ]
  },
  categoryACapabilities: {
    eyebrow: "OUR CAPABILITIES",
    title: "Category A Capabilities",
    description:
      "Comprehensive IT solutions across key technology areas to support your mission and drive results.",
    items: [
      {
        id: "computer-systems",
        icon: "computer-systems",
        title: "Computer Systems",
        description: "High-performance systems built for reliability and efficiency."
      },
      {
        id: "storage",
        icon: "storage",
        title: "IT Storage Systems",
        description: "Scalable storage solutions to manage and protect your data."
      },
      {
        id: "networking",
        icon: "networking",
        title: "Networking & Communications",
        description: "Secure, reliable connectivity to keep you connected."
      },
      {
        id: "imaging",
        icon: "imaging",
        title: "Imaging Equipment",
        description: "Advanced imaging solutions for clarity and precision."
      },
      {
        id: "power-cabling",
        icon: "power-cabling",
        title: "Power & Cabling",
        description: "Power and infrastructure solutions that keep you running."
      },
      {
        id: "audio-visual",
        icon: "audio-visual",
        title: "Audio / Visual",
        description: "Engaging AV solutions for impactful communication."
      },
      {
        id: "security-sensors",
        icon: "security-sensors",
        title: "Security & Sensors",
        description: "Protecting people, data, and assets with smart technology."
      },
      {
        id: "software-cloud",
        icon: "software-cloud",
        title: "Software & Cloud",
        description: "Cloud solutions and software to modernize your operations."
      },
      {
        id: "product-services",
        icon: "product-services",
        title: "Product-Based Services",
        description: "Expert services and products to optimize performance."
      }
    ]
  },
  contractVehicles: {
    eyebrow: "OUR CONTRACT VEHICLES",
    title: "Contract Vehicles",
    description:
      "Streamlined procurement through our active contract vehicles to help you save time, reduce risk, and stay compliant.",
    items: [
      {
        id: "nasa-sewp-vi",
        title: "NASA SEWP VI",
        badge: "Prime Contractor",
        description: "Strategic, enterprise-wide solutions for federal agencies through NASA SEWP VI.",
        logoSrc: "/images/nasa-sewp-vi/nasa-logo.svg",
        logoAlt: "NASA",
        href: "#sewp-vi-overview-heading"
      },
      {
        id: "nys-ogs-pbits",
        title: "NY State OGS / PBITS",
        description:
          "Authorized contract holder delivering IT solutions to New York State agencies and public entities.",
        logoSrc: "/images/nasa-sewp-vi/nys-seal.svg",
        logoAlt: "New York State",
        href: "https://online.ogs.ny.gov/purchase/snt/awardnotes/7360023269a.pdf"
      }
    ]
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
    eyebrow: "OUR EXPERIENCE",
    title: "Representative Experience",
    description:
      "Trusted by public sector organizations to deliver innovative IT solutions that improve performance, strengthen infrastructure, and drive mission success.",
    items: [
      {
        id: "nyc-oti",
        icon: "government-building",
        organization: "NYC OTI",
        description: "Technical Staffing & AD Migration"
      },
      {
        id: "fdny",
        icon: "network",
        organization: "FDNY",
        description: "Network Infrastructure Upgrade"
      },
      {
        id: "panynj",
        icon: "ai-brain",
        organization: "PANYNJ",
        description: "AI Implementation & Automation"
      },
      {
        id: "nyc-acs",
        icon: "managed-services",
        organization: "NYC ACS",
        description: "Managed IT Services & Operations"
      },
      {
        id: "nyc-doe",
        icon: "education",
        organization: "NYC DOE"
      },
      {
        id: "nyc-law",
        icon: "justice",
        organization: "NYC Law Department"
      }
    ]
  },
  companyInformation: {
    title: "Company Information",
    items: [
      {
        id: "headquarters",
        icon: "headquarters",
        label: "Headquarters",
        value: "172-61 Highland Ave\nJamaica, NY 11432"
      },
      {
        id: "phone",
        icon: "phone",
        label: "Phone",
        value: "877-541-1938\n646-558-3887"
      },
      {
        id: "federal-sales",
        icon: "federal-sales",
        label: "Federal Sales",
        value: "federal.sales@abrahamsconsulting.com",
        href: "mailto:federal.sales@abrahamsconsulting.com"
      },
      {
        id: "website",
        icon: "website",
        label: "Website",
        value: "www.abrahamsconsulting.com",
        href: "https://www.abrahamsconsulting.com"
      },
      { id: "uei", icon: "uei", label: "UEI", value: "XXCXV1SXKNA5" },
      { id: "cage", icon: "cage", label: "CAGE", value: "6KZZ4" },
      {
        id: "business-size",
        icon: "business-size",
        label: "Business Size",
        value: "Woman-Owned Small Business"
      },
      { id: "founded", icon: "founded", label: "Founded", value: "2006" }
    ]
  },
  certifications: {
    title: "Certifications & Contract Status",
    items: [
      { id: "nasa-sewp-vi", icon: "nasa-sewp-vi", label: "NASA SEWP VI Prime" },
      { id: "small-business", icon: "small-business", label: "Small Business" },
      { id: "iso-9001", icon: "iso-9001", label: "ISO 9001 Certified" },
      { id: "itil", icon: "itil", label: "ITIL Certified" },
      { id: "omnia-partners", icon: "omnia-partners", label: "OMNIA Partners" },
      { id: "mwbe", icon: "mwbe", label: "MWBE" },
      { id: "maryland-mbe", icon: "maryland-mbe", label: "Maryland MBE" },
      { id: "maryland-sbr", icon: "maryland-sbr", label: "Maryland SBR" },
      { id: "sam-gov", icon: "sam-gov", label: "SAM.gov Active" },
      { id: "ariba-network", icon: "ariba-network", label: "Ariba Network" }
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
