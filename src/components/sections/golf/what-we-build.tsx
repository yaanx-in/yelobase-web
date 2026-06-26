"use client";

import type { ComponentType, SVGProps } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/layout/container";
import {
  Calendar,
  Users,
  Receipt,
  Sparkles,
  BarChart,
  Headset,
} from "@/components/ui/icon";

type Accent = "purple" | "coral" | "teal" | "amber";

type Build = {
  title: string;
  body: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  accent: Accent;
};

const TILE: Record<Accent, { wrap: string; ring: string }> = {
  purple: {
    wrap: "bg-tint-lavender text-brand-purple-strong",
    ring: "group-hover:border-brand-purple/40",
  },
  coral: {
    wrap: "bg-tint-pink-soft text-brand-coral-strong",
    ring: "group-hover:border-brand-coral/40",
  },
  teal: {
    wrap: "bg-tint-mint text-brand-teal",
    ring: "group-hover:border-brand-teal/40",
  },
  amber: {
    wrap: "bg-tint-cream text-[#8a6a12]",
    ring: "group-hover:border-[#d8a73a]/50",
  },
};

const BUILDS: Build[] = [
  {
    title: "Smart Lesson Scheduling",
    body: "Players book online. Coaches see their calendar automatically. Conflicts, cancellations, and reschedules handled without a single manual step.",
    icon: Calendar,
    accent: "coral",
  },
  {
    title: "Player CRM",
    body: "Every player profile in one place. Lesson history, payment status, progress notes, and communication log. Nothing falls through the cracks.",
    icon: Users,
    accent: "purple",
  },
  {
    title: "Automated Billing",
    body: "Invoices generated at lesson completion. Payment reminders sent automatically. Monthly membership renewals processed without lifting a finger.",
    icon: Receipt,
    accent: "teal",
  },
  {
    title: "AI Lead Nurturing",
    body: "New enquiries get an instant response. Automated follow up sequences convert interested prospects into paying players while you focus on coaching.",
    icon: Sparkles,
    accent: "amber",
  },
  {
    title: "Real Time Analytics",
    body: "Revenue per coach, program occupancy, retention rates, and cash flow, all in a single dashboard. Make decisions with actual data.",
    icon: BarChart,
    accent: "purple",
  },
  {
    title: "Managed Operations",
    body: "Monthly retainer option. We maintain and evolve your system as your academy grows. No internal admin overhead required.",
    icon: Headset,
    accent: "teal",
  },
];

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const child: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

function BuildCard({ build }: { build: Build }) {
  const reduceMotion = useReducedMotion();
  const tile = TILE[build.accent];
  const Icon = build.icon;

  return (
    <motion.article
      variants={child}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className={`group flex h-full flex-col rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-background)] p-6 shadow-sm transition-shadow duration-[var(--duration-micro)] hover:shadow-lg ${tile.ring}`}
    >
      <span
        className={`inline-flex size-12 items-center justify-center rounded-2xl ${tile.wrap} transition-transform duration-[var(--duration-micro)] group-hover:scale-110`}
      >
        <Icon className="size-6" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-[var(--color-text-primary)]">
        {build.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {build.body}
      </p>
    </motion.article>
  );
}

export function GolfWhatWeBuild() {
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
          <Eyebrow color="teal">What We Build</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Your academy. Fully automated.
          </h2>
        </motion.div>

        <motion.div
          variants={parent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {BUILDS.map((build) => (
            <BuildCard key={build.title} build={build} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
