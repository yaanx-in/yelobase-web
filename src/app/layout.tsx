import type { Metadata } from "next";
import "./globals.css";

// NOTE: Fonts are wired through next/font in Phase 2 (after Figma extraction),
// per docs/DESIGN.md §3. Until then the body uses the placeholder system stack
// defined in globals.css.

export const metadata: Metadata = {
  title: "Yelobase",
  description: "Yelobase — marketing site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
