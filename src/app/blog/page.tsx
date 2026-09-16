import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BlogHero } from "@/components/sections/blog/hero";
import { BlogFeatured } from "@/components/sections/blog/featured";
import { BlogList } from "@/components/sections/blog/list";
import { WallCta } from "@/components/sections/wall/cta";
import { getPosts, getFeaturedPost } from "@/lib/sanity/blog";
import { SITE_URL } from "@/lib/site";

const title = "Blog Yelobase | Insights, trends & best practices";
const description =
  "The Yelobase blog insights, trends, and best practices on Zoho, automation, AI agents, and running a more efficient business.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/blog`,
    siteName: "Yelobase",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default async function BlogPage() {
  const [posts, featured] = await Promise.all([getPosts(), getFeaturedPost()]);
  const listPosts = featured ? posts.filter((p) => p.slug !== featured.slug) : posts;

  return (
    <>
      <Header />
      <main id="main" className="bg-[var(--color-background-warm)]">
        <BlogHero />
        {featured && <BlogFeatured post={featured} />}
        <BlogList posts={listPosts} />
        <WallCta className="bg-[var(--color-background-warm)]" />
      </main>
      <Footer />
    </>
  );
}
