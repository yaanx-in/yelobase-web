"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { TagRow, AuthorRow, CoverMedia, type Post } from "./posts";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function BlogFeatured({ post }: { post: Post }) {
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
          <CoverMedia
            cover={post.cover}
            accent={post.accent}
            sizes="(max-width: 768px) 100vw, 40vw"
            className="min-h-[220px]"
          />

          <div className="bg-tint-lavender p-8 sm:p-10">
            <span className="inline-flex rounded-pill bg-tint-cream px-3 py-1 text-xs font-semibold text-[#8a6a12]">
              Featured Blog
            </span>
            <h2 className="mt-4 text-balance text-2xl font-bold leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
              <Link
                href={`/blog/${post.slug}`}
                className="transition-colors after:absolute after:inset-0 group-hover:text-brand-coral-strong"
              >
                {post.title}
              </Link>
            </h2>
            <TagRow tags={post.categories.map((c) => c.title)} className="mt-4" />
            <AuthorRow post={post} className="mt-6" />
          </div>
        </motion.article>
      </Container>
    </section>
  );
}
