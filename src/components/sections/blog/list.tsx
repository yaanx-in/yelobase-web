"use client";

import { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ChevronDown, ArrowRight } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";
import { BlogCard, type Post } from "./posts";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const PAGE_SIZE = 9;

const gridParent: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const gridChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

export function BlogList({ posts }: { posts: Post[] }) {
  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => p.categories.forEach((c) => set.add(c.title)));
    return ["All Blogs", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [posts]);

  const [category, setCategory] = useState("All Blogs");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () =>
      category === "All Blogs"
        ? posts
        : posts.filter((p) => p.categories.some((c) => c.title === category)),
    [category, posts],
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const pageItems = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  return (
    <section className="bg-[var(--color-background)] pb-[var(--section-padding-y)] pt-8">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
            See what else is new
          </h2>

          {categories.length > 1 && (
            <div className="relative w-full sm:w-56">
              <select
                aria-label="Filter articles by category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setPage(1);
                }}
                className="w-full appearance-none rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2.5 pr-10 text-sm text-[var(--color-text-primary)] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple"
              >
                {categories.map((c) => (
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
          )}
        </div>

        {pageItems.length === 0 ? (
          <p className="mt-12 text-[var(--color-text-secondary)]">
            No articles here yet — check back soon.
          </p>
        ) : (
          <motion.div
            key={`${category}-${current}`}
            variants={gridParent}
            initial="hidden"
            animate="show"
            className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {pageItems.map((post) => (
              <motion.div key={post.slug} variants={gridChild}>
                <BlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {totalPages > 1 && (
          <nav aria-label="Pagination" className="mt-14 flex items-center justify-center gap-2">
            <button
              aria-label="Previous page"
              className="inline-flex size-9 items-center justify-center rounded-lg text-brand-coral-strong transition-colors hover:bg-[var(--color-surface)] disabled:opacity-40"
              disabled={current === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              <ArrowRight aria-hidden className="size-4 rotate-180" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                aria-current={n === current ? "page" : undefined}
                onClick={() => setPage(n)}
                className={`inline-flex size-9 items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
                  n === current
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
              disabled={current === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              <ArrowRight aria-hidden className="size-4" />
            </button>
          </nav>
        )}
      </Container>
    </section>
  );
}
