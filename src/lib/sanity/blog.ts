import type { PortableTextBlock } from "@portabletext/react";
import { sanity } from "./client";
import { urlFor } from "./image";
import type { Accent, Author, Category, Cover, Post, Article } from "@/components/sections/blog/posts";

const ACCENTS: readonly Accent[] = ["purple", "coral", "teal", "amber"];

function normAccent(a: unknown): Accent {
  return (ACCENTS as readonly string[]).includes(a as string) ? (a as Accent) : "purple";
}

function fmtDate(iso?: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function coverFrom(img: any, title: string): Cover {
  if (!img?.asset) return null;
  return {
    url: urlFor(img).width(1200).height(750).fit("crop").auto("format").url(),
    alt: img.alt ?? title,
  };
}

function authorFrom(a: any): Author {
  if (!a) return { name: "" };
  return {
    name: a.name ?? "",
    role: a.role ?? undefined,
    imageUrl: a.image?.asset
      ? urlFor(a.image).width(96).height(96).fit("crop").auto("format").url()
      : undefined,
  };
}

type RawPost = {
  slug: string;
  title: string;
  date?: string;
  accent?: string;
  coverImage?: any;
  author?: any;
  categories?: Array<{ title: string; slug: string } | null>;
};
type RawArticle = RawPost & {
  readTime?: string;
  excerpt?: string;
  body?: PortableTextBlock[];
};
/* eslint-enable @typescript-eslint/no-explicit-any */

function toPost(r: RawPost): Post {
  return {
    slug: r.slug,
    title: r.title,
    categories: ((r.categories ?? []).filter(Boolean) as Category[]),
    author: authorFrom(r.author),
    date: fmtDate(r.date),
    accent: normAccent(r.accent),
    cover: coverFrom(r.coverImage, r.title),
  };
}

const POST_FIELDS = `
  "slug": slug.current,
  title,
  "date": publishedAt,
  accent,
  coverImage,
  author->{name, role, image},
  categories[]->{title, "slug": slug.current}
`;

// Cached; the /api/revalidate webhook busts the "post" tag on publish for instant updates.
const OPTS = { next: { revalidate: 60, tags: ["post"] } };

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
    publishedAt: row.date,
    ogImageUrl: row.coverImage?.asset
      ? urlFor(row.coverImage).width(1200).height(630).fit("crop").auto("format").url()
      : undefined,
  };
}

export async function getAllSlugs(): Promise<string[]> {
  return safeFetch<string[]>(
    `*[_type == "post" && defined(slug.current)].slug.current`,
    {},
    [],
  );
}
