"use client";

import Image from "next/image";
import { Stagger, Float } from "@/components/ui/reveal";
import { Button, ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

// Real brand logo cards (each SVG/asset already includes its white card).
const LOGOS = {
  zoho: { src: "/integrations/zoho.svg", alt: "Zoho" },
  meta: { src: "/integrations/meta.svg", alt: "Meta" },
  odoo: { src: "/integrations/odoo.webp", alt: "Odoo" },
  claude: { src: "/integrations/claude.svg", alt: "Claude" },
  whatsapp: { src: "/integrations/whatsapp.svg", alt: "WhatsApp" },
} as const;

export function Hero() {
  return (
    <section className="overflow-hidden bg-[var(--color-background-warm)] pb-4 pt-8 sm:pt-10">
      <Container>
        <Stagger onMount className="mx-auto max-w-6xl text-center">
          <Stagger.Item>
            <h1 className="font-mono leading-[1.08] tracking-tight text-[var(--color-text-primary)]">
              <span className="block text-[clamp(1.6rem,5vw,3rem)] font-normal">
                Your Business Systems.
              </span>
              <span className="mt-1 block text-[clamp(1.9rem,6.2vw,3.85rem)] font-bold lg:whitespace-nowrap">
                Properly Built and Owned.
              </span>
            </h1>
          </Stagger.Item>

          <Stagger.Item>
            <p className="mx-auto mt-5 max-w-[54rem] text-balance text-base text-[var(--color-text-secondary)] sm:text-lg">
              We are a technology partner for growing businesses. Starting with
              Zoho and expanding across your entire stack — we design, build,
              automate, and manage the systems that let you scale without chaos.
            </p>
          </Stagger.Item>

          <Stagger.Item>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
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

        {/* Desktop: large mark centered with floating badge+logo pairs around it */}
        <div className="relative mx-auto mt-4 hidden h-[400px] max-w-5xl md:block">
          {/* soft glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 size-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple/10 blur-3xl"
          />
          <Image
            src="/graphics/hero-mark.webp"
            alt="Yelobase isometric mark"
            width={640}
            height={375}
            priority
            className="absolute left-1/2 top-1/2 w-[23rem] -translate-x-1/2 -translate-y-1/2 lg:w-[26rem]"
          />

          {/* top-left: Official Zoho Partner + Zoho (badge left of logo) */}
          <Float delay={0.12} className="absolute left-[2%] top-[12%]">
            <div className="flex items-center gap-2">
              <Badge tint="lavender">Official Zoho Partner</Badge>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGOS.zoho.src} alt={LOGOS.zoho.alt} className="h-20 w-auto" />
            </div>
          </Float>

          {/* top-right: Claude + India badge (badge right of logo) */}
          <Float delay={0.22} duration={5.5} className="absolute right-[2%] top-[10%]">
            <div className="flex items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGOS.claude.src} alt={LOGOS.claude.alt} className="h-20 w-auto" />
              <Badge tint="pink">India, US, UK, UAE, Australia</Badge>
            </div>
          </Float>

          {/* lower-left: 100+ Projects Delivered above Meta */}
          <Float delay={0.34} duration={6} className="absolute left-[4%] bottom-[6%]">
            <div className="flex flex-col items-start gap-2">
              <Badge tint="cream">100+ Projects Delivered</Badge>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={LOGOS.meta.src} alt={LOGOS.meta.alt} className="ml-8 h-20 w-auto" />
            </div>
          </Float>

          {/* right: odoo (solo) */}
          <Float delay={0.45} duration={5} className="absolute right-[6%] top-[48%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGOS.odoo.src} alt={LOGOS.odoo.alt} className="h-20 w-auto" />
          </Float>

          {/* bottom-right: WhatsApp (solo) */}
          <Float delay={0.55} duration={6.5} className="absolute right-[26%] bottom-[4%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGOS.whatsapp.src} alt={LOGOS.whatsapp.alt} className="h-20 w-auto" />
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
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGOS.zoho.src} alt={LOGOS.zoho.alt} className="h-16 w-auto" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGOS.meta.src} alt={LOGOS.meta.alt} className="h-16 w-auto" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGOS.odoo.src} alt={LOGOS.odoo.alt} className="h-16 w-auto" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGOS.claude.src} alt={LOGOS.claude.alt} className="h-16 w-auto" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGOS.whatsapp.src} alt={LOGOS.whatsapp.alt} className="h-16 w-auto" />
          </div>
        </div>
      </Container>
    </section>
  );
}
