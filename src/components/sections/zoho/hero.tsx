"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Stagger, Float } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShieldCheck } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

// Drifting Zoho app chips for ambient life around the headline.
const CHIPS = [
  { label: "Zoho CRM", tint: "lavender" as const, pos: "left-[3%] top-[6%]", delay: 0.2, dur: 6 },
  { label: "Analytics", tint: "mint" as const, pos: "right-[4%] top-[12%]", delay: 0.35, dur: 6.5 },
  { label: "Zoho Flow", tint: "pink" as const, pos: "left-[8%] bottom-[14%]", delay: 0.5, dur: 5.5 },
  { label: "Zoho Books", tint: "cream" as const, pos: "right-[7%] bottom-[10%]", delay: 0.65, dur: 7 },
];

/** Slowly drifting blurred brand orbs behind the hero. */
function Orbs() {
  const reduceMotion = useReducedMotion();
  const drift = (x: number[], y: number[]) =>
    reduceMotion
      ? {}
      : {
          animate: { x, y },
          transition: { duration: 18, repeat: Infinity, repeatType: "mirror" as const, ease: "easeInOut" as const },
        };

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-24 top-[-10%] size-[34rem] rounded-full bg-brand-purple/15 blur-3xl"
        {...drift([0, 40, 0], [0, 30, 0])}
      />
      <motion.div
        className="absolute -right-32 top-[8%] size-[30rem] rounded-full bg-brand-coral/15 blur-3xl"
        {...drift([0, -50, 0], [0, 24, 0])}
      />
      <motion.div
        className="absolute bottom-[-20%] left-1/3 size-[28rem] rounded-full bg-brand-teal/12 blur-3xl"
        {...drift([0, 30, 0], [0, -36, 0])}
      />
    </div>
  );
}

export function ZohoHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[var(--color-background-warm)] pb-16 pt-12 sm:pt-16">
      <Orbs />

      {/* floating chips (desktop) */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <Container className="relative h-full">
          {CHIPS.map((c) => (
            <Float key={c.label} delay={c.delay} duration={c.dur} className={`absolute ${c.pos}`}>
              <Badge tint={c.tint}>{c.label}</Badge>
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
                Certified Zoho Authorized Partner · 10+ Years
              </Badge>
            </span>
          </Stagger.Item>

          <Stagger.Item>
            <h1 className="mt-6 font-mono text-[clamp(1.9rem,5.2vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-[var(--color-text-primary)]">
              Zoho Is Powerful.
              <br className="hidden sm:block" /> Most Businesses Use{" "}
              <span className="relative inline-block whitespace-nowrap text-brand-coral">
                20% of It.
                <motion.span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-pill bg-brand-coral/70"
                  initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: EASE_OUT }}
                  style={{ originX: 0 }}
                />
              </span>
            </h1>
          </Stagger.Item>

          <Stagger.Item>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-[var(--color-text-secondary)] sm:text-lg">
              As a Certified Zoho Authorized Partner with 10+ years of experience, we
              unlock the other 80% through implementation, automation, and deep
              integration built around how you work.
            </p>
          </Stagger.Item>

          <Stagger.Item>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <ButtonLink href="#footer" variant="primary" size="lg">
                Get Your Zoho Assessment
                <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink href="#zoho-services" variant="outline" size="lg">
                Try Zoho Free for 30 Days
              </ButtonLink>
            </div>
          </Stagger.Item>

          <Stagger.Item>
            <p className="mx-auto mt-6 max-w-xl text-xs leading-relaxed text-[var(--color-text-muted)]">
              No credit card required. If it&rsquo;s not the right fit, you pay nothing.
              <br className="hidden sm:block" /> Sign up includes free consultation and
              setup assistance from YeloBase.
            </p>
          </Stagger.Item>
        </Stagger>

        {/* chips on mobile/tablet, in flow */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:hidden">
          {CHIPS.map((c) => (
            <Badge key={c.label} tint={c.tint}>
              {c.label}
            </Badge>
          ))}
        </div>
      </Container>
    </section>
  );
}
