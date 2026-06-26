"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/layout/container";
import { AlertCircle, Check } from "@/components/ui/icon";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const BEFORE = [
  "Lesson bookings scattered across WhatsApp, email, and phone calls",
  "No visibility into which coaches have availability right now",
  "Member billing done manually every month in spreadsheets",
  "Players fall through the cracks between enquiry and first lesson",
  "Zero reporting on revenue per coach, per program, per month",
];

const AFTER = [
  "One system for bookings, billing, CRM, and reporting",
  "Players book and pay online without calling anyone",
  "Invoices generated and sent automatically after each lesson",
  "Every lead tracked from first enquiry to enrolled player",
  "Live dashboard showing revenue, occupancy, and cashflow",
];

const listParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
};
const listItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.38, ease: EASE_OUT } },
};

type Column = {
  kind: "before" | "after";
  label: string;
  items: string[];
};

function Column({ column }: { column: Column }) {
  const reduceMotion = useReducedMotion();
  const isBefore = column.kind === "before";
  const fromX = isBefore ? -28 : 28;

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, x: fromX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.5, ease: EASE_OUT }}
      className={`flex h-full flex-col rounded-[24px] border p-7 shadow-sm sm:p-8 ${
        isBefore
          ? "border-[#e9c9c3] bg-[#fdf1ef]"
          : "border-[#bfe5dd] bg-tint-mint"
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`inline-flex size-10 items-center justify-center rounded-xl ${
            isBefore ? "bg-[#f6dcd6] text-[#b4493a]" : "bg-white text-brand-teal"
          }`}
        >
          {isBefore ? (
            <AlertCircle className="size-5" />
          ) : (
            <Check className="size-5" />
          )}
        </span>
        <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
          {column.label}
        </h3>
      </div>

      <motion.ul
        variants={listParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -8% 0px" }}
        className="mt-6 space-y-3.5"
      >
        {column.items.map((item) => (
          <motion.li
            key={item}
            variants={listItem}
            className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-text-secondary)]"
          >
            <span
              className={`mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full ${
                isBefore ? "bg-[#f6dcd6] text-[#b4493a]" : "bg-white text-brand-teal"
              }`}
            >
              {isBefore ? (
                <AlertCircle className="size-3.5" />
              ) : (
                <Check className="size-3.5" />
              )}
            </span>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export function GolfReality() {
  return (
    <section className="overflow-hidden bg-[var(--color-background)] py-[var(--section-padding-y)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          className="mx-auto max-w-2xl text-center"
        >
          <Eyebrow color="coral">The Reality</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Running an academy shouldn&rsquo;t feel like this.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Column column={{ kind: "before", label: "Before YeloBase", items: BEFORE }} />
          <Column column={{ kind: "after", label: "After YeloBase", items: AFTER }} />
        </div>
      </Container>
    </section>
  );
}
