"use client";

import Image from "next/image";
import { Stagger, Float } from "@/components/ui/reveal";
import { Button, ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IntegrationChip } from "@/components/ui/integration-chip";
import { ArrowRight } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

export function Hero() {
  return (
    <section className="overflow-hidden bg-[var(--color-background-warm)] pb-12 pt-10 sm:pt-16">
      <Container>
        <Stagger onMount className="mx-auto max-w-3xl text-center">
          <Stagger.Item>
            <h1 className="font-mono leading-[1.1] tracking-tight text-[var(--color-text-primary)]">
              <span className="block text-[clamp(1.6rem,5.5vw,3rem)] font-normal">
                Your Business Systems.
              </span>
              <span className="mt-1 block text-[clamp(1.9rem,7vw,3.9rem)] font-bold">
                Properly Built and Owned.
              </span>
            </h1>
          </Stagger.Item>

          <Stagger.Item>
            <p className="mx-auto mt-6 max-w-xl text-balance text-base text-[var(--color-text-secondary)] sm:text-lg">
              We are a technology partner for growing businesses. Starting with
              Zoho and expanding across your entire stack — we design, build,
              automate, and manage the systems that let you scale without chaos.
            </p>
          </Stagger.Item>

          <Stagger.Item>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <ButtonLink href="#stories" variant="link">
                See our work
              </ButtonLink>
              <Button variant="primary" size="lg">
                Book Free Audit
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </Stagger.Item>
        </Stagger>

        {/* Desktop: mark centered with floating badges/chips around it */}
        <div className="relative mx-auto mt-14 hidden h-[460px] max-w-3xl md:block">
          {/* soft glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/10 blur-3xl"
          />
          <Image
            src="/graphics/hero-mark.webp"
            alt="Yelobase isometric mark"
            width={640}
            height={375}
            priority
            className="absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2 lg:w-80"
          />

          <Float delay={0.1} className="absolute left-0 top-6">
            <Badge tint="lavender">Official Zoho Partner</Badge>
          </Float>
          <Float delay={0.35} duration={5.5} className="absolute left-[5%] bottom-10">
            <Badge tint="cream">100+ Projects Delivered</Badge>
          </Float>
          <Float delay={0.2} duration={6} className="absolute right-0 top-8">
            <Badge tint="pink">India, US, UK, UAE, Australia</Badge>
          </Float>

          <Float delay={0.25} className="absolute left-[20%] top-0">
            <IntegrationChip type="zoho" />
          </Float>
          <Float delay={0.45} duration={6} className="absolute left-2 top-[52%]">
            <IntegrationChip type="meta" />
          </Float>
          <Float delay={0.5} duration={5.5} className="absolute right-2 top-[46%]">
            <IntegrationChip type="odoo" />
          </Float>
          <Float delay={0.3} duration={5} className="absolute right-[24%] top-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/integrations/spark.svg" alt="Anthropic" className="size-14" />
          </Float>
          <Float delay={0.55} duration={6.5} className="absolute right-[14%] bottom-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/integrations/whatsapp.svg" alt="WhatsApp" className="size-14" />
          </Float>
        </div>

        {/* Mobile/tablet: mark + stacked badges + chips */}
        <div className="md:hidden">
          <Image
            src="/graphics/hero-mark.webp"
            alt="Yelobase isometric mark"
            width={640}
            height={375}
            priority
            className="mx-auto mt-12 w-56"
          />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Badge tint="lavender">Official Zoho Partner</Badge>
            <Badge tint="cream">100+ Projects Delivered</Badge>
            <Badge tint="pink">India, US, UK, UAE, Australia</Badge>
          </div>
          <div className="mt-4 flex items-center justify-center gap-3">
            <IntegrationChip type="zoho" />
            <IntegrationChip type="meta" />
            <IntegrationChip type="odoo" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/integrations/spark.svg" alt="Anthropic" className="size-14" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/integrations/whatsapp.svg" alt="WhatsApp" className="size-14" />
          </div>
        </div>
      </Container>
    </section>
  );
}
