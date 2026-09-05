"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "./container";
import { Logo } from "@/components/ui/logo";
import { ButtonLink } from "@/components/ui/button";
import { Menu, Close, ChevronDown } from "@/components/ui/icon";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href?: string; children?: NavChild[] };

const NAV_LINKS: NavItem[] = [
  { label: "Zoho Services", href: "/zoho-services" },
  {
    label: "Industry Solutions",
    children: [{ label: "Golf Academy", href: "/golf" }],
  },
  { label: "Customer Stories", href: "/wall-of-love" },
  { label: "Who are we", href: "/about" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // Subtle elevation once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change.
  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // Close the desktop dropdown on outside click / Esc.
  useEffect(() => {
    if (!openMenu) return;
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [openMenu]);

  // Body scroll lock + Esc + focus trap while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const focusables = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    focusables?.[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-[var(--duration-micro)] ${
        scrolled
          ? "bg-[var(--color-background)]/85 shadow-sm backdrop-blur-md"
          : "bg-[var(--color-background-warm)]"
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <Link href="/" aria-label="Yelobase home" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav ref={navRef} aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const linkClass = (active: boolean) =>
                `font-mono text-sm font-medium transition-colors duration-[var(--duration-micro)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 rounded-sm ${
                  active
                    ? "text-brand-coral"
                    : "text-[var(--color-text-primary)] hover:text-brand-coral"
                }`;

              if (link.children) {
                const groupActive = link.children.some(
                  (c) => pathname === c.href || pathname.startsWith(c.href + "/"),
                );
                const menuOpen = openMenu === link.label;
                return (
                  <li key={link.label} className="relative">
                    <button
                      type="button"
                      aria-expanded={menuOpen}
                      aria-haspopup="menu"
                      onClick={() =>
                        setOpenMenu((v) => (v === link.label ? null : link.label))
                      }
                      className={`inline-flex items-center gap-1 ${linkClass(groupActive)}`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`size-4 transition-transform duration-[var(--duration-micro)] ${
                          menuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {menuOpen && (
                        <motion.ul
                          role="menu"
                          initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
                          transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute left-0 top-full z-50 mt-3 min-w-[200px] rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-background)] p-2 shadow-lg"
                        >
                          {link.children.map((child) => {
                            const active =
                              pathname === child.href ||
                              pathname.startsWith(child.href + "/");
                            return (
                              <li key={child.href} role="none">
                                <Link
                                  role="menuitem"
                                  href={child.href}
                                  aria-current={active ? "page" : undefined}
                                  className={`block rounded-lg px-3 py-2 font-mono text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple ${
                                    active
                                      ? "text-brand-coral"
                                      : "text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] hover:text-brand-coral"
                                  }`}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            );
                          })}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              const active =
                pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <li key={link.label}>
                  <Link
                    href={link.href!}
                    aria-current={active ? "page" : undefined}
                    className={linkClass(active)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact" variant="dark">
            Book Free Audit
          </ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex size-11 items-center justify-center rounded-sm text-[var(--color-text-primary)] lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
        >
          {open ? <Close /> : <Menu />}
        </button>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Close menu"
              tabIndex={-1}
              onClick={close}
              className="absolute inset-0 bg-[var(--color-surface-dark)]/40 backdrop-blur-sm"
            />
            <motion.div
              ref={panelRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              className="absolute inset-x-0 top-0 bg-[var(--color-background)] px-5 pb-8 pt-4 shadow-lg"
              initial={reduceMotion ? false : { y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { y: -24, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close menu"
                  className="inline-flex size-11 items-center justify-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                >
                  <Close />
                </button>
              </div>
              <nav aria-label="Mobile" className="mt-6">
                <ul className="flex flex-col">
                  {NAV_LINKS.map((link) =>
                    link.children ? (
                      <li key={link.label}>
                        <div className="border-b border-[var(--color-border-subtle)]">
                          <p className="flex min-h-12 items-center font-mono text-base text-[var(--color-text-primary)]">
                            {link.label}
                          </p>
                          <ul className="pb-2 pl-4">
                            {link.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={close}
                                  className="flex min-h-11 items-center font-mono text-sm text-[var(--color-text-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple hover:text-brand-coral"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    ) : (
                      <li key={link.label}>
                        <Link
                          href={link.href!}
                          onClick={close}
                          className="flex min-h-12 items-center border-b border-[var(--color-border-subtle)] font-mono text-base text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </nav>
              <ButtonLink
                href="/contact"
                variant="dark"
                className="mt-6 w-full"
                onClick={close}
              >
                Book Free Audit
              </ButtonLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
