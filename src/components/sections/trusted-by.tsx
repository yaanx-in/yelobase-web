"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/container";

const LOGOS = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `/graphics/trusted/logo-${n}.webp`);

function LogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-4 pr-4"
    >
      {LOGOS.map((src, i) => (
        <li key={src + i}>
          <div className="flex h-16 w-32 items-center justify-center overflow-hidden rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-background)]">
            <Image
              src={src}
              alt="Trusted company logo"
              width={128}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export function TrustedBy() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[var(--color-background-warm)] pb-14 pt-2">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
          Trusted by companies
        </p>
      </Container>

      {/* Marquee — edge-to-edge, fading at both sides */}
      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        {reduceMotion ? (
          <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-4 px-4">
            <LogoRow />
          </div>
        ) : (
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          >
            <LogoRow />
            <LogoRow ariaHidden />
          </motion.div>
        )}
      </div>
    </section>
  );
}
