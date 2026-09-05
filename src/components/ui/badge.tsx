import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tint = "lavender" | "cream" | "pink" | "mint";

const tints: Record<Tint, string> = {
  lavender: "bg-tint-lavender text-brand-purple-strong",
  cream: "bg-tint-cream text-[#8a6a12]",
  pink: "bg-tint-pink-soft text-brand-coral-strong",
  mint: "bg-tint-mint text-brand-teal",
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
        "inline-flex items-center gap-2 rounded-[var(--radius-sm)] px-3.5 py-1.5 text-xs font-medium whitespace-nowrap shadow-sm",
        tints[tint],
        className,
      )}
    >
      {children}
    </span>
  );
}
