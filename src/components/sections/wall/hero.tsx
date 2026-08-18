"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Stagger, CountUp } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/layout/container";

type Stat = { to: number; decimals?: number; suffix?: string; label: string };

const STATS: Stat[] = [
  { to: 50, suffix: "+", label: "Happy Clients" },
  { to: 100, suffix: "+", label: "Projects Completed" },
  { to: 5.0, decimals: 1, label: "Average Rating" },
  { to: 15, suffix: "+", label: "Countries Served" },
];

/** Slowly drifting blurred brand orbs behind the header. */
function Orbs() {
  const reduceMotion = useReducedMotion();
  const drift = (x: number[], y: number[]) =>
    reduceMotion
      ? {}
      : {
          animate: { x, y },
          transition: {
            duration: 18,
            repeat: Infinity,
            repeatType: "mirror" as const,
            ease: "easeInOut" as const,
          },
        };

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-24 top-[-12%] size-[34rem] rounded-full bg-brand-coral/15 blur-3xl"
        {...drift([0, 40, 0], [0, 30, 0])}
      />
      <motion.div
        className="absolute -right-32 top-[6%] size-[30rem] rounded-full bg-brand-purple/15 blur-3xl"
        {...drift([0, -50, 0], [0, 24, 0])}
      />
    </div>
  );
}

export function WallHero() {
  return (
    <section className="relative overflow-x-clip bg-[var(--color-background-warm)] pb-14 pt-12 sm:pt-16">
      <Orbs />

      <Container className="relative">
        <Stagger onMount className="mx-auto max-w-4xl text-center">
          <Stagger.Item>
            <Eyebrow color="teal" className="tracking-[0.3em]">
              Wall of Love
            </Eyebrow>
          </Stagger.Item>

          <Stagger.Item>
            <h1 className="mt-4 font-mono text-[clamp(2.2rem,6vw,3.9rem)] font-bold leading-[1.1] tracking-tight text-[var(--color-text-primary)]">
              Customer Stories
            </h1>
          </Stagger.Item>

          <Stagger.Item>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base text-[var(--color-text-secondary)] sm:text-lg">
              Every review is real. Every project delivered. Every client gets our
              best.
            </p>
          </Stagger.Item>

          {/* Stat bar */}
          <Stagger.Item>
            <dl className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-7 rounded-2xl bg-tint-pink px-8 py-7 shadow-[0px_2px_4px_0px_rgba(32,29,35,0.12)] sm:flex sm:items-end sm:justify-between sm:gap-8 sm:px-10">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center gap-1 sm:flex-row sm:items-end sm:gap-2"
                >
                  <dd className="text-[clamp(1.9rem,4vw,2.25rem)] font-semibold leading-none tracking-tight text-[var(--color-text-primary)]">
                    <CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} />
                  </dd>
                  <dt className="text-sm text-[var(--color-text-secondary)]">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Stagger.Item>

          {/* Client logo strip */}
          <Stagger.Item>
            <Image
              src="/graphics/trusted-logos.webp"
              alt="Logos of companies we've delivered for"
              width={1082}
              height={64}
              className="mx-auto mt-10 h-auto w-full max-w-3xl opacity-70"
            />
          </Stagger.Item>
        </Stagger>
      </Container>
    </section>
  );
}
