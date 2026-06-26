"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Stagger, Float } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Calendar } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

type ContactChip = {
  label: string;
  tint: "lavender" | "cream" | "pink" | "mint";
  pos: string;
  delay: number;
  dur: number;
};

const CHIPS: ContactChip[] = [
  { label: "24hr Response", tint: "mint", pos: "left-[2%] top-[8%]", delay: 0.2, dur: 6 },
  { label: "Free Consultation", tint: "lavender", pos: "right-[3%] top-[14%]", delay: 0.35, dur: 6.5 },
  { label: "No Commitment", tint: "pink", pos: "left-[7%] bottom-[16%]", delay: 0.5, dur: 5.5 },
  { label: "Real Humans", tint: "cream", pos: "right-[6%] bottom-[12%]", delay: 0.65, dur: 7 },
];

type ContactInfo = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href?: string;
  tileColor: string;
  iconColor: string;
};

const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email us",
    value: "hello@yelobase.com",
    href: "mailto:hello@yelobase.com",
    tileColor: "bg-tint-lavender",
    iconColor: "text-brand-purple-strong",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+91 9551714690",
    href: "tel:+919551714690",
    tileColor: "bg-tint-pink",
    iconColor: "text-brand-coral-strong",
  },
  {
    icon: MapPin,
    label: "Service Areas",
    value: "USA · UK · UAE · India",
    tileColor: "bg-tint-mint",
    iconColor: "text-brand-teal",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 24 hours",
    tileColor: "bg-tint-cream",
    iconColor: "text-[#8a6a12]",
  },
];

const cardParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

function Orbs() {
  const reduceMotion = useReducedMotion();

  const drift = (x: number[], y: number[]) =>
    reduceMotion
      ? {}
      : {
          animate: { x, y },
          transition: {
            duration: 18,
            repeat: Infinity,
            repeatType: "mirror" as const,
            ease: "easeInOut" as const,
          },
        };

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-28 top-[-8%] size-[32rem] rounded-full bg-brand-purple/15 blur-3xl"
        {...drift([0, 44, 0], [0, 28, 0])}
      />
      <motion.div
        className="absolute -right-36 top-[10%] size-[28rem] rounded-full bg-brand-coral/15 blur-3xl"
        {...drift([0, -48, 0], [0, 22, 0])}
      />
      <motion.div
        className="absolute bottom-[-18%] left-1/3 size-[26rem] rounded-full bg-brand-teal/12 blur-3xl"
        {...drift([0, 28, 0], [0, -34, 0])}
      />
    </div>
  );
}

function ContactCard({ info }: { info: ContactInfo }) {
  const reduceMotion = useReducedMotion();
  const Icon = info.icon;

  const inner = (
    <motion.div
      variants={cardVariant}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group flex items-center gap-4 rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-background)] px-5 py-4 shadow-sm transition-shadow duration-[var(--duration-micro)] hover:shadow-lg"
    >
      <span
        className={`inline-flex size-11 shrink-0 items-center justify-center rounded-2xl ${info.tileColor} transition-transform duration-[var(--duration-micro)] group-hover:scale-110`}
      >
        <Icon className={`size-5 ${info.iconColor}`} />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
          {info.label}
        </p>
        <p className="mt-0.5 break-words text-sm font-semibold text-[var(--color-text-primary)]">
          {info.value}
        </p>
      </div>
    </motion.div>
  );

  if (info.href) {
    return (
      <a
        href={info.href}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 rounded-[24px]"
      >
        {inner}
      </a>
    );
  }

  return inner;
}

export function ContactHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[var(--color-background-warm)] pb-16 pt-12 sm:pt-16">
      <Orbs />

      {/* floating chips — desktop only */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <Container className="relative h-full">
          {CHIPS.map((c) => (
            <Float key={c.label} delay={c.delay} duration={c.dur} className={`absolute ${c.pos}`}>
              <Badge tint={c.tint}>{c.label}</Badge>
            </Float>
          ))}
        </Container>
      </div>

      <Container className="relative">
        <Stagger onMount className="mx-auto max-w-3xl text-center">
          <Stagger.Item>
            <h1 className="font-mono text-[clamp(1.9rem,5.2vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-[var(--color-text-primary)]">
              Let&rsquo;s build something{" "}
              <span className="relative inline-block whitespace-nowrap text-brand-coral">
                worth talking about.
                <motion.span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-pill bg-brand-coral/60"
                  initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.65, ease: EASE_OUT }}
                  style={{ originX: 0 }}
                />
              </span>
            </h1>
          </Stagger.Item>

          <Stagger.Item>
            <p className="mx-auto mt-6 max-w-xl text-balance text-base text-[var(--color-text-secondary)] sm:text-lg leading-relaxed">
              Tell us what you&rsquo;re working on. We&rsquo;ll tell you exactly how we&rsquo;d
              help, and what it would cost.
            </p>
          </Stagger.Item>
        </Stagger>

        {/* Contact info cards */}
        <motion.div
          variants={cardParent}
          initial="hidden"
          animate="show"
          className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {CONTACT_INFO.map((info) => (
            <ContactCard key={info.label} info={info} />
          ))}
        </motion.div>

        {/* Prefer a call block */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.7, ease: EASE_OUT }}
          className="mx-auto mt-10 max-w-lg rounded-[24px] border border-[var(--color-border-subtle)] bg-[var(--color-background)] px-7 py-7 text-center shadow-sm"
        >
          <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-tint-lavender">
            <Calendar className="size-5 text-brand-purple-strong" />
          </span>
          <h2 className="mt-4 text-xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Prefer a call?
          </h2>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)] leading-relaxed">
            Book a free 30 minute session directly in our calendar. No prep needed.
          </p>
          <ButtonLink
            href="mailto:hello@yelobase.com"
            variant="primary"
            size="lg"
            className="mt-5"
          >
            <Calendar className="size-4" />
            Book a Free Call
          </ButtonLink>
        </motion.div>

        {/* mobile chips */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:hidden">
          {CHIPS.map((c) => (
            <Badge key={c.label} tint={c.tint}>
              {c.label}
            </Badge>
          ))}
        </div>
      </Container>
    </section>
  );
}
