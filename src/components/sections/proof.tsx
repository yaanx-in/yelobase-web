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
    imgClass: "w-[270px]",
  },
  {
    value: "6 weeks",
    label:
      "From chaos to operational clarity — a typical implementation timeline for SMBs.",
    image: "/graphics/hourglass.webp",
    imgW: 420,
    imgH: 437,
    imgClass: "w-[185px]",
  },
];

export function Proof() {
  return (
    <section className="bg-[var(--color-background-warm)] py-14">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow color="teal">Proof</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-[2.1rem]">
            Results our clients talk about.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-9 grid max-w-[1080px] gap-5 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className="flex h-[400px] flex-col overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-background)] p-6 shadow-sm"
              >
                <p className="font-mono text-[2.6rem] font-bold leading-none tracking-tight text-[var(--color-text-primary)]">
                  {stat.value}
                </p>
                <p className="mt-3 text-[15px] leading-[1.45] text-[var(--color-text-secondary)]">
                  {stat.label}
                </p>
                <div className="flex flex-1 items-center justify-center">
                  <Image
                    src={stat.image}
                    alt=""
                    width={stat.imgW}
                    height={stat.imgH}
                    className={`h-auto ${stat.imgClass}`}
                  />
                </div>
              </div>
            ))}

            {/* Dark highlight stat — minimal: white number, gray text, green link */}
            <div className="flex h-[400px] flex-col rounded-2xl bg-[var(--color-surface-dark)] p-6 text-white shadow-sm">
              <p className="font-mono text-[2.6rem] font-bold leading-none tracking-tight">
                100%
              </p>
              <p className="mt-3 max-w-[230px] text-[15px] leading-[1.45] text-white/70">
                User adoption in 3 weeks — consistently, because we build for
                people, not demos.
              </p>
              <Link
                href="/customer-stories"
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 rounded-sm"
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
