"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

/* ─── sayfa ─────────────────────────────────────────────── */

export default function AboutPage() {
  const { language, t } = useLanguage();
  const { theme } = useTheme();

  const values = [
    {
      number: "01",
      title: language === "tr" ? "His önce gelir." : "Feeling comes first.",
      desc: language === "tr" 
        ? "Bir ürünü değerlendirirken ilk soru her zaman şudur: kullanıcı nasıl hissetti? Teknik mükemmellik bu hissin üstüne inşa edilir, altına değil."
        : "When evaluating a product, the first question is always: how did the user feel? Technical excellence is built on top of this feeling, not beneath it.",
    },
    {
      number: "02",
      title: language === "tr" ? "Karmaşıklık gizlenir." : "Complexity is hidden.",
      desc: language === "tr"
        ? "Güçlü bir algoritma ya da derin bir sistem, perde arkasında kalmalı. Kullanıcı yalnızca sonucu görür: sadelik."
        : "A powerful algorithm or a deep system should remain behind the scenes. The user only sees the result: simplicity.",
    },
    {
      number: "03",
      title: language === "tr" ? "Öğrenme ve oyun ayrı değil." : "Learning and play are not separate.",
      desc: language === "tr"
        ? "Beyin, merak ettiğinde öğrenir. Oyun tam da o merakı kışkırtan en doğal araçtır. İkisini birbirinden ayırmak yapay bir sınırdır."
        : "The brain learns when it is curious. Play is the most natural tool to provoke that curiosity. Separating the two is an artificial boundary.",
    },
    {
      number: "04",
      title: language === "tr" ? "Küçük ama dürüst." : "Small but honest.",
      desc: language === "tr"
        ? "Geniş bir ekip yerine odaklı bir niyet. Her ürün, ne yapmak istediğini biliyor. İmkânın ötesine söz vermiyoruz."
        : "A focused intent rather than a large team. Every product knows what it wants to achieve. We do not promise beyond our means.",
    },
  ];

  const works = [
    {
      name: "Polimelo Lab",
      tagline: language === "tr" 
        ? "Yapay zeka ve matematik için deneysel sandbox" 
        : "Experimental sandbox for AI and mathematics",
      href: "/lab",
      color: "#ef5a5a",
      dark: true,
    },
    {
      name: "Polyvo",
      tagline: language === "tr" 
        ? "Akıllı aralıklı tekrarla İngilizce kelime öğrenme" 
        : "Smart vocabulary building with spaced repetition",
      href: "/polyvo",
      color: "#4f46e5",
    },
    {
      name: "Syncron",
      tagline: language === "tr" 
        ? "Eş zamanlı hareketin bulmacası" 
        : "A puzzle of synchronous movement",
      href: "/syncron",
      color: "#4ade80",
      dark: true,
    },
  ];

  return (
    <>
      <Nav />

      <main className="bg-[var(--bg)] text-[var(--fg)]">
        {/* ── BAŞLIK ─────────────────────────────────────── */}
        <section className="pt-40 pb-28 px-6 md:px-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <Image
              src="/polimelo-logo-round.webp"
              alt="Polimelo Logo"
              width={72}
              height={72}
              unoptimized
              className="w-18 h-18 rounded-2xl object-contain dark:invert transition-all duration-300 hover:scale-105"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-xs tracking-[0.35em] uppercase text-[var(--fg-muted)] mb-8"
          >
            {t("common.studio")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-extrabold leading-none tracking-tight text-[var(--fg)] mb-8"
          >
            {t("about.title")}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-px bg-[var(--border)] mb-10"
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="text-xl md:text-2xl text-[var(--fg-muted)] font-light leading-relaxed max-w-2xl"
          >
            {t("about.tagline")}
          </motion.p>
        </section>

        {/* ── FOTOĞRAF / STÜDYO GÖRSELI ──────────────────── */}
        <section className="px-6 md:px-12 pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
          </motion.div>
        </section>

        {/* ── HİKAYE ─────────────────────────────────────── */}
        <section className="px-6 md:px-12 py-24 border-t border-[var(--border)]">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--fg-muted)] mb-8">
                {t("about.storyTag")}
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--fg)] leading-tight whitespace-pre-line">
                {t("about.storyTitle")}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-6 text-[var(--fg-muted)] text-base leading-relaxed"
            >
              <p>
                {t("about.storyDesc1")}
              </p>
              <p>
                {t("about.storyDesc2")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── DEĞERLER ────────────────────────────────────── */}
        <section className="px-6 md:px-12 py-24 border-t border-[var(--border)]">
          <div className="max-w-5xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--fg-muted)] mb-14"
            >
              {t("about.valuesTag")}
            </motion.p>

            <div className="space-y-px bg-[var(--border)]">
              {values.map((v, i) => (
                <motion.div
                  key={v.number}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09, duration: 0.55 }}
                  className="bg-[var(--bg)] px-8 py-8 grid md:grid-cols-[80px_1fr_2fr] gap-6 items-start"
                >
                  <span className="font-mono text-sm text-[var(--fg-muted)] opacity-40">
                    {v.number}
                  </span>
                  <h3 className="text-[var(--fg)] font-bold text-lg leading-snug">
                    {v.title}
                  </h3>
                  <p className="text-[var(--fg-muted)] text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJELER ────────────────────────────────────── */}
        <section className="px-6 md:px-12 py-24 border-t border-[var(--border)]">
          <div className="max-w-5xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--fg-muted)] mb-14"
            >
              {t("about.worksTag")}
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6">
              {works.map((w, i) => {
                const isLab = w.name === "Polimelo Lab";
                const isDarkCard = isLab ? (theme === "dark") : w.dark;
                const dynamicColor = isLab ? (theme === "dark" ? "#ef5a5a" : "#ac2323") : w.color;
                return (
                  <motion.div
                    key={w.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.6 }}
                  >
                    <Link href={`/${language}${w.href}`} className="group block">
                      <div
                        className={`p-8 flex flex-col justify-between min-h-[200px] transition-all duration-300 ${
                          isLab
                            ? (theme === "dark" ? "bg-[#1a1b20]" : "bg-[#f3efe6]")
                            : (isDarkCard ? "bg-[#0d0d0d]" : "bg-[var(--card-bg)]")
                        } border border-[var(--border)] hover:border-transparent`}
                        style={{ ["--tw-shadow" as string]: `0 0 0 2px ${dynamicColor}40` }}
                      >
                        <div>
                          <div
                            className="w-2 h-2 rounded-full mb-6"
                            style={{ background: dynamicColor }}
                          />
                          <h3
                            className={`text-2xl font-extrabold mb-2 ${
                              isLab
                                ? (theme === "dark" ? "text-[#d1d4db]" : "text-[#2b2a27]")
                                : (isDarkCard ? "text-white" : "text-[var(--fg)]")
                            } ${isLab ? "font-serif" : ""}`}
                            style={isLab ? { fontFamily: "Georgia, serif" } : undefined}
                          >
                            {w.name}
                          </h3>
                          <p
                            className={`text-sm leading-relaxed ${
                              isLab
                                ? (theme === "dark" ? "text-[#7a7e85]" : "text-[#66625d]")
                                : (isDarkCard ? "text-white/45" : "text-[var(--fg-muted)]")
                            }`}
                          >
                            {w.tagline}
                          </p>
                        </div>
                        <div
                          className="mt-8 flex items-center gap-1 text-xs font-semibold transition-all duration-300 group-hover:gap-2"
                          style={{ color: dynamicColor }}
                        >
                          {t("common.details")} <ArrowUpRight size={13} />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── İLETİŞİM / SON ──────────────────────────────── */}
        <section className="px-6 md:px-12 py-32 border-t border-[var(--border)]">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75 }}
              className="text-4xl md:text-6xl font-extrabold text-[var(--fg)] mb-6 leading-tight"
            >
              {t("about.contactTitle")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[var(--fg-muted)] text-lg mb-12"
            >
              {t("about.contactDesc")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.28 }}
            >
              <a
                href="mailto:hello@polimelo.com"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-[var(--fg)] text-[var(--bg)] transition-opacity hover:opacity-85"
              >
                {t("about.contactBtn")} <ArrowUpRight size={15} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────── */}
        <Footer />
      </main>
    </>
  );
}
