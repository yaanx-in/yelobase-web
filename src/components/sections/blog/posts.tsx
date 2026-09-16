import Link from "next/link";
import Image from "next/image";
import type { PortableTextBlock } from "@portabletext/react";
import { cn } from "@/lib/utils";

export type Accent = "purple" | "coral" | "teal" | "amber";

export type Author = { name: string; role?: string; imageUrl?: string };
export type Category = { title: string; slug: string };
export type Cover = { url: string; alt: string } | null;

export type Post = {
  slug: string;
  title: string;
  categories: Category[];
  author: Author;
  date: string;
  accent: Accent;
  cover: Cover;
};

export type Article = Post & {
  readTime: string;
  excerpt: string;
  body: PortableTextBlock[];
  ogImageUrl?: string;
  publishedAt?: string;
};

const COVER: Record<Accent, string> = {
  purple: "from-[var(--color-surface-dark)] via-brand-purple-strong to-brand-purple",
  coral: "from-[var(--color-surface-dark)] via-brand-coral-strong to-brand-coral",
  teal: "from-[var(--color-surface-dark)] via-brand-teal to-brand-teal-bright",
  amber: "from-[var(--color-surface-dark)] via-[#8a6a12] to-brand-coral",
};

export const coverClass = (accent: Accent) => `bg-gradient-to-br ${COVER[accent]}`;

/** Cover image when set, else the accent gradient fallback. */
export function CoverMedia({
  cover,
  accent,
  className,
  sizes = "100vw",
}: {
  cover: Cover;
  accent: Accent;
  className?: string;
  sizes?: string;
}) {
  if (cover) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <Image src={cover.url} alt={cover.alt} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }
  return <div className={cn(coverClass(accent), className)} />;
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export function TagRow({ tags, className }: { tags: string[]; className?: string }) {
  if (!tags.length) return null;
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((t) => (
        <span
          key={t}
          className="rounded-md border border-[var(--color-border-subtle)] bg-[var(--color-background)] px-2 py-1 text-xs font-medium text-[var(--color-text-secondary)]"
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
  const { author } = post;
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {author.imageUrl ? (
        <Image
          src={author.imageUrl}
          alt={author.name}
          width={32}
          height={32}
          className="size-9 shrink-0 rounded-xl border-2 border-[var(--color-text-primary)] object-cover"
        />
      ) : (
        <span
          aria-hidden
          className={`inline-flex size-9 shrink-0 items-center justify-center rounded-xl border-2 border-[var(--color-text-primary)] text-[11px] font-bold text-white ${coverClass(post.accent)}`}
        >
          {initials(author.name)}
        </span>
      )}
      {stacked ? (
        <span className="leading-tight">
          <span className="block text-sm font-semibold text-[var(--color-text-primary)]">
            {author.name}
          </span>
          <span className="block text-xs text-[var(--color-text-muted)]">{post.date}</span>
        </span>
      ) : (
        <>
          <span className="text-sm font-semibold text-[var(--color-text-primary)]">
            {author.name}
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
      <CoverMedia
        cover={post.cover}
        accent={post.accent}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="aspect-[16/10] w-full rounded-[16px] transition-transform duration-[var(--duration-micro)] motion-safe:group-hover:-translate-y-1"
      />
      <h3 className="mt-4 line-clamp-3 text-lg font-semibold leading-snug text-[var(--color-text-primary)] transition-colors group-hover:text-brand-coral-strong">
        {post.title}
      </h3>
      <TagRow tags={post.categories.map((c) => c.title)} className="mt-3" />
      <AuthorRow post={post} stacked className="mt-4" />
    </Link>
  );
}
