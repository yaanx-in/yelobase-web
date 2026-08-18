"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { FEATURED, TagRow, AuthorRow } from "./posts";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function BlogFeatured() {
  return (
    <section className="bg-[var(--color-background)] pb-10 pt-6">
      <Container>
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          className="group relative grid overflow-hidden rounded-[24px] border border-[var(--color-border-subtle)] shadow-sm transition-shadow hover:shadow-lg md:grid-cols-[minmax(0,40%)_1fr]"
        >
          {/* placeholder cover — ponytail: swap with the real article image */}
          <div className="relative min-h-[220px] bg-gradient-to-br from-[var(--color-surface-dark)] via-brand-purple-strong to-brand-coral" />

          <div className="bg-tint-lavender p-8 sm:p-10">
            <span className="inline-flex rounded-pill bg-tint-cream px-3 py-1 text-xs font-semibold text-[#8a6a12]">
              Featured Blog
            </span>
            <h2 className="mt-4 text-balance text-2xl font-bold leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
              <Link
                href={`/blog/${FEATURED.slug}`}
                className="transition-colors after:absolute after:inset-0 group-hover:text-brand-coral-strong"
              >
                {FEATURED.title}
              </Link>
            </h2>
            <TagRow tags={FEATURED.tags} className="mt-4" />
            <AuthorRow post={FEATURED} className="mt-6" />
          </div>
        </motion.article>
      </Container>
    </section>
  );
}
