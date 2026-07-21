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
      platform: "facebook",
      href: "https://www.facebook.com/Abrahamsconsulting/",
      label: "Facebook"
    },
    {
      platform: "linkedin",
      href: "https://www.linkedin.com/in/angela-gibson-itil-5067093/",
      label: "LinkedIn"
    },
    {
      platform: "twitter",
      href: "https://twitter.com/abrahamsconsult",
      label: "X (Twitter)"
    },
    {
      platform: "youtube",
      href: "https://www.youtube.com/channel/UCQh3fZ_2Uaj3d2weFIgyM4w",
      label: "YouTube"
    }
  ],
  awardBanner: {
    headline: "Awarded New York State PBITS Contract (2025–2029)",
    description: "Providing trusted government IT solutions and procurement support.",
    ctaLabel: "Learn More",
    href: "https://online.ogs.ny.gov/purchase/snt/awardnotes/7360023269a.pdf"
  },
  utilityLinks: [
    {
      label: "Contract Vehicles",
      href: "/contracts"
    },
    {
      label: "Certifications",
      href: "/certifications"
    },
    {
      label: "Clients",
      href: "/clients"
    }
  ],
  navigation: [
    {
      label: "Solutions",
      href: "/services",
      children: [
        { label: "Security", href: "/services#security" },
        { label: "Networking", href: "/services#networking" },
        { label: "Cloud Storage", href: "/services#cloud-storage" },
        { label: "Tape Storage", href: "/services#tape-storage" }
      ]
    },
    {
      label: "Executive Recruiting",
      href: "/executive-recruiting"
    },
    {
      label: "Consulting Services",
      href: "/consulting-services"
    },
    {
      // TODO: Future work may replace CMC Engage branding with Abrahams Consulting branding.
      label: "Manufacturer Store",
      href: "https://cmcengage.com/6702"
    },
    {
      label: "Blog",
      href: "/blog"
    },
    {
      // TODO: Verify whether the menu title should remain "EVA" or become "EVA Speaks".
      label: "EVA",
      href: "https://evespeaks.com/virtual-assistance-services/"
    }
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
    imageSrc: "/images/Abrahams-certifications.webp",
    // TODO: Regenerate Abrahams-certifications.webp without SBA WOSB / 8(a) / STARS III marks.
    imageAlt:
      "Certification and partnership logos: NQA ISO 9001, ITIL, Empire State Development MWBE, and OMNIA Partners"
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
      { id: "f5", name: "F5", imageSrc: "/images/companies/f5-150x150.webp" },
      { id: "commvault", name: "Commvault", imageSrc: "/images/companies/commvault-150x150.webp" },
      { id: "aruba", name: "Aruba", imageSrc: "/images/companies/arubaLogo.svg" },
      { id: "hp", name: "HP", imageSrc: "/images/companies/hpLogo-150x150.webp" },
      { id: "accellion", name: "Accellion", imageSrc: "/images/companies/Accellion-Logo-150x150.webp" },
      { id: "dell", name: "Dell", imageSrc: "/images/companies/Dell-150x150.webp" },
      { id: "vmware", name: "VMware", imageSrc: "/images/companies/VmWare-150x150.webp" },
      { id: "red-hat", name: "Red Hat", imageSrc: "/images/companies/redhatlogo00.webp" },
      { id: "lenovo", name: "Lenovo", imageSrc: "/images/companies/Lenovo-150x150.webp" },
      { id: "opswat", name: "OPSWAT", imageSrc: "/images/companies/Opswat-Logo-150x150.webp" },
      { id: "vertiv", name: "Vertiv", imageSrc: "/images/companies/Vertiv-150x150.webp" },
      { id: "lexmark", name: "Lexmark", imageSrc: "/images/companies/LexmarkLogo-150x150.webp" },
      { id: "xerox", name: "Xerox", imageSrc: "/images/companies/Xerox-150x150.webp" },
      { id: "cloudinary", name: "Cloudinary", imageSrc: "/images/companies/Cloudinary.webp" },
      { id: "device42", name: "Device42", imageSrc: "/images/companies/device42-150x150.webp" },
      { id: "nintex", name: "Nintex", imageSrc: "/images/companies/nintex-process-platform-150x150.webp" }
    ]
  },
  homeFederalCapabilities: {
    heading: "FEDERAL CAPABILITIES",
    body:
      "Abrahams Consulting LLC has expanded its federal capabilities as a NASA SEWP VI Prime Contractor under Category A – ITC/AV Solutions. Learn more about it ",
    linkLabel: "here.",
    linkHref: "/nasa-sewp-vi"
  },
  homeSolutions: {
    title: "OUR SOLUTIONS",
    ctaLabel: "FIND YOUR SOLUTION",
    ctaHref: "/services",
    items: [
      {
        id: "cybersecurity",
        icon: "cybersecurity",
        title: "CYBERSECURITY SOLUTIONS",
        description:
          "Protect critical infrastructure with enterprise-grade security platforms and managed protection services."
      },
      {
        id: "cloud-infrastructure",
        icon: "cloud",
        title: "CLOUD & INFRASTRUCTURE",
        description:
          "Modernize operations with scalable cloud, networking, and storage solutions built for performance and reliability."
      },
      {
        id: "procurement",
        icon: "procurement",
        title: "IT PROCUREMENT & CONTRACT VEHICLES",
        description:
          "Simplify purchasing through approved government contracts and procurement expertise."
      },
      {
        id: "ai-emerging-tech",
        icon: "ai",
        title: "AI & EMERGING TECHNOLOGY",
        description:
          "Accelerate innovation with AI-powered automation and intelligent digital transformation."
      },
      {
        id: "staffing-consulting",
        icon: "staffing",
        title: "TECHNICAL STAFFING & CONSULTING",
        description:
          "Access specialized IT professionals for project delivery, implementation, and strategic guidance."
      }
    ]
  },
  homeConsultingServices: {
    title: "CONSULTING SERVICES",
    subtitle: "Services for your technology solutions needs",
    ctaLabel: "CHECK OUT FULL CONSULTING SERVICES",
    ctaHref: "/consulting-services",
    items: [
      {
        id: "managed-services",
        icon: "managed-services",
        title: "MANAGED SERVICES",
        description:
          "Providing the responsibility for maintaining, and anticipating need for, a range of processes and functions in order to improve operations and cut expenses."
      },
      {
        id: "executive-recruiting",
        icon: "executive-recruiting",
        title: "EXECUTIVE RECRUITING",
        description:
          "Identify visionary technology leaders through a forensic, data-driven executive search process tailored to public-sector and enterprise needs."
      },
      {
        id: "professional-services",
        icon: "professional-services",
        title: "PROFESSIONAL SERVICES",
        description:
          "We provide Professional service that will help small business/governments with Technical Staffing, Digital Marketing, IT Services, Project Management, Design and more."
      }
    ]
  },
  homeWhyChoose: {
    title: "WHY CHOOSE ABRAHAMS CONSULTING?",
    body:
      "We combine deep industry expertise, strong partner values, and a commitment to excellence to deliver solutions that drive mission success and operational efficiency.",
    stats: [
      {
        id: "experience",
        icon: "experience",
        value: "20+",
        label: "Years of Experience in IT Solutions"
      },
      {
        id: "government-clients",
        icon: "government-clients",
        value: "100+",
        label: "Government & Public Sector Clients"
      },
      {
        id: "technology-partners",
        icon: "technology-partners",
        value: "50+",
        label: "Certified Technology Partners"
      },
      {
        id: "client-success",
        icon: "client-success",
        value: "100%",
        label: "Commitment to Client Success"
      }
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
        id: "nqa-iso9001",
        name: "NQA ISO 9001 Quality Management",
        imageSrc: "/images/footer/NQA_ISO9001_CMYK-r73wyfb5ibpt2lplhin19cgeda5cvm507ujjlrujdq.webp"
      },
      {
        id: "maryland-mbe",
        name: "Maryland MBE Program",
        imageSrc: "/images/footer/Maryland-MBE-Seal-r8yaep2c5rsdh2q6oah4rj1ltxm182b5v7189otwbs.webp"
      },
      {
        id: "ariba",
        name: "Find us on Ariba Network",
        imageSrc: "/images/footer/badge_245x100.webp"
      },
      {
        id: "maryland-sbr",
        name: "Maryland SBR Program",
        imageSrc: "/images/footer/Maryland-SBR-Seal-r8yaekd57llxv0x0fqfzx28av0975ksi6jrsvb0v6w.webp"
      }
    ],
    connectTitle: "Connect",
    address: "30 Broad Street, NY NY 10004 14th Floor",
    phones: ["877-541-1938", "646-558-3887"],
    contactCtaLabel: "CONTACT US",
    contactCtaHref: "/contact-us",
    privacyPolicyLabel: "Privacy Policy",
    privacyPolicyHref: "/about",
    copyrightName: "Technology Consultant Abrahams Consulting LLC"
  },
  consultationCta: {
    label: "Schedule a Consultation",
    path: "https://info.abrahamsconsulting.com/meetings/abrahams-meeting/abrahams-consulting-professional-services"
  },
  nasaSewpViCta: {
    label: "NASA SEWP VI",
    path: "/nasa-sewp-vi"
  },
  contactPage: {
    title: "Contact Us",
    description:
      "Have questions about the SEWP VI contract, our solutions, or how we can support your agency? Fill out the form and a member of our team will get back to you promptly.",
    channels: [
      {
        id: "email",
        label: "Email Us",
        value: "salessupportnys@abrahamsconsulting.com",
        icon: "mail",
        href: "mailto:salessupportnys@abrahamsconsulting.com"
      },
      {
        id: "toll-free",
        label: "Toll Free",
        value: "877-541-1938",
        icon: "phone",
        href: "tel:+18775411938"
      },
      {
        id: "direct",
        label: "Direct",
        value: "646-558-3887",
        icon: "smartphone",
        href: "tel:+16465583887"
      },
      {
        id: "office",
        label: "Our Office",
        value: "40 Wall Street\nNew York, NY",
        icon: "map-pin"
      }
    ],
    hubspotForm: {
      portalId: "44647552",
      formId: "7b2491d8-74db-49db-b377-eae6eccdd2fe",
      region: "na1",
      targetId: "hubspot-contact-form"
    }
  }
};
