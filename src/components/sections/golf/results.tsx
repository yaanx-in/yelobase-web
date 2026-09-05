"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/layout/container";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

// Stat rows (Figma 1416:633). Values are read directly from the design.
const ROWS = [
  { label: "Admin saved per week", value: "~8h" },
  { label: "Missed payment reminders", value: "0" },
  { label: "Booking visibility", value: "100" },
  { label: "Student drop-off alerts", value: "Earlier" },
];

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const child: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

/**
 * "Results — What a golf academy looks like after automation" (Figma 1416:633).
 * Left: four stat rows with a hairline divider. Right: a golfer photo card.
 */
export function GolfResults() {
  return (
    <section className="bg-[var(--color-background-warm)] py-[var(--section-padding-y)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          className="mx-auto max-w-2xl text-center"
        >
          <Eyebrow color="teal">Results</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            What a golf academy looks like after automation
          </h2>
        </motion.div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <motion.dl
            variants={parent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            className="flex flex-col"
          >
            {ROWS.map((row) => (
              <motion.div
                key={row.label}
                variants={child}
                className="flex items-center justify-between border-b border-[var(--color-border)] py-5 first:border-t"
              >
                <dt className="text-base text-[var(--color-text-secondary)]">
                  {row.label}
                </dt>
                <dd className="text-2xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
                  {row.value}
                </dd>
              </motion.div>
            ))}
          </motion.dl>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 0.45, ease: EASE_OUT }}
            className="overflow-hidden rounded-2xl"
          >
            <Image
              src="/graphics/golf/results-golfer.svg"
              alt="A golfer taking a swing on the course at dusk"
              width={553}
              height={374}
              unoptimized
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
