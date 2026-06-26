"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { CountUp } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/layout/container";
import { Check, Trophy } from "@/components/ui/icon";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const CREDENTIALS = [
  "100+ Zoho implementations across CRM, Books, Analytics, Creator, and more",
  "10+ years of deep Zoho ecosystem experience",
  "Serving clients across India, US, UK, UAE, and Australia",
  "All reviews verified on Upwork",
];

type Stat = {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
};

const STATS: Stat[] = [
  { to: 100, suffix: "+", label: "Projects Delivered" },
  { to: 50, suffix: "+", label: "Happy Clients" },
  { to: 10, suffix: "+", label: "Yrs Experience" },
  { to: 4.9, decimals: 1, label: "Avg Rating (Upwork)" },
];

const listParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
};
const listItem: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: EASE_OUT } },
};

const statParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const statChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

function StatCard({ stat }: { stat: Stat }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={statChild}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="flex flex-col items-center rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-background)] p-6 text-center shadow-sm transition-shadow duration-[var(--duration-micro)] hover:shadow-lg"
    >
      <p className="font-mono text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
        <CountUp to={stat.to} suffix={stat.suffix} decimals={stat.decimals} />
      </p>
      <p className="mt-1.5 text-sm text-[var(--color-text-secondary)]">{stat.label}</p>
    </motion.div>
  );
}

export function GolfWhyYelobase() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[var(--color-background)] py-[var(--section-padding-y)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          {/* Left: pitch + credentials */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.45, ease: EASE_OUT }}
          >
            <Eyebrow color="teal">Why YeloBase</Eyebrow>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Official Zoho Partner. Specialists in operations for SMBs.
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              We don&rsquo;t just configure software. We own the architecture, connect
              every system, automate the gaps, and stay on as your partner. Golf
              academies are one of our core verticals.
            </p>

            <motion.ul
              variants={listParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              className="mt-7 space-y-3"
            >
              {CREDENTIALS.map((item) => (
                <motion.li
                  key={item}
                  variants={listItem}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-text-secondary)]"
                >
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-tint-mint">
                    <Check className="size-3.5 text-brand-teal" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <span className="mt-7 inline-flex items-center gap-2 rounded-pill bg-tint-cream px-4 py-2 text-sm font-semibold text-[#8a6a12]">
              <Trophy className="size-4" />
              Official Zoho Authorized Partner
            </span>
          </motion.div>

          {/* Right: stat cards */}
          <motion.div
            variants={statParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            className="grid grid-cols-2 gap-4 sm:gap-5"
          >
            {STATS.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
