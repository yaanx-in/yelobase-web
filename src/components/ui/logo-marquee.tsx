"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const LOGOS = [1, 2, 3, 4, 5, 6, 7].map((n) => `/graphics/trusted/logo-${n}.svg`);

function LogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-4 pr-4"
    >
      {LOGOS.map((src, i) => (
        <li key={src + i}>
          <div className="flex h-16 w-32 items-center justify-center overflow-hidden rounded-[var(--radius-sm)] border border-[var(--color-border-subtle)] bg-[var(--color-background)]">
            <Image
              src={src}
              alt="Client company logo"
              width={128}
              height={64}
              unoptimized
              className="h-full w-full object-cover"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

/** Edge-to-edge auto-scrolling client-logo marquee (static row on reduced motion). */
export function LogoMarquee({ className = "" }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] ${className}`}
    >
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
  );
}
