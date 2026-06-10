import { cn } from "@/lib/utils";

/**
 * Isometric Yelobase "X" — two crossed ribbons (coral over purple) with a
 * subtle extruded edge, echoing the 3D hero object in Figma. Pure SVG so it
 * scales crisply and needs no asset. Decorative.
 */
export function IsoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 320"
      className={cn("h-auto w-full", className)}
      role="img"
      aria-label="Yelobase mark"
    >
      <defs>
        <linearGradient id="iso-coral" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff8a8a" />
          <stop offset="1" stopColor="#ff7070" />
        </linearGradient>
        <linearGradient id="iso-purple" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#9d82ff" />
          <stop offset="1" stopColor="#8a6bff" />
        </linearGradient>
      </defs>
      <g transform="translate(160 168) skewY(-12) scale(1 0.92)">
        {/* purple ribbon, back, with extrude */}
        <g transform="rotate(45)">
          <rect x="-22" y="84" width="44" height="40" rx="10" fill="#5e4bcf" />
          <rect x="-118" y="-22" width="40" height="44" rx="10" fill="#5e4bcf" />
          <rect
            x="-110"
            y="-110"
            width="220"
            height="44"
            rx="22"
            fill="url(#iso-purple)"
            transform="translate(0 88)"
          />
          <rect
            x="-22"
            y="-110"
            width="44"
            height="220"
            rx="22"
            fill="url(#iso-purple)"
          />
        </g>
        {/* coral ribbon, front, with extrude */}
        <g transform="rotate(-45)">
          <rect x="-22" y="84" width="44" height="40" rx="10" fill="#d94f4f" />
          <rect
            x="-110"
            y="-110"
            width="220"
            height="44"
            rx="22"
            fill="url(#iso-coral)"
            transform="translate(0 88)"
          />
          <rect
            x="-22"
            y="-110"
            width="44"
            height="220"
            rx="22"
            fill="url(#iso-coral)"
          />
        </g>
      </g>
    </svg>
  );
}
