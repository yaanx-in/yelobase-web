import { cn } from "@/lib/utils";

export type Post = {
  title: string;
  tags: string[];
  author: string;
  date: string;
  accent: "purple" | "coral" | "teal" | "amber";
};

const COVER: Record<Post["accent"], string> = {
  purple: "from-[var(--color-surface-dark)] via-brand-purple-strong to-brand-purple",
  coral: "from-[var(--color-surface-dark)] via-brand-coral-strong to-brand-coral",
  teal: "from-[var(--color-surface-dark)] via-brand-teal to-brand-teal-bright",
  amber: "from-[var(--color-surface-dark)] via-[#8a6a12] to-brand-coral",
};

export const coverClass = (accent: Post["accent"]) =>
  `bg-gradient-to-br ${COVER[accent]}`;

const TITLE = "The Impact of Technology on the Workplace: How Technology is Changing";
const TAGS = ["Technology", "AI", "Innovation"];
const ACCENTS: Post["accent"][] = ["purple", "coral", "teal", "amber"];

// ponytail: placeholder posts — swap title/tags/author/date/cover with real content (or wire to MDX/CMS).
export const FEATURED: Post = {
  title: TITLE,
  tags: TAGS,
  author: "Tracey Wilson",
  date: "June 11, 2026",
  accent: "purple",
};

export const POSTS: Post[] = Array.from({ length: 9 }, (_, i) => ({
  title: TITLE,
  tags: TAGS,
  author: "Tracey Wilson",
  date: "June 11, 2026",
  accent: ACCENTS[i % ACCENTS.length],
}));

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
  className,
}: {
  post: Post;
  stacked?: boolean;
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
        </>
      )}
    </div>
  );
}
