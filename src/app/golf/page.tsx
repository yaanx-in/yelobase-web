import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GolfHero } from "@/components/sections/golf/hero";
import { GolfCaseStudy } from "@/components/sections/golf/case-study";
import { GolfAboutAcademy } from "@/components/sections/golf/about-academy";
import { GolfReality } from "@/components/sections/golf/reality";
import { GolfWhatWeBuild } from "@/components/sections/golf/what-we-build";
import { GolfWhyYelobase } from "@/components/sections/golf/why-yelobase";
import { GolfFaq } from "@/components/sections/golf/faq";
import { GolfCta } from "@/components/sections/golf/cta";

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
        <GolfCaseStudy />
        <GolfAboutAcademy />
        <GolfReality />
        <GolfWhatWeBuild />
        <GolfWhyYelobase />
        <GolfFaq />
        <GolfCta />
      </main>
      <Footer />
    </>
  );
}
