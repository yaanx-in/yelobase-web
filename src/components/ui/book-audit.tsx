"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const EMBED_SRC = "https://bookings.nimbuspop.com/assets/embed.js";
const BOOKING_URL = "https://book.yelobase.com/portal-embed#/audit";
const OPEN_EVENT = "open-book-audit";

declare global {
  interface Window {
    Bookings?: {
      inlineEmbed: (opts: {
        url: string;
        parent: string;
        height: string;
      }) => void;
    };
  }
}

let scriptPromise: Promise<void> | null = null;
function loadEmbedScript() {
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = EMBED_SRC;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Failed to load booking embed"));
    document.head.appendChild(s);
  });
  return scriptPromise;
}

/** Styled button that opens the booking modal. Same props as <Button>. */
export function BookAuditButton({
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      {...props}
      onClick={(e) => {
        onClick?.(e);
        window.dispatchEvent(new Event(OPEN_EVENT));
      }}
    />
  );
}

/** Mount once (in the root layout). Renders the booking dialog on demand. */
export function BookAuditModal() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    let cancelled = false;
    loadEmbedScript()
      .then(() => {
        if (cancelled || !containerRef.current) return;
        containerRef.current.innerHTML = "";
        window.Bookings?.inlineEmbed({
          url: BOOKING_URL,
          parent: "#book-audit-container",
          height: "600px",
        });
      })
      .catch(console.error);

    return () => {
      cancelled = true;
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book a free audit"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-white p-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 text-2xl leading-none text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
        >
          &times;
        </button>
        <div id="book-audit-container" ref={containerRef} className="mt-6" />
      </div>
    </div>
  );
}
