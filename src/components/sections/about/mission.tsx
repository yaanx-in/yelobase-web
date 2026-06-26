"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Check, Sparkles } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -10% 0px" },
  transition: { duration: 0.4, ease: EASE_OUT },
} as const;

const listParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const listItem: Variants = {
  hidden: { opacity: 0, x: -14 },
  show: { opacity: 1, x: 0, transition: { duration: 0.38, ease: EASE_OUT } },
};

const DIFFERENTIATORS = [
  { text: "Deep expertise across the entire Zoho ecosystem", icon: Check },
  { text: "Advanced AI agent development on multiple platforms", icon: Sparkles },
  { text: "Industry-agnostic solutions that scale", icon: Check },
  { text: "Commitment to measurable ROI and business outcomes", icon: Sparkles },
];

export function AboutMission() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[var(--color-background)] py-[var(--section-padding-y)]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">

          {/* Left — Mission */}
          <motion.div {...fadeUp}>
            <div className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-tint-lavender">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
                className="text-brand-purple-strong"
              >
                <path d="M12 3l7 3v6c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3Z" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
              </svg>
            </div>

            <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Our Mission
            </h2>

            <p className="mt-5 leading-relaxed text-[var(--color-text-secondary)]">
              At YeloBase, we believe that every business deserves to operate at peak efficiency.
              Our mission is to eliminate repetitive tasks and unlock human potential through
              intelligent automation solutions. We combine deep technical expertise with a genuine
              understanding of business processes to deliver automation solutions that not only
              work flawlessly but also scale with your growth.
            </p>

            {/* subtle accent rule */}
            <div className="mt-8 h-px w-16 rounded-pill bg-brand-coral/50" aria-hidden />
          </motion.div>

          {/* Right — What Sets Us Apart */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.4, delay: 0.1, ease: EASE_OUT }}
          >
            <div className="rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-background-warm)] p-7 sm:p-9">
              <div className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-tint-pink">
                <Sparkles className="size-6 text-brand-coral-strong" />
              </div>

              <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
                What Sets Us Apart
              </h2>

              <motion.ul
                variants={listParent}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                className="mt-6 space-y-4"
              >
                {DIFFERENTIATORS.map(({ text, icon: Icon }) => (
                  <motion.li
                    key={text}
                    variants={listItem}
                    className="flex items-start gap-3 text-[var(--color-text-secondary)]"
                  >
                    <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-tint-mint">
                      <Icon className="size-3.5 text-brand-teal" />
                    </span>
                    <span className="leading-relaxed">{text}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Hover-lift micro card inside the card */}
              <motion.div
                whileHover={reduceMotion ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="mt-8 rounded-2xl bg-[var(--color-background)] p-5 shadow-sm"
              >
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                  Certified Zoho Authorized Partner
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-secondary)]">
                  Backed by official Zoho authorization and a decade of hands-on implementation
                  across diverse industries.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
