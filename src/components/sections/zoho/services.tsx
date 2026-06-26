"use client";

import { useId, useRef, useState, type ComponentType, type SVGProps } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { ArrowRight, Check, Layers, Bolt, Workflow, Sprout } from "@/components/ui/icon";

type Service = {
  tab: string;
  label: string;
  title: string;
  body: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  included: string[];
};

const SERVICES: Service[] = [
  {
    tab: "Zoho Implementation",
    label: "Foundation",
    icon: Layers,
    title: "Zoho Implementation",
    body: "Complete setup and configuration of Zoho applications tailored to your business needs.",
    included: [
      "Initial consultation and needs analysis",
      "Application setup and configuration",
      "Data migration from existing systems",
      "User training and documentation",
      "Go-live support and optimization",
    ],
  },
  {
    tab: "Custom Automation",
    label: "Efficiency",
    icon: Bolt,
    title: "Custom Automation",
    body: "Intelligent workflows and automations to eliminate manual tasks and boost efficiency.",
    included: [
      "Workflow design and implementation",
      "Business process automation",
      "Email and notification automation",
      "Approval processes and escalations",
      "Custom function development",
    ],
  },
  {
    tab: "Integration Solutions",
    label: "Connectivity",
    icon: Workflow,
    title: "Integration Solutions",
    body: "Seamless connections between Zoho apps and third party systems for unified operations.",
    included: [
      "API development and integration",
      "Third party app connections",
      "Data synchronization setup",
      "Real time integration monitoring",
      "Custom connector development",
    ],
  },
  {
    tab: "Ongoing Support",
    label: "Growth",
    icon: Sprout,
    title: "Ongoing Support",
    body: "Continuous optimization and support to ensure your Zoho investment delivers maximum ROI.",
    included: [
      "24/7 technical support",
      "Regular system optimization",
      "User training and workshops",
      "Performance monitoring",
      "Feature updates and enhancements",
    ],
  },
];

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const listParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};
const listItem: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: EASE_OUT } },
};

export function ZohoServices() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" ? 1 : -1;
    const next = (active + dir + SERVICES.length) % SERVICES.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const current = SERVICES[active];
  const Icon = current.icon;

  return (
    <section className="bg-[var(--color-background)] py-[var(--section-padding-y)]">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow color="teal">Our Zoho Services</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            End-to-end Zoho, start to scale
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            End-to-end Zoho solutions from initial setup to ongoing optimization.
          </p>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Our Zoho services"
          onKeyDown={onKeyDown}
          className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-2 rounded-pill bg-[var(--color-surface)] p-1.5"
        >
          {SERVICES.map((s, i) => {
            const selected = i === active;
            return (
              <button
                key={s.tab}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`${baseId}-tab-${i}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel-${i}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={`relative rounded-pill px-4 py-2 text-sm font-medium transition-colors duration-[var(--duration-micro)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 ${
                  selected
                    ? "text-white"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
              >
                {selected && (
                  <motion.span
                    aria-hidden
                    layoutId={reduceMotion ? undefined : `${baseId}-pill`}
                    className="absolute inset-0 z-0 rounded-pill bg-[var(--color-surface-dark)]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{s.tab}</span>
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div className="mx-auto mt-10 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              role="tabpanel"
              id={`${baseId}-panel-${active}`}
              aria-labelledby={`${baseId}-tab-${active}`}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
              className="grid gap-8 rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-background-warm)] p-7 shadow-sm sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]"
            >
              {/* Left: intro */}
              <div>
                <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-purple to-brand-coral text-white shadow-sm">
                  <Icon className="size-7" />
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-teal">
                  {current.label}
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
                  {current.title}
                </h3>
                <p className="mt-3 text-[var(--color-text-secondary)]">{current.body}</p>
                <ButtonLink href="#footer" variant="dark" className="mt-6">
                  Get Started
                  <ArrowRight className="size-4" />
                </ButtonLink>
              </div>

              {/* Right: checklist */}
              <div className="rounded-2xl bg-[var(--color-background)] p-6 shadow-sm sm:p-7">
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                  What&rsquo;s included
                </p>
                <motion.ul
                  variants={listParent}
                  initial="hidden"
                  animate="show"
                  className="mt-4 space-y-3"
                >
                  {current.included.map((item) => (
                    <motion.li
                      key={item}
                      variants={listItem}
                      className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]"
                    >
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-tint-mint">
                        <Check className="size-3.5 text-brand-teal" />
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
