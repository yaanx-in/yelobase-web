"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  animate,
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { Container } from "@/components/layout/container";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

type Accent = "purple" | "coral" | "teal" | "amber";

const ACCENT: Record<Accent, { tile: string; icon: string; pill: string; solidPill: string; dot: string }> = {
  purple: { tile: "bg-tint-lavender", icon: "text-brand-purple-strong", pill: "bg-tint-lavender text-brand-purple-strong", solidPill: "bg-brand-purple text-white", dot: "bg-brand-purple-strong" },
  coral: { tile: "bg-tint-pink", icon: "text-brand-coral-strong", pill: "bg-tint-pink-soft text-brand-coral-strong", solidPill: "bg-brand-coral text-white", dot: "bg-brand-coral-strong" },
  teal: { tile: "bg-tint-mint", icon: "text-brand-teal", pill: "bg-tint-mint text-brand-teal", solidPill: "bg-brand-teal text-white", dot: "bg-brand-teal" },
  amber: { tile: "bg-tint-cream", icon: "text-[#8a6a12]", pill: "bg-tint-cream text-[#8a6a12]", solidPill: "bg-[#f9b21d] text-white", dot: "bg-[#8a6a12]" },
};

type StatCard = {
  badge: string;
  accent: Accent;
  value?: number;
  display: string;
  suffix?: string;
  caption: string;
  title: string;
  body: string;
  includes: string[];
};

const STAT_CARDS: StatCard[] = [
  {
    badge: "Connect",
    accent: "purple",
    value: 50,
    display: "50",
    suffix: "%",
    caption: "Platforms Supported",
    title: "Third Party Integrations",
    body: "Connect Zoho with external platforms like Shopify, WooCommerce, and payment gateways for a unified business stack.",
    includes: ["E-commerce platforms", "Payment processors", "Marketing tools", "Communication apps"],
  },
  {
    badge: "Build",
    accent: "coral",
    value: 100,
    display: "100",
    suffix: "%",
    caption: "Custom-Built",
    title: "Custom API Development",
    body: "Build bespoke APIs and webhooks for unique business requirements and seamless real time data flows.",
    includes: ["REST API development", "Webhook automation", "Real time data sync", "Custom connectors"],
  },
  {
    badge: "Migrate",
    accent: "amber",
    display: "Zero",
    caption: "Data Loss",
    title: "Data Migration and Sync",
    body: "Migrate data from legacy systems and maintain real time synchronization across all your platforms.",
    includes: ["Legacy system migration", "Database synchronization", "Data transformation", "Automated backups"],
  },
];

type ServiceCard = {
  badge: string;
  accent: Accent;
  illustration: string;
  title: string;
  body: string;
  includes: string[];
};

const SERVICE_CARDS: ServiceCard[] = [
  {
    badge: "Foundation",
    accent: "purple",
    illustration: "/graphics/zoho/services/impl.webp",
    title: "Zoho Implementation",
    body: "Complete setup and configuration of Zoho applications tailored to your business needs.",
    includes: ["Initial consultation and needs analysis", "Application setup and configuration", "Data migration from existing systems", "User training and documentation", "Go-live support and optimization"],
  },
  {
    badge: "Efficiency",
    accent: "coral",
    illustration: "/graphics/zoho/services/automation.webp",
    title: "Custom Automation",
    body: "Intelligent workflows and automations to eliminate manual tasks and boost efficiency.",
    includes: ["Workflow design and implementation", "Business process automation", "Email and notification automation", "Approval processes and escalations", "Custom function development"],
  },
  {
    badge: "Connectivity",
    accent: "amber",
    illustration: "/graphics/zoho/services/integration.webp",
    title: "Integration Solution",
    body: "Seamless connections between Zoho apps and third party systems for unified operations.",
    includes: ["API development and integration", "Third party app connections", "Data synchronization setup", "Real time integration monitoring", "Custom connector development"],
  },
  {
    badge: "Growth",
    accent: "teal",
    illustration: "/graphics/zoho/services/support.webp",
    title: "Ongoing Support",
    body: "Continuous optimization and support to ensure your Zoho investment delivers maximum ROI.",
    includes: ["24/7 technical support", "Regular system optimization", "User training and workshops", "Performance monitoring", "Feature updates and enhancements"],
  },
];

const TABS = [
  { key: "integrations", label: "Custom Integrations & Automations", subline: "Bespoke integrations and automations built for your unique business" },
  { key: "services", label: "Our Zoho Services", subline: "End-to-end Zoho solutions from initial setup to ongoing optimization" },
] as const;

const gridParent: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const gridChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

/** Counts 0 → value once in view (instant under reduced motion). */
function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) return setDisplay(value);
    const controls = animate(0, value, {
      duration: 1.1,
      ease: EASE_OUT,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduceMotion]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function IncludesList({ items, dot }: { items: string[]; dot: string }) {
  return (
    <ul className="space-y-2">
      {items.map((f) => (
        <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]">
          <span className={`mt-1.5 size-1.5 shrink-0 rounded-full ${dot}`} />
          {f}
        </li>
      ))}
    </ul>
  );
}

function StatCardView({ card }: { card: StatCard }) {
  const a = ACCENT[card.accent];
  return (
    <motion.article
      variants={gridChild}
      className="flex h-full flex-col rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-background)] p-8 shadow-sm"
    >
      <span className={`inline-flex w-fit rounded-[5px] px-2.5 py-1 text-[11px] font-semibold ${a.solidPill}`}>
        {card.badge}
      </span>

      <p className="mt-6 flex items-baseline gap-2">
        <span className="font-mono text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
          {card.value != null ? <CountUp value={card.value} suffix={card.suffix} /> : card.display}
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
          {card.caption}
        </span>
      </p>

      <h3 className="mt-4 text-lg font-semibold text-[var(--color-text-primary)]">{card.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">{card.body}</p>

      <div className="my-6 border-t border-[var(--color-border-subtle)]" />
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
        Includes
      </p>
      <IncludesList items={card.includes} dot={a.dot} />
    </motion.article>
  );
}

function ServiceCardView({ card }: { card: ServiceCard }) {
  const a = ACCENT[card.accent];
  return (
    <motion.article
      variants={gridChild}
      className="flex h-full items-start gap-6 rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-background)] p-8 shadow-sm"
    >
      <div className="min-w-0 flex-1">
        <span className={`rounded-[5px] px-2.5 py-1 text-[11px] font-semibold ${a.pill}`}>
          {card.badge}
        </span>
        <h3 className="mt-4 text-lg font-semibold text-[var(--color-text-primary)]">{card.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">{card.body}</p>
        <p className="mb-3 mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
          What&rsquo;s included
        </p>
        <IncludesList items={card.includes} dot={a.dot} />
      </div>
      <Image
        src={card.illustration}
        alt=""
        width={167}
        height={167}
        className="hidden size-24 shrink-0 sm:block"
      />
    </motion.article>
  );
}

export function ZohoCapabilities() {
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("integrations");
  const reduceMotion = useReducedMotion();
  const current = TABS.find((t) => t.key === tab)!;

  return (
    <section id="capabilities" className="scroll-mt-24 bg-[var(--color-background-warm)] py-[var(--section-padding-y)]">
      <Container>
        {/* Segmented toggle */}
        <LayoutGroup>
          <div className="mx-auto flex w-fit items-center gap-1 rounded-pill border border-[var(--color-border)] bg-[var(--color-background)] p-1">
            {TABS.map((t) => {
              const selected = t.key === tab;
              return (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  aria-pressed={selected}
                  className={`relative rounded-pill px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 ${
                    selected ? "text-white" : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                  }`}
                >
                  {selected && (
                    <motion.span
                      aria-hidden
                      layoutId={reduceMotion ? undefined : "cap-pill"}
                      className="absolute inset-0 z-0 rounded-pill bg-[var(--color-surface-dark)]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{t.label}</span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>

        {/* Swapping content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: 0.32, ease: EASE_OUT }}
          >
            <div className="mx-auto mt-9 max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
                {current.label}
              </h2>
              <p className="mt-3 text-[var(--color-text-secondary)]">{current.subline}</p>
            </div>

            <motion.div
              variants={gridParent}
              initial="hidden"
              animate="show"
              className={`mt-12 grid gap-6 ${
                tab === "integrations" ? "lg:grid-cols-3" : "md:grid-cols-2"
              }`}
            >
              {tab === "integrations"
                ? STAT_CARDS.map((c) => <StatCardView key={c.title} card={c} />)
                : SERVICE_CARDS.map((c) => <ServiceCardView key={c.title} card={c} />)}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
