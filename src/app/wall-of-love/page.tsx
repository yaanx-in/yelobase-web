import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WallHero } from "@/components/sections/wall/hero";
import { WallStats } from "@/components/sections/wall/stats";
import { WallTestimonials } from "@/components/sections/wall/testimonials";
import { WallCta } from "@/components/sections/wall/cta";

export const metadata: Metadata = {
  title: "Wall of Love — Yelobase | Real client reviews",
  description:
    "Real, verified reviews from the businesses we've built for. 50+ happy clients, 100+ projects delivered, a 5.0 average rating across 15+ countries — every word straight from our Upwork-verified clients.",
};

export default function WallOfLovePage() {
  return (
    <>
      <Header />
      <main id="main">
        <WallHero />
        <WallStats />
        <WallTestimonials />
        <WallCta />
      </main>
      <Footer />
    </>
  );
}
