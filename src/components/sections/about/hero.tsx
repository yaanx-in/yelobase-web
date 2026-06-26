"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Stagger, Float } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const FLOAT_BADGES = [
  { label: "Zoho Authorized Partner", tint: "lavender" as const, pos: "left-[2%] top-[10%]", delay: 0.2, dur: 6 },
  { label: "10+ Years Experience", tint: "mint" as const, pos: "right-[3%] top-[8%]", delay: 0.35, dur: 6.5 },
  { label: "AI Automation", tint: "pink" as const, pos: "left-[6%] bottom-[16%]", delay: 0.5, dur: 5.5 },
  { label: "100+ Projects", tint: "cream" as const, pos: "right-[6%] bottom-[12%]", delay: 0.65, dur: 7 },
];

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
        className="absolute -left-20 top-[-12%] size-[32rem] rounded-full bg-brand-purple/15 blur-3xl"
        {...drift([0, 44, 0], [0, 28, 0])}
      />
      <motion.div
        className="absolute -right-28 top-[6%] size-[28rem] rounded-full bg-brand-coral/15 blur-3xl"
        {...drift([0, -46, 0], [0, 22, 0])}
      />
      <motion.div
        className="absolute bottom-[-18%] left-1/3 size-[26rem] rounded-full bg-brand-teal/12 blur-3xl"
        {...drift([0, 32, 0], [0, -34, 0])}
      />
    </div>
  );
}

export function AboutHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[var(--color-background-warm)] pb-16 pt-12 sm:pt-16">
      <Orbs />

      {/* floating badges (desktop only) */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <Container className="relative h-full">
          {FLOAT_BADGES.map((b) => (
            <Float key={b.label} delay={b.delay} duration={b.dur} className={`absolute ${b.pos}`}>
              <Badge tint={b.tint}>{b.label}</Badge>
            </Float>
          ))}
        </Container>
      </div>

      <Container className="relative">
        <Stagger onMount className="mx-auto max-w-4xl text-center">
          <Stagger.Item>
            <span className="inline-flex">
              <Badge tint="lavender">
                <ShieldCheck className="size-3.5" />
                Certified Zoho Authorized Partner
              </Badge>
            </span>
          </Stagger.Item>

          <Stagger.Item>
            <h1 className="mt-6 font-mono text-[clamp(1.9rem,5.2vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-[var(--color-text-primary)]">
              Your trusted Zoho Partner{" "}
              <span className="relative inline-block text-brand-coral">
                for complete
                <motion.span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-pill bg-brand-coral/70"
                  initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.75, ease: EASE_OUT }}
                  style={{ originX: 0 }}
                />
              </span>{" "}
              business transformation
            </h1>
          </Stagger.Item>

          <Stagger.Item>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-[var(--color-text-secondary)] sm:text-lg leading-relaxed">
              We&rsquo;re passionate about transforming businesses through intelligent
              automation. Our expertise in Zoho customization and AI agent development
              helps companies streamline operations and accelerate growth.
            </p>
          </Stagger.Item>
        </Stagger>

        {/* mobile badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:hidden">
          {FLOAT_BADGES.map((b) => (
            <Badge key={b.label} tint={b.tint}>
              {b.label}
            </Badge>
          ))}
        </div>
      </Container>
    </section>
  );
}
