"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { AlertCircle, Check } from "@/components/ui/icon";

// Visible-in-Figma copy is used verbatim; a couple of parallel bullets are
// extrapolated to match (flagged to the user — confirm exact list copy).
const PROBLEMS = [
  "Invoices get delayed because no one was notified.",
  "You can't see real cash flow without opening five files.",
  "Leads slip through the cracks when follow-ups are manual.",
  "Every report takes days to pull together by hand.",
];

const SOLUTIONS = [
  "Notifications and follow-ups happen automatically.",
  "Cash flow is visible in real time, in one place.",
  "Leads move through a pipeline that never drops them.",
  "Reports build themselves, ready when you are.",
];

export function RealityTake() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Problem (warm coral-dark) → solution (cool teal-dark) as you scroll through.
  const background = useTransform(
    scrollYProgress,
    [0.15, 0.85],
    ["#241318", "#0e2a22"],
  );

  return (
    <motion.section
      ref={ref}
      style={reduceMotion ? { background: "#161318" } : { background }}
      className="relative overflow-hidden py-[var(--section-padding-y)]"
    >
      {/* subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl">
          {/* Problem card */}
          <div className="rounded-md bg-[var(--color-background)] p-6 shadow-lg sm:p-9">
            <Eyebrow color="coral">Reality Check</Eyebrow>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Sounds like your Monday?
            </h2>
            <p className="mt-3 text-[var(--color-text-secondary)]">
              If this sounds familiar, your systems may be holding your growth
              back.
            </p>
            <ul className="mt-6 space-y-3">
              {PROBLEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <AlertCircle className="mt-0.5 size-5 shrink-0 text-brand-coral" />
                  <span className="text-[var(--color-text-secondary)]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution card — overlaps the problem card on larger screens */}
          <div className="-mt-4 ml-0 rounded-md bg-[var(--color-surface-dark)] p-6 shadow-lg ring-1 ring-white/10 sm:-mt-8 sm:ml-10 sm:p-9">
            <Eyebrow color="teal">Our Take</Eyebrow>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--color-text-on-dark)] sm:text-4xl">
              This isn&rsquo;t a tool issue, it&rsquo;s a system issue.
            </h2>
            <p className="mt-3 text-white/70">
              Most companies have the tools — what they lack is a system that
              connects and scales. That&rsquo;s where we come in.
            </p>
            <ul className="mt-6 space-y-3">
              {SOLUTIONS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-brand-teal-bright" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
