import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { ArrowRight } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";
import { TESTIMONIALS, STORY_STATS } from "@/lib/testimonials";

export function CustomerStories() {
  return (
    <section
      id="stories"
      className="bg-[var(--color-background-warm)] py-[var(--section-padding-y)]"
    >
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow color="teal">Real Feedbacks</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
            Explore customer stories
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {STORY_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-mono text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
                  {s.value}
                </dd>
                <p className="mt-1 text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <li key={t.name}>
                <TestimonialCard testimonial={t} featured={i === 0} />
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 text-center">
          <ButtonLink href="/customer-stories" variant="outline">
            View All Success Stories
            <ArrowRight className="size-4" />
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
