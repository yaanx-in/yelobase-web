import type { PortableTextBlock } from "@portabletext/react";
import { sanity } from "./client";
import type { Post, Article } from "@/components/sections/blog/posts";

const ACCENTS: readonly Post["accent"][] = ["purple", "coral", "teal", "amber"];

function normAccent(a: unknown): Post["accent"] {
  return (ACCENTS as readonly string[]).includes(a as string)
    ? (a as Post["accent"])
    : "purple";
}

function fmtDate(iso?: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

type RawPost = {
  slug: string;
  title: string;
  tags?: string[];
  author?: string;
  date?: string;
  accent?: string;
};
type RawArticle = RawPost & {
  readTime?: string;
  excerpt?: string;
  body?: PortableTextBlock[];
};

const toPost = (r: RawPost): Post => ({
  slug: r.slug,
  title: r.title,
  tags: r.tags ?? [],
  author: r.author ?? "",
  date: fmtDate(r.date),
  accent: normAccent(r.accent),
});

const POST_FIELDS = `"slug": slug.current, title, tags, author, "date": publishedAt, accent`;

// Content is fetched fresh at most once per 60s (ISR); publishing shows up automatically.
const OPTS = { next: { revalidate: 60 } } as const;

// Any API failure (empty/private/unreachable dataset) degrades to empty
// rather than breaking the build or the page render.
async function safeFetch<T>(query: string, params: Record<string, unknown>, fallback: T): Promise<T> {
  try {
    return await sanity.fetch<T>(query, params, OPTS);
  } catch (err) {
    console.error("[sanity] fetch failed:", err);
    return fallback;
  }
}

export async function getPosts(): Promise<Post[]> {
  const rows = await safeFetch<RawPost[]>(
    `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){${POST_FIELDS}}`,
    {},
    [],
  );
  return rows.map(toPost);
}

export async function getFeaturedPost(): Promise<Post | null> {
  const row = await safeFetch<RawPost | null>(
    `*[_type == "post" && featured == true && defined(slug.current)] | order(publishedAt desc)[0]{${POST_FIELDS}}`,
    {},
    null,
  );
  return row ? toPost(row) : null;
}

export async function getArticle(slug: string): Promise<Article | null> {
  const row = await safeFetch<RawArticle | null>(
    `*[_type == "post" && slug.current == $slug][0]{${POST_FIELDS}, readTime, excerpt, body}`,
    { slug },
    null,
  );
  if (!row) return null;
  return {
    ...toPost(row),
    readTime: row.readTime ?? "",
    excerpt: row.excerpt ?? "",
    body: row.body ?? [],
  };
}

export async function getAllSlugs(): Promise<string[]> {
  return safeFetch<string[]>(
    `*[_type == "post" && defined(slug.current)].slug.current`,
    {},
    [],
  );
}
