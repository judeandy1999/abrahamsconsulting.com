"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { SiteContent } from "../../src/content/schema";
import { IconChevronDown } from "./NavIcons";

type MainNavProps = {
  site: SiteContent;
};

export function MainNav({ site }: MainNavProps) {
  const menuId = useId();
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-menu-open", menuOpen);
    return () => {
      document.body.classList.remove("nav-menu-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!openDropdown) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [openDropdown]);

  const closeMenus = useCallback(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, []);

  const toggleDropdown = useCallback((key: string) => {
    setOpenDropdown((current) => (current === key ? null : key));
  }, []);

  return (
    <div className="main-nav" ref={navRef}>
      <div className="main-nav__inner">
        <Link href="/" className="main-nav__brand" onClick={closeMenus}>
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
              {site.navigation.map((item) => {
                const itemKey = `${item.href}-${item.label}`;
                const hasChildren = Boolean(item.children?.length);
                const isDropdownOpen = openDropdown === itemKey;

                if (!hasChildren) {
                  return (
                    <li key={itemKey}>
                      <Link href={item.href} onClick={closeMenus}>
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                const dropdownId = `${menuId}-${itemKey}`;

                return (
                  <li
                    key={itemKey}
                    className={`main-nav__item main-nav__item--dropdown${isDropdownOpen ? " is-open" : ""}`}
                  >
                    <div className="main-nav__dropdown">
                      <div className="main-nav__dropdown-row">
                        <Link href={item.href} className="main-nav__dropdown-link" onClick={closeMenus}>
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          className="main-nav__dropdown-toggle"
                          aria-expanded={isDropdownOpen}
                          aria-controls={dropdownId}
                          aria-haspopup="true"
                          onClick={() => toggleDropdown(itemKey)}
                        >
                          <span className="sr-only">
                            {isDropdownOpen ? `Collapse ${item.label} menu` : `Expand ${item.label} menu`}
                          </span>
                          <IconChevronDown className="main-nav__item-icon" />
                        </button>
                      </div>

                      <ul
                        id={dropdownId}
                        className="main-nav__dropdown-menu"
                        role="menu"
                        aria-label={`${item.label} submenu`}
                      >
                        {item.children!.map((child) => (
                          <li key={child.href} role="none">
                            <Link
                              href={child.href}
                              role="menuitem"
                              className="main-nav__dropdown-item"
                              onClick={closeMenus}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link href={site.consultationCta.path} className="main-nav__cta" onClick={closeMenus}>
            SCHEDULE A CONSULTATION
          </Link>
        </div>
      </div>
    </div>
  );
}
