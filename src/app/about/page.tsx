import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AboutHero } from "@/components/sections/about/hero";
import { AboutMission } from "@/components/sections/about/mission";
import { AboutValues } from "@/components/sections/about/values";
import { AboutTrackRecord } from "@/components/sections/about/track-record";
import { AboutWhyChoose } from "@/components/sections/about/why-choose";
import { AboutCta } from "@/components/sections/about/cta";

export const metadata: Metadata = {
  title: "About — Yelobase | Your trusted Zoho Partner",
  description:
    "We're passionate about transforming businesses through intelligent automation. With 10+ years of Zoho expertise and 100+ projects completed, YeloBase helps companies streamline operations and accelerate growth through custom automation and AI agent development.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main">
        <AboutHero />
        <AboutMission />
        <AboutValues />
        <AboutTrackRecord />
        <AboutWhyChoose />
        <AboutCta />
      </main>
      <Footer />
    </>
  );
}
