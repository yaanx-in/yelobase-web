"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from "@portabletext/react";
import { Container } from "@/components/layout/container";
import { urlFor } from "@/lib/sanity/image";
import { TagRow, AuthorRow, CoverMedia, type Article } from "./posts";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const PT_COMPONENTS: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">{children}</p>
    ),
    lead: ({ children }) => (
      <p className="text-lg font-semibold leading-relaxed text-[var(--color-text-primary)]">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-lg font-bold text-[var(--color-text-primary)]">{children}</h3>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-[var(--color-text-secondary)] marker:text-[var(--color-text-primary)]">
        {children}
      </ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-[var(--color-text-primary)]">{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-brand-coral-strong underline underline-offset-2"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) =>
      value?.asset ? (
        <Image
          src={urlFor(value).width(1600).auto("format").url()}
          alt={value.alt ?? ""}
          width={1600}
          height={900}
          sizes="(max-width: 768px) 100vw, 768px"
          className="mt-8 h-auto w-full rounded-2xl"
        />
      ) : null,
  },
};

function Body({ blocks }: { blocks: PortableTextBlock[] }) {
  return (
    <div className="max-w-3xl">
      <PortableText value={blocks} components={PT_COMPONENTS} />
    </div>
  );
}

export function BlogArticle({ article }: { article: Article }) {
  return (
    <section className="bg-[var(--color-background-warm)] pb-16 pt-4">
      <Container>
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          className="grid gap-8 lg:grid-cols-2 lg:items-center"
        >
          <CoverMedia
            cover={article.cover}
            accent={article.accent}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="aspect-[4/3] w-full rounded-[20px]"
          />
          <div>
            <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              {article.title}
            </h1>
            <TagRow tags={article.categories.map((c) => c.title)} className="mt-4" />
            <AuthorRow post={article} meta={article.readTime} className="mt-6" />
          </div>
        </motion.div>

        <div className="mt-12">
          <Body blocks={article.body} />
        </div>
      </Container>
    </section>
  );
}
