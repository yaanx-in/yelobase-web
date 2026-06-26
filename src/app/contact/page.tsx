import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactHero } from "@/components/sections/contact/hero";
import { ContactProcess } from "@/components/sections/contact/process";
import { ContactForm } from "@/components/sections/contact/form";
import { ContactFaq } from "@/components/sections/contact/faq";

export const metadata: Metadata = {
  title: "Contact — Yelobase | Let's build something worth talking about",
  description:
    "Tell us what you're working on. We'll tell you exactly how we'd help, and what it would cost. Book a free 30-minute strategy call or send us a message — we reply within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main">
        <ContactHero />
        <ContactProcess />
        <ContactForm />
        <ContactFaq />
      </main>
      <Footer />
    </>
  );
}
