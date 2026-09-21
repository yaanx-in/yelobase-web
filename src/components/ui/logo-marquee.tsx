import Image from "next/image";

const LOGOS = [1, 2, 3, 4, 5, 6, 7].map((n) => `/graphics/trusted/logo-${n}.svg`);

// One "sequence" must be wider than the viewport, otherwise translateX(-50%)
// reveals a blank gap at the loop boundary on wide/full-bleed layouts (the
// logos appear to "restart from the first"). Repeating the set makes a single
// sequence ~3000px+ wide; two identical sequences + -50% loop seamlessly.
const SEQUENCE = [...LOGOS, ...LOGOS, ...LOGOS];

function LogoSequence({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-4 pr-4"
    >
      {SEQUENCE.map((src, i) => (
        <li key={i}>
          <div className="flex h-16 w-32 items-center justify-center overflow-hidden rounded-[var(--radius-sm)] border border-[var(--color-border-subtle)] bg-[var(--color-background)]">
            <Image
              src={src}
              alt=""
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
 * Edge-to-edge auto-scrolling client-logo marquee. Two identical, viewport-wide
 * sequences are translated by exactly one sequence width (-50% of the track)
 * via a CSS keyframe, so the loop is continuous and seamless (compositor
 * thread, no JS jank, no restart gap). The global reduced-motion guard freezes it.
 */
export function LogoMarquee({ className = "" }: { className?: string }) {
  return (
    <div
      aria-label="Trusted by our client companies"
      className={`relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] ${className}`}
    >
      <div className="animate-marquee flex w-max">
        <LogoSequence />
        <LogoSequence ariaHidden />
      </div>
    </div>
  );
}
