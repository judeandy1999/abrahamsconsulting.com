import type { NasaSewpViPageContent } from "./schema";

/** Replace PDFs in public/documents/nasa-sewp-vi/ — no code changes required when files are added. */
export const NASA_SEWP_VI_DOCUMENTS = {
  capabilityStatement: "/documents/nasa-sewp-vi/capability-statement.pdf",
  orderingGuide: "/documents/nasa-sewp-vi/ordering-guide.pdf"
} as const;

export const NASA_SEWP_VI_HERO_ASSETS = {
  visualImageSrc: "/images/nasa-sewp-vi/hero-visual.webp",
  visualImageAlt:
    "Federal agency technology environment representing NASA SEWP VI IT products and solutions",
  nasaLogoSrc: "/images/nasa-sewp-vi/nasa-sewp-vi-official-logo.png",
  nasaLogoAlt: "NASA SEWP VI official logo — Solutions for Enterprise-Wide Procurement"
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
  nasa: "/images/nasa-sewp-vi/nasa-sewp-vi-official-logo.png",
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
        logoSrc: "/images/nasa-sewp-vi/nasa-sewp-vi-official-logo.png",
        logoAlt: "NASA SEWP VI official contract vehicle logo",
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
      href: NASA_SEWP_VI_DOCUMENTS.orderingGuide,
      illustrationSrc: NASA_SEWP_VI_EORDERING_ASSETS.documentIllustrationSrc,
      illustrationAlt: NASA_SEWP_VI_EORDERING_ASSETS.documentIllustrationAlt
    }
  },
  gwacIdentificationStatement: {
    title: "Official GWAC Identification Statement",
    statement:
      "Abrahams Consulting LLC’s NASA Solutions for Enterprise-Wide Procurement (SEWP) VI Contract, Contract No. 80TECH26D1658, is part of a multi-award Government-Wide Acquisition Contract (GWAC). Abrahams Consulting LLC is a contract holder under Category A—Information Technology, Communications, and Audio-Visual (ITC/AV) Solutions."
  },
  fairOpportunityClause: {
    title: "Fair Opportunity",
    paragraphs: [
      "Contractors will be provided a fair opportunity at the individual order level as appropriate per FAR Part 16.505(b), including the SEWP RFQ tools. No documentation for the order selection is required to be submitted with the order. All such documentation is to be maintained by the issuing procurement office.",
      "The Contractor shall not market, quote or otherwise offer for sale, any IT Solutions not listed under this contract, until the said solutions are included in the SEWP database of record, and available to all Government end-users.",
      "If the Government issues a Request For Information (RFI) as part of market research, the Contractor may provide items not yet listed on their SEWP contract as part of a market research quote if:",
      "1. all such items are clearly marked as not yet available on their SEWP contract; and",
      "2. the contractor submits a technology refreshment request to add those products to their contract.",
      "If the Government issues a Request For Quote (RFQ) or a Market Research Request (MRR), the Contractor may only respond with items available on their Contract and the price of each item shall be the no greater than the price in Attachment F SEWP database of record at the time the quote is issued. If the Contractor has insufficient items on their contract to fully respond to the Formal RFQ, the Contractor must respond with a No Bid.",
      "Unless the RFQ specifically allows for partial quotes, the Contractor must respond fully to all requirements specified in the RFQ.",
      "When submitting a quote to a government end-user, the contractor must clearly state the length of time the quote is valid. The contractor shall honor any order submitted within the stated time period of a quote.",
      "When responding to an RFI or RFQ issued from the NASA SEWP RFQ on-line quoting system, the Contractor must respond as outlined in Attachment C: Contract Holder User Manual (CHUM).",
      "Contract Holders are prohibited from using Government information posted on the NASA SEWP Contract Holder Only Page, such as RFQs, RFIs, etc., for purposes other than proposing on SEWP requirements. This includes Contract Holders providing third parties with SEWP information and requirements for the purpose of assisting companies, that are not SEWP Contract Holders, with providing unsolicited proposals to meet agency requirements already posted to the NASA SEWP RFQ on-line quoting system."
    ]
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
          "Installation services may be provided using the applicable Service CLINs when the services directly support the installation or implementation of an in-scope ITC/AV solution. Applicable installation services will be quoted using the Service CLINs available under the contract and ordered through the applicable delivery order."
      },
      {
        id: "basic-warranty",
        title: "Basic Warranty",
        description:
          "Abrahams Consulting LLC will tender for acceptance only products and services that conform to the applicable contract requirements. In accordance with FAR 52.212-4(a), the Government may require repair or replacement of nonconforming supplies or reperformance of nonconforming services at no increase in contract price. In accordance with FAR 52.212-4(o), delivered items are warranted to be merchantable and fit for the particular purpose described in the contract."
      },
      {
        id: "extended-warranty",
        title: "Extended Warranty",
        description:
          "Extended warranty coverage may be purchased and begin at any time during the standard commercial warranty period, up to and including the end of that period. Coverage will be based on the applicable commercial warranty period. At the Government’s discretion, monthly maintenance may be ordered during a warranty period at a Discounted Monthly Extended Warranty amount in lieu of the extended warranty."
      },
      {
        id: "technical-software-support",
        title: "Technical and Software Support",
        description:
          "Customers requiring technical or software support should contact the designated Abrahams Consulting LLC support representative. Abrahams will review the request and coordinate appropriate support consistent with the applicable contract, delivery order, warranty, maintenance, and licensing terms."
      },
      {
        id: "returns-and-replacement",
        title: "Returns and Replacement",
        description:
          "Customers requesting a return or reporting a nonconforming delivery should contact the designated Abrahams Consulting LLC support representative. Abrahams will review the applicable contract, delivery order, acceptance status, and warranty terms. In accordance with FAR 52.212-4(a), the Government may require repair or replacement of nonconforming supplies at no increase in contract price. Items returned before Government acceptance are not subject to restocking fees or other charges unless the return results from a Government-initiated change."
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
      "Customers should report problematic orders to Abrahams Consulting LLC and provide the delivery-order number, SEWP Tracking Number, if available, affected items, and a description of the issue. Abrahams Consulting LLC will review the matter and coordinate the appropriate resolution or escalation in accordance with the applicable order, warranty, and contract terms.",
      "If an item cannot be delivered within its applicable delivery time, Abrahams Consulting LLC will notify the issuing Contracting Officer and SEWP PMO within two business days after receipt of the order or manufacturer notification of the expected delivery date, as applicable under SEWP VI Terms and Conditions Section A.1.18(D)."
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
            value: "(646) 564-3828 ext 2180",
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
  companyInformation: {
    title: "Company Information",
    items: [
      {
        id: "headquarters",
        icon: "headquarters",
        label: "Headquarters",
        value: "40 Wall Street\n28th Floor, Suite 2901\nNew York, NY 10005"
      },
      {
        id: "phone",
        icon: "phone",
        label: "Phone",
        value: "877-541-1938\n646-558-3887",
        href: "tel:+18775411938"
      },
      {
        id: "email",
        icon: "email",
        label: "Email",
        value: "salessupportnys@abrahamsconsulting.com",
        href: "mailto:salessupportnys@abrahamsconsulting.com"
      },
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
      "Ordering agencies are responsible for satisfying the applicable fair-opportunity requirements of FAR 16.505(b). Abrahams Consulting LLC will respond to quote requests in accordance with the NASA SEWP VI contract and applicable SEWP procedures.",
      "Customers may contact Abrahams Consulting LLC’s Federal Sales team for product information, capability questions, and optional pre-RFQ assistance. NASA SEWP recommends use of its Quote Request Tool (QRT) to obtain competitive quotations."
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
        telephone: "516-405-2175",
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
    phones: ["516-405-2175"],
    ctaLabel: "Contact Federal Sales"
  }
};
