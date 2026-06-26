"use client";

import { useId, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/layout/container";
import { ChevronDown } from "@/components/ui/icon";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

type Faq = {
  q: string;
  a: string;
};

const FAQS: Faq[] = [
  {
    q: "Do we need to replace our existing booking system?",
    a: "No rip-and-replace required. We integrate with or migrate from what you already use, and we only replace a tool when doing so genuinely simplifies your operation. The goal is fewer moving parts, not more change for its own sake.",
  },
  {
    q: "How long does a full implementation take?",
    a: "A full academy build typically takes four to eight weeks depending on scope and the number of locations. Simpler setups go live faster, and we sequence the rollout so you start seeing value early rather than waiting for everything at once.",
  },
  {
    q: "Will our coaches and staff actually adopt this?",
    a: "Yes. We design around how your team already works and keep the day-to-day simple, so there is no steep learning curve. Every implementation includes hands-on training plus 30 days of post-launch support to make adoption stick.",
  },
  {
    q: "Is this only for large academies?",
    a: "Not at all. The system scales from a single-coach studio to a multi-location academy, and you only pay for what you actually need. As you grow, it grows with you without a costly rebuild.",
  },
  {
    q: "What does ongoing support look like?",
    a: "We offer an optional monthly retainer covering proactive monitoring, ongoing optimization, new automations, and priority support. It means your system keeps improving as your academy evolves, with us as your long-term partner.",
  },
];

const panelVariants: Variants = {
  collapsed: { height: 0, opacity: 0 },
  open: { height: "auto", opacity: 1 },
};

const cardParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const cardChild: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

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
      variants={cardChild}
      className="overflow-hidden rounded-[20px] border border-[var(--color-border-subtle)] bg-[var(--color-background)] shadow-sm transition-shadow duration-[var(--duration-micro)] hover:shadow-md"
    >
      <h3>
        <button
          type="button"
          id={btnId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-inset"
        >
          <span className="text-base font-semibold text-[var(--color-text-primary)]">
            {faq.q}
          </span>
          <motion.span
            aria-hidden
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            className={`inline-flex size-8 shrink-0 items-center justify-center rounded-full ${
              open ? "bg-tint-mint text-brand-teal" : "bg-[var(--color-surface)] text-[var(--color-text-secondary)]"
            }`}
          >
            <ChevronDown className="size-4" />
          </motion.span>
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
            <p className="px-6 pb-5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

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
          className="mx-auto max-w-2xl text-center"
        >
          <Eyebrow color="teal">FAQ</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Common questions
          </h2>
        </motion.div>

        <motion.div
          variants={cardParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          className="mx-auto mt-10 max-w-3xl space-y-3"
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
