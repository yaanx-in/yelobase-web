import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FlipCardProps = {
  front: ReactNode;
  back: ReactNode;
  /** Tailwind bg class for the back face (each card a different color). */
  backClassName?: string;
  className?: string;
};

/**
 * 3D flip card. Flips on hover AND keyboard focus-within (so it's reachable
 * without a pointer). Both faces stay in the DOM for screen readers. Under
 * prefers-reduced-motion the flip is instant (no animated rotation).
 */
export function FlipCard({
  front,
  back,
  backClassName,
  className,
}: FlipCardProps) {
  return (
    <div className={cn("group h-64 [perspective:1200px]", className)}>
      <div
        className={cn(
          "relative h-full w-full transition-transform duration-500 ease-[var(--ease-out)] [transform-style:preserve-3d]",
          "group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]",
          "motion-reduce:transition-none",
        )}
      >
        <div className="absolute inset-0 flex flex-col rounded-md border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-6 [backface-visibility:hidden]">
          {front}
        </div>
        <div
          className={cn(
            "absolute inset-0 flex flex-col rounded-md p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]",
            backClassName ?? "bg-tint-lavender",
          )}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
