"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";
import { POSTS, BlogCard } from "./posts";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const parent: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const child: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
};

export function BlogOther() {
  const posts = POSTS.slice(0, 3);

  return (
    <section className="bg-[var(--color-background)] py-[var(--section-padding-y)]">
      <Container>
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-3xl">
            Other Blogs
          </h2>
          {/* ponytail: presentational arrows until posts paginate from a real source */}
          <div className="flex gap-2" aria-hidden>
            <span className="inline-flex size-9 items-center justify-center rounded-lg text-[var(--color-text-muted)]">
              <ArrowRight className="size-4 rotate-180" />
            </span>
            <span className="inline-flex size-9 items-center justify-center rounded-lg text-brand-coral-strong">
              <ArrowRight className="size-4" />
            </span>
          </div>
        </div>

        <motion.div
          variants={parent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.map((post, i) => (
            <motion.div key={i} variants={child}>
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
