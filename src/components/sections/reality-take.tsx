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

function ProblemCard() {
  return (
    <div className="rounded-2xl bg-[var(--color-background)] p-6 shadow-lg sm:p-9">
      <Eyebrow color="coral">Reality Check</Eyebrow>
      <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
        Sounds like your Monday?
      </h2>
      <p className="mt-3 text-[var(--color-text-secondary)]">
        If this sounds familiar, your systems may be holding your growth back.
      </p>
      <ul className="mt-6 space-y-3">
        {PROBLEMS.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 size-5 shrink-0 text-brand-coral" />
            <span className="text-[var(--color-text-secondary)]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SolutionCard() {
  return (
    <div className="rounded-2xl bg-[var(--color-surface-dark)] p-6 shadow-2xl ring-1 ring-white/10 sm:p-9">
      <Eyebrow color="teal">Our Take</Eyebrow>
      <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--color-text-on-dark)] sm:text-4xl">
        This isn&rsquo;t a tool issue, it&rsquo;s a system issue.
      </h2>
      <p className="mt-3 text-white/70">
        Most companies have the tools — what they lack is a system that connects
        and scales. That&rsquo;s where we come in.
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
  );
}

export function RealityTake() {
  const ref = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Drives the red→green section background across the whole section.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const background = useTransform(
    scrollYProgress,
    [0.1, 0.5, 0.9],
    ["#431016", "#1c1a1c", "#0d3a23"],
  );

  // Drives the stacking: as the solution card rises over the problem card,
  // the problem card recedes (scales back + dims).
  const { scrollYProgress: stack } = useScroll({
    target: stackRef,
    offset: ["start start", "end start"],
  });
  const problemScale = useTransform(stack, [0, 0.6], [1, 0.93]);
  const problemY = useTransform(stack, [0, 0.6], [0, -18]);
  const dimOpacity = useTransform(stack, [0, 0.55], [0, 0.16]);

  return (
    <motion.section
      ref={ref}
      style={reduceMotion ? { background: "#161318" } : { background }}
      className="relative overflow-x-clip pt-[var(--section-padding-y)] pb-8"
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
        {reduceMotion ? (
          // Static fallback: the original stacked overlap, no scroll motion.
          <div className="mx-auto max-w-3xl">
            <ProblemCard />
            <div className="-mt-4 sm:-mt-8 sm:ml-10">
              <SolutionCard />
            </div>
          </div>
        ) : (
          <div ref={stackRef} className="mx-auto max-w-3xl">
            {/* Problem card — pins, then recedes behind the rising solution card */}
            <motion.div
              style={{ scale: problemScale, y: problemY }}
              className="sticky top-[14vh] z-10 origin-top"
            >
              <div className="relative">
                <ProblemCard />
                {/* dimming veil as it goes "below" */}
                <motion.div
                  aria-hidden
                  style={{ opacity: dimOpacity }}
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-[#0a0a0a]"
                />
              </div>
            </motion.div>

            {/* Solution card — rises up and stacks over the problem card */}
            <div className="sticky top-[20vh] z-20 mt-10 sm:mt-14">
              <SolutionCard />
            </div>

            {/* tail space so the stack has room to complete before releasing */}
            <div className="h-[20vh]" aria-hidden />
          </div>
        )}
      </Container>
    </motion.section>
  );
}
