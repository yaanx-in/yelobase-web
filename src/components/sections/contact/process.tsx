"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Container } from "@/components/layout/container";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

type Step = {
  number: string;
  title: string;
  body: string;
  tileColor: string;
  numberColor: string;
  connectorColor: string;
};

const STEPS: Step[] = [
  {
    number: "1",
    title: "We review your inquiry",
    body: "Within 24 hours. No auto-replies, a real person reads it.",
    tileColor: "bg-tint-lavender",
    numberColor: "text-brand-purple-strong",
    connectorColor: "bg-brand-purple/20",
  },
  {
    number: "2",
    title: "We send a scoped proposal",
    body: "Tailored to your stack, team size, and goals.",
    tileColor: "bg-tint-pink",
    numberColor: "text-brand-coral-strong",
    connectorColor: "bg-brand-coral/20",
  },
  {
    number: "3",
    title: "We get to work",
    body: "Kick off within days, not weeks.",
    tileColor: "bg-tint-mint",
    numberColor: "text-brand-teal",
    connectorColor: "bg-brand-teal/20",
  },
];

const gridParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
};

const lineVariant: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.55, ease: EASE_OUT, delay: 0.15 } },
};

export function ContactProcess() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[var(--color-background)] py-[var(--section-padding-y)]">
      <Container>
        {/* Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          className="mx-auto max-w-xl text-center"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            What happens next
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
            Three steps. No back-and-forth. No gatekeeping.
          </p>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          variants={gridParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          className="relative mt-14 grid gap-6 sm:grid-cols-3 sm:gap-8"
        >
          {/* Connecting lines between steps — desktop only */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-[2.75rem] hidden sm:block"
          >
            <div className="mx-auto grid grid-cols-3" style={{ maxWidth: "var(--container-max)", paddingInline: "var(--container-gutter)" }}>
              {/* Line segment 1→2 */}
              <div className="relative col-start-1 flex justify-end pr-4">
                <motion.div
                  variants={lineVariant}
                  className="h-px w-full origin-left bg-[var(--color-border-subtle)]"
                  style={{ marginTop: "1.375rem" }}
                />
              </div>
              {/* Line segment 2→3 */}
              <div className="relative col-start-2 col-end-3 flex justify-end pr-4 pl-4">
                <motion.div
                  variants={lineVariant}
                  className="h-px w-full origin-left bg-[var(--color-border-subtle)]"
                  style={{ marginTop: "1.375rem" }}
                />
              </div>
              <div className="col-start-3" />
            </div>
          </div>

          {STEPS.map((step, i) => (
            <motion.article
              key={step.number}
              variants={cardVariant}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group relative flex flex-col rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-background-warm)] p-7 shadow-sm transition-shadow duration-[var(--duration-micro)] hover:shadow-lg"
            >
              {/* Number badge */}
              <span
                className={`inline-flex size-11 shrink-0 items-center justify-center rounded-2xl font-mono text-base font-bold ${step.tileColor} ${step.numberColor} transition-transform duration-[var(--duration-micro)] group-hover:scale-110`}
              >
                {step.number}
              </span>

              {/* Step label */}
              <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                Step {i + 1}
              </p>

              <h3 className="mt-4 text-xl font-semibold leading-snug text-[var(--color-text-primary)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {step.body}
              </p>

              {/* Subtle tinted bottom accent bar */}
              <motion.div
                aria-hidden
                className={`absolute bottom-0 left-6 right-6 h-0.5 rounded-full ${step.connectorColor} opacity-0 transition-opacity duration-[var(--duration-micro)] group-hover:opacity-100`}
              />
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
