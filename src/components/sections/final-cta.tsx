import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";

export function FinalCta() {
  return (
    <section className="bg-[var(--color-background-warm)] py-12">
      <Container>
        <Reveal>
          <div className="relative">
            {/* decorative cylinders at the card corners (not clipped) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/decor/cta-top.webp"
              alt=""
              aria-hidden
              className="pointer-events-none absolute left-10 top-[-26px] z-20 hidden w-[72px] lg:block"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/decor/cta-bottom.webp"
              alt=""
              aria-hidden
              className="pointer-events-none absolute bottom-[-22px] right-[42px] z-20 hidden w-[54px] lg:block"
            />

            <div className="relative z-10 rounded-[24px] bg-[var(--color-surface-dark)] px-7 py-12 shadow-xl sm:px-14">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="lg:pl-3">
                  <Eyebrow color="teal">Scale With Clarity</Eyebrow>
                  <h2 className="mt-4 max-w-[600px] font-mono text-[1.9rem] font-bold leading-[1.08] tracking-tight text-white sm:text-[2.5rem]">
                    Ready to build a system that actually scales?
                  </h2>
                  <p className="mt-4 max-w-[640px] text-white/70">
                    Book a free Systems Audit. We&rsquo;ll look at your current
                    setup, identify the biggest gaps, and tell you exactly what
                    we&rsquo;d do — no obligation.
                  </p>
                </div>
                <div className="shrink-0">
                  <Button variant="primary" size="lg">
                    Book Free Audit
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
