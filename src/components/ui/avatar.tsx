import Image from "next/image";
import { cn } from "@/lib/utils";

// Photo avatar when an image is provided; otherwise a deterministic initials chip.
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

export function Avatar({
  name,
  src,
  className,
}: {
  name: string;
  src?: string;
  className?: string;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={name}
        width={40}
        height={40}
        className={cn("size-10 rounded-full object-cover", className)}
      />
    );
  }

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
