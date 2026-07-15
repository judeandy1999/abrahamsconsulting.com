import type { LaunchPageSeo } from "./schema";

export const launchPageSeoContent = [
  {
    routeKey: "home",
    path: "/",
    title: "Abrahams Consulting",
    description:
      "Strategic consulting and staffing services for enterprise and government teams pursuing mission-critical outcomes."
  },
  {
    routeKey: "about",
    path: "/about",
    title: "About Abrahams Consulting",
    description:
      "Learn how Abrahams Consulting partners with public and private sector organizations on strategy, staffing, and contract alignment."
  },
  {
    routeKey: "services",
    path: "/services",
    title: "Security, Networking & Storage Solutions",
    description:
      "Explore Abrahams Consulting niche solutions for security, networking, and storage—including IBM Resiliency, Aruba networking, and enterprise storage guidance."
  },
  {
    routeKey: "consulting-services",
    path: "/consulting-services",
    title: "Consulting Services",
    description:
      "Explore Abrahams Consulting managed services, professional services, and cloud services—including SOC/NOC operations, staffing, and Cloud7 secure cloud delivery."
  },
  {
    routeKey: "capabilities-statement-services",
    path: "/capabilities-statement-services",
    title: "Capabilities Statement Services",
    description:
      "Review Abrahams Consulting services capabilities, certifications, vendor partners, past performance, and NAICS codes for enterprise and government engagement."
  },
  {
    routeKey: "capabilities-statement-products",
    path: "/capabilities-statement-products",
    title: "Capabilities Statement Products",
    description:
      "Review Abrahams Consulting product offerings across systems, network, software, office, and peripherals—plus certifications, partners, and past performance."
  },
  {
    routeKey: "capabilities-statement-federal",
    path: "/capabilities-statement-federal",
    title: "Capabilities Statement Federal",
    description:
      "Review Abrahams Consulting federal capabilities as an MWBE serving federal, state, local, and education buyers—including services, partners, past performance, and NAICS codes."
  },
  {
    routeKey: "executive-recruiting",
    path: "/executive-recruiting",
    title: "IT Executive Recruiting",
    description:
      "Identify visionary C-Suite and VP-level technology leaders through Abrahams Consulting's forensic, data-driven executive search process."
  },
  {
    routeKey: "nasa-sewp-vi",
    path: "/nasa-sewp-vi",
    title: "NASA SEWP VI Prime Contractor",
    description:
      "Abrahams Consulting LLC is a NASA SEWP VI Prime Contractor under Category A – ITC/AV Solutions, contract 80TECH26D1658."
  },
  {
    routeKey: "contracts",
    path: "/contracts",
    title: "Contract Vehicles",
    description:
      "Review Abrahams Consulting contract vehicles including NASA SEWP VI, New York State OGS / PBITS, and GSA partner line cards."
  },
  {
    routeKey: "clients",
    path: "/clients",
    title: "Clients",
    description:
      "Explore Abrahams Consulting clients across local government, state government, education, and federal organizations."
  },
  {
    routeKey: "certifications",
    path: "/certifications",
    title: "Certifications",
    description:
      "Review Abrahams Consulting industry and government certifications, including federal and state and local credentials."
  },
  {
    routeKey: "trust",
    path: "/trust",
    title: "Trust & Credentials",
    description:
      "Review certifications, qualification signals, case snapshots, and partner indicators before engaging Abrahams Consulting."
  },
  {
    routeKey: "blog",
    path: "/blog",
    title: "TechTonic Times | Abrahams Consulting",
    description:
      "Security, networking, storage, IT staffing, and managed services insights from Abrahams Consulting."
  },
  {
    routeKey: "contact-us",
    path: "/contact-us",
    title: "Contact Us",
    description:
      "Contact Abrahams Consulting about NASA SEWP VI, solutions, and agency support. Reach our team by email, phone, or the contact form."
  },
  {
    routeKey: "contact-us-success",
    path: "/contact-us/success",
    title: "Message Received",
    description:
      "Your message was received. Abrahams Consulting will review your submission and follow up with next steps."
  }
] as const satisfies readonly LaunchPageSeo[];
