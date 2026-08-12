import type { CertificationsPageContent } from "./schema";

const img = (file: string) => `/images/certifications/${file}` as const;

export const certificationsPageContent: CertificationsPageContent = {
  hero: {
    title: "Certifications",
    description:
      "Our certifications reflect our commitment to quality, security, and excellence across every solution we deliver."
  },
  sections: [
    {
      id: "industry",
      title: "Industry Certification",
      icon: "industry",
      items: [
        {
          id: "itil",
          name: "ITIL Training Organization",
          imageSrc: img("itil.svg"),
          imageAlt: "ITIL logo"
        }
      ]
    },
    {
      id: "government",
      title: "Government Certification",
      icon: "government",
      groups: [
        {
          id: "federal",
          title: "Federal Certification",
          items: [
            {
              id: "dbe-federal",
              name: "DBE Certified",
              imageSrc: img("dbe.jpg"),
              imageAlt: "DBE certification logo"
            }
          ]
        },
        {
          id: "state-local",
          title: "State Local Certification",
          items: [
            {
              id: "nys-mwbe",
              name: "New York State MWBE Certified",
              imageSrc: img("nys-mwbe-certified-seal-circle.webp"),
              imageAlt: "Official New York State MWBE Certified seal"
            },
            {
              id: "maryland-mbe",
              name: "Maryland MBE Program",
              imageSrc: img("maryland-mbe-seal.webp"),
              imageAlt: "Maryland MBE Program seal"
            },
            {
              id: "maryland-sbr",
              name: "Maryland SBR Program",
              imageSrc: img("maryland-sbr-seal.webp"),
              imageAlt: "Maryland SBR Program seal"
            },
            {
              id: "new-jersey-mwbe",
              name: "New Jersey MWBE",
              imageSrc: img("new-jersey-mwbe.png"),
              imageAlt: "New Jersey MWBE certification logo"
            },
            {
              id: "georgia-sbsd-mwbe",
              name: "Georgia SBSD MWBE",
              imageSrc: img("georgia-sbsd-mwbe.png"),
              imageAlt: "Georgia SBSD certified small women-owned business seal"
            },
            {
              id: "wbe",
              name: "New York City and Nassau County WBE",
              imageSrc: img("wbe.jpg"),
              imageAlt: "New York City and Nassau County WBE logo"
            },
            {
              id: "mwbe-ny-nj",
              name: "Port Authority NY NJ MWBE",
              imageSrc: img("mwbe-ny-nj.png"),
              imageAlt: "Port Authority of NY and NJ MWBE logo"
            },
            {
              id: "sca",
              name: "SCA Approved",
              imageSrc: img("sca.jpg"),
              imageAlt: "SCA approved certification logo"
            },
            {
              id: "port-ny-nj",
              name: "The Port Authority of NY & NJ",
              imageSrc: img("port-ny-nj.jpg"),
              imageAlt: "The Port Authority of NY and NJ certification logo"
            },
            {
              id: "sbe",
              name: "Certified Subcontractor",
              imageSrc: img("sbe.jpg"),
              imageAlt: "Certified Subcontractor logo"
            },
            {
              id: "image-cert",
              name: "Certification badge",
              imageSrc: img("image-cert.png"),
              imageAlt: "Abrahams Consulting certification badge"
            },
            {
              id: "nyc-sbs",
              name: "NYC SBS",
              imageSrc: img("nyc-sbs.jpg"),
              imageAlt: "NYC Small Business Services certification logo"
            }
          ]
        }
      ]
    }
  ],
  cta: {
    title: "Trusted. Certified. Committed.",
    description: "Partner with a certified MWBE technology firm ready to support your mission.",
    buttonLabel: "Contact Us",
    href: "/contact-us"
  }
};
