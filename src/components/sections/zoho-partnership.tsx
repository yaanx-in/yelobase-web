import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/layout/container";

type Point = {
  icon: string;
  text: string;
};

const POINTS: Point[] = [
  {
    icon: "/icons/zp-partner.svg",
    text: "Official Zoho Partner — verified, trained, and recognized by Zoho",
  },
  {
    icon: "/icons/zp-implementations.svg",
    text: "100+ implementations across CRM, Books, Inventory, Analytics, Creator, People, and more",
  },
  {
    icon: "/icons/zp-serving.svg",
    text: "Serving clients in India, US, UK, UAE, and Australia",
  },
  {
    icon: "/icons/zp-experience.svg",
    text: "5–7 years of deep Zoho ecosystem experience",
  },
];

export function ZohoPartnership() {
  return (
    <section className="bg-[var(--color-background-warm)] py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
          <Reveal>
            <Eyebrow color="teal">Zoho Partnership</Eyebrow>
            <h2 className="mt-4 text-[2.4rem] font-bold leading-[1.1] tracking-tight text-[var(--color-text-primary)] sm:text-[2.85rem]">
              We are an Official Zoho
              <br className="hidden sm:block" /> Partner. That&rsquo;s not a
              badge,
              <br className="hidden sm:block" /> it&rsquo;s a foundation.
            </h2>
            <p className="mt-5 max-w-[600px] text-base leading-[1.55] text-[var(--color-text-secondary)]">
              Our founders built their careers inside the Zoho ecosystem. We
              know it at the level of architecture, not just administration. That
              depth is what separates a system that works from one that just
              looks like it does.
            </p>

            <ul className="mt-8 space-y-5">
              {POINTS.map((point) => (
                <li key={point.text} className="flex items-start gap-3.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={point.icon}
                    alt=""
                    className="mt-px size-6 shrink-0"
                  />
                  <span className="max-w-[480px] text-[15px] text-[var(--color-text-secondary)]">
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 max-w-[600px] text-[17px] leading-[1.55] text-[var(--color-text-secondary)]">
              Zoho is where we start. As your business grows, we grow the
              architecture with it — adding integrations, third-party tools, and
              AI layers as you need them.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <Image
              src="/graphics/zoho-partnership.webp"
              alt="Yelobase as an Official Zoho Authorized Partner"
              width={840}
              height={663}
              className="mx-auto h-auto w-full max-w-[480px] lg:justify-self-end"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
