import type { Metadata } from "next";
import Script from "next/script";
import { Inter, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { BookAuditModal } from "@/components/ui/book-audit";

// Fonts confirmed from Figma: IBM Plex Mono (display hero & CTAs),
// IBM Plex Sans (headings), Inter (body). Components reference the
// --font-mono / --font-heading / --font-sans tokens only.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "Yelobase Your Business Systems, Properly Built and Owned",
  description:
    "Yelobase is a technology partner and Official Zoho Authorized Partner. We design, build, automate, and manage the business systems that let you scale without chaos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body>
        {children}
        <BookAuditModal />
        <Script id="zoho-salesiq-init" strategy="afterInteractive">
          {`window.$zoho=window.$zoho||{};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}`}
        </Script>
        <Script
          id="zsiqscript"
          src="https://salesiq.zohopublic.in/widget?wc=siqc937410a3f6d4d5500deb1268125a5311f27612ec0b94739767f943f7a474bcb"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
