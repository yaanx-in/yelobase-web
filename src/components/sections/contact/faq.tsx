"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { Container } from "@/components/layout/container";
import { ChevronDown } from "@/components/ui/icon";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

type FaqItem = {
  q: string;
  a: string;
};

const FAQS: FaqItem[] = [
  {
    q: "How long does a Zoho implementation take?",
    a: "Most implementations take 2 to 8 weeks depending on complexity. Simple CRM setups: 2 to 3 weeks. Full multi-app builds: 6 to 8 weeks.",
  },
  {
    q: "What's included in AI automation development?",
    a: "Discovery, build, integration, testing, go live, and 30 days of post launch support. We also provide documentation and team walkthroughs.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. We offer support packages that include monitoring, regular optimization, and feature updates. Customized to your needs.",
  },
  {
    q: "Can you integrate with our existing tools?",
    a: "Absolutely. We specialize in connecting Zoho, AI agents, and your existing systems through APIs and custom connectors.",
  },
];

const gridParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const rowVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

type AccordionItemProps = {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

function AccordionItem({ item, index, isOpen, onToggle }: AccordionItemProps) {
  const reduceMotion = useReducedMotion();
  const panelId = `faq-panel-${index}`;
  const headingId = `faq-heading-${index}`;

  return (
    <motion.div
      variants={rowVariant}
      className="border-b border-[var(--color-border-subtle)] last:border-b-0"
    >
      <h3>
        <button
          id={headingId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 rounded-lg"
        >
          <span className="text-base font-semibold text-[var(--color-text-primary)] leading-snug pr-2">
            {item.q}
          </span>
          <motion.span
            aria-hidden
            animate={reduceMotion ? undefined : { rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            className={`inline-flex size-8 shrink-0 items-center justify-center rounded-xl transition-colors duration-[var(--duration-micro)] ${
              isOpen
                ? "bg-tint-lavender text-brand-purple-strong"
                : "bg-[var(--color-surface)] text-[var(--color-text-muted)] group-hover:bg-tint-lavender group-hover:text-brand-purple-strong"
            }`}
          >
            <ChevronDown className="size-4" />
          </motion.span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={headingId}
            key="content"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            style={{ overflow: "hidden" }}
          >
            <p className="pb-5 pr-12 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ContactFaq() {
  const reduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="bg-[var(--color-background)] py-[var(--section-padding-y)]">
      <Container>
        <div className="mx-auto max-w-2xl">
          {/* Heading */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
            className="text-center"
          >
            <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Common questions
            </h2>
            <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
              Quick answers before you reach out.
            </p>
          </motion.div>

          {/* Accordion card */}
          <motion.div
            variants={gridParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            className="mt-10 rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-background-warm)] px-6 py-2 shadow-sm sm:px-8"
          >
            {FAQS.map((item, i) => (
              <AccordionItem
                key={item.q}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
