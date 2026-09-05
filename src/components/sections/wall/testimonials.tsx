"use client";

import { useId, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "framer-motion";
import { Container } from "@/components/layout/container";
import { Star } from "@/components/ui/icon";

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

function StarRow() {
  return (
    <span className="flex items-center gap-0.5" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} aria-hidden className="size-4 fill-[#f5b301] text-[#f5b301]" />
      ))}
    </span>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      layout={!reduceMotion}
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: EASE_OUT }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className="group mb-6 flex break-inside-avoid flex-col rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-background)] p-6 shadow-sm transition-shadow duration-[var(--duration-micro)] hover:shadow-lg"
    >
      {/* Top row: rating + source wordmark */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <StarRow />
          <span className="text-sm font-semibold text-[var(--color-text-primary)]">
            5/5.0
          </span>
        </div>
        {/* ponytail: text stand-in for the Upwork logo pending the real asset */}
        <span className="font-bold lowercase tracking-tight text-[var(--color-text-muted)]">
          upwork
        </span>
      </div>

      <h3 className="mt-4 text-base font-semibold text-[var(--color-brand-purple-strong)]">
        {t.title}
      </h3>
      <p className="mt-1 text-sm text-[var(--color-text-muted)]">{t.dateRange}</p>

      <p className="mt-4 italic leading-relaxed text-[var(--color-text-secondary)]">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="mt-5 border-t border-[var(--color-border-subtle)] pt-5 text-sm">
        <p className="font-bold text-[var(--color-text-primary)]">{t.author}</p>
        {t.company && (
          <p className="text-[var(--color-text-secondary)]">{t.company}</p>
        )}
        <p className="text-[var(--color-text-muted)]">{t.country}</p>
      </div>

      <div>
        <span className="mt-4 inline-block rounded-[var(--radius-sm)] bg-tint-lavender px-3 py-1 text-xs font-semibold text-[var(--color-brand-purple-strong)]">
          {t.category}
        </span>
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
