import { cn } from "@/lib/utils";

// Initials avatar (no real photos available). Deterministic tint by name.
const TINTS = [
  "bg-tint-lavender text-brand-purple-strong",
  "bg-tint-mint text-brand-teal",
  "bg-tint-pink-soft text-brand-coral-strong",
  "bg-tint-cream text-[#8a6a12]",
];

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function Avatar({ name, className }: { name: string; className?: string }) {
  const tint = TINTS[name.length % TINTS.length];
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-full text-sm font-semibold",
        tint,
        className,
      )}
    >
      {initials(name)}
    </span>
  );
}
