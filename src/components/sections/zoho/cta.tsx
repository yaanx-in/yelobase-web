"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function ZohoCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[var(--color-background-warm)] pb-24 pt-8">
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          className="relative rounded-[24px] bg-[#d9d9d9] px-7 py-12 sm:px-14 lg:py-14"
        >
          {/* 3D decor objects peeking out of the corners */}
          <Image
            src="/graphics/zoho/cta-chalk.webp"
            alt=""
            aria-hidden
            width={146}
            height={116}
            className="pointer-events-none absolute -top-6 left-8 w-16 -rotate-[8deg] sm:w-20"
          />
          <Image
            src="/graphics/zoho/cta-ring.webp"
            alt=""
            aria-hidden
            width={114}
            height={128}
            className="pointer-events-none absolute -bottom-6 right-10 w-12 sm:w-14"
          />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <Eyebrow color="teal" className="tracking-[0.3em]">
                Get Started
              </Eyebrow>
              <h2 className="mt-4 font-mono text-[clamp(1.5rem,3vw,2.15rem)] font-semibold leading-[1.12] tracking-tight text-[var(--color-text-primary)]">
                Ready to Optimize
                <br /> Your Zoho Investment?
              </h2>
              <p className="mt-4 text-[var(--color-text-secondary)]">
                Get a free consultation and discover how we can transform your business
                operations with Zoho automation.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <ButtonLink href="#capabilities" variant="outline" size="lg" className="bg-[var(--color-background)]">
                Explore AI Automations
              </ButtonLink>
              <ButtonLink href="/contact" variant="primary" size="lg">
                Schedule Free Consultation
                <ArrowRight className="size-4" />
              </ButtonLink>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
