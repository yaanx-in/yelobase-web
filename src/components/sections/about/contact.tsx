"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { MessageForm } from "@/components/sections/contact/form";
import { ButtonLink } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Calendar } from "@/components/ui/icon";
import type { ComponentType, SVGProps } from "react";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

type Info = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href?: string;
};

const INFO: Info[] = [
  { icon: Mail, label: "Email", value: "hello@yelobase.com", href: "mailto:hello@yelobase.com" },
  { icon: Phone, label: "Phone", value: "+91 9551714690", href: "tel:+919551714690" },
  { icon: MapPin, label: "We serve", value: "USA · UK · UAE · India" },
  { icon: Clock, label: "Response time", value: "Within 24 hours" },
];

const STEPS: { title: string; body: string }[] = [
  { title: "We review your inquiry", body: "Within 24 hours. No auto-replies, a real person reads it." },
  { title: "We send a scoped proposal", body: "Tailored to your stack, team size, and goals." },
  { title: "We get to work", body: "Kick off within days, not weeks." },
];

function InfoCard({ info }: { info: Info }) {
  const Icon = info.icon;
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-background)] px-5 py-4 shadow-sm transition-shadow duration-[var(--duration-micro)] hover:shadow-md">
      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-black/[0.05]">
        <Icon className="size-5 text-[var(--color-text-primary)]" />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
          {info.label}
        </p>
        <p className="mt-0.5 break-words text-sm font-semibold text-[var(--color-text-primary)]">
          {info.value}
        </p>
      </div>
    </div>
  );

  return info.href ? (
    <a
      href={info.href}
      className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2"
    >
      {inner}
    </a>
  ) : (
    inner
  );
}

export function AboutContact() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="scroll-mt-24 bg-[var(--color-background-warm)] py-[var(--section-padding-y)]">
      <Container>
        {/* Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          className="mx-auto max-w-5xl text-center"
        >
          <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-[2.7rem] lg:leading-[1.08]">
            Let&rsquo;s build something worth talking about.
          </h2>
          <p className="mx-auto mt-5 max-w-[52rem] text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
            Tell us what you&rsquo;re working on. We&rsquo;ll tell you exactly how we&rsquo;d
            help, and what it would cost.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Left — info + prefer a call + what happens next */}
          <div className="space-y-4 lg:col-span-2">
            {INFO.map((info) => (
              <InfoCard key={info.label} info={info} />
            ))}

            {/* Prefer a call */}
            <div className="rounded-[24px] bg-[var(--color-surface-dark)] p-7 text-white">
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-brand-purple/20">
                <Calendar className="size-5 text-brand-purple" />
              </span>
              <h3 className="mt-4 text-xl font-bold tracking-tight">Prefer a call?</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Book a free 30 minute session directly in our calendar. No prep needed.
              </p>
              <ButtonLink
                href="mailto:hello@yelobase.com"
                variant="primary"
                size="lg"
                className="mt-5 w-full"
              >
                <Calendar className="size-4" />
                Book a Free Call
              </ButtonLink>
            </div>

            {/* What happens next */}
            <div className="pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-teal">
                What happens next
              </p>
              <ol className="mt-5 space-y-5">
                {STEPS.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-tint-lavender text-sm font-semibold text-brand-purple-strong">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-[var(--color-text-primary)]">{step.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right — message form card */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 0.45, delay: 0.1, ease: EASE_OUT }}
            className="rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-background)] px-6 py-7 shadow-sm sm:px-8 sm:py-8 lg:col-span-3"
          >
            <div className="mb-6 flex items-center gap-3">
              <Image
                src="/graphics/about/message.svg"
                alt=""
                width={44}
                height={44}
                className="size-11"
              />
              <div>
                <h3 className="text-lg font-bold tracking-tight text-[var(--color-text-primary)]">
                  Send us a message
                </h3>
                <p className="text-sm text-[var(--color-text-muted)]">
                  We&rsquo;ll get back to you within 24 hours.
                </p>
              </div>
            </div>
            <MessageForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
