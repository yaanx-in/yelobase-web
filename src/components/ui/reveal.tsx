"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

// Easing mirrors --ease-out in globals.css. Framer needs the raw bezier array.
const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const REVEAL_DURATION = 0.4; // --duration-reveal
const TRAVEL = 40; // px of upward travel on reveal
const STAGGER = 0.06; // 60ms between staggered children

type RevealProps = {
  children: ReactNode;
  /** Seconds to delay the reveal (use for manual ordering). */
  delay?: number;
  className?: string;
};

/**
 * Single fade-up reveal triggered once when it scrolls into view.
 * Under prefers-reduced-motion the content is shown instantly with no transform.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: TRAVEL }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: REVEAL_DURATION, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}

const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: STAGGER } },
};

const staggerChild: Variants = {
  hidden: { opacity: 0, y: TRAVEL },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: REVEAL_DURATION, ease: EASE_OUT },
  },
};

type StaggerProps = {
  children: ReactNode;
  className?: string;
  /** When true, plays on mount (use for the hero). Otherwise plays on scroll-in. */
  onMount?: boolean;
};

/**
 * Orchestrated parent that staggers its <Stagger.Item> children (~60ms apart).
 * Use onMount for the signature hero entrance; omit it for scroll-triggered groups.
 */
export function Stagger({ children, className, onMount = false }: StaggerProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={staggerParent}
      initial="hidden"
      {...(onMount
        ? { animate: "show" }
        : { whileInView: "show", viewport: { once: true, margin: "0px 0px -10% 0px" } })}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={staggerChild}>
      {children}
    </motion.div>
  );
}

Stagger.Item = StaggerItem;

type FloatProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Vertical travel of the idle float, px. */
  amount?: number;
  /** Float cycle duration, seconds. */
  duration?: number;
};

/**
 * Pop-in entrance + gentle infinite float. Used for the hero's floating
 * badges/chips. Under prefers-reduced-motion it renders static.
 */
export function Float({
  children,
  className,
  delay = 0,
  amount = 8,
  duration = 5,
}: FloatProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1, y: [0, -amount, 0] }}
      transition={{
        opacity: { duration: 0.5, delay, ease: EASE_OUT },
        scale: { duration: 0.5, delay, ease: EASE_OUT },
        y: { duration, delay, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      {children}
    </motion.div>
  );
}
