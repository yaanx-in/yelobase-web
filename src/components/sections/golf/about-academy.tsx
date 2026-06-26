"use client";

import type { ComponentType, SVGProps } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/layout/container";
import { Trophy, MapPin, Star, BarChart } from "@/components/ui/icon";

type Accent = "purple" | "coral" | "teal" | "amber";

type Feature = {
  title: string;
  body: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  accent: Accent;
};

const TILE: Record<Accent, string> = {
  purple: "bg-tint-lavender text-brand-purple-strong",
  coral: "bg-tint-pink-soft text-brand-coral-strong",
  teal: "bg-tint-mint text-brand-teal",
  amber: "bg-tint-cream text-[#8a6a12]",
};

const FEATURES: Feature[] = [
  {
    title: "PGA Certified Coaching",
    body: "Experienced PGA Golf Coaching with real time objective feedback and video analysis on every shot.",
    icon: Trophy,
    accent: "amber",
  },
  {
    title: "Multiple Dubai Locations",
    body: "Multiple academies across Dubai providing accessible, high quality coaching for all levels.",
    icon: MapPin,
    accent: "teal",
  },
  {
    title: "200+ Happy Golfers",
    body: "Rated 5/5 on Google by over 200 golfers of all levels, from beginners to advanced players.",
    icon: Star,
    accent: "coral",
  },
  {
    title: "Data Led Training",
    body: "Structured programmes designed to measurably lower handicaps using tech enabled training environments.",
    icon: BarChart,
    accent: "purple",
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

function FeatureCard({ feature }: { feature: Feature }) {
  const reduceMotion = useReducedMotion();
  const Icon = feature.icon;

  return (
    <motion.article
      variants={child}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex h-full flex-col rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-background)] p-6 shadow-sm transition-shadow duration-[var(--duration-micro)] hover:shadow-lg"
    >
      <span
        className={`inline-flex size-12 items-center justify-center rounded-2xl ${TILE[feature.accent]} transition-transform duration-[var(--duration-micro)] group-hover:scale-110 group-hover:-rotate-6`}
      >
        <Icon className="size-6" />
      </span>
      <h3 className="mt-5 text-base font-semibold text-[var(--color-text-primary)]">
        {feature.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        {feature.body}
      </p>
    </motion.article>
  );
}

export function GolfAboutAcademy() {
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
          <Eyebrow color="teal">About the Academy</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Tech driven, high impact golf coaching built for long term improvement
          </h2>
        </motion.div>

        <motion.div
          variants={parent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
