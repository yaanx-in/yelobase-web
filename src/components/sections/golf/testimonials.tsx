"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import { Stars } from "@/components/ui/testimonial-card";
import { Container } from "@/components/layout/container";
import { ArrowRight } from "@/components/ui/icon";
import { TESTIMONIALS, STORY_STATS } from "@/lib/testimonials";
import { cn } from "@/lib/utils";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const child: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

function PlayButton() {
  return (
    <span
      aria-hidden
      className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm"
    >
      <svg viewBox="0 0 24 24" className="ml-0.5 size-4" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

/**
 * "Real feedbacks — Explore customer stories" (Figma 1416:1011).
 * Trust-stats row, a featured dark video testimonial + two lighter video
 * cards, and a "View All Success Stories" link.
 *
 * ponytail: the design's per-testimonial video/still thumbnails weren't
 * downloadable (Figma MCP rate-limited); we reuse the committed author avatars
 * as the card media. Swap in the real stills when available.
 */
export function GolfTestimonials() {
  const reduceMotion = useReducedMotion();
  const [featured, ...rest] = TESTIMONIALS;

  return (
    <section className="bg-[var(--color-background-warm)] py-[var(--section-padding-y)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          className="text-center"
        >
          <Eyebrow color="teal">Real Feedbacks</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Explore customer stories
          </h2>
        </motion.div>

        {/* Trust stats */}
        <motion.dl
          variants={parent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          className="mt-10 grid grid-cols-2 gap-6 rounded-2xl bg-tint-pink px-6 py-6 sm:grid-cols-4 sm:px-9"
        >
          {STORY_STATS.map((stat) => (
            <motion.div key={stat.caption} variants={child}>
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                {stat.tag}
              </dt>
              <dd className="mt-1.5 text-2xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
                {stat.value}
              </dd>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {stat.caption}
              </p>
            </motion.div>
          ))}
        </motion.dl>

        {/* Cards */}
        <motion.div
          variants={parent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          className="mt-6 grid gap-6 lg:grid-cols-3"
        >
          {/* Featured dark card */}
          <motion.article
            variants={child}
            className="flex flex-col rounded-2xl bg-[var(--color-surface-dark)] p-6 text-white lg:row-span-1"
          >
            <div className="relative mb-5 overflow-hidden rounded-xl">
              {featured.image && (
                <Image
                  src={featured.image}
                  alt={`${featured.name}, ${featured.company}`}
                  width={480}
                  height={260}
                  className="h-44 w-full object-cover"
                />
              )}
              <PlayButton />
            </div>
            <blockquote className="flex-1 text-sm leading-relaxed text-white/80">
              {featured.quote}
            </blockquote>
            <div className="mt-5">
              <Stars rating={featured.rating} />
              <div className="mt-3 flex items-center gap-3">
                {featured.image && (
                  <Image
                    src={featured.image}
                    alt=""
                    width={36}
                    height={36}
                    className="size-9 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="text-sm font-semibold text-white">
                    {featured.name}
                  </p>
                  <p className="text-xs text-white/60">{featured.company}</p>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Two lighter cards */}
          {rest.map((t) => (
            <motion.article
              key={t.name}
              variants={child}
              className="flex flex-col rounded-2xl border border-[var(--color-border-subtle)] bg-white p-6"
            >
              <div className="relative mb-5 overflow-hidden rounded-xl">
                {t.image && (
                  <Image
                    src={t.image}
                    alt={`${t.name}, ${t.company}`}
                    width={480}
                    height={260}
                    className="h-44 w-full object-cover"
                  />
                )}
                <PlayButton />
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {t.quote}
              </blockquote>
              <div className="mt-5">
                <Stars rating={t.rating} />
                <div className="mt-3 flex items-center gap-3">
                  {t.image && (
                    <Image
                      src={t.image}
                      alt=""
                      width={36}
                      height={36}
                      className="size-9 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                      {t.name}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)]">
                      {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <ButtonLink
            href="/wall-of-love"
            variant="outline"
            size="lg"
            className={cn(reduceMotion && "transition-none")}
          >
            View All Success Stories
            <ArrowRight className="size-4" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
