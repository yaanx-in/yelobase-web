"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -10% 0px" },
  transition: { duration: 0.4, ease: EASE_OUT },
} as const;

export function AboutMission() {
  return (
    <section className="bg-[var(--color-background)] py-[var(--section-padding-y)]">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — mission copy */}
          <motion.div {...fadeUp}>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-5 leading-relaxed text-[var(--color-text-secondary)]">
              At YeloBase, we believe that every business deserves to operate at peak
              efficiency. Our mission is to eliminate repetitive tasks and unlock human
              potential through intelligent automation solutions.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              We combine deep technical expertise with a genuine understanding of
              business processes to deliver automation solutions that not only work
              flawlessly but also scale with your growth.
            </p>
            <ButtonLink href="/contact" variant="primary" size="lg" className="mt-8">
              Work with Us
              <ArrowRight className="size-4" />
            </ButtonLink>
          </motion.div>

          {/* Right — team photo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.45, delay: 0.1, ease: EASE_OUT }}
          >
            <div className="overflow-hidden rounded-[24px] border border-[var(--color-surface-dark)]">
              <Image
                src="/graphics/about/mission.webp"
                alt="The YeloBase team collaborating"
                width={1200}
                height={752}
                className="h-auto w-full"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
