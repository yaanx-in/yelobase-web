import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ZohoHero } from "@/components/sections/zoho/hero";
import { ZohoApplications } from "@/components/sections/zoho/applications";
import { ZohoCapabilities } from "@/components/sections/zoho/capabilities";
import { ZohoIndustries } from "@/components/sections/zoho/industries";
import { ZohoCta } from "@/components/sections/zoho/cta";

export const metadata: Metadata = {
  title: "Zoho Services — Yelobase | Official Zoho Authorized Partner",
  description:
    "Zoho is powerful — most businesses use 20% of it. As a Certified Zoho Authorized Partner with 10+ years of experience, Yelobase unlocks the other 80% through implementation, automation, and deep integration built around how you work.",
};

export default function ZohoServicesPage() {
  return (
    <>
      <Header />
      <main id="main">
        <ZohoHero />
        <ZohoApplications />
        <ZohoCapabilities />
        <ZohoIndustries />
        <ZohoCta />
      </main>
      <Footer />
    </>
  );
}
