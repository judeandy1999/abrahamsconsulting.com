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
          imageSrc: img("itil.jpg"),
          imageAlt: "ITIL Training Organization accreditation logo"
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
              id: "wbe",
              name: "New York City and Nassau County WBE",
              imageSrc: img("wbe.jpg"),
              imageAlt: "New York City and Nassau County WBE logo"
            },
            {
              id: "maryland",
              name: "Maryland MBE",
              imageSrc: img("maryland.jpg"),
              imageAlt: "Maryland MBE certification logo"
            },
            {
              id: "mwbe",
              name: "NYS MWBE",
              imageSrc: img("mwbe.jpg"),
              imageAlt: "New York State MWBE logo"
            },
            {
              id: "dbe-state",
              name: "DBE Certified",
              imageSrc: img("dbe.jpg"),
              imageAlt: "DBE certification logo"
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
            // TODO(business): Add New Jersey Certification logo once asset is provided at
            // public/images/certifications/new-jersey.jpg (do not add Washington DC certification).
            {
              id: "port-ny-nj",
              name: "The Port Authority of NY & NJ",
              imageSrc: img("port-ny-nj.jpg"),
              imageAlt: "The Port Authority of NY and NJ certification logo"
            },
            {
              id: "georgia",
              name: "Georgia certification",
              imageSrc: img("georgia.png"),
              imageAlt: "Georgia certification logo"
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
