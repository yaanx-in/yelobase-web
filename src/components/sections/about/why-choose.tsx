"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRightCircle, Check } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

type Reason = {
  title: string;
  body: string;
  features: string[];
};

const REASONS: Reason[] = [
  {
    title: "Enterprise Grade Solutions",
    body: "We build scalable automation solutions that grow with your business, from startups to enterprise organizations.",
    features: ["Scalable architecture", "Security compliance", "Performance optimization", "24/7 support"],
  },
  {
    title: "Rapid Implementation",
    body: "Our proven methodologies ensure quick deployment without compromising on quality or functionality.",
    features: ["Agile development", "Quick turnaround", "Minimal downtime", "Seamless migration"],
  },
  {
    title: "Global Expertise",
    body: "Serving clients worldwide with deep understanding of diverse business requirements and regulations.",
    features: ["Multi timezone support", "Cultural awareness", "Regulatory compliance", "Local best practices"],
  },
];

export function AboutWhyChoose() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const reason = REASONS[active];

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
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Why choose YeloBase?
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
            Our comprehensive approach to automation and business transformation.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-14">
          {/* Left — selectable list */}
          <div role="tablist" aria-label="Reasons to choose YeloBase" className="flex flex-col">
            {REASONS.map((r, i) => {
              const selected = i === active;
              return (
                <button
                  key={r.title}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(i)}
                  className="group flex items-center justify-between gap-4 border-b border-[var(--color-border)] py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
                >
                  <span
                    className={`text-xl font-medium transition-colors ${
                      selected
                        ? "text-brand-purple-strong"
                        : "text-[var(--color-text-primary)] group-hover:text-brand-purple-strong"
                    }`}
                  >
                    {r.title}
                  </span>
                  <ArrowRightCircle
                    className={`size-6 shrink-0 transition-all ${
                      selected
                        ? "text-brand-purple-strong opacity-100"
                        : "text-[var(--color-text-muted)] opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right — active detail */}
          <div className="rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-background)] p-8 shadow-sm sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
                transition={{ duration: 0.28, ease: EASE_OUT }}
              >
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                  {reason.title}
                </h3>
                <p className="mt-3 leading-relaxed text-[var(--color-text-secondary)]">
                  {reason.body}
                </p>
                <ul className="mt-6 space-y-3">
                  {reason.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-[var(--color-text-secondary)]">
                      <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-tint-lavender">
                        <Check className="size-3.5 text-brand-purple-strong" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
