import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/content/profile";
import { JsonLd, personJsonLd } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const title = `${profile.name} — Software Engineer & AI Engineer`;
const description =
  "Hubert Gunawan is a Software Engineer and AI Engineer with 3+ years building backend and full-stack systems with Node.js, React, and AWS, plus AI agents and machine learning.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: { default: title, template: `%s · ${profile.name}` },
  description,
  applicationName: "haheng.au",
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  keywords: [
    "Software Engineer",
    "AI Engineer",
    "Node.js",
    "React",
    "AWS",
    "AI agents",
    "Machine learning",
    profile.name,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "haheng.au",
    locale: "en_US",
    url: "/",
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#0b0d10",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={personJsonLd()} />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
