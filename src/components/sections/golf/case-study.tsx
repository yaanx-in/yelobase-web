"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { CountUp } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/layout/container";
import { Star, Quote, MapPin } from "@/components/ui/icon";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

type Stat = {
  // numeric stats count up; the live one renders a pulsing dot instead.
  value?: number;
  suffix?: string;
  prefix?: string;
  headline: string;
  body: string;
  live?: boolean;
};

const STATS: Stat[] = [
  { value: 80, suffix: "%", headline: "Less Manual Work", body: "Cut administrative overhead dramatically" },
  { value: 3, suffix: "x", headline: "Faster Billing", body: "Automated invoicing from lesson completion" },
  { value: 100, suffix: "%", headline: "Lead Capture", body: "Every enquiry tracked, followed up, converted" },
  { live: true, headline: "Live Revenue Reports", body: "Dashboard updated in real time" },
];

const gridParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_OUT } },
};

function StatCard({ stat }: { stat: Stat }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={cardVariant}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group flex h-full flex-col rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm transition-colors duration-[var(--duration-micro)] hover:bg-white/[0.08]"
    >
      <p className="font-mono text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {stat.live ? (
          <span className="inline-flex items-center gap-2.5">
            <span className="relative inline-flex size-3.5">
              {!reduceMotion && (
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-teal/70" />
              )}
              <span className="relative inline-flex size-3.5 rounded-full bg-brand-teal" />
            </span>
            <span className="text-xl font-semibold sm:text-2xl">Live</span>
          </span>
        ) : (
          <CountUp to={stat.value ?? 0} prefix={stat.prefix} suffix={stat.suffix} />
        )}
      </p>
      <h3 className="mt-3 text-base font-semibold text-white">{stat.headline}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-white/65">{stat.body}</p>
    </motion.article>
  );
}

export function GolfCaseStudy() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[var(--color-background)] py-[var(--section-padding-y)]">
      <Container>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="relative overflow-hidden rounded-[28px] bg-[var(--color-surface-dark)] px-6 py-12 shadow-xl sm:px-12 sm:py-16"
        >
          {/* ambient glow */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-28 size-[26rem] rounded-full bg-brand-teal/20 blur-3xl"
            animate={reduceMotion ? undefined : { x: [0, 40, 0], y: [0, 20, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -right-20 size-[24rem] rounded-full bg-brand-coral/20 blur-3xl"
            animate={reduceMotion ? undefined : { x: [0, -36, 0], y: [0, -18, 0] }}
            transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-14">
              {/* Left: brand + story */}
              <div>
                <Eyebrow color="teal">Case Study</Eyebrow>

                <p className="mt-4 font-mono text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Swingfit Academies
                </p>

                <p className="mt-2 inline-flex items-center gap-2 text-sm text-white/65">
                  <MapPin className="size-4 shrink-0 text-brand-teal" />
                  Multiple Academies · Dubai, UAE
                </p>

                <div className="mt-3 flex items-center gap-2 text-sm text-white/80">
                  <span className="flex items-center gap-0.5" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current text-brand-coral" />
                    ))}
                  </span>
                  Rated 5/5 by 200+ Golfers on Google
                </div>

                {/* pull-quote */}
                <figure className="mt-8 rounded-[20px] border border-white/10 bg-white/[0.04] p-6">
                  <Quote className="size-7 text-brand-coral" aria-hidden />
                  <blockquote className="mt-3 text-lg font-medium leading-relaxed text-white sm:text-xl">
                    &ldquo;We were drowning in admin. YeloBase gave us our time back
                    and a system that actually works.&rdquo;
                  </blockquote>
                </figure>

                <p className="mt-6 leading-relaxed text-white/70">
                  Swingfit Academies is a tech driven, high impact golf coaching
                  business with multiple locations in Dubai. They were managing
                  bookings over WhatsApp, billing manually in spreadsheets, and had no
                  visibility into which programs were profitable. After full Zoho and
                  Golf Manager implementation by YeloBase, they cut manual work by 80%
                  and went live in under 6 weeks.
                </p>
              </div>

              {/* Right: stat highlights */}
              <motion.div
                variants={gridParent}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                className="grid grid-cols-1 gap-4 self-center sm:grid-cols-2"
              >
                {STATS.map((stat) => (
                  <StatCard key={stat.headline} stat={stat} />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
