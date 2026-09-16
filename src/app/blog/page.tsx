import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BlogHero } from "@/components/sections/blog/hero";
import { BlogFeatured } from "@/components/sections/blog/featured";
import { BlogList } from "@/components/sections/blog/list";
import { WallCta } from "@/components/sections/wall/cta";
import { getPosts, getFeaturedPost } from "@/lib/sanity/blog";

export const metadata: Metadata = {
  title: "Blog Yelobase | Insights, trends & best practices",
  description:
    "The Yelobase blog insights, trends, and best practices on Zoho, automation, AI agents, and running a more efficient business.",
};

export default async function BlogPage() {
  const [posts, featured] = await Promise.all([getPosts(), getFeaturedPost()]);

  return (
    <>
      <Header />
      <main id="main">
        <BlogHero />
        {featured && <BlogFeatured post={featured} />}
        <BlogList posts={posts} />
        <WallCta />
      </main>
      <Footer />
    </>
  );
}
