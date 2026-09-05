"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

// Stat bar values (Figma node 1348:1046).
const STATS = [
  { value: "100+", label: "Projects Completed" },
  { value: "0", label: "Generic Templates" },
  { value: "1", label: "system built for you" },
];

/**
 * Golf Academy hero (Figma 1347:983 / 1348:985 / 1347:973 / 1348:1046).
 * Golf-course photo with a purple left→right gradient overlay, white headline
 * + subtext + two buttons, and a pink stats bar overlapping the fold.
 */
export function GolfHero() {
  return (
    <section className="bg-[var(--color-background-warm)]">
      <div className="relative isolate overflow-hidden">
        {/* Background photo */}
        <Image
          src="/graphics/golf/hero-golf-course.svg"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="-z-10 object-cover object-bottom"
        />
        {/* Purple gradient overlay: strong (left) → lighter (right), per Figma
            1348:985 (Rectangle 34625151, linear ~60%). */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(47,29,128,0.78) 0%, rgba(47,29,128,0.45) 32%, rgba(47,29,128,0) 62%)",
          }}
        />

        <Container className="pt-20 pb-40 sm:pt-24 sm:pb-48 lg:pt-28 lg:pb-56">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="max-w-2xl"
          >
            <h1 className="text-balance text-[clamp(1.9rem,4.5vw,2.625rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white">
              Your academy runs on passion.
              <br className="hidden sm:block" /> It should run on systems too.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-6 text-white">
              Yelobase builds custom automation for golf academies — from lesson
              bookings and billing to student follow-ups and performance
              tracking. All connected. All automatic.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <ButtonLink
                href="#from-frustration-to-flow"
                variant="outline"
                size="lg"
                className="border-[#f9f5ff] bg-[#f9f5ff] !text-[#5333c7] hover:bg-[#f9f5ff]/90"
              >
                What&apos;s included?
              </ButtonLink>
              <ButtonLink href="#book-audit" variant="primary" size="lg">
                Book Free Audit
                <ArrowRight className="size-4" />
              </ButtonLink>
            </div>
          </motion.div>
        </Container>
      </div>

      {/* Stats bar, centered and overlapping the hero image bottom edge
          (Figma 1348:1046 — 718px wide, straddles the image edge). */}
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          className="relative z-10 mx-auto -mt-10 flex max-w-[718px] flex-col items-start justify-between gap-6 rounded-2xl bg-tint-pink px-6 py-6 shadow-[0_2px_4px_0_rgba(32,29,35,0.12)] sm:flex-row sm:items-center sm:px-9"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex items-center gap-2">
              <span className="text-[clamp(1.75rem,4vw,2.25rem)] font-semibold leading-none tracking-[-0.03em] text-[var(--color-text-primary)]">
                {stat.value}
              </span>
              <span className="text-sm text-[var(--color-text-secondary)]">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
