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
import { ARTICLES, getArticle } from "@/components/sections/blog/posts";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Blog — Yelobase" };
  return {
    title: `${article.title} — Yelobase Blog`,
    description: article.excerpt,
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <Header />
      <main id="main">
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
        <BlogOther />
        <WallCta />
      </main>
      <Footer />
    </>
  );
}
