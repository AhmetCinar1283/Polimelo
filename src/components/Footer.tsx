"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="px-6 md:px-12 py-10 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 w-full max-w-7xl mx-auto">
      <Link href="/" className="flex items-center gap-2.5 group">
        <Image
          src="/polimelo-logo-round.webp"
          alt="Polimelo Logo"
          width={32}
          height={32}
          unoptimized
          className="w-8 h-8 rounded-lg object-contain dark:invert transition-all duration-300 group-hover:scale-105"
        />
        <span className="font-bold text-lg text-[var(--fg)]">Polimelo</span>
      </Link>
      <nav className="flex flex-wrap items-center gap-6 text-sm text-[var(--fg-muted)]">
        <Link href="/syncron" className="hover:text-[var(--fg)] transition-colors">
          Syncron
        </Link>
        <Link href="/polyvo" className="hover:text-[var(--fg)] transition-colors">
          Polyvo
        </Link>
        <Link href="/about" className="hover:text-[var(--fg)] transition-colors">
          {t("common.aboutUs")}
        </Link>
        <Link href="/blog" className="hover:text-[var(--fg)] transition-colors">
          {t("common.blog")}
        </Link>
        <Link href="/contact" className="hover:text-[var(--fg)] transition-colors">
          {t("common.contact")}
        </Link>
        <Link href="/privacy" className="hover:text-[var(--fg)] transition-colors">
          {t("common.privacy")}
        </Link>
        <Link href="/terms" className="hover:text-[var(--fg)] transition-colors">
          {t("common.terms")}
        </Link>
      </nav>
      <p className="text-[var(--fg-muted)] text-xs">
        {t("common.allRightsReserved", { year: new Date().getFullYear() })}
      </p>
    </footer>
  );
}
