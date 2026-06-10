import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

const TRAITS = [
  {
    title: "Scaling Team",
    body: "5–50+ users, growing fast with Zoho.",
    rule: "border-l-brand-purple",
  },
  {
    title: "Beyond Spreadsheets",
    body: "Manual tools no longer cut it.",
    rule: "border-l-brand-coral",
  },
  {
    title: "Run, Not Support",
    body: "Need a system that drives operations.",
    rule: "border-l-brand-teal",
  },
  {
    title: "Partner, Not Headache",
    body: "No tech team — just results.",
    rule: "border-l-[#f9b21d]",
  },
];

export function WhoWeWorkWith() {
  return (
    <section
      id="who-we-work-with"
      className="bg-[var(--color-background)] py-[var(--section-padding-y)]"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow color="teal">Ideal Client</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              Who we work with
            </h2>
            <p className="mt-5 text-[var(--color-text-secondary)]">
              Yelobase is built for businesses that are already operational — and
              ready to systematize.
            </p>
            <p className="mt-4 text-[var(--color-text-secondary)]">
              We work with founders, operations heads, and finance leads across
              professional services, trading, manufacturing, and SaaS companies —
              globally.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-5 sm:grid-cols-2">
              {TRAITS.map((t) => (
                <div
                  key={t.title}
                  className={cn(
                    "rounded-md border border-[var(--color-border-subtle)] border-l-4 bg-[var(--color-surface)] p-5 transition-transform duration-[var(--duration-micro)] ease-[var(--ease-out)] motion-safe:hover:-translate-y-1",
                    t.rule,
                  )}
                >
                  <h3 className="font-semibold text-[var(--color-text-primary)]">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    {t.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
