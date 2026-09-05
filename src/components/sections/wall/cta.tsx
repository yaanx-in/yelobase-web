"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function WallCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[var(--color-background)] pb-20">
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          className="relative rounded-[24px] bg-[#d9d9d9] px-7 py-12 sm:px-14 lg:py-14"
        >
          {/* Corner decor — cylinder (top-left) + coin (bottom-right), straddling
              the card edges, per Figma. */}
          <Image
            src="/decor/cta-cylinder.svg"
            alt=""
            aria-hidden
            width={73}
            height={58}
            unoptimized
            className="pointer-events-none absolute -top-6 left-6 h-auto w-[58px] sm:left-8 sm:w-[73px]"
          />
          <Image
            src="/decor/cta-coin.svg"
            alt=""
            aria-hidden
            width={57}
            height={64}
            unoptimized
            className="pointer-events-none absolute -bottom-6 right-8 h-auto w-[46px] sm:right-12 sm:w-[57px]"
          />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <Eyebrow color="teal" className="tracking-[0.3em]">
                Start Your Project Today
              </Eyebrow>
              <h2 className="mt-4 font-mono text-[clamp(1.8rem,4vw,2.6rem)] font-semibold leading-[1.1] tracking-tight text-[var(--color-text-primary)]">
                Ready to join our success stories?
              </h2>
              <p className="mt-4 text-[var(--color-text-secondary)]">
                Let&rsquo;s discuss how we can help transform your business operations.
              </p>
            </div>
            <div className="shrink-0">
              <ButtonLink href="/contact" variant="primary" size="lg">
                Get started
                <ArrowRight className="size-4" />
              </ButtonLink>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
