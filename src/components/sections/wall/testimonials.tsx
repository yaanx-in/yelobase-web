"use client";

import { useId, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "framer-motion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/layout/container";
import { Star, Quote, MapPin, Calendar } from "@/components/ui/icon";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const CATEGORIES = [
  "All",
  "Zoho Services",
  "AI Agents",
  "Automation",
  "Custom Development",
] as const;

type Category = (typeof CATEGORIES)[number];

type Testimonial = {
  title: string;
  rating: number;
  date: string;
  quote: string;
  author: string;
  company: string;
  location: string;
  category: Exclude<Category, "All">;
};

const TESTIMONIALS: Testimonial[] = [
  {
    title: "Zoho Account & CRM Setup",
    rating: 5.0,
    date: "Mar 17, 2025 - May 1, 2025",
    quote:
      "Best service. Quick replies and great advice for setting up our CRM system. Very professional and quick at set up. Would recommend and use their services again. Thanks,",
    author: "Miss Lily",
    company: "Innovax Property Group",
    location: "Australia",
    category: "Zoho Services",
  },
  {
    title: "Zoho Build Phase #1",
    rating: 5.0,
    date: "Feb 11, 2025 - Feb 19, 2025",
    quote:
      "It has been an absolute pleasure to work with the team on our Zoho projects. The work they have delivered for us is beyond expectations, and we look forward to working closely with them in the future on all of our CRM and Zoho related projects.",
    author: "Sam O'Neile",
    company: "Tuta Global PTY LTD",
    location: "Australia",
    category: "Zoho Services",
  },
  {
    title: "Zoho CRM Migration | Customization | Automation",
    rating: 5.0,
    date: "Oct 8, 2024 - Jan 31, 2025",
    quote:
      "I had the pleasure of working with YeloBase on data migration and setting up my Zoho CRM, and I couldn't be happier. Their expertise, efficiency, and attention to detail made the entire process seamless. They not only ensured accurate and smooth data migration but also customized the system to fit my needs perfectly. What truly sets YeloBase apart is their exceptional communication. Their English is flawless, on par with native speakers, which is rare and made collaboration effortless. They were professional, proactive, and always one step ahead, making the experience stress-free. I highly recommend YeloBase to anyone needing expert CRM setup and data migration. Their skills, reliability, and commitment to excellence are outstanding!",
    author: "Mr. Dennis",
    company: "Sales Coach",
    location: "USA",
    category: "Zoho Services",
  },
  {
    title: "Client Onboarding Checklist - Project Management",
    rating: 5.0,
    date: "Dec 20, 2024 - Jan 15, 2025",
    quote:
      "Did a great job setting up a Zoho Project template for onboarding clients. Bijoy communicated very well, stayed on task, completed the project with very few changes and kept in contact providing updates.",
    author: "Danio Daniz",
    company: "",
    location: "Columbia",
    category: "Zoho Services",
  },
  {
    title: "2 hours of help with Zoho set up",
    rating: 5.0,
    date: "Dec 20, 2024 - Dec 22, 2024",
    quote:
      "YeloBase is a joy to work with. They know what they're doing, communicate clearly, and get the job done.",
    author: "Lena",
    company: "Lena Wigs",
    location: "USA",
    category: "Zoho Services",
  },
  {
    title: "Zoho CRM setup for Digital Marketing Agency",
    rating: 5.0,
    date: "Oct 4, 2024 - Dec 20, 2024",
    quote: "Skillful, Great Communication, Highly Recommended!",
    author: "Mr. Shubham Goyal",
    company: "",
    location: "New Zealand",
    category: "Zoho Services",
  },
  {
    title: "Help with Zoho Inventory setup",
    rating: 5.0,
    date: "Dec 7, 2024 - Dec 7, 2024",
    quote:
      "I was greatly surprised, this was my first project with YeloBase and they delivered and completed the project perfectly.",
    author: "Mr Edgar",
    company: "StatWorks",
    location: "Mexico",
    category: "Zoho Services",
  },
  {
    title: "Zoho Creator Lifestyle Profile Portal Project - Phase 1",
    rating: 5.0,
    date: "Oct 14, 2024 - Dec 3, 2024",
    quote:
      "I would like to express my appreciation for YeloBase's work on the Zoho Creator Portal Project. The team has consistently demonstrated a high level of professionalism throughout the project, providing timely responses and showing great dedication to delivering quality results. Their attention to detail and commitment made working with them a positive experience. Their communication was clear, and they ensured that tasks were completed efficiently. I'm confident that their skills will continue to contribute to future successes, and I highly recommend them for any similar projects. We will definitely continue working with them.",
    author: "Mr Franck and Funda",
    company: "SLICIT Lifestyle",
    location: "United Arab Emirates",
    category: "Custom Development",
  },
  {
    title: "HTML Coder Zoho Books Experience",
    rating: 5.0,
    date: "Sep 12, 2024 - Oct 4, 2024",
    quote:
      "We had a great experience working with YeloBase! They developed an invoice template for us that perfectly met our needs. Their communication was prompt and effective throughout the process. Overall, we are very satisfied with the work and would highly recommend them to others. Looking forward to collaborating again!",
    author: "Lanisha HR",
    company: "Attesa Coffee",
    location: "Netherlands",
    category: "Custom Development",
  },
  {
    title: "ZOHO CRM expert wanted",
    rating: 5.0,
    date: "Sep 4, 2024 - Oct 2, 2024",
    quote:
      "Bijoy is a stellar team member. Highly recommended. His knowledge of Zoho is in-depth and they have delivered us a great solution. We will be working with them for future projects on Zoho. Once again highly recommended.",
    author: "Mr Neeraj Bhatia",
    company: "KwikPay",
    location: "United Kingdom",
    category: "Zoho Services",
  },
  {
    title: "Looking for someone to create my PMO and CRM",
    rating: 5.0,
    date: "Sep 10, 2024 - Sep 24, 2024",
    quote:
      "The YeloBase team was a great help for streamlining our internal processes. They educated us about the softwares and took initiative to create solutions with minimal input from us. We 100% recommend them.",
    author: "Lakshaya Gupta",
    company: "Creative Works",
    location: "India",
    category: "Automation",
  },
  {
    title: "Zoho Flow Automation",
    rating: 5.0,
    date: "Sep 19, 2024 - Sep 19, 2024",
    quote:
      "YeloBase is an expert team, who is responsive, highly skilled and speaks excellent English without any heavy accents. Will definitely hire again!",
    author: "Courtney Pearce",
    company: "Business Growth Stratagem",
    location: "New Zealand",
    category: "Automation",
  },
  {
    title: "Zoho Flow Lead Automation",
    rating: 5.0,
    date: "Mar 15, 2024 - Apr 10, 2024",
    quote:
      "YeloBase delivered an exceptional Zoho Flow automation that transformed our lead processing. The automated workflows handle 85% of our lead qualification automatically and integrate seamlessly with our CRM. Their understanding of Zoho Flow is impressive.",
    author: "Sarah Mitchell",
    company: "TechFlow Solutions",
    location: "Canada",
    category: "AI Agents",
  },
  {
    title: "Zoho Creator Custom Application",
    rating: 5.0,
    date: "Jan 20, 2024 - Feb 28, 2024",
    quote:
      "Working with Bijoy on our Zoho Creator application was outstanding. They automated our entire client onboarding process, reducing manual work by 90%. The custom forms and workflows they built are incredibly smart and user-friendly.",
    author: "Marcus Rodriguez",
    company: "Growth Dynamics",
    location: "Spain",
    category: "AI Agents",
  },
  {
    title: "Zoho CRM Workflow Automation",
    rating: 5.0,
    date: "Nov 5, 2024 - Dec 18, 2024",
    quote:
      "The YeloBase team integrated advanced workflow automation perfectly into our Zoho CRM. The automated lead scoring and campaign optimization has increased our conversion rates by 45%. Exceptional work and ongoing support.",
    author: "Emma Chen",
    company: "Digital Marketing Pro",
    location: "Singapore",
    category: "AI Agents",
  },
];

const CHIP: Record<Exclude<Category, "All">, string> = {
  "Zoho Services": "bg-tint-lavender text-brand-purple-strong",
  "AI Agents": "bg-tint-pink-soft text-brand-coral-strong",
  Automation: "bg-tint-mint text-brand-teal",
  "Custom Development": "bg-tint-cream text-[#8a6a12]",
};

function StarRow({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <span
      className="flex items-center gap-0.5"
      aria-label={`Rated ${rating.toFixed(1)} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden
          className={
            i < full
              ? "size-4 fill-brand-coral text-brand-coral"
              : "size-4 text-[var(--color-border)]"
          }
        />
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
      className="group mb-6 flex break-inside-avoid flex-col rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-background)] p-7 shadow-sm transition-shadow duration-[var(--duration-micro)] hover:shadow-lg"
    >
      <div className="flex items-center justify-between gap-3">
        <StarRow rating={t.rating} />
        <span className="font-mono text-sm font-bold text-[var(--color-text-primary)]">
          {t.rating.toFixed(1)}
        </span>
      </div>

      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
        {t.title}
      </p>

      <div className="relative mt-3">
        <Quote
          aria-hidden
          className="absolute -left-1 -top-1 size-6 text-brand-coral/25"
        />
        <p className="relative pl-6 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {t.quote}
        </p>
      </div>

      <div className="mt-6 border-t border-[var(--color-border-subtle)] pt-5">
        <p className="font-semibold text-[var(--color-text-primary)]">{t.author}</p>
        <p className="mt-0.5 flex flex-wrap items-center gap-x-1.5 text-sm text-[var(--color-text-muted)]">
          {t.company && <span>{t.company}</span>}
          {t.company && <span aria-hidden>·</span>}
          <span className="inline-flex items-center gap-1">
            <MapPin aria-hidden className="size-3.5" />
            {t.location}
          </span>
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <span
            className={`rounded-pill px-2.5 py-1 text-[11px] font-semibold ${CHIP[t.category]}`}
          >
            {t.category}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
            <Calendar aria-hidden className="size-3.5" />
            {t.date}
          </span>
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
    <section className="bg-[var(--color-background-warm)] py-[var(--section-padding-y)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          className="mx-auto max-w-2xl text-center"
        >
          <Eyebrow color="coral">Client Reviews</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Words from the people we&rsquo;ve built for
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            Filter by the kind of work we delivered.
          </p>
        </motion.div>

        {/* Filter bar */}
        <LayoutGroup>
          <div
            role="tablist"
            aria-label="Filter testimonials by category"
            onKeyDown={onKeyDown}
            className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-2 rounded-pill bg-[var(--color-surface)] p-1.5"
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
                  className={`relative rounded-pill px-4 py-2 text-sm font-medium transition-colors duration-[var(--duration-micro)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 ${
                    selected
                      ? "text-white"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                  }`}
                >
                  {selected && (
                    <motion.span
                      aria-hidden
                      layoutId={reduceMotion ? undefined : `${baseId}-pill`}
                      className="absolute inset-0 z-0 rounded-pill bg-[var(--color-surface-dark)]"
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
                <TestimonialCard key={t.author + t.title} t={t} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </Container>
    </section>
  );
}
