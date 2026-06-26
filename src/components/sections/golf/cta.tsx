"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function GolfCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[var(--color-background)] py-16">
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          className="relative overflow-hidden rounded-[24px] bg-[var(--color-surface-dark)] px-7 py-14 shadow-xl sm:px-14"
        >
          {/* animated glow */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-24 size-[26rem] rounded-full bg-brand-teal/25 blur-3xl"
            animate={reduceMotion ? undefined : { x: [0, 40, 0], y: [0, 20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -right-16 size-[24rem] rounded-full bg-brand-coral/25 blur-3xl"
            animate={reduceMotion ? undefined : { x: [0, -36, 0], y: [0, -18, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <Eyebrow color="teal">Ready to automate?</Eyebrow>
            <h2 className="mt-4 font-mono text-[1.9rem] font-bold leading-[1.1] tracking-tight text-white sm:text-[2.5rem]">
              Book a free 30 minute call. See the system before you commit.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              We&rsquo;ll walk you through exactly how this works for a golf academy
              your size. No pressure. No obligation.
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink href="/contact" variant="primary" size="lg">
                Book a Free Demo
                <ArrowRight className="size-4" />
              </ButtonLink>
            </div>
            <p className="mx-auto mt-6 inline-flex max-w-xl items-center justify-center gap-2 text-xs leading-relaxed text-white/55">
              <ShieldCheck className="size-3.5 shrink-0 text-brand-teal" />
              All reviews verified on Upwork · Official Zoho Partner · 50+ happy
              clients
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
