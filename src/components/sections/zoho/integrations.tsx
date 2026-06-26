"use client";

import { useEffect, useRef, useState, type ComponentType, type SVGProps } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  animate,
  type Variants,
} from "framer-motion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/layout/container";
import { Check, Plug, Terminal, Database } from "@/components/ui/icon";

type Card = {
  kicker: string;
  title: string;
  body: string;
  features: string[];
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  // stat split so the numeric part can count up; suffix/text stays static.
  stat: { value: number; suffix?: string; text: string } | { text: string };
};

const CARDS: Card[] = [
  {
    kicker: "Connect",
    icon: Plug,
    stat: { value: 50, suffix: "+", text: "Platforms Supported" },
    title: "Third Party Integrations",
    body: "Connect Zoho with external platforms like Shopify, WooCommerce, and payment gateways for a unified business stack.",
    features: ["E-commerce platforms", "Payment processors", "Marketing tools", "Communication apps"],
  },
  {
    kicker: "Build",
    icon: Terminal,
    stat: { value: 100, suffix: "%", text: "Custom-Built" },
    title: "Custom API Development",
    body: "Build bespoke APIs and webhooks for unique business requirements and seamless real time data flows.",
    features: ["REST API development", "Webhook automation", "Real time data sync", "Custom connectors"],
  },
  {
    kicker: "Migrate",
    icon: Database,
    stat: { text: "Zero Data Loss" },
    title: "Data Migration and Sync",
    body: "Migrate data from legacy systems and maintain real time synchronization across all your platforms.",
    features: ["Legacy system migration", "Database synchronization", "Data transformation", "Automated backups"],
  },
];

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const child: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
};

/** Counts from 0 → value once when scrolled into view (instant under reduced motion). */
function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
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

function StatCard({ card }: { card: Card }) {
  const reduceMotion = useReducedMotion();
  const Icon = card.icon;
  const stat = card.stat;

  return (
    <motion.article
      variants={child}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-background)] p-7 shadow-sm transition-shadow duration-[var(--duration-micro)] hover:shadow-lg"
    >
      {/* gradient sheen on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="flex items-center justify-between">
        <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-purple to-brand-coral text-white shadow-sm transition-transform duration-[var(--duration-micro)] group-hover:scale-110">
          <Icon className="size-6" />
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
          {card.kicker}
        </span>
      </div>

      <div className="mt-6">
        <p className="font-mono text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          {"value" in stat ? (
            <CountUp value={stat.value} suffix={stat.suffix} />
          ) : (
            stat.text
          )}
        </p>
        {"value" in stat && (
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">{stat.text}</p>
        )}
      </div>

      <h3 className="mt-6 text-xl font-semibold text-[var(--color-text-primary)]">
        {card.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {card.body}
      </p>

      <ul className="mt-5 space-y-2.5">
        {card.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-sm text-[var(--color-text-secondary)]">
            <Check className="size-4 shrink-0 text-brand-teal" />
            {f}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export function ZohoIntegrations() {
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
          <Eyebrow color="coral">Beyond the Box</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Custom Integrations &amp; Automations
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            Bespoke integrations and automations built for your unique business.
          </p>
        </motion.div>

        <motion.div
          variants={parent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {CARDS.map((card) => (
            <StatCard key={card.title} card={card} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
