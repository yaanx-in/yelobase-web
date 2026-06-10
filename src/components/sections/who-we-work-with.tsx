import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Container } from "@/components/layout/container";

const TRAITS = [
  {
    title: "Scaling Team",
    body: "5–50+ users, growing fast with Zoho.",
    accent: "#8a6bff",
  },
  {
    title: "Beyond Spreadsheets",
    body: "Manual tools no longer cut it.",
    accent: "#ff7070",
  },
  {
    title: "Run, Not Support",
    body: "Need a system that drives operations.",
    accent: "#21b293",
  },
  {
    title: "Partner, Not Headache",
    body: "No tech team — just results.",
    accent: "#f9b21d",
  },
];

export function WhoWeWorkWith() {
  return (
    <section
      id="who-we-work-with"
      className="bg-[var(--color-background-warm)] py-14"
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow color="teal">Ideal Client</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-[2.25rem]">
              Who we work with
            </h2>
            <p className="mt-4 max-w-[500px] text-base leading-[1.5] text-[var(--color-text-secondary)]">
              Yelobase is built for businesses that are already operational — and
              ready to systematize.
            </p>
            <p className="mt-6 max-w-[500px] text-base leading-[1.5] text-[var(--color-text-secondary)]">
              We work with founders, operations heads, and finance leads across
              professional services, trading, manufacturing, and SaaS companies —
              globally.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:justify-self-end">
            <div className="grid gap-5 sm:grid-cols-2">
              {TRAITS.map((t) => (
                <div
                  key={t.title}
                  className="relative flex h-[104px] flex-col justify-center rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-background)] pl-12 pr-4 shadow-sm transition-transform duration-[var(--duration-micro)] ease-[var(--ease-out)] motion-safe:hover:-translate-y-0.5 sm:w-[258px]"
                >
                  <span
                    aria-hidden
                    className="absolute left-7 top-1/2 h-[70px] w-[3px] -translate-y-1/2 rounded-full"
                    style={{ backgroundColor: t.accent }}
                  />
                  <h3 className="text-[15px] font-bold text-[var(--color-text-primary)]">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-[15px] leading-[1.4] text-[var(--color-text-secondary)]">
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
