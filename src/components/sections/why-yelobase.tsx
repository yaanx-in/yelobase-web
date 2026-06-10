import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Bolt } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

const OTHERS = [
  { role: "Sells licenses", role2: "Installs software" },
  { role: "Builds and leaves", role2: "Delivers project" },
  { role: "Advises on features", role2: "Responds to tickets" },
];

const YELOBASE = [
  "Architects your system",
  "Stays as your tech team",
  "Proactively optimizes",
];

export function WhyYelobase() {
  return (
    <section id="why-yelobase" className="bg-[var(--color-tint-pink)] py-16">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow color="teal">Why Yelobase?</Eyebrow>
          <h2 className="mt-3 text-balance text-[2.1rem] font-bold leading-[1.15] tracking-tight text-[var(--color-text-primary)] sm:text-[2.5rem]">
            We&rsquo;re not your vendor. We&rsquo;re your technology partner
          </h2>
          <p className="mt-3 text-[var(--color-text-secondary)]">
            There&rsquo;s a difference — and it matters more than you&rsquo;d
            think.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Comparison block: table with the partner card overlapping on the right */}
          <div className="relative mx-auto mt-10 max-w-[860px]">
            {/* decorative cylinders behind the cards */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/decor/pedestal-left.webp"
              alt=""
              aria-hidden
              className="pointer-events-none absolute bottom-[-34px] left-[-56px] z-0 hidden w-36 lg:block"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/decor/pedestal-right.webp"
              alt=""
              aria-hidden
              className="pointer-events-none absolute bottom-[-34px] right-[-44px] z-0 hidden w-36 lg:block"
            />

            {/* Left table */}
            <div className="relative z-10 overflow-hidden rounded-2xl bg-[var(--color-surface-dark-2)] text-white/85 lg:w-[600px]">
              <div className="grid grid-cols-2 bg-[#2d2934] text-sm">
                <div className="px-4 py-4 font-semibold">
                  Software <span className="font-normal text-white/45">vendor</span>
                </div>
                <div className="border-l border-white/10 px-4 py-4 font-semibold">
                  Implementation{" "}
                  <span className="font-normal text-white/45">Agency</span>
                </div>
              </div>
              {OTHERS.map((row) => (
                <div
                  key={row.role}
                  className="grid grid-cols-2 border-t border-white/[0.06] text-sm"
                >
                  <div className="px-4 py-4 text-white/65">{row.role}</div>
                  <div className="border-l border-white/10 px-4 py-4 text-white/65">
                    {row.role2}
                  </div>
                </div>
              ))}
            </div>

            {/* Yelobase Partner — overlaps the table on desktop, stacks on mobile */}
            <div className="relative z-20 mt-5 overflow-hidden rounded-2xl shadow-xl lg:absolute lg:left-[480px] lg:top-[-18px] lg:mt-0 lg:w-[320px]">
              <div className="flex items-center gap-2 bg-brand-coral px-5 py-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/logo-white.svg"
                  alt="Yelobase"
                  className="h-6 w-auto"
                />
                <span className="text-sm font-normal text-white/85">Partner</span>
              </div>
              <div className="bg-[var(--color-surface-dark)]">
                {YELOBASE.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-t border-white/[0.06] px-5 py-4 text-sm text-white first:border-t-0"
                  >
                    <Bolt className="size-4 shrink-0 text-brand-purple" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-10 text-center text-sm italic text-[var(--color-text-muted)]">
            <span className="border-b-2 border-brand-teal pb-1">
              &ldquo;Leave the headache to us.&rdquo;
            </span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
