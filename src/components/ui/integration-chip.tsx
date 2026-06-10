import { cn } from "@/lib/utils";

// Small white cards holding an integration's mark. We render simplified,
// recognizable glyphs (not official trademarked logos) per integration.
type Integration = "zoho" | "meta" | "odoo" | "whatsapp";

const MARKS: Record<Integration, React.ReactNode> = {
  zoho: (
    <span className="flex gap-0.5" aria-hidden>
      <span className="size-2 rounded-[2px] bg-[#e42527]" />
      <span className="size-2 rounded-[2px] bg-[#089949]" />
      <span className="size-2 rounded-[2px] bg-[#226db4]" />
      <span className="size-2 rounded-[2px] bg-[#f9b21d]" />
    </span>
  ),
  meta: (
    <svg width="22" height="14" viewBox="0 0 22 14" aria-hidden>
      <path
        d="M1 11C1 5 3 2 5.5 2 9 2 11 11 14 11s4-3 4-5-1-4-3-4-3 2-4 4"
        fill="none"
        stroke="#0081fb"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  ),
  odoo: <span className="text-xs font-semibold text-[#9c5789]">odoo</span>,
  whatsapp: (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
      <circle cx="10" cy="10" r="9" fill="#25d366" />
      <path
        d="M6.5 6.5c-.3 0-.6.1-.8.4-.3.3-.7.8-.7 1.8s.8 2.1.9 2.2c.1.2 1.5 2.4 3.7 3.2 1.8.7 2.2.6 2.6.5.4 0 1.2-.5 1.4-1 .2-.5.2-.9.1-1l-.6-.3s-1-.5-1.2-.6c-.2 0-.3-.1-.4.1l-.6.7c-.1.1-.2.1-.4 0-.2-.1-.8-.3-1.5-1-.6-.5-1-1.1-1.1-1.3-.1-.2 0-.3.1-.4l.3-.4q.15-.15.1-.3v-.4l-.6-1.4c-.1-.3-.3-.3-.4-.3z"
        fill="#fff"
      />
    </svg>
  ),
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
        "inline-flex size-12 items-center justify-center rounded-md bg-[var(--color-background)] shadow-md ring-1 ring-[var(--color-border-subtle)]",
        className,
      )}
      title={type}
    >
      {MARKS[type]}
    </span>
  );
}
