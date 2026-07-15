"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ClientsPageContent as ClientsPageContentType } from "../../src/content/schema";
import { ContactUsIcon } from "./ContactUsIcon";

type ClientsPageContentProps = {
  content: ClientsPageContentType;
};

type Category = ClientsPageContentType["categories"][number];
type CategoryIcon = Category["icon"];

function CategoryIconSvg({ name }: { name: CategoryIcon | "commitment" | "cta" }) {
  switch (name) {
    case "local-government":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4.5 20.25V9.75L12 4.5l7.5 5.25v10.5H4.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M9.75 20.25v-6h4.5v6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      );
    case "state-government":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M5 20.25h14M6.75 20.25V9.5L12 5.75l5.25 3.75v10.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M9.5 12.25h1.5M13 12.25h1.5M9.5 15.25h1.5M13 15.25h1.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "education":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M3.75 9.5 12 5.25 20.25 9.5 12 13.75 3.75 9.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M7.25 11.5v4.25c0 .75 2.1 2.25 4.75 2.25s4.75-1.5 4.75-2.25V11.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "federal":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3.75 19.25 7v4.5c0 4.55-3.1 7.85-7.25 8.75-4.15-.9-7.25-4.2-7.25-8.75V7L12 3.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "commitment":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M8.5 11.25c1.66 0 3-1.45 3-3.25S10.16 4.75 8.5 4.75 5.5 6.2 5.5 8s1.34 3.25 3 3.25ZM15.5 11.25c1.66 0 3-1.45 3-3.25s-1.34-3.25-3-3.25-3 1.45-3 3.25 1.34 3.25 3 3.25Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M3.75 19.25c0-2.45 2.13-4.5 4.75-4.5h.5c1.2 0 2.3.45 3.1 1.2.8-.75 1.9-1.2 3.1-1.2h.5c2.62 0 4.75 2.05 4.75 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "cta":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4.5 20.25V9.75L12 4.5l7.5 5.25v10.5H4.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

function ClientLogoGrid({ clients }: { clients: Category["clients"] }) {
  if (clients.length === 0) {
    return <p className="clients-page__empty">No clients in this category yet.</p>;
  }

  return (
    <ul className="clients-page__logo-grid">
      {clients.map((client) => (
        <li key={client.id} className="clients-page__logo-item">
          <Image
            src={client.imageSrc}
            alt={client.imageAlt}
            width={160}
            height={96}
            className="clients-page__logo-image"
          />
        </li>
      ))}
    </ul>
  );
}

function CategorySection({
  category,
  activeFilter,
  onFilterChange
}: {
  category: Category;
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
}) {
  const visibleClients = useMemo(() => {
    if (!category.filters || activeFilter === "all") {
      return category.clients;
    }
    return category.clients.filter((client) => client.filter === activeFilter);
  }, [activeFilter, category.clients, category.filters]);

  return (
    <section id={category.id} className="clients-page__section" aria-labelledby={`${category.id}-heading`}>
      <header className="clients-page__section-header">
        <span className="clients-page__section-icon" aria-hidden="true">
          <CategoryIconSvg name={category.icon} />
        </span>
        <div>
          <h2 id={`${category.id}-heading`} className="clients-page__section-title">
            {category.title}
          </h2>
          <p className="clients-page__section-description">{category.description}</p>
        </div>
      </header>

      {category.filters ? (
        <div className="clients-page__filters" role="tablist" aria-label={`${category.title} filters`}>
          {category.filters.map((filter) => {
            const selected = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={selected}
                className={`clients-page__filter${selected ? " clients-page__filter--active" : ""}`}
                onClick={() => onFilterChange(filter.id)}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      ) : null}

      <div className="clients-page__logo-panel">
        <ClientLogoGrid clients={visibleClients} />
      </div>
    </section>
  );
}

export function ClientsPageContent({ content }: ClientsPageContentProps) {
  const [activeCategory, setActiveCategory] = useState(content.categories[0]?.id ?? "");
  const [filters, setFilters] = useState<Record<string, string>>(() =>
    Object.fromEntries(content.categories.map((category) => [category.id, "all"]))
  );

  const selectedCategory =
    content.categories.find((category) => category.id === activeCategory) ?? content.categories[0];

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const hashId = window.location.hash.replace(/^#/, "");
    if (hashId && content.categories.some((category) => category.id === hashId)) {
      setActiveCategory(hashId);
    }
  }, [content.categories]);

  const selectCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${categoryId}`);
    }
  };

  return (
    <div className="clients-page">
      <section className="clients-page__hero" aria-labelledby="clients-hero-heading">
        <div className="clients-page__hero-overlay" aria-hidden="true" />
        <div className="clients-page__hero-inner">
          <h1 id="clients-hero-heading" className="clients-page__hero-title">
            {content.hero.title}
          </h1>
          <p className="clients-page__hero-description">{content.hero.description}</p>
        </div>
      </section>

      <div className="clients-page__body">
        <div className="clients-page__layout">
          <aside className="clients-page__sidebar" aria-label="Client categories">
            <nav className="clients-page__side-nav" aria-label="Client category tabs">
              <ul className="clients-page__side-nav-list" role="tablist" aria-orientation="vertical">
                {content.categories.map((category) => {
                  const active = activeCategory === category.id;
                  return (
                    <li key={category.id} role="presentation">
                      <button
                        type="button"
                        role="tab"
                        id={`${category.id}-tab`}
                        aria-selected={active}
                        aria-controls={category.id}
                        tabIndex={active ? 0 : -1}
                        className={`clients-page__side-nav-link${active ? " clients-page__side-nav-link--active" : ""}`}
                        onClick={() => selectCategory(category.id)}
                      >
                        <span className="clients-page__side-nav-icon" aria-hidden="true">
                          <CategoryIconSvg name={category.icon} />
                        </span>
                        <span>{category.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="clients-page__commitment">
              <span className="clients-page__commitment-icon" aria-hidden="true">
                <CategoryIconSvg name="commitment" />
              </span>
              <h2 className="clients-page__commitment-title">{content.commitment.title}</h2>
              <p className="clients-page__commitment-description">{content.commitment.description}</p>
            </div>
          </aside>

          <div className="clients-page__main" role="tabpanel" aria-labelledby={`${selectedCategory.id}-tab`}>
            {selectedCategory ? (
              <CategorySection
                key={selectedCategory.id}
                category={selectedCategory}
                activeFilter={filters[selectedCategory.id] ?? "all"}
                onFilterChange={(filterId) =>
                  setFilters((current) => ({
                    ...current,
                    [selectedCategory.id]: filterId
                  }))
                }
              />
            ) : null}
          </div>
        </div>
      </div>

      <section className="clients-page__cta" aria-labelledby="clients-cta-heading">
        <div className="clients-page__cta-inner">
          <div className="clients-page__cta-copy">
            <span className="clients-page__cta-icon" aria-hidden="true">
              <CategoryIconSvg name="cta" />
            </span>
            <div>
              <h2 id="clients-cta-heading" className="clients-page__cta-title">
                {content.cta.title}
              </h2>
              <p className="clients-page__cta-description">{content.cta.description}</p>
            </div>
          </div>
          <Link href={content.cta.href} className="btn btn--primary clients-page__cta-button">
            <ContactUsIcon name="mail" className="clients-page__cta-button-icon" />
            {content.cta.buttonLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}
