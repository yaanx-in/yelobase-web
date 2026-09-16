import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { ArrowRight } from "@/components/ui/icon";
import { BlogArticle } from "@/components/sections/blog/article";
import { BlogOther } from "@/components/sections/blog/other-blogs";
import { WallCta } from "@/components/sections/wall/cta";
import { getArticle, getAllSlugs, getPosts } from "@/lib/sanity/blog";
import { SITE_URL } from "@/lib/site";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: "Blog Yelobase" };

  const url = `${SITE_URL}/blog/${slug}`;
  const images = article.ogImageUrl ? [{ url: article.ogImageUrl, width: 1200, height: 630 }] : undefined;

  return {
    title: `${article.title} Yelobase Blog`,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url,
      siteName: "Yelobase",
      publishedTime: article.publishedAt,
      authors: article.author.name ? [article.author.name] : undefined,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: article.ogImageUrl ? [article.ogImageUrl] : undefined,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [article, posts] = await Promise.all([getArticle(slug), getPosts()]);
  if (!article) notFound();

  const others = posts.filter((p) => p.slug !== slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: article.ogImageUrl ? [article.ogImageUrl] : undefined,
    datePublished: article.publishedAt,
    author: article.author.name
      ? { "@type": "Person", name: article.author.name }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: "Yelobase",
      url: SITE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${slug}` },
  };

  return (
    <>
      <Header />
      <main id="main" className="bg-[var(--color-background-warm)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Container className="pt-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-brand-coral-strong"
          >
            <ArrowRight className="size-4 rotate-180" />
            Back to All Blogs
          </Link>
        </Container>
        <BlogArticle article={article} />
        <BlogOther posts={others} />
        <WallCta />
      </main>
      <Footer />
    </>
  );
}
