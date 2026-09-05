"use client";

import { motion, type Variants } from "framer-motion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/layout/container";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

type Step = {
  n: string;
  title: string;
  body: string;
};

const STEPS: Step[] = [
  {
    n: "1",
    title: "Systems audit",
    body: "We map exactly how your academy currently operates - every manual step, every tool, every gap.",
  },
  {
    n: "2",
    title: "System design",
    body: "We architect the right solution for your specific setup - built around your workflow, not a template.",
  },
  {
    n: "3",
    title: "Build and integrate",
    body: "We implement, connect your tools, migrate your data, and test everything before handing over.",
  },
  {
    n: "4",
    title: "You run it",
    body: "Training, documentation, and ongoing support. The system runs itself - we make sure you can run the system.",
  },
];

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const child: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

/**
 * "The process — From scattered to systematic in 4 steps" (Figma 1416:632).
 * Four numbered cards, each with a circular badge, joined by connector lines.
 */
export function GolfProcess() {
  return (
    <section className="bg-[var(--color-background-warm)] py-[var(--section-padding-y)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          className="text-center"
        >
          <Eyebrow color="teal">The Process</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            From scattered to systematic in 4 steps
          </h2>
        </motion.div>

        <motion.ol
          variants={parent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-11"
        >
          {STEPS.map((step, i) => (
            <motion.li key={step.n} variants={child} className="relative">
              {/* Connector to the next card (desktop), aligned to the badge center */}
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-full top-1/2 hidden h-px w-11 -translate-y-1/2 bg-brand-coral/30 lg:block"
                />
              )}
              <div className="flex h-full flex-col rounded-2xl border border-[var(--color-border-subtle)] bg-white p-6 shadow-sm">
                <span className="grid size-[42px] shrink-0 place-items-center rounded-full bg-[var(--color-surface)] text-2xl font-semibold leading-[1.1] text-brand-purple">
                  {step.n}
                </span>
                <h3 className="mt-6 text-lg font-semibold text-[var(--color-text-primary)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {step.body}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
