"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import type { SiteContent } from "../../src/content/schema";
import { IconChevronDown } from "./NavIcons";

type MainNavProps = {
  site: SiteContent;
};

export function MainNav({ site }: MainNavProps) {
  const menuId = useId();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-menu-open", menuOpen);
    return () => {
      document.body.classList.remove("nav-menu-open");
    };
  }, [menuOpen]);

  return (
    <div className="main-nav">
      <div className="main-nav__inner">
        <Link href="/" className="main-nav__brand" onClick={() => setMenuOpen(false)}>
          <Image src="/images/logo.webp" alt={site.name} width={220} height={48} priority className="main-nav__logo" />
        </Link>

        <button
          type="button"
          className="main-nav__toggle"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span className={`main-nav__toggle-icon${menuOpen ? " is-open" : ""}`} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <div id={menuId} className={`main-nav__panel${menuOpen ? " is-open" : ""}`}>
          <nav aria-label="Marketing primary navigation" className="main-nav__links">
            <ul>
              {site.navigation.map((item) => (
                <li key={item.href + item.label}>
                  <Link href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                    {item.label === "Solutions" ? <IconChevronDown className="main-nav__item-icon" /> : null}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href={site.consultationCta.path}
            className="main-nav__cta"
            onClick={() => setMenuOpen(false)}
          >
            SCHEDULE A CONSULTATION
          </Link>
        </div>
      </div>
    </div>
  );
}
