"use client";

import { useId, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

type Faq = { q: string; a: string };

// ponytail: answer copy for items 2-5 is reconstructed on-brand — the source
// screenshot wasn't legible at body size and Figma MCP was rate-limited. The
// questions and the first (expanded) answer are read from the design.
const FAQS: Faq[] = [
  {
    q: "Do we have to switch to a new platform?",
    a: "Most academies manage their operations across a patchwork of WhatsApp groups, spreadsheets, and manual reminders. We don't force a rip-and-replace — we integrate with or migrate from what you already use, and only replace a tool when doing so genuinely simplifies your operation.",
  },
  {
    q: "How long does a typical implementation take?",
    a: "A full academy build typically takes four to eight weeks depending on scope and the number of locations. We sequence the rollout so you start seeing value early rather than waiting for everything at once.",
  },
  {
    q: "Will my team need technical knowledge to use the system?",
    a: "No. We design around how your coaches and staff already work and keep the day-to-day simple, so there's no steep learning curve. Every implementation includes hands-on training plus 30 days of post-launch support.",
  },
  {
    q: "What tools do you typically use for golf academies?",
    a: "We build on Zoho and Golf Manager as the foundation, connected to the booking, billing, and communication tools your academy relies on. The exact stack is tailored to your workflow, not a fixed template.",
  },
  {
    q: "Is the audit genuinely free?",
    a: "Yes. The systems audit is a no-obligation 30-minute session where we map your current setup and show you exactly what automation would look like for your academy. There's no cost and no commitment.",
  },
];

const panelVariants: Variants = {
  collapsed: { height: 0, opacity: 0 },
  open: { height: "auto", opacity: 1 },
};
const listParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};
const listChild: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE_OUT } },
};

function PlusMinus({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden
      className="relative ml-4 inline-flex size-5 shrink-0 items-center justify-center text-[var(--color-text-secondary)]"
    >
      <span className="absolute h-0.5 w-3.5 rounded bg-current" />
      <motion.span
        className="absolute h-3.5 w-0.5 rounded bg-current"
        animate={{ scaleY: open ? 0 : 1 }}
        transition={{ duration: 0.2, ease: EASE_OUT }}
      />
    </span>
  );
}

function FaqItem({
  faq,
  index,
  open,
  onToggle,
  baseId,
}: {
  faq: Faq;
  index: number;
  open: boolean;
  onToggle: () => void;
  baseId: string;
}) {
  const reduceMotion = useReducedMotion();
  const btnId = `${baseId}-q-${index}`;
  const panelId = `${baseId}-a-${index}`;

  return (
    <motion.div
      variants={listChild}
      className="border-b border-[var(--color-border)]"
    >
      <h3>
        <button
          type="button"
          id={btnId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-inset"
        >
          <span
            className={cn(
              "text-base font-semibold transition-colors",
              open ? "text-brand-purple-strong" : "text-[var(--color-text-primary)]",
            )}
          >
            {faq.q}
          </span>
          <PlusMinus open={open} />
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={btnId}
            key="panel"
            initial={reduceMotion ? "open" : "collapsed"}
            animate="open"
            exit={reduceMotion ? "open" : "collapsed"}
            variants={panelVariants}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/**
 * FAQ accordion (Figma 1416:1619). First item open by default; one open at a
 * time; +/− indicators; keyboard accessible with aria-expanded/controls.
 */
export function GolfFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

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
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
            Question you might ask about our services
          </p>
        </motion.div>

        <motion.div
          variants={listParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          className="mx-auto mt-10 max-w-4xl border-t border-[var(--color-border)]"
        >
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.q}
              faq={faq}
              index={i}
              baseId={baseId}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
