import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

export function FinalCta() {
  return (
    <section className="bg-[var(--color-background)] pb-[var(--section-padding-y)]">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-md bg-[var(--color-surface-dark)] px-6 py-12 sm:px-12 sm:py-16">
            <div className="grid items-center gap-8 lg:grid-cols-[1.6fr_1fr]">
              <div>
                <Eyebrow color="teal">Scale With Clarity</Eyebrow>
                <h2 className="mt-4 font-mono text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                  Ready to build a system that actually scales?
                </h2>
                <p className="mt-4 max-w-xl text-white/70">
                  Book a free Systems Audit. We&rsquo;ll look at your current
                  setup, identify the biggest gaps, and tell you exactly what
                  we&rsquo;d do — no obligation.
                </p>
              </div>
              <div className="lg:justify-self-end">
                <Button variant="primary" size="lg">
                  Book Free Audit
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
