import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polyvo — Polimelo",
  description:
    "Polyvo — Akıllı aralıklı tekrar (spaced repetition) ve oyunlaştırılmış İngilizce kelime öğrenme uygulaması.",
  alternates: {
    canonical: "/polyvo",
  },
};

export default function PolyvoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
