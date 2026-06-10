import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Check } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

// Heading + first bullets legible in Figma; supporting copy extrapolated to
// match tone (flagged to the user — confirm exact copy).
const POINTS = [
  "Official Zoho Partner — vetted, trained, and recognized by Zoho.",
  "100+ implementations across CRM, Books, Inventory, Analytics, Creator, People, and more.",
  "Serving clients in India, US, UK, UAE, and Australia.",
  "Deep, hands-on Zoho ecosystem experience — architecture, not just admin.",
];

export function ZohoPartnership() {
  return (
    <section className="bg-[var(--color-background)] py-[var(--section-padding-y)]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow color="teal">Zoho Partnership</Eyebrow>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              We are an Official Zoho Partner. That&rsquo;s not a badge,
              it&rsquo;s a foundation.
            </h2>
            <p className="mt-5 text-[var(--color-text-secondary)]">
              Our founders built their careers inside the Zoho ecosystem — at
              the level of architecture, not just administration. That depth is
              what separates a system that works from one that just looks like it
              does.
            </p>
            <ul className="mt-8 space-y-4">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-tint-mint">
                    <Check className="size-4 text-brand-teal" />
                  </span>
                  <span className="text-[var(--color-text-secondary)]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mx-auto flex max-w-md items-center justify-center rounded-md bg-[var(--color-background-warm)] p-8 sm:p-12">
              <Image
                src="/graphics/zoho-partnership.webp"
                alt="Yelobase as an Official Zoho Authorized Partner"
                width={840}
                height={663}
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
