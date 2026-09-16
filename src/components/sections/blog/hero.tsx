"use client";

import { Stagger } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/layout/container";

export function BlogHero() {
  return (
    <section className="bg-[var(--color-background-warm)] pb-12 pt-12 sm:pt-16">
      <Container>
        <Stagger onMount className="mx-auto max-w-3xl text-center">
          <Stagger.Item>
            <Eyebrow color="teal" className="tracking-[0.3em]">
              Blog
            </Eyebrow>
          </Stagger.Item>

          <Stagger.Item>
            {/* IBM Plex Mono Bold 62px / 110%, letter-spacing 0 (DESIGN Blog hero) */}
            <h1 className="mt-4 font-mono text-[clamp(2.2rem,6vw,3.875rem)] font-bold leading-[1.1] text-[var(--color-text-primary)]">
              Yelobase Blog
            </h1>
          </Stagger.Item>

          <Stagger.Item>
            {/* Inter Regular 16px / 24px */}
            <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-normal text-[var(--color-text-secondary)]">
              Insights, trends, and best practices.
            </p>
          </Stagger.Item>
        </Stagger>
      </Container>
    </section>
  );
}
