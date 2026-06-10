import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { TrustedBy } from "@/components/sections/trusted-by";
import { StoriesGrid } from "@/components/sections/stories-grid";
import { StoriesCta } from "@/components/sections/stories-cta";
import { Container } from "@/components/layout/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { STORY_STATS } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Customer Stories — Yelobase",
  description:
    "Real reviews from real Yelobase clients. Every project delivered, every client earned.",
};

export default function CustomerStoriesPage() {
  return (
    <>
      <Header />
      <main id="main">
        {/* Hero */}
        <section className="bg-[var(--color-background-warm)] pb-12 pt-12 sm:pt-16">
          <Container className="text-center">
            <Eyebrow color="teal">Wall of Love</Eyebrow>
            <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-5xl">
              Customer Stories
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-balance text-[var(--color-text-secondary)]">
              Every review is real. Every project delivered. Every client we
              earn, we earn for keeps.
            </p>

            <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
              {STORY_STATS.map((s) => (
                <div key={s.tag}>
                  <dt className="sr-only">{s.caption}</dt>
                  <dd className="font-mono text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
                    {s.value}
                  </dd>
                  <p className="mt-1 text-xs uppercase tracking-wide text-[var(--color-text-muted)]">
                    {s.caption}
                  </p>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        <TrustedBy />
        <StoriesGrid />
        <StoriesCta />
      </main>
      <Footer />
    </>
  );
}
