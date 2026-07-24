import type { ContractItem, ContractsPageContent } from "./schema";

export const CONTRACT_VEHICLE_ASSETS = {
  gsaLogo: "/images/contracts/gsa-logo.webp",
  synnexLogo: "/images/contracts/synnex-logo.webp",
  synnexLineCard: "/documents/contracts/synnex-gsa-line-card.pdf",
  nasaLogo: "/images/nasa-sewp-vi/sewp-duck-logo.png",
  nysSeal: "/images/nasa-sewp-vi/nys-seal.svg",
  commvault: "/images/companies/commvault-150x150.webp",
  hp: "/images/companies/hpLogo-150x150.webp"
} as const;

/** Compact contract list retained for marketing content schema consumers. */
export const contractsContent: ContractItem[] = [
  {
    code: "NASA-SEWP-VI",
    name: "NASA SEWP VI",
    description:
      "Prime contractor under Category A – ITC/AV Solutions for federal IT product and related technology procurements.",
    servicesLinkText: "Explore solutions aligned to SEWP VI",
    consultationCtaLabel: "Talk with federal sales"
  },
  {
    code: "NYS-OGS-PBITS",
    name: "NY State OGS / PBITS",
    description:
      "Authorized contract holder delivering IT solutions to New York State agencies and public entities.",
    servicesLinkText: "Match this vehicle to service capabilities",
    consultationCtaLabel: "Confirm vehicle fit with our team"
  },
  {
    code: "GSA-LINE-CARDS",
    name: "GSA Partner Line Cards",
    description: "GSA schedule line cards for select technology partners, including Commvault, Synnex, and HP.",
    servicesLinkText: "Browse services that align to GSA catalogs",
    consultationCtaLabel: "Request GSA procurement guidance"
  }
];

export const contractsPageContent: ContractsPageContent = {
  hero: {
    segments: ["Contract Vehicles"],
    description:
      "Streamlined procurement through Abrahams Consulting's active contract vehicles—helping agencies and enterprise buyers save time, reduce risk, and stay compliant."
  },
  primaryVehicles: {
    eyebrow: "ACTIVE VEHICLES",
    title: "Contract Vehicles",
    description:
      "Use these vehicles to procure IT products and related services with Abrahams Consulting as your trusted partner.",
    items: [
      {
        id: "nasa-sewp-vi",
        title: "NASA SEWP VI",
        badge: "Prime Contractor",
        description:
          "Government-Wide Acquisition Contract for federal agencies under Category A – ITC/AV Solutions (Contract 80TECH26D1658).",
        logoSrc: CONTRACT_VEHICLE_ASSETS.nasaLogo,
        logoAlt: "NASA SEWP VI contract vehicle",
        href: "/nasa-sewp-vi",
        ctaLabel: "View SEWP VI details"
      },
      {
        id: "nys-ogs-pbits",
        title: "NY State OGS / PBITS",
        badge: "Authorized Holder",
        description:
          "Authorized contract holder delivering IT solutions to New York State agencies and public entities through OGS / PBITS.",
        logoSrc: CONTRACT_VEHICLE_ASSETS.nysSeal,
        logoAlt: "New York State OGS contract vehicle",
        href: "https://online.ogs.ny.gov/purchase/snt/awardnotes/7360023269a.pdf",
        ctaLabel: "View award note"
      }
    ]
  },
  gsaLineCards: {
    title: "GSA Partner Line Cards",
    items: [
      {
        id: "gsa-commvault",
        title: "Commvault",
        badgeSrc: CONTRACT_VEHICLE_ASSETS.gsaLogo,
        badgeAlt: "GSA logo",
        partnerLogoSrc: CONTRACT_VEHICLE_ASSETS.commvault,
        partnerLogoAlt: "Commvault logo",
        href: "https://pos.immixgroup.com/igpos/pricelists/GS-35F-0511T_10K.csv",
        ctaLabel: "Check it out"
      },
      {
        id: "gsa-synnex",
        title: "Synnex",
        badgeSrc: CONTRACT_VEHICLE_ASSETS.gsaLogo,
        badgeAlt: "GSA logo",
        partnerLogoSrc: CONTRACT_VEHICLE_ASSETS.synnexLogo,
        partnerLogoAlt: "Synnex logo",
        href: CONTRACT_VEHICLE_ASSETS.synnexLineCard,
        ctaLabel: "Check it out"
      },
      {
        id: "gsa-hp",
        title: "HP",
        badgeSrc: CONTRACT_VEHICLE_ASSETS.gsaLogo,
        badgeAlt: "GSA logo",
        partnerLogoSrc: CONTRACT_VEHICLE_ASSETS.hp,
        partnerLogoAlt: "HP logo",
        ctaLabel: "Coming Soon",
        comingSoon: true
      }
    ]
  },
  cta: {
    title: "Need help selecting a vehicle?",
    description:
      "Our team can match your requirements to the right contract path and connect you with the solutions and services that fit.",
    servicesLabel: "Explore solutions",
    servicesHref: "/services",
    consultationLabel: "Request a consultation",
    consultationHref: "/contact-us"
  }
};
