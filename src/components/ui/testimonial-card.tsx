import { Avatar } from "@/components/ui/avatar";
import { Star } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/lib/testimonials";

export function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "size-4",
            i < rating ? "text-brand-purple" : "text-[var(--color-border)]",
          )}
        />
      ))}
    </div>
  );
}

export function TestimonialCard({
  testimonial,
  featured = false,
}: {
  testimonial: Testimonial;
  featured?: boolean;
}) {
  const t = testimonial;
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-md p-6 shadow-sm",
        featured
          ? "bg-[var(--color-surface-dark)] text-white"
          : "border border-[var(--color-border-subtle)] bg-[var(--color-background)]",
      )}
    >
      <Stars rating={t.rating} />
      <blockquote
        className={cn(
          "mt-4 flex-1 text-sm leading-relaxed",
          featured ? "text-white/80" : "text-[var(--color-text-secondary)]",
        )}
      >
        {t.quote}
      </blockquote>
      <div className="mt-6 flex items-center gap-3">
        <Avatar name={t.name} src={t.image} />
        <div>
          <p
            className={cn(
              "text-sm font-semibold",
              featured ? "text-white" : "text-[var(--color-text-primary)]",
            )}
          >
            {t.name}
          </p>
          <p
            className={cn(
              "text-xs",
              featured ? "text-white/60" : "text-[var(--color-text-muted)]",
            )}
          >
            {t.company} · {t.location}
          </p>
        </div>
      </div>
    </div>
  );
}
