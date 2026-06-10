"use client";

import Image from "next/image";
import { Stagger } from "@/components/ui/reveal";
import { Button, ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IntegrationChip } from "@/components/ui/integration-chip";
import { ArrowRight } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

export function Hero() {
  return (
    <section className="bg-[var(--color-background-warm)] pb-12 pt-10 sm:pt-16">
      <Container>
        <Stagger onMount className="mx-auto max-w-3xl text-center">
          <Stagger.Item>
            <h1 className="font-mono leading-[1.1] tracking-tight text-[var(--color-text-primary)]">
              <span className="block text-[clamp(1.6rem,6vw,3.25rem)] font-normal">
                Your Business Systems.
              </span>
              <span className="mt-1 block text-[clamp(1.9rem,7.5vw,4rem)] font-bold">
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

        {/* Graphic + floating proof badges */}
        <div className="relative mx-auto mt-12 max-w-2xl sm:mt-16">
          <Image
            src="/graphics/hero-mark.webp"
            alt="Yelobase isometric mark"
            width={640}
            height={375}
            priority
            className="mx-auto w-56 sm:w-72 lg:w-80"
          />

          {/* Desktop: floating around the mark */}
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <Badge tint="lavender" className="absolute left-0 top-6">
              Official Zoho Partner
            </Badge>
            <Badge tint="cream" className="absolute left-2 bottom-16">
              100+ Projects Delivered
            </Badge>
            <Badge tint="pink" className="absolute right-0 top-10">
              India, US, UK, UAE, Australia
            </Badge>
            <IntegrationChip type="zoho" className="absolute left-12 top-0" />
            <IntegrationChip type="meta" className="absolute left-0 bottom-2" />
            <IntegrationChip type="odoo" className="absolute right-12 top-0" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/integrations/spark.svg"
              alt="Anthropic"
              className="absolute right-8 bottom-12 size-12"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/integrations/whatsapp.svg"
              alt="WhatsApp"
              className="absolute right-2 bottom-0 size-14"
            />
          </div>
        </div>

        {/* Mobile/tablet: stacked badges + chips below the mark */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:hidden">
          <Badge tint="lavender">Official Zoho Partner</Badge>
          <Badge tint="cream">100+ Projects Delivered</Badge>
          <Badge tint="pink">India, US, UK, UAE, Australia</Badge>
        </div>
        <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
          <IntegrationChip type="zoho" />
          <IntegrationChip type="meta" />
          <IntegrationChip type="odoo" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/integrations/spark.svg" alt="Anthropic" className="size-12" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/integrations/whatsapp.svg" alt="WhatsApp" className="size-12" />
        </div>
      </Container>
    </section>
  );
}
