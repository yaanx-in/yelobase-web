import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

// ⚠️ INFERRED families (text was outlined in the Figma export, so exact names
// are pending confirmation — see docs/DESIGN.md §9). Inter = sans/body/headings,
// Space Mono = monospace display (hero + final CTA). Swap here when confirmed;
// components reference --font-sans / --font-mono only.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Yelobase — Your Business Systems, Properly Built and Owned",
  description:
    "Yelobase is a technology partner and Official Zoho Authorized Partner. We design, build, automate, and manage the business systems that let you scale without chaos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
