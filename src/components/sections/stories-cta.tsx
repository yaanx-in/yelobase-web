import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

export function StoriesCta() {
  return (
    <section className="bg-[var(--color-background-warm)] pb-[var(--section-padding-y)]">
      <Container>
        <Reveal>
          <div className="rounded-md bg-[var(--color-surface)] px-6 py-12 sm:px-12 sm:py-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1.6fr_1fr]">
              <div>
                <Eyebrow color="teal">Start Your Project Today</Eyebrow>
                <h2 className="mt-4 font-mono text-2xl font-bold leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
                  Ready to join our success stories?
                </h2>
                <p className="mt-4 text-[var(--color-text-secondary)]">
                  Let&rsquo;s discuss how we can help transform your business
                  operations.
                </p>
              </div>
              <div className="lg:justify-self-end">
                <Button variant="primary" size="lg">
                  Get started
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
