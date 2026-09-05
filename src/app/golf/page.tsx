import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GolfHero } from "@/components/sections/golf/hero";
import { GolfReality } from "@/components/sections/golf/reality";
import { GolfProcess } from "@/components/sections/golf/process";
import { GolfResults } from "@/components/sections/golf/results";
import { GolfTestimonials } from "@/components/sections/golf/testimonials";
import { GolfCta } from "@/components/sections/golf/cta";
import { GolfFaq } from "@/components/sections/golf/faq";

export const metadata: Metadata = {
  title:
    "Golf Academy Automation — Yelobase | Run Your Academy, Not Your Spreadsheets",
  description:
    "We automate bookings, billing, and operations for golf academies using Zoho and Golf Manager so your coaches spend their time on the course, not in admin. Official Zoho Partner. Book a free demo.",
};

export default function GolfPage() {
  return (
    <>
      <Header />
      <main id="main">
        <GolfHero />
        <GolfReality />
        <GolfProcess />
        <GolfResults />
        <GolfTestimonials />
        <GolfCta />
        <GolfFaq />
      </main>
      <Footer />
    </>
  );
}
