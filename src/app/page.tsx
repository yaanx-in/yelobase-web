import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { RealityTake } from "@/components/sections/reality-take";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { WhyYelobase } from "@/components/sections/why-yelobase";
import { ZohoPartnership } from "@/components/sections/zoho-partnership";
import { Proof } from "@/components/sections/proof";
import { WhoWeWorkWith } from "@/components/sections/who-we-work-with";
import { CustomerStories } from "@/components/sections/customer-stories";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <TrustedBy />
        <RealityTake />
        <WhatWeDo />
        <WhyYelobase />
        <ZohoPartnership />
        <Proof />
        <WhoWeWorkWith />
        <CustomerStories />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
