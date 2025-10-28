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
  title: {
    default: "SkillHub Indonesia - Platform Pembelajaran Digital Gratis",
    template: "%s | SkillHub Indonesia"
  },
  description: "Belajar digital skills gratis di SkillHub Indonesia. 200+ kursus online dalam Data Analytics, Digital Marketing, UI/UX Design, Programming, dan AI. Sertifikat profesional, webinar eksklusif, dan komunitas learner aktif.",
  keywords: [
    "kursus online gratis",
    "belajar digital skills",
    "kursus digital marketing",
    "belajar programming",
    "kursus data analytics",
    "UI UX design Indonesia",
    "belajar AI gratis",
    "sertifikat online gratis",
    "platform pembelajaran Indonesia",
    "e-learning gratis",
    "kursus web development",
    "belajar coding gratis"
  ],
  authors: [{ name: "SkillHub Indonesia" }],
  creator: "SkillHub Indonesia",
  publisher: "SkillHub Indonesia",
  metadataBase: new URL('https://skillhubindonesia.site'),
  alternates: {
    canonical: 'https://skillhubindonesia.site',
    languages: {
      'id-ID': 'https://skillhubindonesia.site',
    },
  },
  openGraph: {
    title: "SkillHub Indonesia - Belajar Digital Skills Gratis",
    description: "Platform pembelajaran digital terbaik untuk meningkatkan skill teknologi Anda. 200+ kursus gratis, sertifikat profesional, dan komunitas aktif.",
    siteName: 'SkillHub Indonesia',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SkillHub Indonesia - Platform Pembelajaran Digital',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "SkillHub Indonesia - Belajar Digital Skills Gratis",
    description: "Platform pembelajaran digital terbaik di Indonesia. 200+ kursus gratis!",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'SkillHub Indonesia',
    description: 'Platform pembelajaran digital gratis untuk meningkatkan skill teknologi di Indonesia',
    url: 'https://skillhubindonesia.site',
    logo: 'https://skillhubindonesia.site/logo.png',
    sameAs: [
      'https://facebook.com/skillhubindonesia',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@skillhubindonesia.com',
      contactType: 'Customer Support',
      availableLanguage: ['Indonesian'],
    },
    offers: {
      '@type': 'Offer',
      category: 'Educational',
      price: '0',
      priceCurrency: 'IDR',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <html lang="id">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Open Graph Image Meta Tags - Explicit for Facebook */}
        <meta property="og:image" content="https://skillhubindonesia.site/og-image.png" />
        <meta property="og:image:secure_url" content="https://skillhubindonesia.site/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="SkillHub Indonesia - Platform Pembelajaran Digital Gratis" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
