import { cn } from "@/lib/utils";

type LogoProps = {
  /** Color of the wordmark text (mark-only variant). */
  tone?: "dark" | "light";
  className?: string;
  withWordmark?: boolean;
};

/**
 * Yelobase logo. The full lockup uses the real brand asset
 * (public/brand/logo.svg). The mark-only variant (withWordmark={false}) uses
 * an inline coral-over-purple "X" for small placements (e.g. on coral fills).
 */
export function Logo({
  tone = "dark",
  className,
  withWordmark = true,
}: LogoProps) {
  if (withWordmark) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/brand/logo.svg"
        alt="Yelobase"
        width={123}
        height={40}
        className={cn("h-8 w-auto", className)}
      />
    );
  }

  return (
    <span className={cn("inline-flex items-center", className)} aria-label="Yelobase">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden focusable="false">
        <path
          d="M5 4.5 23 23.5"
          stroke="var(--color-brand-purple)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M23 4.5 5 23.5"
          stroke={tone === "light" ? "#ffffff" : "var(--color-brand-coral)"}
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
