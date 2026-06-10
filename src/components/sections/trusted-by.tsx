import Image from "next/image";
import { Container } from "@/components/layout/container";

export function TrustedBy() {
  return (
    <section className="bg-[var(--color-background-warm)] pb-14 pt-2">
      <Container>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
            Trusted by companies
          </p>
          <Image
            src="/graphics/trusted-logos.webp"
            alt="Logos of companies that trust Yelobase"
            width={1082}
            height={64}
            className="mx-auto mt-6 h-auto w-full max-w-3xl opacity-70"
          />
        </div>
      </Container>
    </section>
  );
}
