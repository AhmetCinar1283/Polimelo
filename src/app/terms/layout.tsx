import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Koşulları — Polimelo",
  description:
    "Polimelo kullanım koşulları, hizmet şartları ve yasal yükümlülükler.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
