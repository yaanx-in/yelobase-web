"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { CountUp } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/layout/container";
import { Users, Trophy, Star, Globe } from "@/components/ui/icon";
import type { ComponentType, SVGProps } from "react";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

type Stat = {
  to: number;
  decimals?: number;
  suffix?: string;
  label: string;
  caption: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  tile: string;
  iconColor: string;
};

const STATS: Stat[] = [
  {
    to: 50,
    suffix: "+",
    label: "Happy Clients",
    caption: "Trust",
    icon: Users,
    tile: "bg-tint-pink",
    iconColor: "text-brand-coral-strong",
  },
  {
    to: 100,
    suffix: "+",
    label: "Projects Completed",
    caption: "Delivery",
    icon: Trophy,
    tile: "bg-tint-lavender",
    iconColor: "text-brand-purple-strong",
  },
  {
    to: 5.0,
    decimals: 1,
    label: "Average Rating",
    caption: "Quality",
    icon: Star,
    tile: "bg-tint-cream",
    iconColor: "text-[#8a6a12]",
  },
  {
    to: 15,
    suffix: "+",
    label: "Countries Served",
    caption: "Global",
    icon: Globe,
    tile: "bg-tint-mint",
    iconColor: "text-brand-teal",
  },
];

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const child: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
};

function StatCard({ stat }: { stat: Stat }) {
  const reduceMotion = useReducedMotion();
  const Icon = stat.icon;

  return (
    <motion.article
      variants={child}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group flex h-full flex-col rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-background)] p-7 shadow-sm transition-shadow duration-[var(--duration-micro)] hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <span
          className={`inline-flex size-12 items-center justify-center rounded-2xl ${stat.tile} transition-transform duration-[var(--duration-micro)] group-hover:scale-110`}
        >
          <Icon className={`size-6 ${stat.iconColor}`} />
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
          {stat.caption}
        </span>
      </div>

      <p className="mt-6 font-mono text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
        <CountUp to={stat.to} decimals={stat.decimals} suffix={stat.suffix} />
      </p>
      <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{stat.label}</p>
    </motion.article>
  );
}

export function WallStats() {
  return (
    <section className="bg-[var(--color-background)] py-[var(--section-padding-y)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          className="mx-auto max-w-2xl text-center"
        >
          <Eyebrow color="teal">By the Numbers</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Trusted by growing businesses worldwide
          </h2>
        </motion.div>

        <motion.div
          variants={parent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
