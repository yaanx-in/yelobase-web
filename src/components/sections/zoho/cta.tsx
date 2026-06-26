"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function ZohoCta() {
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
          {/* animated glow */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-24 size-[26rem] rounded-full bg-brand-purple/25 blur-3xl"
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
            <Eyebrow color="teal">Let&rsquo;s Talk</Eyebrow>
            <h2 className="mt-4 font-mono text-[1.9rem] font-bold leading-[1.1] tracking-tight text-white sm:text-[2.5rem]">
              Ready to Optimize Your Zoho Investment?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Get a free consultation and discover how we can transform your business
              operations with Zoho automation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <ButtonLink href="#footer" variant="primary" size="lg">
                Schedule Free Consultation
                <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink
                href="#footer"
                size="lg"
                className="border border-white/25 bg-white/5 text-white hover:bg-white/10"
              >
                <Sparkles className="size-4" />
                Explore AI Automations
              </ButtonLink>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
