import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Bolt } from "@/components/ui/icon";
import { Logo } from "@/components/ui/logo";
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
    <section
      id="why-yelobase"
      className="bg-[var(--color-tint-pink)] py-[var(--section-padding-y)]"
    >
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow color="teal">Why Yelobase?</Eyebrow>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            We&rsquo;re not your vendor. We&rsquo;re your technology partner
          </h2>
          <p className="mt-3 text-[var(--color-text-secondary)]">
            There&rsquo;s a difference — and it matters more than you&rsquo;d
            think.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 grid max-w-4xl items-start gap-5 lg:grid-cols-[1.4fr_1fr]">
            {/* Others — dark table, two columns */}
            <div className="overflow-hidden rounded-md bg-[var(--color-surface-dark)] text-white/85">
              <div className="grid grid-cols-2 border-b border-white/10 text-sm font-semibold">
                <div className="px-5 py-4">
                  Software <span className="text-white/50">vendor</span>
                </div>
                <div className="border-l border-white/10 px-5 py-4">
                  Implementation{" "}
                  <span className="text-white/50">Agency</span>
                </div>
              </div>
              {OTHERS.map((row) => (
                <div
                  key={row.role}
                  className="grid grid-cols-2 border-b border-white/5 text-sm last:border-0"
                >
                  <div className="px-5 py-4 text-white/70">{row.role}</div>
                  <div className="border-l border-white/10 px-5 py-4 text-white/70">
                    {row.role2}
                  </div>
                </div>
              ))}
            </div>

            {/* Yelobase — highlighted card */}
            <div className="overflow-hidden rounded-md shadow-lg">
              <div className="flex items-center gap-2 bg-brand-coral px-5 py-4">
                <Logo tone="light" withWordmark={false} />
                <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                  Yelobase{" "}
                  <span className="font-normal text-[var(--color-text-primary)]/70">
                    Partner
                  </span>
                </span>
              </div>
              <div className="bg-[var(--color-surface-dark)]">
                {YELOBASE.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-white/5 px-5 py-4 text-sm text-white last:border-0"
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
          <p className="mt-8 text-center text-sm italic text-[var(--color-text-muted)]">
            &ldquo;Leave the headache to us.&rdquo;
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
