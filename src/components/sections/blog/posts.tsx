import Link from "next/link";
import type { PortableTextBlock } from "@portabletext/react";
import { cn } from "@/lib/utils";

export type Post = {
  slug: string;
  title: string;
  tags: string[];
  author: string;
  date: string;
  accent: "purple" | "coral" | "teal" | "amber";
};

export type Article = Post & {
  readTime: string;
  excerpt: string;
  body: PortableTextBlock[];
};

const COVER: Record<Post["accent"], string> = {
  purple: "from-[var(--color-surface-dark)] via-brand-purple-strong to-brand-purple",
  coral: "from-[var(--color-surface-dark)] via-brand-coral-strong to-brand-coral",
  teal: "from-[var(--color-surface-dark)] via-brand-teal to-brand-teal-bright",
  amber: "from-[var(--color-surface-dark)] via-[#8a6a12] to-brand-coral",
};

export const coverClass = (accent: Post["accent"]) =>
  `bg-gradient-to-br ${COVER[accent]}`;

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export function TagRow({ tags, className }: { tags: string[]; className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((t) => (
        <span
          key={t}
          className="rounded-md border border-[var(--color-border-subtle)] bg-[var(--color-background)] px-2 py-0.5 text-[11px] font-medium text-[var(--color-text-secondary)]"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export function AuthorRow({
  post,
  stacked = false,
  meta,
  className,
}: {
  post: Post;
  stacked?: boolean;
  meta?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span
        aria-hidden
        className={`inline-flex size-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white ${coverClass(post.accent)}`}
      >
        {initials(post.author)}
      </span>
      {stacked ? (
        <span className="leading-tight">
          <span className="block text-sm font-semibold text-[var(--color-text-primary)]">
            {post.author}
          </span>
          <span className="block text-xs text-[var(--color-text-muted)]">{post.date}</span>
        </span>
      ) : (
        <>
          <span className="text-sm font-semibold text-[var(--color-text-primary)]">
            {post.author}
          </span>
          <span aria-hidden className="text-[var(--color-text-muted)]">
            &middot;
          </span>
          <span className="text-sm text-[var(--color-text-muted)]">{post.date}</span>
          {meta && (
            <>
              <span aria-hidden className="text-[var(--color-text-muted)]">
                &middot;
              </span>
              <span className="text-sm text-[var(--color-text-muted)]">{meta}</span>
            </>
          )}
        </>
      )}
    </div>
  );
}

/** Blog card links to the article. CSS hover keeps it server-renderable. */
export function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col focus-visible:outline-none">
      <div
        className={`aspect-[16/10] w-full rounded-[16px] ${coverClass(post.accent)} transition-transform duration-[var(--duration-micro)] motion-safe:group-hover:-translate-y-1`}
      />
      <h3 className="mt-4 line-clamp-3 text-lg font-semibold leading-snug text-[var(--color-text-primary)] transition-colors group-hover:text-brand-coral-strong">
        {post.title}
      </h3>
      <TagRow tags={post.tags} className="mt-3" />
      <AuthorRow post={post} stacked className="mt-4" />
    </Link>
  );
}
