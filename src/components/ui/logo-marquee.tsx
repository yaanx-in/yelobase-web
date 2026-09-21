import Image from "next/image";

const LOGOS = [1, 2, 3, 4, 5, 6, 7].map((n) => `/graphics/trusted/logo-${n}.svg`);

function LogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-4 pr-4"
    >
      {LOGOS.map((src, i) => (
        <li key={src + i}>
          <div className="flex h-16 w-32 items-center justify-center overflow-hidden rounded-[var(--radius-sm)] border border-[var(--color-border-subtle)] bg-[var(--color-background)]">
            <Image
              src={src}
              alt="Client company logo"
              width={128}
              height={64}
              unoptimized
              className="h-full w-full object-cover"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

/**
 * Edge-to-edge auto-scrolling client-logo marquee. Two identical rows are
 * translated by exactly one row width (-50% of the track) via a CSS keyframe,
 * so the loop is seamless and runs on the compositor thread (no JS jank).
 * The global prefers-reduced-motion guard freezes it.
 */
export function LogoMarquee({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] ${className}`}
    >
      <div className="animate-marquee flex w-max">
        <LogoRow />
        <LogoRow ariaHidden />
      </div>
    </div>
  );
}
