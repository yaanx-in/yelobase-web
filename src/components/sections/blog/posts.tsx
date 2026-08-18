import Link from "next/link";
import { cn } from "@/lib/utils";

export type Post = {
  slug: string;
  title: string;
  tags: string[];
  author: string;
  date: string;
  accent: "purple" | "coral" | "teal" | "amber";
};

export type Block =
  | { t: "lead"; text: string }
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] };

export type Article = Post & { readTime: string; excerpt: string; body: Block[] };

const COVER: Record<Post["accent"], string> = {
  purple: "from-[var(--color-surface-dark)] via-brand-purple-strong to-brand-purple",
  coral: "from-[var(--color-surface-dark)] via-brand-coral-strong to-brand-coral",
  teal: "from-[var(--color-surface-dark)] via-brand-teal to-brand-teal-bright",
  amber: "from-[var(--color-surface-dark)] via-[#8a6a12] to-brand-coral",
};

export const coverClass = (accent: Post["accent"]) =>
  `bg-gradient-to-br ${COVER[accent]}`;

const CARD_TITLE = "The Impact of Technology on the Workplace: How Technology is Changing";
const TAGS = ["Technology", "AI", "Innovation"];
const ACCENTS: Post["accent"][] = ["purple", "coral", "teal", "amber"];

// ponytail: placeholder posts — swap title/tags/author/date/cover/slug with real content (or wire to MDX/CMS).
// All placeholder cards link to the one real article below until more are added.
const ARTICLE_SLUG = "the-future-of-remote-work";

export const FEATURED: Post = {
  slug: ARTICLE_SLUG,
  title: CARD_TITLE,
  tags: TAGS,
  author: "Tracey Wilson",
  date: "June 11, 2026",
  accent: "purple",
};

export const POSTS: Post[] = Array.from({ length: 9 }, (_, i) => ({
  slug: ARTICLE_SLUG,
  title: CARD_TITLE,
  tags: TAGS,
  author: "Tracey Wilson",
  date: "June 11, 2026",
  accent: ACCENTS[i % ACCENTS.length],
}));

export const ARTICLES: Article[] = [
  {
    slug: ARTICLE_SLUG,
    title: "The Future of Remote Work: Trends Shaping Modern Careers",
    tags: TAGS,
    author: "Tracey Wilson",
    date: "June 11, 2026",
    readTime: "6 min read",
    accent: "purple",
    excerpt:
      "Remote work has transformed from a niche benefit into a mainstream expectation. Advances in technology, changing employee preferences, and global business needs have reshaped how organizations think about productivity and collaboration.",
    body: [
      {
        t: "lead",
        text: "Remote work has transformed from a niche benefit into a mainstream expectation. Advances in technology, changing employee preferences, and global business needs have reshaped how organizations think about productivity and collaboration.",
      },
      {
        t: "p",
        text: "Great content ideas can come from a wide variety of methods. Here are a few tried and tested ones outside of using a content idea generator.",
      },
      { t: "h2", text: "Why Remote Work Continues to Grow" },
      {
        t: "p",
        text: "Several factors contribute to the ongoing popularity of remote and hybrid work models:",
      },
      {
        t: "ul",
        items: [
          "Increased flexibility for employees",
          "Reduced operational costs for businesses",
          "Access to a broader global talent pool",
          "Improved work-life balance",
          "Advances in collaboration tools and cloud technology",
        ],
      },
      {
        t: "p",
        text: "Organizations that adapt effectively often see improvements in employee satisfaction and retention.",
      },
      { t: "h2", text: "Emerging Trends" },
      { t: "h3", text: "1. Hybrid Work Becomes the Standard" },
      {
        t: "p",
        text: "Many companies are moving toward hybrid arrangements that combine office and remote work. This model allows employees to enjoy flexibility while maintaining opportunities for in-person collaboration.",
      },
      { t: "p", text: "Businesses are experimenting with:" },
      {
        t: "ul",
        items: [
          "Flexible office schedules",
          "Shared workspaces",
          "Team-based office days",
          "Remote-first communication practices",
        ],
      },
      { t: "h3", text: "2. Focus on Employee Well-Being" },
      { t: "p", text: "Employee wellness is becoming a central part of workplace strategy." },
      { t: "p", text: "Companies are investing in:" },
      {
        t: "ul",
        items: [
          "Mental health support programs",
          "Flexible work hours",
          "Wellness stipends",
          "Virtual social events",
          "Professional development initiatives",
        ],
      },
      {
        t: "p",
        text: "A healthy workforce often leads to increased engagement and productivity.",
      },
      { t: "h3", text: "3. AI-Powered Productivity Tools" },
      {
        t: "p",
        text: "Artificial intelligence is changing how teams work by automating repetitive tasks and improving efficiency.",
      },
      {
        t: "p",
        text: "As AI tools mature, they are expected to become a standard part of everyday workflows.",
      },
      { t: "h3", text: "Conclusion" },
      {
        t: "p",
        text: "Remote work is no longer simply a temporary solution—it's an evolving way of working that continues to reshape industries worldwide.",
      },
      {
        t: "p",
        text: "Professionals who embrace flexibility, develop digital skills, and adapt to new technologies will be well-positioned for success in the years ahead.",
      },
      {
        t: "p",
        text: "The future of work is likely to be more connected, more flexible, and more focused on creating meaningful experiences for employees regardless of where they work.",
      },
    ],
  },
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);

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

/** Blog card — links to the article. CSS hover keeps it server-renderable. */
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
