"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ShieldCheck, Bolt, Globe, Check } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";
import type { ComponentType, SVGProps } from "react";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

type Card = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
  features: string[];
  accent: "purple" | "coral" | "teal";
};

const ACCENT = {
  purple: {
    tile: "bg-tint-lavender",
    icon: "text-brand-purple-strong",
    ring: "group-hover:border-brand-purple/40",
    check: "bg-tint-lavender text-brand-purple-strong",
  },
  coral: {
    tile: "bg-tint-pink",
    icon: "text-brand-coral-strong",
    ring: "group-hover:border-brand-coral/40",
    check: "bg-tint-pink text-brand-coral-strong",
  },
  teal: {
    tile: "bg-tint-mint",
    icon: "text-brand-teal",
    ring: "group-hover:border-brand-teal/40",
    check: "bg-tint-mint text-brand-teal",
  },
} as const;

const CARDS: Card[] = [
  {
    icon: ShieldCheck,
    accent: "purple",
    title: "Enterprise Grade Solutions",
    body: "We build scalable automation solutions that grow with your business, from startups to enterprise organizations.",
    features: [
      "Scalable architecture",
      "Security compliance",
      "Performance optimization",
      "24/7 support",
    ],
  },
  {
    icon: Bolt,
    accent: "coral",
    title: "Rapid Implementation",
    body: "Our proven methodologies ensure quick deployment without compromising on quality or functionality.",
    features: [
      "Agile development",
      "Quick turnaround",
      "Minimal downtime",
      "Seamless migration",
    ],
  },
  {
    icon: Globe,
    accent: "teal",
    title: "Global Expertise",
    body: "Serving clients worldwide with deep understanding of diverse business requirements and regulations.",
    features: [
      "Multi timezone support",
      "Cultural awareness",
      "Regulatory compliance",
      "Local best practices",
    ],
  },
];

const gridParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
};

const featureParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

const featureItem: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.32, ease: EASE_OUT } },
};

function WhyCard({ card }: { card: Card }) {
  const reduceMotion = useReducedMotion();
  const a = ACCENT[card.accent];
  const Icon = card.icon;

  return (
    <motion.article
      variants={cardVariant}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-background)] p-8 shadow-sm transition-shadow duration-[var(--duration-micro)] hover:shadow-lg ${a.ring}`}
    >
      {/* top sheen on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-purple/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <span
        className={`inline-flex size-14 items-center justify-center rounded-2xl ${a.tile} transition-transform duration-[var(--duration-micro)] group-hover:scale-110`}
      >
        <Icon className={`size-7 ${a.icon}`} />
      </span>

      <h3 className="mt-6 text-xl font-semibold text-[var(--color-text-primary)]">
        {card.title}
      </h3>
      <p className="mt-3 leading-relaxed text-[var(--color-text-secondary)]">
        {card.body}
      </p>

      <motion.ul
        variants={featureParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3"
      >
        {card.features.map((f) => (
          <motion.li
            key={f}
            variants={featureItem}
            className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]"
          >
            <span
              className={`inline-flex size-5 shrink-0 items-center justify-center rounded-full ${a.check}`}
            >
              <Check className="size-3" />
            </span>
            {f}
          </motion.li>
        ))}
      </motion.ul>
    </motion.article>
  );
}

export function AboutWhyChoose() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Why Businesses Choose YeloBase
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
            From strategy to deployment and beyond — we deliver automation that sticks.
          </p>
        </motion.div>

        <motion.div
          variants={gridParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {CARDS.map((card) => (
            <WhyCard key={card.title} card={card} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
