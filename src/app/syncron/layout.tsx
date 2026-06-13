import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syncron — Polimelo",
  description:
    "Syncron — Siberpunk atmosferde eş zamanlı hareket mekaniklerine dayalı, zihni zorlayan yeni nesil bir bulmaca oyunu.",
  alternates: {
    canonical: "/syncron",
  },
};

export default function SyncronLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
