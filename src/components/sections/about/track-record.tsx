"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { CountUp } from "@/components/ui/reveal";
import { Container } from "@/components/layout/container";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

type Stat = {
  value: number;
  suffix: string;
  label: string;
  sub: string;
};

const STATS: Stat[] = [
  { value: 10, suffix: "+", label: "Years of Experience", sub: "Deep domain expertise" },
  { value: 100, suffix: "+", label: "Projects Completed", sub: "Across diverse industries" },
  { value: 50, suffix: "+", label: "Happy Clients", sub: "Long-term partnerships" },
  { value: 30, suffix: "+", label: "AI Agents Built", sub: "Custom automation bots" },
];

const gridParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
};

function StatCard({ stat }: { stat: Stat }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={cardVariant}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative flex flex-col items-center rounded-[24px] border border-white/10 bg-white/5 p-8 text-center shadow-sm backdrop-blur-sm transition-shadow duration-[var(--duration-micro)] hover:shadow-xl hover:bg-white/10"
    >
      {/* subtle top sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px rounded-t-[24px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />

      <p className="font-mono text-[clamp(2.4rem,6vw,3.8rem)] font-bold leading-none tracking-tight text-white">
        <CountUp to={stat.value} suffix={stat.suffix} duration={1.3} />
      </p>

      <p className="mt-3 text-lg font-semibold text-white">
        {stat.label}
      </p>
      <p className="mt-1 text-sm text-white/60">
        {stat.sub}
      </p>
    </motion.div>
  );
}

export function AboutTrackRecord() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[var(--color-surface-dark)] py-[var(--section-padding-y)]">
      {/* ambient orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-28 top-[-20%] size-[30rem] rounded-full bg-brand-purple/20 blur-3xl"
          animate={reduceMotion ? undefined : { x: [0, 36, 0], y: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-24 bottom-[-20%] size-[28rem] rounded-full bg-brand-coral/20 blur-3xl"
          animate={reduceMotion ? undefined : { x: [0, -30, 0], y: [0, -18, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 size-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-teal/10 blur-3xl"
          animate={reduceMotion ? undefined : { scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Track Record
          </h2>
          <p className="mt-4 leading-relaxed text-white/70">
            Numbers that reflect our commitment to excellence and client success.
          </p>
        </motion.div>

        <motion.div
          variants={gridParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
