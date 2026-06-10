import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Clean white logo cards matching the Figma hero (rounded, soft shadow, ring).
// Simplified, recognizable marks for each integration.
type Integration = "zoho" | "meta" | "odoo";

const MARKS: Record<Integration, ReactNode> = {
  zoho: (
    <span className="flex flex-col items-center gap-1" aria-hidden>
      <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
        <rect x="0" y="1" width="8" height="14" rx="4" fill="#e42527" />
        <rect x="10.5" y="1" width="8" height="14" rx="4" fill="#089949" />
        <rect x="21" y="1" width="8" height="14" rx="4" fill="#226db4" />
        <rect x="31.5" y="1" width="8" height="14" rx="4" fill="#f9b21d" />
      </svg>
      <span className="text-[7px] font-bold tracking-[0.18em] text-[#3a3a3a]">
        ZOHO
      </span>
    </span>
  ),
  meta: (
    <span className="flex items-center gap-1" aria-hidden>
      <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
        <path
          d="M1.4 11.2C1.4 5.6 3.3 2 6 2c2.1 0 3.6 1.9 5 4.6C12.4 3.9 13.9 2 16 2c2.7 0 4.6 3.6 4.6 9.2"
          stroke="#0081FB"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M1.4 11.2c0-2.4 1-4 2.5-4 2 0 3.4 2.5 4.8 4.8M20.6 11.2c0-2.4-1-4-2.5-4-2 0-3.4 2.5-4.8 4.8"
          stroke="#0064E1"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="text-[13px] font-semibold tracking-tight text-[#1c2b33]">
        Meta
      </span>
    </span>
  ),
  odoo: <span className="text-sm font-bold lowercase text-[#714b67]">odoo</span>,
};

export function IntegrationChip({
  type,
  className,
}: {
  type: Integration;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-14 min-w-14 items-center justify-center rounded-2xl bg-white px-3 shadow-[0_8px_24px_rgba(18,17,21,0.10)] ring-1 ring-black/5",
        className,
      )}
      title={type}
    >
      {MARKS[type]}
    </span>
  );
}
