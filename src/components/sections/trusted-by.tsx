import { Container } from "@/components/layout/container";
import { LogoMarquee } from "@/components/ui/logo-marquee";

export function TrustedBy() {
  return (
    <section className="bg-[var(--color-background-warm)] pb-10 pt-2">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
          Trusted by companies
        </p>
      </Container>

      <LogoMarquee className="mt-6" />
    </section>
  );
}
