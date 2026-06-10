import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { RealityTake } from "@/components/sections/reality-take";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { WhyYelobase } from "@/components/sections/why-yelobase";

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
      </main>
    </>
  );
}
