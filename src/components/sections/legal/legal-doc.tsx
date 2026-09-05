"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Stagger, Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/layout/container";
import { Lock, FileText, Mail, Phone, Check, ArrowRight, ChevronDown } from "@/components/ui/icon";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

// ─── Types ────────────────────────────────────────────────────────────────────

type SectionData = {
  id: string;
  heading: string;
  intro?: string;
  paragraphs?: string[];
  bullets?: string[];
  /** When true, renders the contact card after intro text. */
  showContact?: boolean;
};

type ContactData = {
  email: string;
  phone: string;
  website?: string;
};

type LegalDocProps = {
  title: string;
  icon: "lock" | "file";
  lastUpdated: string;
  sections: SectionData[];
  contact: ContactData;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function PageIcon({ icon }: { icon: "lock" | "file" }) {
  if (icon === "lock") return <Lock className="size-7" />;
  return <FileText className="size-7" />;
}

// ─── Hero Band ────────────────────────────────────────────────────────────────

function HeroBand({
  title,
  icon,
  lastUpdated,
}: {
  title: string;
  icon: "lock" | "file";
  lastUpdated: string;
}) {
  return (
    <section className="bg-[var(--color-background-warm)] pb-12 pt-8">
      <Container>
        <Stagger onMount className="flex flex-col items-start gap-4">
          {/* Back to home */}
          <Stagger.Item>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 rotate-180"
                aria-hidden
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
              Back to Home
            </Link>
          </Stagger.Item>

          {/* Icon + Title */}
          <Stagger.Item>
            <div className="flex items-center gap-3">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-tint-lavender text-brand-purple-strong">
                <PageIcon icon={icon} />
              </span>
              <h1 className="font-mono text-[clamp(1.9rem,5.2vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-[var(--color-text-primary)]">
                {title}
              </h1>
            </div>
          </Stagger.Item>

          {/* Last updated */}
          <Stagger.Item>
            <p className="text-sm text-[var(--color-text-muted)]">{lastUpdated}</p>
          </Stagger.Item>
        </Stagger>
      </Container>
    </section>
  );
}

// ─── Table of Contents (Desktop Sticky) ───────────────────────────────────────

function TableOfContents({ sections }: { sections: SectionData[] }) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  function handleClick(id: string) {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <nav
      aria-label="Table of contents"
      className="hidden lg:block lg:w-56 xl:w-64 shrink-0"
    >
      <div className="sticky top-24 rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-5">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
          Contents
        </p>
        <ol className="space-y-1">
          {sections.map((s, i) => (
            <li key={s.id}>
              <button
                onClick={() => handleClick(s.id)}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm leading-snug transition-colors duration-[var(--duration-micro)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple ${
                  activeId === s.id
                    ? "bg-tint-lavender font-semibold text-brand-purple-strong"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-background)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                <span className="mr-2 font-mono text-[11px] text-[var(--color-text-muted)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.heading}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

// ─── Mobile TOC Accordion ─────────────────────────────────────────────────────

function MobileToc({ sections }: { sections: SectionData[] }) {
  const [open, setOpen] = useState(false);

  function handleJump(id: string) {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className="mb-8 lg:hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-toc-list"
        className="flex w-full items-center justify-between rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-5 py-4 text-sm font-semibold text-[var(--color-text-primary)] transition-colors hover:bg-[var(--color-background)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
      >
        Jump to a section
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
          className="ml-2 shrink-0 text-[var(--color-text-muted)]"
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </button>
      {open && (
        <motion.ol
          id="mobile-toc-list"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
          className="mt-2 space-y-1 rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] px-3 py-3"
        >
          {sections.map((s, i) => (
            <li key={s.id}>
              <button
                onClick={() => handleJump(s.id)}
                className="w-full rounded-lg px-3 py-2 text-left text-sm text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-background)] hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
              >
                <span className="mr-2 font-mono text-[11px] text-[var(--color-text-muted)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.heading}
              </button>
            </li>
          ))}
        </motion.ol>
      )}
    </div>
  );
}

// ─── Contact Card ─────────────────────────────────────────────────────────────

function ContactCard({ contact }: { contact: ContactData }) {
  return (
    <div className="mt-6 flex flex-col gap-3 rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-6 sm:flex-row sm:items-center sm:gap-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-2xl bg-tint-mint text-brand-teal">
          <Mail className="size-5" />
        </span>
        <div>
          <p className="text-xs text-[var(--color-text-muted)]">Email</p>
          <a
            href={`mailto:${contact.email}`}
            className="text-sm font-semibold text-[var(--color-text-primary)] transition-colors hover:text-brand-coral-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
          >
            {contact.email}
          </a>
        </div>
      </div>
      <div className="hidden h-10 w-px bg-[var(--color-border-subtle)] sm:block" />
      <div className="flex items-center gap-3">
        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-2xl bg-tint-lavender text-brand-purple-strong">
          <Phone className="size-5" />
        </span>
        <div>
          <p className="text-xs text-[var(--color-text-muted)]">Phone</p>
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="text-sm font-semibold text-[var(--color-text-primary)] transition-colors hover:text-brand-coral-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
          >
            {contact.phone}
          </a>
        </div>
      </div>
      {contact.website && (
        <>
          <div className="hidden h-10 w-px bg-[var(--color-border-subtle)] sm:block" />
          <div className="flex items-center gap-3">
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-2xl bg-tint-pink text-brand-coral-strong">
              <ArrowRight className="size-5" />
            </span>
            <div>
              <p className="text-xs text-[var(--color-text-muted)]">Website</p>
              <a
                href={`https://${contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[var(--color-text-primary)] transition-colors hover:text-brand-coral-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
              >
                {contact.website}
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// ─── Individual Section ────────────────────────────────────────────────────────

function DocSection({
  section,
  index,
  contact,
}: {
  section: SectionData;
  index: number;
  contact: ContactData;
}) {
  const isLast = section.showContact;

  return (
    <Reveal delay={index * 0.04} className="scroll-mt-24" >
      <article id={section.id} className="scroll-mt-24">
        <header className="mb-4 flex items-baseline gap-3">
          <span className="font-mono text-sm font-semibold text-[var(--color-text-muted)]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2 className="text-xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-2xl">
            {section.heading}
          </h2>
        </header>

        {section.intro && (
          <p className="max-w-[70ch] leading-relaxed text-[var(--color-text-secondary)]">
            {section.intro}
          </p>
        )}

        {section.paragraphs &&
          section.paragraphs.map((para, pi) => (
            <p
              key={pi}
              className="mt-3 max-w-[70ch] leading-relaxed text-[var(--color-text-secondary)]"
            >
              {para}
            </p>
          ))}

        {section.bullets && section.bullets.length > 0 && (
          <ul className="mt-4 space-y-2">
            {section.bullets.map((bullet, bi) => (
              <li key={bi} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-brand-teal">
                  <Check className="size-4" />
                </span>
                <span className="max-w-[65ch] leading-relaxed text-[var(--color-text-secondary)]">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        )}

        {isLast && <ContactCard contact={contact} />}
      </article>

      {/* Section divider */}
      <div className="mt-10 h-px bg-[var(--color-border-subtle)]" />
    </Reveal>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export function LegalDoc({ title, icon, lastUpdated, sections, contact }: LegalDocProps) {
  return (
    <>
      <HeroBand title={title} icon={icon} lastUpdated={lastUpdated} />

      <section className="bg-[var(--color-background)] py-[var(--section-padding-y)]">
        <Container>
          <MobileToc sections={sections} />

          <div className="flex gap-12 xl:gap-16">
            <TableOfContents sections={sections} />

            <div className="min-w-0 flex-1 space-y-10">
              {sections.map((section, i) => (
                <DocSection
                  key={section.id}
                  section={section}
                  index={i}
                  contact={contact}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
