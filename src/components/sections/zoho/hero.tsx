"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Stagger } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icon";
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
    </div>
  );
}

export function ZohoHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[var(--color-background-warm)] pb-16 pt-12 sm:pt-16">
      <Orbs />

      <Container className="relative">
        <Stagger onMount className="mx-auto max-w-4xl text-center">
          <Stagger.Item>
            <Eyebrow color="teal" className="tracking-[0.3em]">
              Zoho Services
            </Eyebrow>
          </Stagger.Item>

          <Stagger.Item>
            <h1 className="mt-4 font-mono text-[clamp(1.9rem,5.2vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-[var(--color-text-primary)]">
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
              <ButtonLink href="/contact" variant="primary" size="lg">
                Get Your Zoho Assessment
                <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink href="#applications" variant="outline" size="lg">
                Try Zoho Free for 30 Days
              </ButtonLink>
            </div>
          </Stagger.Item>

          {/* Trust strip: partner badge + reassurance */}
          <Stagger.Item>
            <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center justify-center gap-3 sm:flex-row">
              <span className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1.5 shadow-sm">
                <Image
                  src="/integrations/zoho.svg"
                  alt="Zoho"
                  width={20}
                  height={20}
                  className="size-5"
                />
                <span className="text-xs font-semibold text-[var(--color-text-primary)]">
                  Authorized Partner
                </span>
              </span>
              <p className="text-xs leading-relaxed text-[var(--color-text-muted)] sm:text-left">
                No credit card required. If it&rsquo;s not the right fit, you pay nothing.
                Sign up includes free consultation and setup assistance from YeloBase.
              </p>
            </div>
          </Stagger.Item>
        </Stagger>
      </Container>
    </section>
  );
}
