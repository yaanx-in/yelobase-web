"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Bolt, Lightbulb, Handshake, Award } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";
import type { ComponentType, SVGProps } from "react";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

type Value = {
  title: string;
  body: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const VALUES: Value[] = [
  {
    title: "Results Driven",
    body: "We focus on delivering measurable outcomes that directly impact your business growth and efficiency.",
    icon: Bolt,
  },
  {
    title: "Innovation First",
    body: "We stay ahead of technology trends to provide cutting edge solutions that give you a competitive advantage.",
    icon: Lightbulb,
  },
  {
    title: "Partnership Approach",
    body: "We work as an extension of your team, understanding your unique challenges and building lasting relationships.",
    icon: Handshake,
  },
  {
    title: "Excellence Standard",
    body: "We maintain the highest standards in everything we do, from code quality to customer service.",
    icon: Award,
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
  const Icon = value.icon;

  return (
    <motion.article
      variants={cardVariant}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group flex h-full flex-col rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-background)] p-7 shadow-sm transition-shadow duration-[var(--duration-micro)] hover:shadow-lg"
    >
      <span className="inline-flex size-12 items-center justify-center rounded-full bg-black/[0.05] transition-transform duration-[var(--duration-micro)] group-hover:scale-110">
        <Icon className="size-[22px] text-[var(--color-text-primary)]" />
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
            The principles that guide everything we do.
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
