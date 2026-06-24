import type { SiteContent } from "./schema";

export const siteContent: SiteContent = {
  name: "Abrahams Consulting",
  tagline: "Consulting and staffing expertise for enterprise and government delivery teams.",
  contact: {
    phone: "646-558-3887",
    phoneIcon: "phone",
    email: "salessupportnys@abrahamsconsulting.com",
    emailIcon: "mail"
  },
  socialLinks: [
    {
      platform: "linkedin",
      href: "https://www.linkedin.com/company/abrahams-consulting-llc",
      label: "LinkedIn"
    },
    {
      platform: "facebook",
      href: "https://www.facebook.com/AbrahamsConsultingLLC",
      label: "Facebook"
    },
    {
      platform: "twitter",
      href: "https://twitter.com/AbrahamsConsult",
      label: "X (Twitter)"
    },
    {
      platform: "youtube",
      href: "https://www.youtube.com/@AbrahamsConsulting",
      label: "YouTube"
    }
  ],
  awardBanner: {
    headline: "Awarded New York State PBITS Contract (2025–2029)",
    description: "Providing trusted government IT solutions and procurement support.",
    ctaLabel: "Learn More",
    href: "https://online.ogs.ny.gov/purchase/snt/awardnotes/7360023269a.pdf"
  },
  navigation: [
    { label: "Solutions", href: "/services" },
    { label: "Contract Vehicles", href: "/contracts" },
    { label: "Certifications", href: "/trust" },
    { label: "Clients", href: "/trust" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/consultation" }
  ],
  homeHero: {
    headlinePrefix: "Trusted Government ",
    headlineAccent: "IT Solutions",
    headlineSuffix: " & Procurement Partner",
    description:
      "Abrahams Consulting helps public sector agencies modernize infrastructure, strengthen cybersecurity, and streamline procurement through trusted technology partnerships and contract vehicles.",
    features: [
      { icon: "shield", label: "Certified Minority-Owned Business" },
      { icon: "document", label: "NYS & Government Contract Vehicles" },
      { icon: "lock", label: "Cybersecurity & Cloud Specialists" },
      { icon: "people", label: "Public Sector Procurement Expertise" }
    ],
    primaryCtaLabel: "REQUEST A CONSULTATION",
    secondaryCtaLabel: "VIEW CONTRACT VEHICLES"
  },
  certificationStrip: {
    title: "TRUSTED CERTIFICATIONS & GOVERNMENT PARTNERSHIPS",
    imageSrc: "/images/Abrahams-certifications.png",
    imageAlt:
      "Certification and partnership logos: NQA ISO 9001, SBA EDWOSB, SBA 8(a), ITIL, Empire State Development MWBE, and OMNIA Partners"
  },
  homeAbout: {
    eyebrow: "Who we are",
    heading: "ABRAHAMS CONSULTING",
    paragraphs: [
      "Since 2006, Abrahams Consulting has helped government agencies and enterprise organizations procure, deploy, and secure mission-critical technology across New York State and nationwide.",
      "As a certified MWBE and authorized contract holder, we deliver full-lifecycle IT services—cybersecurity, cloud, disaster recovery, 24/7 SOC and help desk, and hardware and software sourcing—through procurement vehicles that reduce time to award and implementation risk."
    ],
    partnersHeading: "Technology partners",
    partnerLogos: [
      { id: "f5", name: "F5", imageSrc: "/images/companies/f5-150x150.jpg" },
      { id: "commvault", name: "Commvault", imageSrc: "/images/companies/commvault-150x150.png" },
      { id: "aruba", name: "Aruba", imageSrc: "/images/companies/arubaLogo.svg" },
      { id: "hp", name: "HP", imageSrc: "/images/companies/hpLogo-150x150.png" },
      { id: "accellion", name: "Accellion", imageSrc: "/images/companies/Accellion-Logo-150x150.jpg" },
      { id: "ibm", name: "IBM", imageSrc: "/images/companies/IBM-150x150.png" },
      { id: "dell", name: "Dell", imageSrc: "/images/companies/Dell-150x150.png" },
      { id: "vmware", name: "VMware", imageSrc: "/images/companies/VmWare-150x150.png" },
      { id: "red-hat", name: "Red Hat", imageSrc: "/images/companies/redhatlogo00.png" },
      { id: "lenovo", name: "Lenovo", imageSrc: "/images/companies/Lenovo-150x150.png" },
      { id: "trustwave", name: "Trustwave", imageSrc: "/images/companies/trustwave-150x150.png" },
      { id: "opswat", name: "OPSWAT", imageSrc: "/images/companies/Opswat-Logo-150x150.png" },
      { id: "vertiv", name: "Vertiv", imageSrc: "/images/companies/Vertiv-150x150.png" },
      { id: "lexmark", name: "Lexmark", imageSrc: "/images/companies/LexmarkLogo-150x150.png" },
      { id: "xerox", name: "Xerox", imageSrc: "/images/companies/Xerox-150x150.png" },
      { id: "cloudinary", name: "Cloudinary", imageSrc: "/images/companies/Cloudinary.png" },
      { id: "device42", name: "Device42", imageSrc: "/images/companies/device42-150x150.png" },
      { id: "nintex", name: "Nintex", imageSrc: "/images/companies/nintex-process-platform-150x150.png" },
      { id: "stars-iii", name: "Stars III", imageSrc: "/images/companies/StarsIII-150x150.png" }
    ]
  },
  footer: {
    assistTitle: "We Are Here To Assist You",
    assistBody:
      "We will coach you and help you achieve your business and enterprise goals. We can help you every step of the way. Join us now and be fully prepared. What are you waiting for? Take the first step today.",
    logoSrc: "/images/logo.webp",
    logoAlt: "Abrahams Consulting",
    badgesTitle: "Our Badge",
    badges: [
      {
        id: "pmi-2023",
        name: "PMI Member 2023",
        imageSrc: "/images/footer/PMI-Member-Badge_2023-qdfcldxld65ue7w8fr3nnaxys0d4exgx4nd3c77je0.png"
      },
      {
        id: "nqa-iso9001",
        name: "NQA ISO 9001 Quality Management",
        imageSrc: "/images/footer/NQA_ISO9001_CMYK-r73wyfb5ibpt2lplhin19cgeda5cvm507ujjlrujdq.jpg"
      },
      {
        id: "maryland-mbe",
        name: "Maryland MBE Program",
        imageSrc: "/images/footer/Maryland-MBE-Seal-r8yaep2c5rsdh2q6oah4rj1ltxm182b5v7189otwbs.png"
      },
      {
        id: "ariba",
        name: "Find us on Ariba Network",
        imageSrc: "/images/footer/badge_245x100.jpg"
      },
      {
        id: "maryland-sbr",
        name: "Maryland SBR Program",
        imageSrc: "/images/footer/Maryland-SBR-Seal-r8yaekd57llxv0x0fqfzx28av0975ksi6jrsvb0v6w.png"
      }
    ],
    connectTitle: "Connect",
    address: "30 Broad Street, NY NY 10004 14th Floor",
    phones: ["877-541-1938", "646-558-3887"],
    contactCtaLabel: "CONTACT US",
    contactCtaHref: "/consultation",
    privacyPolicyLabel: "Privacy Policy",
    privacyPolicyHref: "/about",
    copyrightName: "Technology Consultant Abrahams Consulting LLC"
  },
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
