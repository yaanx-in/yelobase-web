"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { CountUp } from "@/components/ui/reveal";
import { Check } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const DIFFERENTIATORS = [
  "Deep expertise across the entire Zoho ecosystem",
  "Advanced AI agent development on multiple platforms",
  "Industry-agnostic solutions that scale",
  "Commitment to measurable ROI and business outcomes",
];

type Stat = { value: number; suffix: string; label: string };

const STATS: Stat[] = [
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 30, suffix: "+", label: "AI Agents Built" },
];

const listParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const listItem: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: EASE_OUT } },
};

export function AboutTrackRecord() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[var(--color-background-warm)] py-[var(--section-padding-y)]">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Left — dark "what sets us apart" card */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.45, ease: EASE_OUT }}
            className="relative overflow-hidden rounded-[24px] bg-[var(--color-surface-dark)] p-8 sm:p-10"
          >
            <h2 className="relative text-2xl font-bold tracking-tight text-white sm:text-3xl">
              What Sets Us Apart
            </h2>
            <motion.ul
              variants={listParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              className="relative mt-6 space-y-4"
            >
              {DIFFERENTIATORS.map((text) => (
                <motion.li key={text} variants={listItem} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-purple/25">
                    <Check className="size-3.5 text-brand-purple" />
                  </span>
                  <span className="leading-relaxed text-white/80">{text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right — stat list */}
          <motion.dl
            variants={listParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            className="divide-y divide-[var(--color-border-subtle)]"
          >
            {STATS.map((s) => (
              <motion.div
                key={s.label}
                variants={listItem}
                className="flex items-baseline gap-5 py-5 first:pt-0"
              >
                <dd className="min-w-[5.5rem] font-mono text-4xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
                  <CountUp to={s.value} suffix={s.suffix} duration={1.3} />
                </dd>
                <dt className="text-lg font-medium text-[var(--color-text-secondary)]">
                  {s.label}
                </dt>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </Container>
    </section>
  );
}
