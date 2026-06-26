"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Stagger } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { Star, ShieldCheck } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

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
        className="absolute -left-24 top-[-12%] size-[34rem] rounded-full bg-brand-coral/15 blur-3xl"
        {...drift([0, 40, 0], [0, 30, 0])}
      />
      <motion.div
        className="absolute -right-32 top-[6%] size-[30rem] rounded-full bg-brand-purple/15 blur-3xl"
        {...drift([0, -50, 0], [0, 24, 0])}
      />
      <motion.div
        className="absolute bottom-[-22%] left-1/3 size-[28rem] rounded-full bg-brand-teal/12 blur-3xl"
        {...drift([0, 30, 0], [0, -36, 0])}
      />
    </div>
  );
}

export function WallHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-background-warm)] pb-16 pt-12 sm:pt-16">
      <Orbs />

      <Container className="relative">
        <Stagger onMount className="mx-auto max-w-4xl text-center">
          <Stagger.Item>
            <span className="inline-flex">
              <Badge tint="pink">
                <ShieldCheck className="size-3.5" />
                Wall of Love
              </Badge>
            </span>
          </Stagger.Item>

          <Stagger.Item>
            <h1 className="mt-6 font-mono text-[clamp(1.9rem,5.2vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-[var(--color-text-primary)]">
              Businesses that trusted us.
              <br className="hidden sm:block" /> Results that{" "}
              <span className="relative inline-block whitespace-nowrap text-brand-coral">
                speak for themselves.
                <motion.span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-pill bg-brand-coral/70"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: EASE_OUT }}
                  style={{ originX: 0 }}
                />
              </span>
            </h1>
          </Stagger.Item>

          <Stagger.Item>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-[var(--color-text-secondary)] sm:text-lg">
              Every review is real. Every project delivered. Every client gets our
              best.
            </p>
          </Stagger.Item>

          <Stagger.Item>
            <div className="mt-8 inline-flex items-center gap-3 rounded-pill border border-[var(--color-border-subtle)] bg-[var(--color-background)] px-5 py-2.5 shadow-sm">
              <span className="flex items-center gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-brand-coral text-brand-coral" />
                ))}
              </span>
              <span className="font-mono text-sm font-bold text-[var(--color-text-primary)]">
                5.0
              </span>
              <span className="text-sm text-[var(--color-text-secondary)]">
                All reviews verified on Upwork
              </span>
            </div>
          </Stagger.Item>
        </Stagger>
      </Container>
    </section>
  );
}
