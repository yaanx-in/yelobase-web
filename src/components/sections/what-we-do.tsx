import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FlipCard } from "@/components/ui/flip-card";
import { Container } from "@/components/layout/container";
import { ArrowRight } from "@/components/ui/icon";

type Service = {
  title: string;
  tag: string;
  icon: string;
  body: string;
  back: string; // back-face tint class
};

// Only the Zoho card's body was fully legible in Figma; the other bodies are
// extrapolated to match its tone (flagged to the user — confirm exact copy).
const SERVICES: Service[] = [
  {
    title: "Zoho Implementation",
    tag: "Foundation",
    icon: "/icons/zoho-implementation.svg",
    body: "Full deployment of CRM, Books, Inventory, People, Creator, Analytics, and more. Configured for your real processes, not a default template.",
    back: "bg-tint-lavender",
  },
  {
    title: "End-to-End Automation",
    tag: "Efficiency",
    icon: "/icons/end-to-end.svg",
    body: "We connect your tools and automate the busywork — notifications, approvals, follow-ups, and reports that run themselves.",
    back: "bg-tint-mint",
  },
  {
    title: "Managed Services Retainer",
    tag: "Partnership",
    icon: "/icons/managed-services.svg",
    body: "We stay on as your technology arm — monitoring, improving, and scaling your systems month after month.",
    back: "bg-tint-cream",
  },
];

export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="bg-[var(--color-background-warm)] py-[var(--section-padding-y)]"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
          {/* Intro */}
          <Reveal>
            <Eyebrow color="teal">What We Do</Eyebrow>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              We build and manage your business operating system.
            </h2>
            <p className="mt-5 text-[var(--color-text-secondary)]">
              Most Zoho partners implement and disappear. We don&rsquo;t. We
              become your technology arm — designing your systems, automating
              your operations, and staying on as the team that keeps everything
              running.
            </p>
          </Reveal>

          {/* Cards */}
          <Reveal delay={0.1}>
            <div className="grid gap-5 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <FlipCard
                  key={s.title}
                  backClassName={s.back}
                  front={
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={s.icon} alt="" className="size-12" />
                      <div className="mt-auto">
                        <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                          {s.title}
                        </h3>
                        <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                          {s.tag}
                        </p>
                      </div>
                    </>
                  }
                  back={
                    <>
                      <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                        {s.body}
                      </p>
                      <Link
                        href="#stories"
                        className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 rounded-sm"
                      >
                        Learn More
                        <ArrowRight className="size-4" />
                      </Link>
                    </>
                  }
                />
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
