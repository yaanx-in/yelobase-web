"use client";

import Image from "next/image";
import { Stagger } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

export function ZohoHero() {
  return (
    <section className="relative bg-[var(--color-background-warm)] pb-16 pt-12 sm:pt-16">
      <Container className="relative">
        <Stagger onMount className="mx-auto max-w-4xl text-center">
          <Stagger.Item>
            <Eyebrow color="teal" className="tracking-[0.3em]">
              Zoho Services
            </Eyebrow>
          </Stagger.Item>

          <Stagger.Item>
            <h1 className="mt-4 font-mono text-[clamp(1.9rem,5.2vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-[var(--color-text-primary)]">
              Zoho Is Powerful.
              <br className="hidden sm:block" /> Most Businesses Use 20% of It.
            </h1>
          </Stagger.Item>

          <Stagger.Item>
            <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-[var(--color-text-secondary)] sm:text-lg">
              As a Certified Zoho Authorized Partner with 10+ years of experience, we
              unlock the other 80% through implementation, automation, and deep
              integration built around how you work.
            </p>
          </Stagger.Item>

          <Stagger.Item>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
              <ButtonLink href="/contact" variant="link" size="lg">
                Get Your Zoho Assessment
                <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink href="#applications" variant="primary" size="lg">
                Try Zoho Free for 30 Days
                <ArrowRight className="size-4" />
              </ButtonLink>
            </div>
          </Stagger.Item>

          {/* Trust strip: partner badge + reassurance */}
          <Stagger.Item>
            <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center justify-center gap-3 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-background)] px-4 py-3 shadow-sm sm:flex-row">
              <span className="inline-flex shrink-0 items-center gap-2">
                <Image
                  src="/integrations/zoho.svg"
                  alt="Zoho"
                  width={20}
                  height={20}
                  className="size-5"
                />
                <span className="whitespace-nowrap text-xs font-semibold text-[var(--color-text-primary)]">
                  Zoho Authorized Partner
                </span>
              </span>
              <p className="text-xs leading-relaxed text-[var(--color-text-muted)] sm:text-left">
                No credit card required. If it&rsquo;s not the right fit, you pay nothing.
                Sign up includes free consultation and setup assistance from YeloBase.
              </p>
            </div>
          </Stagger.Item>
        </Stagger>
      </Container>
    </section>
  );
}
