import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import { site } from "@/lib/data";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const title = `${site.shortName} — ${site.role}`;
const description =
  "Desenvolvedor full stack com 6 anos de experiência, especialista em VTEX e VTEX IO, com React, TypeScript, C# e .NET.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  openGraph: { title, description, type: "website", locale: "pt_BR", siteName: site.shortName },
  twitter: { card: "summary", title, description },
};

export const viewport: Viewport = { themeColor: "#F3F5FA" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    email: `mailto:${site.email}`,
    url: site.url,
    sameAs: [site.linkedin, site.github],
  };

  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <head>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
