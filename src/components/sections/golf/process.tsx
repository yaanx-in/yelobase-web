"use client";

import { motion, type Variants } from "framer-motion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/layout/container";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

type Step = {
  n: string;
  title: string;
  body: string;
  /** Short back-face payoff shown on hover/focus. */
  back: string;
};

// ponytail: card body/back copy is reconstructed on-brand — the source
// screenshot (254px wide) wasn't legible at this size and Figma MCP was rate-
// limited. Headings + numbers + structure are read from the design.
const STEPS: Step[] = [
  {
    n: "1",
    title: "Systems audit",
    body: "We map how your academy currently runs — every tool, hand-off, and manual step — so we know exactly where the friction is.",
    back: "A clear picture of what's slowing you down.",
  },
  {
    n: "2",
    title: "System design",
    body: "We architect the Zoho + Golf Manager blueprint tailored to your workflow, not a generic template.",
    back: "A blueprint built around how you actually work.",
  },
  {
    n: "3",
    title: "Build and integrate",
    body: "We implement, connect, and configure everything, then migrate your data so nothing gets left behind.",
    back: "One connected system, fully wired up.",
  },
  {
    n: "4",
    title: "You run it",
    body: "Fully documented and trained, with ongoing support so the system keeps working as your academy grows.",
    back: "You stay in control, we stay on call.",
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

function StepCard({ step }: { step: Step }) {
  return (
    <motion.div variants={child} className="group relative h-full [perspective:1200px]">
      <div className="relative h-full min-h-[180px] w-full transition-transform duration-500 ease-[var(--ease-out)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)] motion-reduce:transition-none">
        {/* Front */}
        <div className="absolute inset-0 flex flex-col gap-4 rounded-2xl border border-[var(--color-border-subtle)] bg-white p-6 shadow-sm [backface-visibility:hidden]">
          <span className="text-lg font-semibold text-brand-purple">
            {step.n}
          </span>
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
              {step.title}
            </h3>
            <p className="text-sm leading-5 text-[var(--color-text-secondary)]">
              {step.body}
            </p>
          </div>
        </div>
        {/* Back */}
        <div className="absolute inset-0 flex flex-col justify-between rounded-2xl bg-tint-lavender p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <span className="text-lg font-semibold text-brand-purple-strong">
            {step.n}
          </span>
          <p className="text-base font-medium leading-6 text-brand-purple-strong">
            {step.back}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * "The process — From scattered to systematic in 4 steps" (Figma 1416:632).
 * Four numbered cards with connector lines; each flips on hover/focus.
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
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0"
        >
          {STEPS.map((step, i) => (
            <li key={step.n} className="relative lg:px-2.5">
              {/* Connector between cards (desktop) */}
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-0 top-1/2 hidden h-px w-5 -translate-y-1/2 translate-x-1/2 bg-[var(--color-border)] lg:block"
                />
              )}
              <StepCard step={step} />
            </li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
