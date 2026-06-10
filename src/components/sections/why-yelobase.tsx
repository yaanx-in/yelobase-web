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
    <section id="why-yelobase" className="bg-[var(--color-tint-pink)] py-14">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow color="teal">Why Yelobase?</Eyebrow>
          <h2 className="mt-3 text-[2.4rem] font-bold leading-[1.12] tracking-tight text-[var(--color-text-primary)] sm:text-[2.6rem]">
            We&rsquo;re not your vendor. We&rsquo;re your technology partner
          </h2>
          <p className="mt-2 text-[var(--color-text-secondary)]">
            There&rsquo;s a difference — and it matters more than you&rsquo;d
            think.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Comparison block: table with the partner card overlapping on the right */}
          <div className="relative mx-auto mt-9 max-w-[900px] lg:h-[224px]">
            {/* decorative cylinders behind the cards */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/decor/pedestal-left.webp"
              alt=""
              aria-hidden
              className="pointer-events-none absolute bottom-[-34px] left-[-60px] z-0 hidden w-36 lg:block"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/decor/pedestal-right.webp"
              alt=""
              aria-hidden
              className="pointer-events-none absolute bottom-[-30px] right-[-10px] z-0 hidden w-36 lg:block"
            />

            {/* Left table */}
            <div className="relative z-[2] overflow-hidden rounded-xl bg-[#222222] text-white/85 lg:w-[670px]">
              <div className="grid grid-cols-2 bg-[#4b4654] text-sm">
                <div className="px-4 py-[18px] font-semibold text-white">
                  Software <span className="font-normal text-white/55">vendor</span>
                </div>
                <div className="border-l border-white/10 px-4 py-[18px] font-semibold text-white">
                  Implementation{" "}
                  <span className="font-normal text-white/55">Agency</span>
                </div>
              </div>
              {OTHERS.map((row) => (
                <div
                  key={row.role}
                  className="grid grid-cols-2 border-t border-white/[0.07] text-sm"
                >
                  <div className="px-4 py-[18px] text-white/75">{row.role}</div>
                  <div className="border-l border-white/10 px-4 py-[18px] text-white/75">
                    {row.role2}
                  </div>
                </div>
              ))}
            </div>

            {/* Yelobase Partner — overlaps the table on desktop, stacks on mobile */}
            <div className="relative z-[3] mt-5 overflow-hidden rounded-xl shadow-2xl lg:absolute lg:left-[590px] lg:top-[-22px] lg:mt-0 lg:w-[300px]">
              <div className="flex items-center gap-2 bg-brand-coral px-5 py-[22px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/logo-white.svg"
                  alt="Yelobase"
                  className="h-6 w-auto"
                />
                <span className="text-sm font-normal text-white/85">Partner</span>
              </div>
              <div className="bg-[#111014]">
                {YELOBASE.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-t border-white/[0.07] px-5 py-[21px] text-sm text-white first:border-t-0"
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
          <div className="mt-12 flex flex-col items-center gap-2">
            <p className="text-center text-sm italic text-[var(--color-text-muted)]">
              &ldquo;Leave the headache to us.&rdquo;
            </p>
            <span className="h-0.5 w-[200px] bg-brand-teal" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
