"use client";

import { Stagger } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/layout/container";

export function AboutHero() {
  return (
    <section className="relative bg-[var(--color-background-warm)] pb-14 pt-12 sm:pt-16">
      <Container className="relative">
        <Stagger onMount className="mx-auto max-w-3xl text-center">
          <Stagger.Item>
            <Eyebrow color="teal" className="tracking-[0.3em]">
              About Us
            </Eyebrow>
          </Stagger.Item>

          <Stagger.Item>
            <h1 className="mt-4 font-mono text-[clamp(2.2rem,6vw,3.9rem)] font-bold leading-[1.1] tracking-tight text-[var(--color-text-primary)]">
              Who are we?
            </h1>
          </Stagger.Item>

          <Stagger.Item>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base text-[var(--color-text-secondary)] sm:text-lg">
              We&rsquo;re passionate about transforming businesses through intelligent
              automation. Our expertise in Zoho customization and AI agent development
              helps companies streamline operations and accelerate growth.
            </p>
          </Stagger.Item>
        </Stagger>
      </Container>
    </section>
  );
}
