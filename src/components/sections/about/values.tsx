"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Target, Sparkles, Handshake, ShieldCheck } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";
import type { ComponentType, SVGProps } from "react";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

type Accent = "purple" | "coral" | "teal" | "amber";

type Value = {
  title: string;
  body: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  accent: Accent;
};

const ACCENT: Record<Accent, { tile: string; icon: string; ring: string }> = {
  purple: {
    tile: "bg-tint-lavender",
    icon: "text-brand-purple-strong",
    ring: "group-hover:border-brand-purple/40",
  },
  coral: {
    tile: "bg-tint-pink",
    icon: "text-brand-coral-strong",
    ring: "group-hover:border-brand-coral/40",
  },
  teal: {
    tile: "bg-tint-mint",
    icon: "text-brand-teal",
    ring: "group-hover:border-brand-teal/40",
  },
  amber: {
    tile: "bg-tint-cream",
    icon: "text-[#8a6a12]",
    ring: "group-hover:border-[#d8a73a]/50",
  },
};

const VALUES: Value[] = [
  {
    title: "Results Driven",
    body: "We focus on delivering measurable outcomes that directly impact your business growth and efficiency.",
    icon: Target,
    accent: "coral",
  },
  {
    title: "Innovation First",
    body: "We stay ahead of technology trends to provide cutting edge solutions that give you a competitive advantage.",
    icon: Sparkles,
    accent: "purple",
  },
  {
    title: "Partnership Approach",
    body: "We work as an extension of your team, understanding your unique challenges and building lasting relationships.",
    icon: Handshake,
    accent: "teal",
  },
  {
    title: "Excellence Standard",
    body: "We maintain the highest standards in everything we do, from code quality to customer service.",
    icon: ShieldCheck,
    accent: "amber",
  },
];

const gridParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

function ValueCard({ value }: { value: Value }) {
  const reduceMotion = useReducedMotion();
  const a = ACCENT[value.accent];
  const Icon = value.icon;

  return (
    <motion.article
      variants={cardVariant}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`group flex h-full flex-col rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-background)] p-7 shadow-sm transition-shadow duration-[var(--duration-micro)] hover:shadow-lg ${a.ring}`}
    >
      {/* gradient sheen on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-purple/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <span
        className={`inline-flex size-13 items-center justify-center rounded-2xl ${a.tile} transition-transform duration-[var(--duration-micro)] group-hover:scale-110`}
      >
        <Icon className={`size-6 ${a.icon}`} />
      </span>

      <h3 className="mt-5 text-xl font-semibold text-[var(--color-text-primary)]">
        {value.title}
      </h3>
      <p className="mt-2 leading-relaxed text-[var(--color-text-secondary)]">
        {value.body}
      </p>
    </motion.article>
  );
}

export function AboutValues() {
  return (
    <section className="relative bg-[var(--color-background-warm)] py-[var(--section-padding-y)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
            The principles that guide every decision we make and every solution we build.
          </p>
        </motion.div>

        <motion.div
          variants={gridParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {VALUES.map((v) => (
            <ValueCard key={v.title} value={v} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
