"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Stagger, Float } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Flag, Star } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

// Drifting credibility chips for ambient life around the headline.
const CHIPS = [
  { label: "Online Bookings", tint: "lavender" as const, pos: "left-[3%] top-[8%]", delay: 0.2, dur: 6 },
  { label: "Automated Billing", tint: "mint" as const, pos: "right-[4%] top-[12%]", delay: 0.35, dur: 6.5 },
  { label: "Player CRM", tint: "pink" as const, pos: "left-[7%] bottom-[16%]", delay: 0.5, dur: 5.5 },
  { label: "Live Reports", tint: "cream" as const, pos: "right-[6%] bottom-[12%]", delay: 0.65, dur: 7 },
];

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
        className="absolute -left-24 top-[-10%] size-[34rem] rounded-full bg-brand-teal/15 blur-3xl"
        {...drift([0, 40, 0], [0, 30, 0])}
      />
      <motion.div
        className="absolute -right-32 top-[8%] size-[30rem] rounded-full bg-brand-coral/15 blur-3xl"
        {...drift([0, -50, 0], [0, 24, 0])}
      />
      <motion.div
        className="absolute bottom-[-20%] left-1/3 size-[28rem] rounded-full bg-brand-purple/12 blur-3xl"
        {...drift([0, 30, 0], [0, -36, 0])}
      />
    </div>
  );
}

export function GolfHero() {
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
              <Badge tint="mint">
                <Flag className="size-3.5" />
                Industry Solutions
              </Badge>
            </span>
          </Stagger.Item>

          <Stagger.Item>
            <h1 className="mt-6 font-mono text-[clamp(1.9rem,5.2vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-[var(--color-text-primary)]">
              Run Your Academy.
              <br className="hidden sm:block" /> Not Your{" "}
              <span className="relative inline-block whitespace-nowrap text-brand-coral">
                Spreadsheets.
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
              We automate bookings, billing, and operations for golf academies using
              Zoho and Golf Manager so your coaches spend their time on the course, not
              in admin.
            </p>
          </Stagger.Item>

          <Stagger.Item>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <ButtonLink href="/contact" variant="primary" size="lg">
                Book a Free Demo
                <ArrowRight className="size-4" />
              </ButtonLink>
            </div>
          </Stagger.Item>

          <Stagger.Item>
            <p className="mx-auto mt-6 flex max-w-xl items-center justify-center gap-2 text-xs leading-relaxed text-[var(--color-text-muted)]">
              <Star className="size-3.5 shrink-0 text-brand-coral" />
              No obligation. 30 minutes. See exactly what this looks like for your academy.
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
