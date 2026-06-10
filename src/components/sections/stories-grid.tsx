"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { cn } from "@/lib/utils";
import { TESTIMONIALS, STORY_FILTERS } from "@/lib/testimonials";

export function StoriesGrid() {
  const [active, setActive] = useState<(typeof STORY_FILTERS)[number]>("All");

  const filtered =
    active === "All"
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.category === active);

  return (
    <section className="bg-[var(--color-background)] pb-[var(--section-padding-y)]">
      <Container>
        {/* Filter tabs */}
        <div
          role="tablist"
          aria-label="Filter customer stories"
          className="mx-auto flex max-w-full flex-wrap justify-center gap-2"
        >
          {STORY_FILTERS.map((filter) => {
            const selected = active === filter;
            return (
              <button
                key={filter}
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(filter)}
                className={cn(
                  "min-h-11 rounded-pill px-4 text-sm font-medium transition-colors duration-[var(--duration-micro)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2",
                  selected
                    ? "bg-[var(--color-surface-dark)] text-white"
                    : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:bg-[var(--color-tint-lavender)]",
                )}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((t, i) => (
              <li key={t.name}>
                <TestimonialCard
                  testimonial={t}
                  featured={active === "All" && i === 0}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-12 text-center text-[var(--color-text-muted)]">
            More {active} stories coming soon.
          </p>
        )}
      </Container>
    </section>
  );
}
