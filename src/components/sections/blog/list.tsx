"use client";

import { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ChevronDown, ArrowRight } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";
import { POSTS, BlogCard } from "./posts";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const CATEGORIES = ["All Blogs", "Technology", "AI", "Innovation"] as const;

const gridParent: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const gridChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

export function BlogList() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All Blogs");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () => (category === "All Blogs" ? POSTS : POSTS.filter((p) => p.tags.includes(category))),
    [category],
  );

  return (
    <section className="bg-[var(--color-background)] pb-[var(--section-padding-y)] pt-8">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
            See what else is new
          </h2>

          <div className="relative w-full sm:w-56">
            <select
              aria-label="Filter articles by category"
              value={category}
              onChange={(e) => setCategory(e.target.value as (typeof CATEGORIES)[number])}
              className="w-full appearance-none rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2.5 pr-10 text-sm text-[var(--color-text-primary)] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden
              className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[var(--color-text-muted)]"
            />
          </div>
        </div>

        <motion.div
          key={category}
          variants={gridParent}
          initial="hidden"
          animate="show"
          className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((post, i) => (
            <motion.div key={i} variants={gridChild}>
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination — ponytail: presentational until posts are paginated from a CMS/MDX source */}
        <nav aria-label="Pagination" className="mt-14 flex items-center justify-center gap-2">
          <button
            aria-label="Previous page"
            className="inline-flex size-9 items-center justify-center rounded-lg text-brand-coral-strong transition-colors hover:bg-[var(--color-surface)] disabled:opacity-40"
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            <ArrowRight aria-hidden className="size-4 rotate-180" />
          </button>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              aria-current={n === page ? "page" : undefined}
              onClick={() => setPage(n)}
              className={`inline-flex size-9 items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
                n === page
                  ? "bg-brand-coral text-white"
                  : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)]"
              }`}
            >
              {n}
            </button>
          ))}
          <button
            aria-label="Next page"
            className="inline-flex size-9 items-center justify-center rounded-lg text-brand-coral-strong transition-colors hover:bg-[var(--color-surface)] disabled:opacity-40"
            disabled={page === 5}
            onClick={() => setPage((p) => Math.min(5, p + 1))}
          >
            <ArrowRight aria-hidden className="size-4" />
          </button>
        </nav>
      </Container>
    </section>
  );
}
