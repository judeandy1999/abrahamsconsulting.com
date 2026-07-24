import type { NasaSewpViPageContent } from "./schema";

/** Replace PDFs in public/documents/nasa-sewp-vi/ — no code changes required when files are added. */
export const NASA_SEWP_VI_DOCUMENTS = {
  capabilityStatement: "/documents/nasa-sewp-vi/capability-statement.pdf",
  orderingGuide: "/documents/nasa-sewp-vi/ordering-guide.pdf",
  orderingGuideVpat: "/documents/nasa-sewp-vi/ordering-guide-vpat.pdf"
} as const;

export const NASA_SEWP_VI_HERO_ASSETS = {
  visualImageSrc: "/images/nasa-sewp-vi/hero-visual.webp",
  visualImageAlt:
    "Federal agency technology environment representing NASA SEWP VI IT products and solutions",
  nasaLogoSrc: "/images/nasa-sewp-vi/nasa-logo.svg",
  nasaLogoAlt: "NASA logo"
} as const;

export const NASA_SEWP_VI_OVERVIEW_ASSETS = {
  backgroundImageSrc: "/images/nasa-sewp-vi/contract-overview-bg.webp",
  backgroundImageAlt: "Abstract technology network background for the NASA SEWP VI contract overview"
} as const;

export const NASA_SEWP_VI_WHY_ASSETS = {
  backgroundImageSrc: "/images/nasa-sewp-vi/contract-overview-bg.webp"
} as const;

export const NASA_SEWP_VI_COMPETENCIES_ASSETS = {
  backgroundImageSrc: "/images/nasa-sewp-vi/contract-overview-bg.webp"
} as const;

export const NASA_SEWP_VI_EORDERING_ASSETS = {
  documentIllustrationSrc: "/images/nasa-sewp-vi/ordering-guide-document.webp",
  documentIllustrationAlt: "SEWP VI Electronic Ordering Guide PDF download"
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
    capabilityStatementCtaLabel: "Download Capability Statement (PDF)"
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
      { id: "business-size", icon: "business-size", label: "Business Size", value: "Minority Woman-Owned Small Business Enterprise (MWBE)" },
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
      "Abrahams Consulting LLC is a Minority Woman-Owned Small Business Enterprise (MWBE) delivering full-lifecycle Enterprise IT Services since 2006.",
      "With the award of the NASA SEWP VI Prime Contract, Abrahams Consulting has expanded its proven delivery model into the federal marketplace while continuing to deliver enterprise technology solutions backed by nearly two decades of experience."
    ],
    highlights: [
      {
        id: "mwbe",
        icon: "mwbe",
        title: "Certified MWBE",
        description: "Certified Minority Woman-Owned Small Business Enterprise delivering enterprise IT services with proven commercial and public-sector experience."
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
        id: "mwbe",
        icon: "mwbe",
        title: "Certified MWBE",
        description: "Proudly a certified Minority Woman-Owned Small Business Enterprise (MWBE)."
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
        title: "Executive Recruiting & Technical Staffing",
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
      "Streamlined procurement through our active primary contract vehicles to help you save time, reduce risk, and stay compliant.",
    items: [
      {
        id: "nasa-sewp-vi",
        title: "NASA SEWP VI",
        badge: "Prime Contractor",
        description: "Strategic, enterprise-wide solutions for federal agencies through NASA SEWP VI.",
        logoSrc: "/images/nasa-sewp-vi/nasa-logo.svg",
        logoAlt: "NASA SEWP VI contract vehicle",
        href: "#sewp-vi-overview-heading"
      },
      {
        id: "nys-ogs-pbits",
        title: "NY State OGS / PBITS",
        description:
          "Authorized contract holder delivering IT solutions to New York State agencies and public entities.",
        logoSrc: "/images/nasa-sewp-vi/nys-seal.svg",
        logoAlt: "New York State OGS contract vehicle",
        href: "https://online.ogs.ny.gov/purchase/snt/awardnotes/7360023269a.pdf"
      }
    ]
  },
  electronicOrderingGuide: {
    title: "Electronic Ordering Guide",
    intro:
      "Our Electronic Ordering Guide provides federal agencies with step-by-step instructions for placing orders through the NASA SEWP VI contract with Abrahams Consulting LLC.",
    download: {
      title: "Download the Ordering Guide",
      description: "Access the official SEWP VI Electronic Ordering Guide in PDF format.",
      downloadLabel: "Download PDF",
      comingSoonLabel: "Coming Soon",
      href: NASA_SEWP_VI_DOCUMENTS.orderingGuide,
      illustrationSrc: NASA_SEWP_VI_EORDERING_ASSETS.documentIllustrationSrc,
      illustrationAlt: NASA_SEWP_VI_EORDERING_ASSETS.documentIllustrationAlt
    },
    accessibility: {
      title: "Section 508 Accessibility",
      description:
        "The Electronic Ordering Guide PDF is published as a Section 508-compliant document for federal accessibility requirements.",
      requirements: [
        "Tagged PDF with semantic structure",
        "Logical reading order throughout the document",
        "Alternative text on all meaningful images",
        "Document bookmarks for major sections"
      ],
      vpat: {
        title: "Accessibility Conformance Report (VPAT)",
        description:
          "Review the Voluntary Product Accessibility Template (VPAT) Accessibility Conformance Report (ACR) for the Electronic Ordering Guide.",
        downloadLabel: "Download VPAT ACR",
        comingSoonLabel: "VPAT ACR coming soon",
        href: NASA_SEWP_VI_DOCUMENTS.orderingGuideVpat
      }
    }
  },
  gwacIdentificationStatement: {
    title: "Official GWAC Identification Statement",
    statement:
      "Abrahams Consulting LLC’s NASA Solutions for Enterprise-Wide Procurement (SEWP) VI Contract, Contract No. 80TECH26D1658, is part of a multi-award Government-Wide Acquisition Contract (GWAC). Abrahams Consulting LLC is a contract holder under Category A—Information Technology, Communications, and Audio-Visual (ITC/AV) Solutions."
  },
  fairOpportunityClause: {
    title: "Fair Opportunity Clause",
    paragraphs: [
      "In accordance with FAR 16.505(b), federal agencies and authorized buyers must provide eligible NASA SEWP Contract Holders within the applicable Contract Group or set-aside a fair opportunity to be considered for orders, unless an authorized exception to Fair Opportunity applies.",
      "NASA recommends using the SEWP Quote Request Tool (QRT) to support Fair Opportunity and streamline the acquisition process. Through the QRT, agencies can conduct market research and submit Requests for Information (RFIs) and Requests for Quotes (RFQs) to eligible Contract Holders.",
      "There is no requirement to obtain three quotes when Fair Opportunity has been provided to all eligible Contract Holders within the applicable Group or set-aside. The Ordering Contracting Officer is responsible for determining the appropriate acquisition approach and documenting the order in accordance with FAR 16.505(b), applicable agency policies, and NASA SEWP ordering procedures.",
      "Abrahams Consulting is available to assist federal customers with product and solution inquiries, technical requirements, pricing and availability, quote requests, and acquisition support through our NASA SEWP contract."
    ],
    officialGuidance: {
      prefix: "For official Fair Opportunity requirements and NASA SEWP ordering guidance, please visit the ",
      linkLabel: "NASA SEWP website",
      href: "https://www.sewp.nasa.gov/sewpv/fairopportunity.shtml",
      suffix: "."
    }
  },
  postDeliverySupport: {
    title: "Post-Delivery Support Information",
    intro:
      "Abrahams Consulting LLC provides post-delivery support for installation, warranty, technical support, software support, and other order-related issues associated with products and services purchased under its NASA SEWP VI Contract.",
    topics: [
      {
        id: "installation",
        title: "Installation",
        description:
          "Installation services may be provided when they directly support an in-scope ITC/AV product solution and are identified in the applicable quotation or Delivery Order."
      },
      {
        id: "basic-warranty",
        title: "Basic Warranty",
        description:
          "Abrahams Consulting will provide conforming products and services in accordance with the applicable terms of the SEWP VI Contract, including FAR 52.212-4. Applicable OEM or publisher warranties may provide additional product-specific coverage identified in the quotation, Delivery Order, or warranty documentation."
      },
      {
        id: "extended-warranty",
        title: "Extended Warranty",
        description:
          "Extended warranty or maintenance coverage may be offered when available. Applicable coverage, pricing, and terms will be identified in the quotation or order documentation."
      },
      {
        id: "technical-software-support",
        title: "Technical and Software Support",
        description:
          "Customers requiring technical or software support should contact Abrahams Consulting and provide the Delivery Order number, product or software information, and a description of the issue. Abrahams Consulting will review the request and coordinate the appropriate technical support or escalation."
      }
    ],
    primaryContact: {
      heading: "Primary Support Contact",
      name: "Jay Dela Piedra",
      role: "Technical and Post-Delivery Support",
      contacts: [
        {
          id: "telephone",
          label: "Telephone",
          value: "(646) 564-3844, ext. 1009",
          href: "tel:+16465643844,1009"
        },
        {
          id: "email",
          label: "Email",
          value: "JPiedra@abrahamsconsulting.com",
          href: "mailto:JPiedra@abrahamsconsulting.com"
        },
        {
          id: "support-hours",
          label: "Support Hours",
          value: "Monday–Friday, 8:00 AM – 5:00 PM Eastern Time"
        }
      ]
    }
  },
  orderTroubleshooting: {
    title: "Order Troubleshooting Information",
    paragraphs: [
      "Customers should report delayed, damaged, missing, incorrect, or otherwise nonconforming products or orders to Abrahams Consulting and provide the Delivery Order number, SEWP Tracking Number (if available), affected items, and a description of the issue.",
      "Abrahams Consulting LLC will review the reported issue and coordinate the appropriate status update, correction, repair, replacement, or other contractual remedy. If an item cannot be delivered within the required delivery time, Abrahams will notify the issuing Contracting Officer and SEWP PMO within two business days as required by the contract. Unresolved matters will be escalated to the designated escalation contact."
    ],
    contacts: [
      {
        id: "order-support",
        heading: "Order Support Contact",
        name: "Jude Convencido",
        contacts: [
          {
            id: "telephone",
            label: "Telephone",
            value: "(646) 564-3828, ext. 2180",
            href: "tel:+16465643828,2180"
          },
          {
            id: "email",
            label: "Email",
            value: "jconvencido@abrahamsconsulting.com",
            href: "mailto:jconvencido@abrahamsconsulting.com"
          }
        ]
      },
      {
        id: "escalation",
        heading: "Escalation Contact",
        name: "Maybelline Magnet",
        contacts: [
          {
            id: "telephone",
            label: "Telephone",
            value: "(301) 638-8731, ext. 2179",
            href: "tel:+13016388731,2179"
          },
          {
            id: "email",
            label: "Email",
            value: "sewp.pm@abrahamsconsulting.com",
            href: "mailto:sewp.pm@abrahamsconsulting.com"
          }
        ]
      }
    ]
  },
  programManagerContact: {
    titlePrimary: "Program Manager",
    titleSecondary: "Contact Information",
    intro:
      "For ordering assistance, contract inquiries, and SEWP VI support, please contact:",
    helpCallout: {
      title: "SEWP VI Program Manager Contact",
      description: "Your primary point of contact for SEWP VI ordering assistance, contract inquiries, and program support."
    },
    details: [
      {
        id: "office-hours",
        icon: "clock",
        label: "Office Hours",
        value: "Monday – Friday | 8:00 AM – 5:00 PM ET"
      },
      {
        id: "contract",
        icon: "globe",
        label: "Contract",
        value: "NASA SEWP VI (Solutions for Enterprise-Wide Procurement VI)"
      }
    ],
    profile: {
      name: "Maybelline Magnet",
      role: "SEWP VI PROGRAM MANAGER",
      contacts: [
        {
          id: "company",
          icon: "building",
          label: "Company",
          value: "Abrahams Consulting LLC"
        },
        {
          id: "direct-phone",
          icon: "phone",
          label: "Direct Phone",
          value: "(301) 638-8731, ext. 2179",
          href: "tel:+13016388731,2179"
        },
        {
          id: "email",
          icon: "mail",
          label: "Email",
          value: "sewp.pm@abrahamsconsulting.com",
          href: "mailto:sewp.pm@abrahamsconsulting.com"
        }
      ]
    }
  },
  externalResourceLinks: {
    heading: "External Resources",
    cards: [
      {
        id: "nasa-sewp-homepage",
        title: "Visit the NASA SEWP Homepage",
        description:
          "Learn more about the NASA Solutions for Enterprise-Wide Procurement (SEWP VI) contract, contract details, news, and valuable resources for federal agencies.",
        ctaLabel: "Go to sewp.nasa.gov",
        href: "https://www.sewp.nasa.gov",
        redirectNote: "You will be redirected to the official NASA SEWP website."
      },
      {
        id: "abrahams-corporate-homepage",
        title: "Visit Abrahams Consulting Corporate Homepage",
        description:
          "Explore our corporate website to learn more about Abrahams Consulting LLC, our solutions, capabilities, and commitment to delivering exceptional value.",
        ctaLabel: "Visit abrahamsconsulting.com",
        href: "https://abrahamsconsulting.com",
        redirectNote: "You will be redirected to the Abrahams Consulting website."
      }
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
        value: "Minority Woman-Owned Small Business Enterprise (MWBE)"
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
    }
  },
  obtainQuote: {
    title: "How to Obtain a Quote",
    programName: "NASA Solutions for Enterprise-Wide Procurement (SEWP) VI",
    intro: [
      "All quotes are provided in accordance with the NASA SEWP VI Fair Opportunity procedures and applicable Federal Acquisition Regulation (FAR) requirements.",
      "Customers may contact Abrahams Consulting’s Federal Sales team for product information and pre-RFQ assistance. Competitive quote requests should be submitted through NASA SEWP’s Quote Request Tool."
    ],
    processHeading: "Quote Request Process",
    steps: [
      {
        id: "prepare",
        icon: "prepare",
        title: "Prepare Your Requirement",
        description:
          "Identify the required products or services, specifications, quantities, delivery information, evaluation criteria, and response deadline."
      },
      {
        id: "submit",
        icon: "submit",
        title: "Submit Your Request through NASA SEWP",
        description:
          "Submit competitive Requests for Quote through NASA SEWP’s Quote Request Tool (QRT). Ordering agencies are responsible for providing eligible contract holders a fair opportunity to be considered in accordance with FAR 16.505(b)."
      },
      {
        id: "evaluate",
        icon: "evaluate",
        title: "Evaluate Quotations",
        description:
          "Evaluate the quotations using the criteria stated in the request and document the selection in accordance with applicable acquisition procedures."
      },
      {
        id: "order",
        icon: "order",
        title: "Place the Order",
        description:
          "Submit the delivery order through the applicable NASA SEWP ordering process. Reference Abrahams Consulting LLC’s Contract 80TECH26D1658 and the selected quotation."
      }
    ],
    salesAssistance: {
      title: "Need Assistance Before Issuing an RFQ?",
      intro:
        "Customers may contact Abrahams Consulting LLC for product information, capability questions, or assistance developing their requirements:",
      contact: {
        label: "SEWP VI Sales Contact",
        name: "John Luis B. Marquez",
        role: "Catalog Support Specialist – Federal Sales Liaison",
        telephone: "516-405-2175 ext. 2175",
        email: "federal.sales@abrahamsconsulting.com"
      },
      disclaimer:
        "Pre-RFQ assistance is optional. It does not constitute a formal quotation or independently satisfy the ordering agency’s applicable fair-opportunity obligations.",
      responseTime: {
        title: "Response Time",
        description:
          "Customers with urgent or time-sensitive requirements should identify the required response date in the NASA SEWP Quote Request Tool and may also contact the sales representatives listed above for coordination."
      }
    },
    formsRequirements: {
      title: "Forms and Submission Requirements",
      paragraphs: [
        "No separate Abrahams Consulting quote-request form is required when an agency submits its request through the NASA SEWP Quote Request Tool.",
        "Abrahams Consulting may quote only products, solutions, and services available under Contract No. 80TECH26D1658 in the SEWP database of record at the time of quote submission.",
        "When a request originates through the NASA SEWP Quote Request Tool, the official quote response will be submitted through the SEWP system."
      ]
    }
  },
  federalSalesContact: {
    title: "Federal Sales Contact",
    prompt: "Need assistance with a NASA SEWP VI procurement?",
    subtitle: "Contact our Federal Sales Team.",
    email: "federal.sales@abrahamsconsulting.com",
    phones: ["516-405-2175 ext. 2175"],
    ctaLabel: "Contact Federal Sales"
  }
};
