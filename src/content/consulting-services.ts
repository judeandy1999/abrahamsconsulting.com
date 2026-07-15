import type { ConsultingServicesPageContent } from "./schema";

export const CONSULTING_SERVICES_IMAGES = {
  managed: "/images/consulting-services/managed-service.webp",
  professional: "/images/consulting-services/professional-services.webp",
  cloud: "/images/consulting-services/cloud-services.webp"
} as const;

export const consultingServicesPageContent: ConsultingServicesPageContent = {
  hero: {
    segments: ["Consulting Services"],
    description:
      "Abrahams Consulting provides business consulting services for Managed Services, Professional Services, and Cloud Services. Explore each service area below, then review our full service package offerings."
  },
  servicesSection: {
    title: "Services for your technology solutions needs",
    knowMoreLabel: "Know More",
    scheduleLabel: "Schedule a Consultation",
    items: [
      {
        id: "managed-services",
        icon: "managed-services",
        title: "MANAGED SERVICES",
        description:
          "Providing the responsibility for maintaining, and anticipating need for, a range of processes and functions in order to improve operations and cut expenses.",
        modal: {
          imageSrc: CONSULTING_SERVICES_IMAGES.managed,
          imageAlt: "Managed services operations overview",
          sections: [
            {
              title: "Security Operations Center (SOC)",
              items: [
                "Cloud based secure email solutions including encryption, eDiscovery, archiving, SPAM filtering, attachment and hyper-link protection",
                "Cloud based Certificate Authority services including SSL certificates and PKI",
                "Vulnerability assessments",
                "Managed Anti-Virus for computers, servers and mobile devices"
              ]
            },
            {
              title: "Network Operations Center (NOC)",
              items: [
                "24×7 monitoring of servers, routers, switches, firewalls, desktops, laptops and IP enabled devices",
                "Patching and software updates for servers, computers and network devices",
                "End-to-end network monitoring with automated network diagrams"
              ]
            }
          ],
          ctaHref:
            "https://info.abrahamsconsulting.com/meetings/abrahams-meeting/abrahams-consulting-managed-services"
        }
      },
      {
        id: "cloud-services",
        icon: "cloud-services",
        title: "CLOUD SERVICES",
        description:
          "Having a secured cloud tech solutions can prevent your business data from being penetrated by unwanted attacks, stealing sensitive data and unauthorized user access or use.",
        modal: {
          imageSrc: CONSULTING_SERVICES_IMAGES.cloud,
          imageAlt: "Cloud services infrastructure overview",
          sections: [
            {
              title: "Cloud7: Secure Managed Cloud Solutions",
              items: [
                "IaaS (Infrastructure as a Service)",
                "PaaS (Platform as a Service)",
                "SaaS (Software as a Service)",
                "O365 (Exchange, SharePoint, OneDrive, and Office)",
                "DRaaS (Disaster Recovery as a Service)",
                "BaaS (Back-up as a Service)"
              ]
            }
          ],
          ctaHref:
            "https://info.abrahamsconsulting.com/meetings/abrahams-meeting/abrahams-consulting-cloud-services"
        }
      },
      {
        id: "professional-services",
        icon: "professional-services",
        title: "PROFESSIONAL SERVICES",
        description:
          "We provide Professional service that will help small business/governments with Technical Staffing, Digital Marketing, IT Services, Project Management, Design and more.",
        modal: {
          imageSrc: CONSULTING_SERVICES_IMAGES.professional,
          imageAlt: "Professional services delivery overview",
          sections: [
            {
              title: "Professional Services",
              items: [
                "Technical Staffing",
                "Break/Fix",
                "Design",
                "Virtual CIO (Chief Information Officer)",
                "Hardware and Software Sales"
              ]
            }
          ],
          ctaHref:
            "https://info.abrahamsconsulting.com/meetings/abrahams-meeting/abrahams-consulting-professional-services"
        }
      }
    ]
  },
  packageSection: {
    eyebrow: "OUR CAPABILITIES",
    title: "Here's an Extensive Layout of Our Full Service Package",
    description: "Review our capabilities statements to understand the breadth of services, federal qualifications, and product offerings.",
    knowMoreLabel: "Know More",
    items: [
      {
        id: "capabilities-services",
        icon: "capabilities-services",
        title: "Capabilities Statement Services",
        href: "/capabilities-statement-services"
      },
      {
        id: "capabilities-federal",
        icon: "capabilities-federal",
        title: "Capabilities Statement Federal",
        href: "/capabilities-statement-federal"
      },
      {
        id: "capabilities-products",
        icon: "capabilities-products",
        title: "Capabilities Statement Products",
        href: "/capabilities-statement-products"
      }
    ]
  }
};
