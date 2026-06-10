import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "dark" | "outline" | "link";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  // Coral fill with white text to match the Figma design (note: white-on-coral
  // is slightly under WCAG AA contrast).
  primary: "bg-brand-coral text-white hover:bg-brand-coral-strong shadow-sm",
  dark: "bg-surface-dark text-[var(--color-text-on-dark)] hover:opacity-90",
  outline:
    "border border-[var(--color-border)] text-[var(--color-text-primary)] hover:bg-surface",
  link: "text-[var(--color-text-primary)] hover:opacity-70 px-0 min-h-0",
};

const sizes: Record<Size, string> = {
  // min-h keeps touch targets >= 44px on mobile.
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium " +
  "transition-[transform,background-color,opacity] duration-[var(--duration-micro)] " +
  "ease-[var(--ease-out)] motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple " +
  "focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

type StyleProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonProps = StyleProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof StyleProps>;

type LinkButtonProps = StyleProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof StyleProps>;

/** Button rendered as a native <button>. */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

/** Same styling as Button, rendered as a Next.js <Link>. */
export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: LinkButtonProps) {
  return (
    <Link
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </Link>
  );
}
