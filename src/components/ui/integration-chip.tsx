import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Clean white logo cards matching the Figma hero (rounded, soft shadow, ring).
// Simplified, recognizable marks for each integration.
type Integration = "zoho" | "meta" | "odoo";

const MARKS: Record<Integration, ReactNode> = {
  zoho: (
    <span className="flex items-center gap-1" aria-hidden>
      <span className="h-4 w-2.5 rounded-[3px] bg-[#e42527]" />
      <span className="h-4 w-2.5 rounded-[3px] bg-[#089949]" />
      <span className="h-4 w-2.5 rounded-[3px] bg-[#226db4]" />
      <span className="h-4 w-2.5 rounded-[3px] bg-[#f9b21d]" />
    </span>
  ),
  meta: (
    <svg width="30" height="20" viewBox="0 0 30 20" fill="none" aria-hidden>
      <path
        d="M3 16C3 8.5 5.4 4 8.8 4c2.8 0 4.6 2.6 6.2 5.6C16.6 6.6 18.4 4 21.2 4 24.6 4 27 8.5 27 16"
        stroke="#0081FB"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M3 16c0-3 1.4-5 3.4-5 2.6 0 4.4 3 6.1 5.6M27 16c0-3-1.4-5-3.4-5-2.6 0-4.4 3-6.1 5.6"
        stroke="#0064E1"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
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
        "inline-flex size-14 items-center justify-center rounded-2xl bg-white shadow-[0_8px_24px_rgba(18,17,21,0.10)] ring-1 ring-black/5",
        className,
      )}
      title={type}
    >
      {MARKS[type]}
    </span>
  );
}
