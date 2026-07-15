import { siteContent } from "./site";

const cert = (file: string) => `/images/certifications/${file}` as const;

export const capabilitiesStatementSharedCertifications = {
  title: "Certifications & Qualifications",
  href: "/certifications",
  items: [
    {
      id: "dbe",
      name: "DBE",
      imageSrc: cert("dbe.jpg"),
      imageAlt: "DBE certification logo"
    },
    {
      id: "stars-iii",
      name: "8(a) STARS III",
      imageSrc: cert("stars-iii.png"),
      imageAlt: "GSA 8(a) STARS III logo"
    },
    {
      id: "itil",
      name: "ITIL",
      imageSrc: cert("itil.jpg"),
      imageAlt: "ITIL Training Organization accreditation logo"
    },
    {
      id: "sba",
      name: "SBA",
      imageSrc: cert("sba.jpg"),
      imageAlt: "Certified Small Business, SBA logo"
    },
    {
      id: "sba-wosb",
      name: "SBA WOSB",
      imageSrc: cert("sba-wosb.jpg"),
      imageAlt: "SBA Woman Owned Small Business logo"
    },
    {
      id: "sca",
      name: "SCA",
      imageSrc: cert("sca.jpg"),
      imageAlt: "SCA certification logo"
    },
    {
      id: "georgia",
      name: "Georgia",
      imageSrc: cert("georgia.png"),
      imageAlt: "Georgia certification logo"
    },
    {
      id: "mwbe",
      name: "NYS MWBE",
      imageSrc: cert("mwbe.jpg"),
      imageAlt: "New York State MWBE logo"
    },
    {
      id: "maryland",
      name: "Maryland MBE",
      imageSrc: cert("maryland.jpg"),
      imageAlt: "Maryland MBE certification logo"
    },
    {
      id: "mwbe-ny-nj",
      name: "Port Authority MWBE",
      imageSrc: cert("mwbe-ny-nj.png"),
      imageAlt: "MWBE NY/NJ certification logo"
    },
    {
      id: "sbe",
      name: "SBE",
      imageSrc: cert("sbe.jpg"),
      imageAlt: "SBE certification logo"
    },
    {
      id: "wbe",
      name: "WBE",
      imageSrc: cert("wbe.jpg"),
      imageAlt: "New York City and Nassau County WBE logo"
    }
  ]
};

export const capabilitiesStatementSharedPeople = [
  { name: "Angela Abrahams Gibson", role: "Founder" },
  { name: "Rodney James", role: "CTO" }
];

export const capabilitiesStatementSharedContactBase = {
  people: capabilitiesStatementSharedPeople,
  phone: "(646) 558-3887",
  cell: "(516) 639-5188",
  fax: "(877) 541-1938",
  websiteLabel: "www.abrahamsconsulting.com",
  websiteHref: "/"
};

export const capabilitiesStatementSharedFocusAreas = [
  { id: "managed-it", title: "Managed IT Services" },
  { id: "cloud", title: "Cloud Services" },
  { id: "staffing", title: "Technical Staffing" }
];

export const capabilitiesStatementSharedOverview = {
  title: "Company Overview",
  body: "Abrahams Consulting is a Minority-Owned Small Business serving the technology needs of small, medium, and enterprise businesses since 2006. As a full lifecycle IT services company, we provide security, disaster recovery, cloud, 24×7 help desk, storage, 24×7 security operations center, hardware and software sales, and other technology solutions."
};

export const capabilitiesStatementSharedPartners = {
  title: "Vendor Partners",
  items: siteContent.homeAbout.partnerLogos.map((logo) => ({
    id: logo.id,
    name: logo.name,
    imageSrc: logo.imageSrc
  }))
};

export const capabilitiesStatementSharedNaics = {
  title: "NAICS Codes",
  items: [
    { code: "541611", label: "Administrative Management and General Management Consulting Services" },
    { code: "541512", label: "Computer Systems Design Services" },
    { code: "541612", label: "Human Resources Consulting Services" },
    { code: "541519", label: "Other Computer Related Services" },
    { code: "423430", label: "Computer and Computer Peripheral Equipment and Software Merchant Wholesalers" },
    { code: "541513", label: "Computer Facilities Management Services" },
    { code: "541618", label: "Other Management Consulting Services" },
    { code: "541511", label: "Custom Computer Programming Services" },
    { code: "541990", label: "All Other Professional, Scientific, and Technical Services" },
    { code: "541330", label: "Engineering Services" },
    { code: "561320", label: "Temporary Help Services" },
    { code: "511210", label: "Software Publishers" },
    { code: "519190", label: "All Other Information Services" },
    { code: "541690", label: "Other Scientific and Technical Consulting Services" },
    { code: "561499", label: "All Other Business Support Services" }
  ]
};

export const capabilitiesStatementSharedCta = {
  title: "Finding you the Right Solution",
  description:
    "We will coach you and help you achieve your business and enterprise goals. Join us and take the first step today.",
  buttonLabel: "Contact Us",
  href: "/contact-us"
};
