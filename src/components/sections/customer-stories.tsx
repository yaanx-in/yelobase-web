import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Star, ArrowRight } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

const STATS = [
  { value: "50+", label: "Happy Clients" },
  { value: "100+", label: "Projects Completed" },
  { value: "5.0", label: "Average Rating" },
  { value: "15+", label: "Countries Served" },
];

const TESTIMONIALS = [
  {
    quote:
      "It has been an absolute pleasure to work with the team on our Zoho projects. The work they have delivered for us is beyond expectations, and we look forward to working closely with them in the future on all of our CRM and Zoho related projects.",
    name: "Sam O'Neile",
    company: "Tuta Global PTY LTD",
    location: "Australia",
    rating: 5,
    featured: true,
  },
  {
    quote:
      "I was greatly surprised — this was my first project with Yelobase and they delivered and completed the project perfectly.",
    name: "Mr Edgar",
    company: "StatWorks",
    location: "Mexico",
    rating: 4,
    featured: false,
  },
  {
    quote:
      "Yelobase is a joy to work with. They know what they're doing, communicate clearly, and get the job done.",
    name: "Lena",
    company: "Lena Wigs",
    location: "USA",
    rating: 5,
    featured: false,
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "size-4",
            i < rating ? "text-brand-purple" : "text-[var(--color-border)]",
          )}
        />
      ))}
    </div>
  );
}

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

        {/* Stats */}
        <Reveal delay={0.05}>
          <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((s) => (
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

        {/* Testimonials */}
        <Reveal delay={0.1}>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <li
                key={t.name}
                className={cn(
                  "flex flex-col rounded-md p-6 shadow-sm",
                  t.featured
                    ? "bg-[var(--color-surface-dark)] text-white"
                    : "border border-[var(--color-border-subtle)] bg-[var(--color-background)]",
                )}
              >
                <Stars rating={t.rating} />
                <blockquote
                  className={cn(
                    "mt-4 flex-1 text-sm leading-relaxed",
                    t.featured
                      ? "text-white/80"
                      : "text-[var(--color-text-secondary)]",
                  )}
                >
                  {t.quote}
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar name={t.name} />
                  <div>
                    <p
                      className={cn(
                        "text-sm font-semibold",
                        t.featured
                          ? "text-white"
                          : "text-[var(--color-text-primary)]",
                      )}
                    >
                      {t.name}
                    </p>
                    <p
                      className={cn(
                        "text-xs",
                        t.featured ? "text-white/60" : "text-[var(--color-text-muted)]",
                      )}
                    >
                      {t.company} · {t.location}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 text-center">
          <ButtonLink href="#stories" variant="outline">
            View All Success Stories
            <ArrowRight className="size-4" />
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
