import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası — Polimelo",
  description:
    "Polimelo gizlilik politikası ve kullanıcı verilerinin korunması ile ilgili detaylar.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
