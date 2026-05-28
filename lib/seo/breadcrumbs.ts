export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function buildServiceDetailBreadcrumbs(serviceTitle: string, slug: string): BreadcrumbItem[] {
  return [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: serviceTitle, path: `/services/${slug}` }
  ];
}
