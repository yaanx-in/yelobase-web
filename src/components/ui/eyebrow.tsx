import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type EyebrowColor = "teal" | "coral";

const colors: Record<EyebrowColor, string> = {
  teal: "text-brand-teal",
  coral: "text-brand-coral",
};

type EyebrowProps = {
  children: ReactNode;
  color?: EyebrowColor;
  className?: string;
};

/** Uppercase, letter-spaced section label (teal or coral) per DESIGN.md §3. */
export function Eyebrow({ children, color = "teal", className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.14em]",
        colors[color],
        className,
      )}
    >
      {children}
    </p>
  );
}
