import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BlogHero } from "@/components/sections/blog/hero";
import { BlogFeatured } from "@/components/sections/blog/featured";
import { BlogList } from "@/components/sections/blog/list";
import { WallCta } from "@/components/sections/wall/cta";

export const metadata: Metadata = {
  title: "Blog — Yelobase | Insights, trends & best practices",
  description:
    "The Yelobase blog — insights, trends, and best practices on Zoho, automation, AI agents, and running a more efficient business.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main id="main">
        <BlogHero />
        <BlogFeatured />
        <BlogList />
        <WallCta />
      </main>
      <Footer />
    </>
  );
}
