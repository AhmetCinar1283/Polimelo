import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import Script from "next/script";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://polimelo.com"),
  title: "Polimelo — Dijital Deneyimler Stüdyosu | Digital Experiences Studio",
  description:
    "Öğrenmeyi, oynamayı ve keşfetmeyi bir araya getiren modern dijital deneyimler. | Modern digital experiences bringing learning, play, and exploration together.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/polimelo-logo-round.webp",
    shortcut: "/polimelo-logo-round.webp",
    apple: "/polimelo-logo-round.webp",
  },
  other: {
    "google-adsense-account": "ca-pub-3798429741438186",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
    
      <body suppressHydrationWarning>
        <LanguageProvider>
          <ThemeProvider>
            {children}
            <CookieBanner />
          </ThemeProvider>
        </LanguageProvider>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3798429741438186"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

