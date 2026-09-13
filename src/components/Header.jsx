"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { navGroups } from "./navLinks";
const accentByIndex = [
  "var(--ocean-400)",
  "var(--coral-400)",
  "var(--reptile-500)",
];
function isLinkActive(pathname, href) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

// Top-level pages (/, /visit, /shop, ...) open on a full-bleed dark hero
// sized to sit behind the nav; nested detail pages (/blog/[slug], ...) don't
// have that backdrop, so only the top-level ones get the transparent overlay.
function pageHasHero(pathname) {
  return pathname === "/" || pathname.split("/").filter(Boolean).length === 1;
}
export default function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const hasHero = pageHasHero(pathname);
  const solid = !hasHero || scrolled;
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }
  useEffect(() => {
    // createPortal needs document.body, which doesn't exist during SSR.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);
  useEffect(() => {
    if (!hasHero) return;
    const onScroll = () => {
      const isScrolled = window.scrollY > 8;
      setScrolled((prev) => (prev === isScrolled ? prev : isScrolled));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasHero]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const navOverlayAndPanel = (
    <>
      <div
        className={styles.overlay}
        data-open={open}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <nav
        id="main-nav-panel"
        className={styles.panel}
        data-open={open}
        aria-label="Main navigation"
      >
        <div className={styles.panelHead}>
          <strong
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--glass-text)",
            }}
          >
            Menu
          </strong>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {navGroups.map((group) => (
          <div className={styles.group} key={group.title}>
            <div className={styles.groupTitle}>{group.title}</div>
            <ul>
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.navLink}>
                    <strong>{link.label}</strong>
                    <span>{link.blurb}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <Link href="/accessibility" className={styles.navLink}>
          <strong>Accessibility</strong>
          <span>Visit planning &amp; toolbar info</span>
        </Link>
      </nav>
    </>
  );
  return (
    <header className={styles.header} data-overlay={hasHero} data-solid={solid}>
      <div className={styles.bar}>
        <div className={styles.barInner}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/LegaseaIcon.webp"
              alt=""
              width={155}
              height={110}
              className={styles.logoMark}
              priority
            />
            <span className={styles.logoText}>
              LegaSea
              <small>Aquarium &amp; The Reptarium</small>
            </span>
          </Link>

          <nav className={styles.desktopNav} aria-label="Primary">
            <ul>
              {navGroups.map((group, i) => {
                const accent = accentByIndex[i % accentByIndex.length];
                const accentStyle = {
                  "--accent": accent,
                };
                if (group.links.length === 1) {
                  const link = group.links[0];
                  return (
                    <li
                      key={group.title}
                      className={styles.navItem}
                      style={accentStyle}
                    >
                      <Link
                        href={link.href}
                        className={styles.navTopLink}
                        data-active={isLinkActive(pathname, link.href)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                }
                const groupActive = group.links.some((l) =>
                  isLinkActive(pathname, l.href),
                );
                return (
                  <li
                    key={group.title}
                    className={styles.navItem}
                    style={accentStyle}
                  >
                    <button
                      type="button"
                      className={styles.navTopLink}
                      aria-haspopup="true"
                      data-active={groupActive}
                    >
                      {group.title}
                      <svg
                        className={styles.chevron}
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        aria-hidden="true"
                      >
                        <path
                          d="M1 1l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div className={styles.dropdown}>
                      <ul>
                        {group.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className={styles.dropdownLink}
                              data-active={isLinkActive(pathname, link.href)}
                            >
                              <strong>{link.label}</strong>
                              <span>{link.blurb}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              })}
              <li
                className={styles.navItem}
                style={{
                  "--accent": "var(--coral-400)",
                }}
              >
                <Link
                  href="/accessibility"
                  className={styles.navTopLink}
                  data-active={isLinkActive(pathname, "/accessibility")}
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </nav>

          <span className={styles.navDivider} aria-hidden="true" />

          <div className={styles.actions}>
            <Link href="/visit" className="btn btn-primary btn-sm">
              Book Now
            </Link>
            <button
              type="button"
              className={styles.menuBtn}
              data-open={open}
              aria-expanded={open}
              aria-controls="main-nav-panel"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      {/*
        Portaled to <body>: an ancestor with `backdrop-filter` (like
        `transform`) becomes the containing block for `position: fixed`
        descendants, which would break the drawer's top:0/bottom:0 sizing.
        Portaling keeps it anchored to the real viewport regardless of
        what filters/transforms `.bar` or `.header` pick up later.
       */}
      {mounted ? createPortal(navOverlayAndPanel, document.body) : null}
    </header>
  );
}
