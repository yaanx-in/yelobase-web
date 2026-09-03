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
        <Stagger onMount className="mx-auto max-w-5xl text-center">
          <Stagger.Item>
            <Eyebrow color="teal" className="tracking-[0.3em]">
              Zoho Services
            </Eyebrow>
          </Stagger.Item>

          <Stagger.Item>
            <h1 className="mt-4 font-mono text-[clamp(1.7rem,4.4vw,2.9rem)] font-bold leading-[1.1] tracking-tight text-[var(--color-text-primary)]">
              Zoho Is Powerful.
              <br className="hidden sm:block" />{" "}
              <span className="font-normal">Most Businesses Use 20% of It.</span>
            </h1>
          </Stagger.Item>

          <Stagger.Item>
            <p className="mx-auto mt-6 max-w-4xl text-balance text-base text-[var(--color-text-secondary)] sm:text-lg">
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

          <Stagger.Item>
            <Image
              src="/graphics/zoho/assessment-strip.svg"
              alt="Zoho Authorized Partner — no credit card required, free consultation and setup assistance"
              width={656}
              height={72}
              unoptimized
              className="mx-auto mt-8 h-auto w-full max-w-[656px]"
            />
          </Stagger.Item>
        </Stagger>
      </Container>
    </section>
  );
}
