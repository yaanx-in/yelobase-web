import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import { Stars } from "@/components/ui/testimonial-card";
import { Quote, ArrowRight } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";
import { TESTIMONIALS, STORY_STATS, type Testimonial } from "@/lib/testimonials";

function Author({ t, dark = false }: { t: Testimonial; dark?: boolean }) {
  return (
    <div className="mt-6 flex items-center gap-3">
      {t.image && (
        <Image
          src={t.image}
          alt={t.name}
          width={80}
          height={80}
          className="size-[68px] rounded-xl object-cover"
        />
      )}
      <div className="leading-tight">
        <p
          className={`text-[15px] font-bold ${dark ? "text-white" : "text-[var(--color-text-primary)]"}`}
        >
          {t.name}
        </p>
        <p className={dark ? "text-sm text-white/80" : "text-sm text-[var(--color-text-secondary)]"}>
          {t.company}
        </p>
        <p className={dark ? "text-sm text-white/45" : "text-sm text-[var(--color-text-muted)]"}>
          {t.location}
        </p>
      </div>
    </div>
  );
}

export function CustomerStories() {
  const [featured, ...rest] = TESTIMONIALS;

  return (
    <section
      id="stories"
      className="bg-[var(--color-background-warm)] py-16"
    >
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow color="teal">Real Feedbacks</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-[2.35rem]">
            Explore customer stories
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-9 grid gap-7 lg:grid-cols-[340px_minmax(0,1fr)]">
            {/* Left: large dark featured testimonial */}
            <div className="flex flex-col rounded-2xl bg-[#242424] p-8 text-white shadow-sm">
              <Quote className="size-10 text-white/25" />
              <p className="mt-4 flex-1 text-base leading-[1.6] text-white/85">
                {featured.quote}
              </p>
              <div className="mt-6">
                <Stars rating={featured.rating} />
              </div>
              <Author t={featured} dark />
            </div>

            {/* Right: stats card + two testimonials */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-background)] p-8 shadow-sm">
                <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                  {STORY_STATS.map((s) => (
                    <div key={s.tag}>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                        {s.tag}
                      </dt>
                      <dd className="mt-1 font-mono text-[2rem] font-bold leading-none tracking-tight text-[var(--color-text-primary)]">
                        {s.value}
                      </dd>
                      <p className="mt-1.5 text-sm text-[var(--color-text-secondary)]">
                        {s.caption}
                      </p>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {rest.map((t) => (
                  <div
                    key={t.name}
                    className="flex flex-col rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-background)] p-8 shadow-sm"
                  >
                    <p className="flex-1 text-[15px] leading-[1.55] text-[var(--color-text-secondary)]">
                      {t.quote}
                    </p>
                    <div className="mt-6">
                      <Stars rating={t.rating} />
                    </div>
                    <Author t={t} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 text-center">
          <ButtonLink href="/customer-stories" variant="outline">
            View All Success Stories
            <ArrowRight className="size-4" />
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
