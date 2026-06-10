import { cn } from "@/lib/utils";

type LogoProps = {
  /** Color of the wordmark text; mark keeps brand colors. */
  tone?: "dark" | "light";
  className?: string;
  withWordmark?: boolean;
};

/**
 * Yelobase mark: two overlapping ribbons forming an "X" — coral over purple
 * (DESIGN.md §1). Wordmark optional.
 */
export function Logo({
  tone = "dark",
  className,
  withWordmark = true,
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden
        focusable="false"
      >
        {/* purple ribbon (back) */}
        <path
          d="M5 4.5 23 23.5"
          stroke="var(--color-brand-purple)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* coral ribbon (front) */}
        <path
          d="M23 4.5 5 23.5"
          stroke="var(--color-brand-coral)"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
      {withWordmark && (
        <span
          className={cn(
            "text-lg font-semibold tracking-tight",
            tone === "light"
              ? "text-[var(--color-text-on-dark)]"
              : "text-[var(--color-text-primary)]",
          )}
        >
          Yelobase
        </span>
      )}
    </span>
  );
}
