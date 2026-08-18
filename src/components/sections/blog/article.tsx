"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Mail } from "@/components/ui/icon";
import { Container } from "@/components/layout/container";
import { TagRow, AuthorRow, coverClass, type Article, type Block } from "./posts";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

function Body({ blocks }: { blocks: Block[] }) {
  return (
    <div className="max-w-3xl">
      {blocks.map((b, i) => {
        const first = i === 0;
        switch (b.t) {
          case "lead":
            return (
              <p key={i} className="text-lg font-semibold leading-relaxed text-[var(--color-text-primary)]">
                {b.text}
              </p>
            );
          case "p":
            return (
              <p key={i} className={`${first ? "" : "mt-4"} leading-relaxed text-[var(--color-text-secondary)]`}>
                {b.text}
              </p>
            );
          case "h2":
            return (
              <h2 key={i} className="mt-10 text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-8 text-lg font-bold text-[var(--color-text-primary)]">
                {b.text}
              </h3>
            );
          case "ul":
            return (
              <ul
                key={i}
                className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-[var(--color-text-secondary)] marker:text-brand-coral"
              >
                {b.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            );
        }
      })}
    </div>
  );
}

function ShareIcon({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex size-9 items-center justify-center rounded-lg bg-[var(--color-background)] text-[var(--color-text-secondary)] shadow-sm transition-colors hover:text-brand-coral-strong"
    >
      {children}
    </a>
  );
}

function ShareBar({ title }: { title: string }) {
  const [url, setUrl] = useState("");
  useEffect(() => setUrl(window.location.href), []);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  return (
    <aside className="lg:sticky lg:top-28">
      <div className="flex flex-row items-center gap-3 rounded-2xl bg-tint-pink p-4 lg:flex-col lg:items-stretch">
        <span className="text-sm font-semibold text-[var(--color-text-primary)] lg:text-center">
          Share
        </span>
        <div className="flex gap-3 lg:flex-col">
          <ShareIcon href={`mailto:?subject=${t}&body=${u}`} label="Share by email">
            <Mail className="size-4" />
          </ShareIcon>
          <ShareIcon href={`https://www.linkedin.com/sharing/share-offsite/?url=${u}`} label="Share on LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.3 8.65 21 10.6 21 13.3V21h-4v-6.8c0-1.62-.03-3.7-2.25-3.7-2.26 0-2.6 1.76-2.6 3.58V21H9V9Z" />
            </svg>
          </ShareIcon>
          <ShareIcon href={`https://www.facebook.com/sharer/sharer.php?u=${u}`} label="Share on Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
              <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.87.24-1.46 1.5-1.46H17V3.96c-.28-.04-1.24-.12-2.36-.12-2.34 0-3.94 1.43-3.94 4.05V10H8v3h2.7v8h2.8Z" />
            </svg>
          </ShareIcon>
          <ShareIcon href={`https://twitter.com/intent/tweet?url=${u}&text=${t}`} label="Share on X">
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
              <path d="M18.9 2H22l-7.3 8.35L23.3 22h-6.75l-5.3-6.93L5.2 22H2l7.8-8.9L1.9 2h6.9l4.8 6.35L18.9 2Zm-1.18 18h1.87L7.36 3.9H5.36l12.36 16.1Z" />
            </svg>
          </ShareIcon>
        </div>
      </div>
    </aside>
  );
}

export function BlogArticle({ article }: { article: Article }) {
  return (
    <section className="bg-[var(--color-background)] pb-16 pt-4">
      <Container>
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          className="grid gap-8 lg:grid-cols-2 lg:items-center"
        >
          {/* placeholder cover — ponytail: swap with the real article image */}
          <div className={`aspect-[4/3] w-full rounded-[20px] ${coverClass(article.accent)}`} />
          <div>
            <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
              {article.title}
            </h1>
            <TagRow tags={article.tags} className="mt-4" />
            <AuthorRow post={article} meta={article.readTime} className="mt-6" />
          </div>
        </motion.div>

        {/* body + share */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_200px]">
          <Body blocks={article.body} />
          <ShareBar title={article.title} />
        </div>
      </Container>
    </section>
  );
}
