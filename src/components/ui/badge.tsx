import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tint = "lavender" | "cream" | "pink" | "mint";

const tints: Record<Tint, string> = {
  lavender: "bg-tint-lavender",
  cream: "bg-tint-cream",
  pink: "bg-tint-pink-soft",
  mint: "bg-tint-mint",
};

type BadgeProps = {
  children: ReactNode;
  tint?: Tint;
  className?: string;
};

/** Soft pastel pill used for floating credibility chips (DESIGN.md §5). */
export function Badge({ children, tint = "lavender", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-[var(--radius-sm)] px-3.5 py-1.5 text-sm font-medium leading-6 whitespace-nowrap text-[var(--color-text-secondary)] shadow-sm",
        tints[tint],
        className,
      )}
    >
      {children}
    </span>
  );
}
