"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Stagger } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/layout/container";

/** Slowly drifting blurred brand orbs behind the hero. */
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
        className="absolute -left-24 top-[-12%] size-[34rem] rounded-full bg-brand-purple/15 blur-3xl"
        {...drift([0, 40, 0], [0, 30, 0])}
      />
      <motion.div
        className="absolute -right-32 top-[6%] size-[30rem] rounded-full bg-brand-coral/15 blur-3xl"
        {...drift([0, -50, 0], [0, 24, 0])}
      />
    </div>
  );
}

export function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-background-warm)] pb-12 pt-12 sm:pt-16">
      <Orbs />

      <Container className="relative">
        <Stagger onMount className="mx-auto max-w-3xl text-center">
          <Stagger.Item>
            <Eyebrow color="teal" className="tracking-[0.3em]">
              Blog
            </Eyebrow>
          </Stagger.Item>

          <Stagger.Item>
            <h1 className="mt-4 font-mono text-[clamp(2.2rem,6vw,3.9rem)] font-bold leading-[1.1] tracking-tight text-[var(--color-text-primary)]">
              Yelobase Blog
            </h1>
          </Stagger.Item>

          <Stagger.Item>
            <p className="mx-auto mt-5 max-w-xl text-balance text-base text-[var(--color-text-secondary)] sm:text-lg">
              Insights, trends, and best practices.
            </p>
          </Stagger.Item>
        </Stagger>
      </Container>
    </section>
  );
}
