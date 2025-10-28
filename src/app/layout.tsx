import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import FacebookPixel from "@/components/FacebookPixel";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SkillHub Indonesia - Platform Pembelajaran Digital Gratis",
  description: "Bergabunglah dengan SkillHub Indonesia untuk belajar digital skills gratis. Kursus online, sertifikat profesional, dan komunitas learner terbaik di Indonesia.",
  metadataBase: new URL('https://skillhubindonesia.com'),
  openGraph: {
    title: "SkillHub Indonesia - Belajar Digital Skills Gratis",
    description: "Platform pembelajaran digital terbaik untuk meningkatkan skill teknologi Anda. 100% Gratis!",
    url: 'https://skillhubindonesia.com',
    siteName: 'SkillHub Indonesia',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SkillHub Indonesia - Belajar Digital Skills Gratis",
    description: "Platform pembelajaran digital terbaik di Indonesia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <FacebookPixel />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
