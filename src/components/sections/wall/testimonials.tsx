"use client";

import Image from "next/image";
import { useId, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "framer-motion";
import { Container } from "@/components/layout/container";
import { Star, Quote, MapPin } from "@/components/ui/icon";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const CATEGORIES = [
  "All",
  "Zoho Services",
  "AI Agent",
  "Automation",
  "Custom Development",
] as const;

type Category = (typeof CATEGORIES)[number];
type CardCategory = Exclude<Category, "All">;

type Testimonial = {
  title: string;
  dateRange: string;
  quote: string;
  author: string;
  company?: string;
  country: string;
  category: CardCategory;
};

// Ordered to interleave categories so the "All" tab shows a good mix.
const TESTIMONIALS: Testimonial[] = [
  {
    title: "Zoho Account & CRM Setup",
    dateRange: "Mar 17, 2025 - May 1, 2025",
    quote:
      "Best service. Quick replies and great advice for setting up our CRM system. Very professional and quick at set up. Would recommend and use their services again. Thanks,",
    author: "Miss Lily",
    company: "Innovax Property Group",
    country: "Australia",
    category: "Zoho Services",
  },
  {
    title: "Zoho Flow Lead Automation",
    dateRange: "Mar 15, 2024 - Apr 10, 2024",
    quote:
      "YeloBase delivered an exceptional Zoho Flow automation that transformed our lead processing. The automated workflows handle 85% of our lead qualification automatically and integrate seamlessly with our CRM. Their understanding of Zoho Flow is impressive.",
    author: "Sarah Mitchell",
    company: "TechFlow Solutions",
    country: "Canada",
    category: "AI Agent",
  },
  {
    title: "Looking for someone to create my PMO and CRM",
    dateRange: "Sep 10, 2024 - Sep 24, 2024",
    quote:
      "The YeloBase team was a great help for streamlining our internal processes. They educated us about the softwares and took initiative to create solutions with minimal input from us. We 100% recommend them.",
    author: "Lakshaya Gupta",
    company: "Creative Works",
    country: "India",
    category: "Automation",
  },
  {
    title: "Zoho Creator Lifestyle Profile Portal Project - Phase 1",
    dateRange: "Oct 14, 2024 - Dec 3, 2024",
    quote:
      "I would like to express my appreciation for YeloBase's work on the Zoho Creator Portal Project. The team has consistently demonstrated a high level of professionalism throughout the project, providing timely responses and showing great dedication to delivering quality results. Their attention to detail and commitment made working with them a positive experience. Their communication was clear, and they ensured that tasks were completed efficiently. I'm confident that their skills will continue to contribute to future successes, and I highly recommend them for any similar projects. We will definitely continue working with them.",
    author: "Mr Franck and Funda",
    company: "SLICIT Lifestyle",
    country: "United Arab Emirates",
    category: "Custom Development",
  },
  {
    title: "Zoho CRM Migration| Customization | Automation",
    dateRange: "Oct 8, 2024 - Jan 31, 2025",
    quote:
      "I had the pleasure of working with YeloBase on data migration and setting up my Zoho CRM, and I couldn't be happier. Their expertise, efficiency, and attention to detail made the entire process seamless. They not only ensured accurate and smooth data migration but also customized the system to fit my needs perfectly. What truly sets YeloBase apart is their exceptional communication. Their English is flawless, on par with native speakers, which is rare and made collaboration effortless. They were professional, proactive, and always one step ahead, making the experience stress-free. I highly recommend YeloBase to anyone needing expert CRM setup and data migration. Their skills, reliability, and commitment to excellence are outstanding!",
    author: "Mr. Dennis",
    company: "Sales Coach",
    country: "USA",
    category: "Zoho Services",
  },
  {
    title: "Zoho Creator Custom Application",
    dateRange: "Jan 20, 2024 - Feb 28, 2024",
    quote:
      "Working with Bijoy on our Zoho Creator application was outstanding. They automated our entire client onboarding process, reducing manual work by 90%. The custom forms and workflows they built are incredibly smart and user-friendly.",
    author: "Marcus Rodriguez",
    company: "Growth Dynamics",
    country: "Spain",
    category: "AI Agent",
  },
  {
    title: "Zoho Flow Automation",
    dateRange: "Sep 19, 2024 - Sep 19, 2024",
    quote:
      "YeloBase is an expert team, who is responsive, highly skilled and speaks excellent English without any heavy accents. Will definitely hire again!",
    author: "Courtney Pearce",
    company: "Business Growth Stratagem",
    country: "New Zealand",
    category: "Automation",
  },
  {
    title: "Zoho CRM setup for Digital Marketing Agency",
    dateRange: "Oct 4, 2024 - Dec 20, 2024",
    quote: "Skillful, Great Communication, Highly Recommended!",
    author: "Mr. Shubham Goyal",
    country: "New Zealand",
    category: "Zoho Services",
  },
  {
    title: "HTML Coder Zoho Books Experience",
    dateRange: "Sep 12, 2024 - Oct 4, 2024",
    quote:
      "We had a great experience working with YeloBase! They developed an invoice template for us that perfectly met our needs. Their communication was prompt and effective throughout the process. Overall, we are very satisfied with the work and would highly recommend them to others. Looking forward to collaborating again!",
    author: "Lanisha HR",
    company: "Attesa Coffee",
    country: "Netherlands",
    category: "Custom Development",
  },
  {
    title: "Zoho Build Phase #1",
    dateRange: "Feb 11, 2025 - Feb 19, 2025",
    quote:
      "It has been an absolute pleasure to work with the team on our Zoho projects. The work they have delivered for us is beyond expectations, and we look forward to working closely with them in the future on all of our CRM and Zoho related projects.",
    author: "Sam O'Neile",
    company: "Tuta Global PTY LTD",
    country: "Australia",
    category: "Zoho Services",
  },
  {
    title: "Zoho CRM Workflow Automation",
    dateRange: "Nov 5, 2024 - Dec 18, 2024",
    quote:
      "The YeloBase team integrated advanced workflow automation perfectly into our Zoho CRM. The automated lead scoring and campaign optimization has increased our conversion rates by 45%. Exceptional work and ongoing support.",
    author: "Emma Chen",
    company: "Digital Marketing Pro",
    country: "Singapore",
    category: "AI Agent",
  },
  {
    title: "Help with Zoho Inventory setup",
    dateRange: "Dec 7, 2024 - Dec 7, 2024",
    quote:
      "I was greatly surprised, this was my first project with YeloBase and they delivered and completed the project perfectly.",
    author: "Mr Edgar",
    company: "StatWorks",
    country: "Mexico",
    category: "Zoho Services",
  },
  {
    title: "Client Onboarding Checklist - Project Management",
    dateRange: "Dec 20, 2024 - Jan 15, 2025",
    quote:
      "Did a great job setting up a Zoho Project template for onboarding clients. Bijoy communicated very well, stayed on task, completed the project with very few changes and kept in contact providing updates.",
    author: "Danio Daniz",
    country: "Columbia",
    category: "Zoho Services",
  },
  {
    title: "2 hours of help with Zoho set up",
    dateRange: "Dec 20, 2024 - Dec 22, 2024",
    quote:
      "YeloBase is a joy to work with. They know what they're doing, communicate clearly, and get the job done.",
    author: "Lena",
    company: "Lena Wigs",
    country: "USA",
    category: "Zoho Services",
  },
  {
    title: "ZOHO CRM expert wanted",
    dateRange: "Sep 4, 2024 - Oct 2, 2024",
    quote:
      "Bijoy is a stellar team member. Highly recommended. His knowledge of Zoho is in-depth and they have delivered us a great solution. We will be working with them for future projects on Zoho. Once again highly recommended.",
    author: "Mr Neeraj Bhatia",
    company: "KwikPay",
    country: "United Kingdom",
    category: "Zoho Services",
  },
];

/** Per-category cover gradient + matching avatar-monogram tint. */
const STYLE: Record<CardCategory, { cover: string; chip: string }> = {
  "Zoho Services": {
    cover: "from-brand-purple to-brand-purple-strong",
    chip: "bg-tint-lavender text-brand-purple-strong",
  },
  "AI Agent": {
    cover: "from-brand-coral to-brand-coral-strong",
    chip: "bg-tint-pink-soft text-brand-coral-strong",
  },
  Automation: {
    cover: "from-brand-teal to-brand-teal-bright",
    chip: "bg-tint-mint text-brand-teal",
  },
  "Custom Development": {
    cover: "from-[var(--color-surface-dark)] to-[var(--color-surface-dark-3)]",
    chip: "bg-tint-cream text-[#8a6a12]",
  },
};

/** Real client photos we have on hand; everyone else gets a monogram. */
const AVATARS: Record<string, string> = {
  "Sam O'Neile": "/avatars/sam.webp",
  "Mr Edgar": "/avatars/edgar.webp",
  Lena: "/avatars/lena.webp",
};

const HONORIFICS = new Set(["mr", "mrs", "ms", "miss", "dr"]);

function initials(name: string) {
  const words = name
    .replace(/\./g, "")
    .split(/\s+/)
    .filter((w) => !HONORIFICS.has(w.toLowerCase()));
  return words
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function StarRow() {
  return (
    <span className="flex items-center gap-0.5" aria-label="Rated 5.0 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} aria-hidden className="size-4 fill-brand-coral text-brand-coral" />
      ))}
    </span>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const reduceMotion = useReducedMotion();
  const style = STYLE[t.category];
  const avatar = AVATARS[t.author];
  const coverLabel = t.company || t.author;

  return (
    <motion.article
      layout={!reduceMotion}
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: EASE_OUT }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className="group mb-6 flex break-inside-avoid flex-col overflow-hidden rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-background)] shadow-sm transition-shadow duration-[var(--duration-micro)] hover:shadow-lg"
    >
      {/* Brand cover */}
      <div
        className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${style.cover} px-6`}
      >
        <Quote
          aria-hidden
          className="absolute right-4 top-4 size-12 text-white/15"
        />
        <p className="text-balance text-center font-mono text-xl font-bold leading-tight text-white">
          {coverLabel}
        </p>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-7">
        <StarRow />
        <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {t.quote}
        </p>

        <div className="mt-6 flex items-center gap-4 border-t border-[var(--color-border-subtle)] pt-5">
          {avatar ? (
            <Image
              src={avatar}
              alt={t.author}
              width={48}
              height={48}
              className="size-12 shrink-0 rounded-2xl object-cover"
            />
          ) : (
            <span
              aria-hidden
              className={`inline-flex size-12 shrink-0 items-center justify-center rounded-2xl text-sm font-bold ${style.chip}`}
            >
              {initials(t.author)}
            </span>
          )}
          <div className="min-w-0">
            <p className="truncate font-semibold text-[var(--color-text-primary)]">
              {t.author}
            </p>
            <p className="mt-0.5 flex flex-wrap items-center gap-x-1.5 text-sm text-[var(--color-text-muted)]">
              {t.company && <span className="truncate">{t.company}</span>}
              {t.company && <span aria-hidden>·</span>}
              <span className="inline-flex items-center gap-1">
                <MapPin aria-hidden className="size-3.5" />
                {t.country}
              </span>
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function WallTestimonials() {
  const [active, setActive] = useState<Category>("All");
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const filtered = useMemo(
    () =>
      active === "All"
        ? TESTIMONIALS
        : TESTIMONIALS.filter((t) => t.category === active),
    [active],
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" ? 1 : -1;
    const idx = CATEGORIES.indexOf(active);
    const next = (idx + dir + CATEGORIES.length) % CATEGORIES.length;
    setActive(CATEGORIES[next]);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="bg-[var(--color-background)] pb-[var(--section-padding-y)] pt-6">
      <Container>
        <LayoutGroup>
          {/* Segmented filter */}
          <div
            role="tablist"
            aria-label="Filter testimonials by category"
            onKeyDown={onKeyDown}
            className="mx-auto flex w-fit max-w-full flex-wrap items-center justify-center gap-1 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] p-1.5 shadow-sm"
          >
            {CATEGORIES.map((cat, i) => {
              const selected = cat === active;
              return (
                <button
                  key={cat}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  id={`${baseId}-tab-${i}`}
                  aria-selected={selected}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(cat)}
                  className={`relative rounded-[var(--radius-sm)] px-4 py-2 text-sm font-medium transition-colors duration-[var(--duration-micro)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 ${
                    selected
                      ? "text-white"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                  }`}
                >
                  {selected && (
                    <motion.span
                      aria-hidden
                      layoutId={reduceMotion ? undefined : `${baseId}-pill`}
                      className="absolute inset-0 z-0 rounded-[var(--radius-sm)] bg-[var(--color-surface-dark)]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Masonry grid */}
          <motion.div
            layout={!reduceMotion}
            className="mt-12 [column-gap:1.5rem] sm:columns-2 lg:columns-3"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {filtered.map((t) => (
                <TestimonialCard key={t.title + t.author} t={t} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </Container>
    </section>
  );
}
