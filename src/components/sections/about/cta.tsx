"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function AboutCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[var(--color-background-warm)] py-16">
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          className="relative overflow-hidden rounded-[24px] bg-[var(--color-surface-dark)] px-7 py-14 shadow-xl sm:px-14"
        >
          {/* animated glow orbs */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-24 size-[26rem] rounded-full bg-brand-purple/25 blur-3xl"
            animate={reduceMotion ? undefined : { x: [0, 44, 0], y: [0, 22, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -right-16 size-[24rem] rounded-full bg-brand-coral/25 blur-3xl"
            animate={reduceMotion ? undefined : { x: [0, -38, 0], y: [0, -20, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute bottom-8 left-1/2 size-[18rem] -translate-x-1/2 rounded-full bg-brand-teal/12 blur-3xl"
            animate={reduceMotion ? undefined : { scale: [1, 1.2, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="font-mono text-[1.9rem] font-bold leading-[1.1] tracking-tight text-white sm:text-[2.5rem]">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/70">
              Let&rsquo;s work together to build automation solutions that drive real results
              for your business.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <ButtonLink href="/contact" variant="primary" size="lg">
                Get in Touch
                <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink
                href="/wall-of-love"
                size="lg"
                className="border border-white/25 bg-white/5 text-white hover:bg-white/10"
              >
                See Our Work
              </ButtonLink>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
