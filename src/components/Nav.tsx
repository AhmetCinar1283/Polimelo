"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface NavProps {
  /** Sayfa hero bölümü koyu arka planlıysa true — nav ilk yüklenişte beyaz harf gösterir */
  startsOverDark?: boolean;
}

export default function Nav({ startsOverDark = false }: NavProps) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overDark = startsOverDark && !scrolled;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 px-6 md:px-10 py-5 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg)]/85 backdrop-blur-md border-b border-[var(--border)]"
          : ""
      }`}
    >
      <Link
        href="/"
        className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
          overDark ? "text-white" : "text-[var(--fg)]"
        }`}
      >
        Polimelo.
      </Link>

      <div className="flex items-center gap-5 text-sm font-medium">
        <Link
          href="/#projeler"
          className={`hidden sm:block transition-colors duration-300 ${
            overDark
              ? "text-white/60 hover:text-white"
              : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
          }`}
        >
          Projeler
        </Link>
        <Link
          href="/about"
          className={`hidden sm:block transition-colors duration-300 ${
            overDark
              ? "text-white/60 hover:text-white"
              : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
          }`}
        >
          Hakkımızda
        </Link>
        <button
          onClick={toggleTheme}
          aria-label="Tema değiştir"
          className={`w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${
            overDark
              ? "border-white/20 text-white/60 hover:border-white/60 hover:text-white"
              : "border-[var(--border)] text-[var(--fg-muted)] hover:border-[var(--fg)] hover:text-[var(--fg)]"
          }`}
        >
          {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
        </button>
      </div>
    </motion.nav>
  );
}
