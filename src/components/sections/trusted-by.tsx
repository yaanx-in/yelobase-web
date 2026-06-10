import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/layout/container";

// Placeholder client wordmarks (Figma shows generic client logos). Swap for
// real SVG assets in public/images when available.
const CLIENTS = [
  "SwingFit Academies",
  "Optimal Fitness",
  "Tuta Global",
  "StatWorks",
  "Lena Wigs",
];

export function TrustedBy() {
  return (
    <section className="border-y border-[var(--color-border-subtle)] bg-[var(--color-background)] py-10">
      <Container>
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
            Trusted by companies
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
            {CLIENTS.map((name) => (
              <li
                key={name}
                className="text-sm font-semibold tracking-tight text-[var(--color-text-muted)] opacity-80 grayscale transition-opacity duration-[var(--duration-micro)] hover:opacity-100 sm:text-base"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
