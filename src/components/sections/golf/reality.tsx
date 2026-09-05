"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { ErrorCircle, CheckCircle } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

type Panel = {
  /** Eyebrow pill label. */
  tag: string;
  /** Two-line left heading. */
  heading: [string, string];
  /** Left intro paragraph. */
  intro: string;
  /** Right-hand card items. */
  items: { title: string; body: string }[];
};

const PROBLEM: Panel = {
  tag: "PROBLEM",
  heading: ["Running a golf academy is hard enough.", "The admin shouldn't be."],
  intro:
    "Most academies manage their operations across a patchwork of WhatsApp groups, spreadsheets, and manual reminders. It works - until it doesn't.",
  items: [
    {
      title: "Bookings fall through the cracks",
      body: "Students call or message to book, you manually add them somewhere, and reschedules are a logistical nightmare.",
    },
    {
      title: "Billing is always chasing",
      body: "Invoices go out late, payment reminders are manual, and revenue tracking means a lot of scrolling through bank statements.",
    },
    {
      title: "No visibility on student progress",
      body: "Lesson notes live in different instructors' heads or notebooks. There's no central record of where each student is in their journey.",
    },
    {
      title: "Drop-offs you never saw coming",
      body: "Students quietly stop showing up. You find out three weeks later. There was no system to flag the warning signs early.",
    },
  ],
};

// ponytail: solution-tab copy is inferred (the "What we Build" tab content
// could not be pulled from Figma before the MCP rate limit). Swap the exact
// strings in if/when Figma access returns.
const SOLUTION: Panel = {
  tag: "WHAT WE BUILD",
  heading: ["One connected system.", "Everything runs itself."],
  intro:
    "We replace the patchwork with a single automated operation built on Zoho and Golf Manager — so bookings, billing, and follow-ups happen without you lifting a finger.",
  items: [
    {
      title: "Bookings that manage themselves",
      body: "Students book and reschedule online. Your calendar updates automatically, with confirmations and reminders sent for you.",
    },
    {
      title: "Billing on autopilot",
      body: "Invoices generate at lesson completion, reminders go out automatically, and revenue tracking is live in one dashboard.",
    },
    {
      title: "Full visibility on every student",
      body: "One central record of lesson history, progress notes, and communication — accessible to every instructor, all in one place.",
    },
    {
      title: "Early warnings on drop-offs",
      body: "The system flags students who miss sessions or slow down, so you can re-engage them before they quietly leave.",
    },
  ],
};

function Card({ panel }: { panel: Panel }) {
  const isProblem = panel.tag === "PROBLEM";
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {/* Left: tag + heading + intro */}
      <div className="flex flex-col gap-6">
        <span
          className={cn(
            "inline-flex w-fit items-center rounded-lg px-4 py-1 text-lg font-semibold leading-[42px]",
            isProblem
              ? "bg-[#ffebeb] text-brand-coral"
              : "bg-tint-mint text-brand-teal",
          )}
        >
          {panel.tag}
        </span>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--color-text-primary)]">
            {panel.heading[0]}
            <br />
            {panel.heading[1]}
          </h3>
          <p className="text-base leading-6 text-[var(--color-text-primary)]">
            {panel.intro}
          </p>
        </div>
      </div>

      {/* Right: 4-item card */}
      <div className="flex flex-col gap-6 rounded-2xl border border-[var(--color-border-subtle)] bg-white p-8">
        {panel.items.map((item) => (
          <div key={item.title} className="flex flex-col gap-2">
            <p className="text-lg font-semibold leading-6 text-black">
              {item.title}
            </p>
            <p className="text-sm leading-5 text-[var(--color-text-secondary)]">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * "From Frustration to Flow" problem/solution toggle (Figma 1387:391 / 1387:917).
 * A two-state button group swaps the whole panel between the problem view and
 * the "what we build" solution view. One tab active at a time; keyboard-driven.
 */
export function GolfReality() {
  const [tab, setTab] = useState<"problem" | "build">("problem");
  const reduceMotion = useReducedMotion();
  const panel = tab === "problem" ? PROBLEM : SOLUTION;

  return (
    <section
      id="from-frustration-to-flow"
      className="scroll-mt-24 bg-[var(--color-background-warm)] py-[var(--section-padding-y)]"
    >
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          className="text-center text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl"
        >
          From Frustration to Flow
        </motion.h2>

        {/* Toggle */}
        <div
          role="tablist"
          aria-label="Problem or solution"
          className="mx-auto mt-10 flex w-fit overflow-hidden rounded-lg border border-[var(--color-border)] shadow-sm"
        >
          <button
            role="tab"
            id="tab-problem"
            aria-selected={tab === "problem"}
            aria-controls="panel-fftf"
            type="button"
            onClick={() => setTab("problem")}
            className={cn(
              "flex items-center gap-2 border-r border-[var(--color-border)] px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-inset",
              tab === "problem"
                ? "bg-black text-white"
                : "bg-[#fafafa] text-[#252b37] hover:bg-[var(--color-surface)]",
            )}
          >
            <ErrorCircle className="size-5" />
            Problem
          </button>
          <button
            role="tab"
            id="tab-build"
            aria-selected={tab === "build"}
            aria-controls="panel-fftf"
            type="button"
            onClick={() => setTab("build")}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-inset",
              tab === "build"
                ? "bg-black text-white"
                : "bg-[#fafafa] text-[#252b37] hover:bg-[var(--color-surface)]",
            )}
          >
            <CheckCircle className="size-5" />
            What we Build
          </button>
        </div>

        <div
          id="panel-fftf"
          role="tabpanel"
          aria-labelledby={tab === "problem" ? "tab-problem" : "tab-build"}
          className="mt-10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
            >
              <Card panel={panel} />
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
