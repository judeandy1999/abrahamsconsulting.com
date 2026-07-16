import type { ClientsPageContent } from "./schema";

const img = (file: string) => `/images/clients/${file}` as const;

export const clientsPageContent: ClientsPageContent = {
  hero: {
    title: "Clients",
    description:
      "Trusted by local, state, educational, and federal organizations to deliver technology solutions that drive results."
  },
  commitment: {
    title: "Our Commitment",
    description:
      "We partner with organizations across all sectors to provide innovative, reliable, and cost-effective IT solutions."
  },
  categories: [
    {
      id: "local-government",
      title: "Local Government",
      description: "Proudly supporting city, county, and local agencies with innovative IT solutions.",
      icon: "local-government",
      clients: [
        {
          id: "nyc-dep",
          name: "NYC Environmental Protection",
          imageSrc: img("nyc-dep.png"),
          imageAlt: "NYC Environmental Protection logo"
        },
        {
          id: "nyc-oti",
          name: "Office of Technology and Innovation (OTI)",
          imageSrc: img("nyc-doit.png"),
          imageAlt: "NYC Office of Technology and Innovation logo"
        },
        {
          id: "nyc-dot",
          name: "NYC Department of Transportation",
          imageSrc: img("nyc-dot.png"),
          imageAlt: "NYC Department of Transportation logo"
        },
        {
          id: "nyc-hpd",
          name: "NYC HPD",
          imageSrc: img("nyc-hpd.jpg"),
          imageAlt: "NYC Housing Preservation and Development logo"
        },
        {
          id: "nyc-sanitation",
          name: "NYC Department of Sanitation",
          imageSrc: img("nyc-sanitation.jpg"),
          imageAlt: "NYC Department of Sanitation logo"
        },
        {
          id: "nyc-comptroller",
          name: "NYC Office of the Comptroller",
          imageSrc: img("nyc-comptroller.png"),
          imageAlt: "NYC Office of the Comptroller logo"
        },
        {
          id: "nyc-fdny",
          name: "NYC Fire Department",
          imageSrc: img("nyc-fdny.jpg"),
          imageAlt: "NYC Fire Department logo"
        },
        {
          id: "nyc-law",
          name: "NYC Law Department",
          imageSrc: img("nyc-law.jpg"),
          imageAlt: "NYC Law Department logo"
        },
        {
          id: "nyc-dcas",
          name: "NYC DCAS",
          imageSrc: img("nyc-dcas.jpg"),
          imageAlt: "NYC Department of Citywide Administrative Services logo"
        },
        {
          id: "nyc-parks",
          name: "NYC Parks & Recreation",
          imageSrc: img("nyc-parks.webp"),
          imageAlt: "NYC Parks and Recreation logo"
        }
      ]
    },
    {
      id: "state-government",
      title: "State Government",
      description: "Delivering trusted technology solutions for New York State agencies and offices.",
      icon: "state-government",
      clients: [
        {
          id: "nys-public",
          name: "NYS Public Relations Board",
          imageSrc: img("nys-public.jpg"),
          imageAlt: "NYS Public Relations Board logo"
        },
        {
          id: "nys-tax",
          name: "NYS Tax & Finance",
          imageSrc: img("nys-tax.jpg"),
          imageAlt: "NYS Department of Taxation and Finance logo"
        },
        {
          id: "nys-comptroller",
          name: "NYS Comptroller",
          imageSrc: img("nys-comptroller.png"),
          imageAlt: "NYS Office of the State Comptroller logo"
        },
        {
          id: "nys-dol",
          name: "NYS Department of Labor",
          imageSrc: img("nys-dol.jpg"),
          imageAlt: "NYS Department of Labor logo"
        },
        {
          id: "nys-dot",
          name: "NYS Department of Transportation",
          imageSrc: img("nys-dot.png"),
          imageAlt: "NYS Department of Transportation logo"
        }
      ]
    },
    {
      id: "education",
      title: "Education",
      description: "Supporting colleges, universities, and K-12 institutions with reliable technology partnerships.",
      icon: "education",
      filters: [
        { id: "all", label: "All" },
        { id: "state-colleges", label: "State Colleges" },
        { id: "city-colleges", label: "City Colleges" },
        { id: "k-12", label: "K-12" }
      ],
      clients: [
        {
          id: "suny",
          name: "SUNY",
          imageSrc: img("suny.jpg"),
          imageAlt: "SUNY logo",
          filter: "state-colleges"
        },
        {
          id: "hudson",
          name: "Hudson Valley Community College",
          imageSrc: img("hudson.jpg"),
          imageAlt: "Hudson Valley Community College logo",
          filter: "state-colleges"
        },
        {
          id: "potsdam",
          name: "SUNY Potsdam",
          imageSrc: img("potsdam.jpg"),
          imageAlt: "SUNY Potsdam logo",
          filter: "state-colleges"
        },
        {
          id: "stony-brook",
          name: "Stony Brook University",
          imageSrc: img("stony-brook.png"),
          imageAlt: "Stony Brook University logo",
          filter: "state-colleges"
        },
        {
          id: "cuny",
          name: "CUNY",
          imageSrc: img("cuny.jpg"),
          imageAlt: "CUNY logo",
          filter: "city-colleges"
        },
        {
          id: "hunter",
          name: "Hunter College",
          imageSrc: img("hunter.jpg"),
          imageAlt: "Hunter College logo",
          filter: "city-colleges"
        },
        {
          id: "city-tech",
          name: "NYC College of Technology",
          imageSrc: img("city-tech.png"),
          imageAlt: "NYC College of Technology logo",
          filter: "city-colleges"
        },
        {
          id: "nyc-doe",
          name: "NYC Department of Education",
          imageSrc: img("nyc-doe.png"),
          imageAlt: "NYC Department of Education logo",
          filter: "k-12"
        },
        {
          id: "eleanor-k12",
          name: "Eleanor Roosevelt High School",
          imageSrc: img("eleanor-k12.jpg"),
          imageAlt: "Eleanor Roosevelt High School logo",
          filter: "k-12"
        },
        {
          id: "van-buren-k12",
          name: "Van Buren High School",
          imageSrc: img("van-buren-k12.jpg"),
          imageAlt: "Van Buren High School logo",
          filter: "k-12"
        }
      ]
    },
    {
      id: "federal",
      title: "Federal",
      description: "Partnering with federal civilian and Department of Defense organizations.",
      icon: "federal",
      filters: [
        { id: "all", label: "All" },
        { id: "civilian", label: "Civilian" },
        { id: "dod", label: "DOD" }
      ],
      clients: [
        {
          id: "federal-dos",
          name: "U.S. Department of State",
          imageSrc: img("federal-dos.jpg"),
          imageAlt: "U.S. Department of State logo",
          filter: "civilian"
        },
        {
          id: "federal-sec",
          name: "U.S. Securities and Exchange Commission",
          imageSrc: img("federal-sec.png"),
          imageAlt: "U.S. Securities and Exchange Commission logo",
          filter: "civilian"
        },
        {
          id: "federal-doi",
          name: "U.S. Department of the Interior",
          imageSrc: img("federal-doi.jpg"),
          imageAlt: "U.S. Department of the Interior logo",
          filter: "civilian"
        },
        {
          id: "federal-dot",
          name: "U.S. Department of Transportation",
          imageSrc: img("federal-dot.png"),
          imageAlt: "U.S. Department of Transportation logo",
          filter: "civilian"
        },
        // TODO: Replace DoDEA listing with the confirmed specific Department of Defense agency once business confirms.
        {
          id: "federal-dodea",
          name: "Department of Defense Education Activity",
          imageSrc: img("federal-dodea.jpg"),
          imageAlt: "Department of Defense Education Activity logo",
          filter: "dod"
        }
      ]
    }
  ],
  cta: {
    title: "Let's Work Together",
    description: "Join the organizations that trust Abrahams Consulting for their technology needs.",
    buttonLabel: "Contact Us",
    href: "/contact-us"
  }
};
