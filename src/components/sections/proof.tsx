import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ArrowRight } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

const STATS = [
  {
    value: "80%",
    label: "Reduction in manual work after full Zoho automation.",
    image: "/graphics/dashboard.webp",
    imgW: 960,
    imgH: 600,
  },
  {
    value: "6 weeks",
    label:
      "From chaos to operational clarity — a typical implementation timeline for SMBs.",
    image: "/graphics/hourglass.webp",
    imgW: 420,
    imgH: 437,
  },
];

export function Proof() {
  return (
    <section className="bg-[var(--color-background-warm)] py-[var(--section-padding-y)]">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow color="teal">Proof</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Results our clients talk about.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className="flex flex-col overflow-hidden rounded-md border border-[var(--color-border-subtle)] bg-[var(--color-background)] p-7 shadow-sm"
              >
                <p className="font-mono text-4xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-[var(--color-text-secondary)]">
                  {stat.label}
                </p>
                <Image
                  src={stat.image}
                  alt=""
                  width={stat.imgW}
                  height={stat.imgH}
                  className="mt-6 h-auto w-full"
                />
              </div>
            ))}

            {/* Dark highlight stat */}
            <div className="flex flex-col rounded-md bg-[var(--color-surface-dark)] p-7 text-white shadow-lg">
              <p className="font-mono text-4xl font-bold tracking-tight sm:text-5xl">
                100%
              </p>
              <p className="mt-3 text-white/70">
                User adoption in 3 weeks — consistently, because we build for
                people, not demos.
              </p>
              <Link
                href="/customer-stories"
                className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-brand-teal-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 rounded-sm"
              >
                Read Case Studies
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
