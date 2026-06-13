import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda — Polimelo",
  description:
    "Polimelo; öğrenmeyi, oynamayı ve keşfetmeyi bir araya getiren modern dijital deneyimler stüdyosudur.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
