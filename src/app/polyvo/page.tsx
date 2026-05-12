"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink, Globe, Smartphone, BrainCircuit, BookOpen, PenLine, Layers, Gamepad2 } from "lucide-react";
import Nav from "@/components/Nav";
import Link from "next/link";
import Image from "next/image";

/* ─── veri ──────────────────────────────────────────────── */

const studyModes = [
  {
    icon: BookOpen,
    name: "Flashcard",
    desc: "Klasik kart çevirme; telaffuz, tanım, eş anlamlı ve örnek cümle desteğiyle İngilizce ↔ Türkçe yönünde.",
  },
  {
    icon: PenLine,
    name: "Cloze",
    desc: "Cümle içindeki boşluğu bağlamdan tahmin et. Kelimeyi izole değil, kullanımı içinde öğren.",
  },
  {
    icon: Layers,
    name: "Test",
    desc: "Çoktan seçmeli sorularla bilgiyi ölç ve pekiştir. SM-2 algoritmasıyla bütünleşik.",
  },
  {
    icon: BrainCircuit,
    name: "Deeplearn",
    desc: "Gelişmiş seans modu; kart sırası ve oturum yönetimi üzerinde tam kontrol.",
  },
];

const games = [
  {
    name: "PolyFlip",
    desc: "Eşleştirme kartı oyunu — kelime çiftlerini hafızanda bulmanın yarışması.",
    emoji: "🃏",
  },
  {
    name: "FlapyChicken",
    desc: "Flappy Bird tarzı: uçan tavukla doğru kelimeyi seç, yanlışı seçince düşersin.",
    emoji: "🐔",
  },
  {
    name: "Tug of War",
    desc: "Kelime yazma yarışı; AI rakiple hız ve doğruluk sınavına gir.",
    emoji: "💪",
  },
  {
    name: "Bil ve Fethet",
    desc: "Altıgen harita üzerinde toprak fethi — her doğru cevap yeni alan kazandırır.",
    emoji: "🗺️",
  },
];

const features = [
  {
    title: "Çevrimdışı Çalışma",
    desc: "İnternet olmadan tam işlevsellik. Bağlantı gelince otomatik senkronize edilir.",
  },
  {
    title: "Kişisel Deste Yönetimi",
    desc: "Kendi kart destelerini oluştur, düzenle, klasörlere ayır ve paylaş.",
  },
  {
    title: "Topluluk İçerikleri",
    desc: "Diğer kullanıcıların destelerini keşfet ve doğrudan çalışmaya başla.",
  },
  {
    title: "İlerleme Takibi",
    desc: "Her kelimenin öğrenme aşaması ayrı izlenir: başlangıç → tekrar → mezun.",
  },
];

const platforms = [
  {
    icon: Globe,
    name: "Web",
    detail: "polyvo.polimelo.com — kurulum gerektirmez",
    url: "https://polyvo.polimelo.com",
    cta: "Oyna",
    available: true,
  },
  {
    icon: Smartphone,
    name: "Android",
    detail: "Mobil dokunma ve kaydırma desteğiyle tam senkronizasyon",
    url: "#",
    cta: "Yakında",
    available: false,
  },
];

/* ─── sayfa ─────────────────────────────────────────────── */

const ACCENT = "#4f46e5";
const ACCENT_LIGHT = "#818cf8";

export default function PolyvoPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <>
      <Nav />

      <main className="bg-[var(--bg)] text-[var(--fg)]">
        {/* ── HERO ───────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative h-screen overflow-hidden flex flex-col justify-end pb-16 px-6 md:px-12"
        >
          {/* Arka plan deseni — nokta grid */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle, ${ACCENT}30 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Hero arka plan gradient */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 60% 50%, ${ACCENT}08 0%, transparent 70%)`,
            }}
          />

          {/* Uygulama görseli placeholder */}
          <div className="absolute inset-0 flex items-center justify-end pr-[8vw] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 3 }}
              animate={{ opacity: 1, x: 0, rotate: 3 }}
              transition={{ duration: 1.1, delay: 0.4 }}
              // DİKKAT: aspect-[9/16] kısmını aspect-[430/932] olarak değiştirdik
              className="relative overflow-hidden shadow-2xl w-[min(32vw,340px)] aspect-[9/16] border flex flex-col items-center justify-center rounded-2xl"
              style={{ borderColor: `${ACCENT}25` }}
            >
              <Image
                src="/images/polyvo/mobile-home-screen.png"
                alt="Polyvo Mobil Ekran Görüntüsü"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          <motion.div style={{ opacity: heroOpacity, y: heroY }} className="relative z-10 max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-mono text-xs tracking-[0.35em] uppercase mb-5"
              style={{ color: `${ACCENT_LIGHT}` }}
            >
              Polimelo — Dil Öğrenme
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-extrabold leading-none tracking-tight text-[var(--fg)]"
              style={{ fontSize: "clamp(4rem, 13vw, 13rem)" }}
            >
              Polyvo
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-px mt-7 mb-6"
              style={{ background: `${ACCENT}30` }}
            />

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="text-[var(--fg-muted)] text-lg italic max-w-xs"
            >
              "İngilizce öğrenmenin akıllı yolu."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              <a
                href="https://polyvo.polimelo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-85"
                style={{ background: ACCENT }}
              >
                Web&apos;de Oyna <ExternalLink size={14} />
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ── SM-2 AÇIKLAMASI ─────────────────────────────── */}
        <section className="px-6 md:px-12 py-28 border-t border-[var(--border)]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <p
                className="font-mono text-xs tracking-[0.3em] uppercase mb-6"
                style={{ color: ACCENT_LIGHT }}
              >
                Akıllı Tekrar Sistemi
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-[var(--fg)]">
                Doğru zamanda,<br />
                <span style={{ color: ACCENT }}>doğru kelime.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-5"
            >
              <p className="text-[var(--fg-muted)] text-base leading-relaxed">
                Polyvo, her kelimeyi ne zaman unutmak üzere olduğunuzu hesaplar
                ve tam o an önünüze getirir. Bildiğiniz kelimeleri boşuna
                tekrarlamazsınız; zorlandıklarınız daha sık görünür.
              </p>
              <p className="text-[var(--fg-muted)] text-base leading-relaxed">
                SM-2 algoritmasının özelleştirilmiş uygulaması: learning →
                review → graduated aşamalarıyla her kelime uzun süreli
                belleğe yerleşir.
              </p>
              <p className="text-[var(--fg-muted)] text-sm italic">
                Temel inanç: saatler süren tekrarsız ezberden çok daha etkili
                olan, doğru zamanda doğru yöntemle çalışmaktır.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── ÇALIŞMA MODLARI ─────────────────────────────── */}
        <section className="px-6 md:px-12 py-20 border-t border-[var(--border)]">
          <div className="max-w-6xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs tracking-[0.3em] uppercase mb-12"
              style={{ color: ACCENT_LIGHT }}
            >
              Çalışma Modları
            </motion.p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {studyModes.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09, duration: 0.5 }}
                  className="flex flex-col gap-4"
                >
                  <m.icon size={22} style={{ color: ACCENT }} />
                  <h3 className="text-[var(--fg)] font-bold">{m.name}</h3>
                  <p className="text-[var(--fg-muted)] text-sm leading-relaxed">
                    {m.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OYUN MERKEZİ ────────────────────────────────── */}
        <section className="px-6 md:px-12 py-28 border-t border-[var(--border)]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
              >
                <p
                  className="font-mono text-xs tracking-[0.3em] uppercase mb-6"
                  style={{ color: ACCENT_LIGHT }}
                >
                  Oyun Merkezi
                </p>
                <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-[var(--fg)]">
                  Öğren.<br />Oyna.<br />
                  <span className="text-[var(--fg-muted)] font-light">Tekrar et.</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <p className="text-[var(--fg-muted)] text-base leading-relaxed">
                  4 aktif oyun da SM-2 sistemine bağlıdır. Oyun içinde yapılan
                  doğru / yanlış tercihler öğrenme ilerlemenizi günceller. Oyun
                  oynamak aynı zamanda çalışmaktır.
                </p>
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 gap-px bg-[var(--border)]">
              {games.map((g, i) => (
                <motion.div
                  key={g.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="bg-[var(--bg)] p-8 flex gap-5 items-start"
                >
                  <span className="text-2xl mt-0.5 shrink-0">{g.emoji}</span>
                  <div>
                    <h3 className="text-[var(--fg)] font-bold mb-2">{g.name}</h3>
                    <p className="text-[var(--fg-muted)] text-sm leading-relaxed">
                      {g.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ÖZELLİKLER ──────────────────────────────────── */}
        <section className="px-6 md:px-12 py-24 border-t border-[var(--border)]">
          <div className="max-w-6xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs tracking-[0.3em] uppercase mb-12"
              style={{ color: ACCENT_LIGHT }}
            >
              Öne Çıkan Özellikler
            </motion.p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Gamepad2
                    size={18}
                    style={{ color: ACCENT }}
                    className="mb-4"
                  />
                  <h3 className="text-[var(--fg)] font-semibold text-sm mb-2">
                    {f.title}
                  </h3>
                  <p className="text-[var(--fg-muted)] text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PLATFORMLAR ─────────────────────────────────── */}
        <section className="px-6 md:px-12 py-28 border-t border-[var(--border)]">
          <div className="max-w-6xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs tracking-[0.3em] uppercase mb-12"
              style={{ color: ACCENT_LIGHT }}
            >
              Platformlar
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
              {platforms.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.55 }}
                  className="border border-[var(--border)] p-7 flex flex-col gap-5"
                >
                  <p.icon size={20} className="text-[var(--fg-muted)]" />
                  <div>
                    <h3 className="text-[var(--fg)] font-bold text-lg mb-1">
                      {p.name}
                    </h3>
                    <p className="text-[var(--fg-muted)] text-sm leading-relaxed">
                      {p.detail}
                    </p>
                  </div>
                  {p.available ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70"
                      style={{ color: ACCENT }}
                    >
                      {p.cta} <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span className="text-sm font-mono text-[var(--fg-muted)] opacity-40">
                      {p.cta}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER / GERİ ───────────────────────────────── */}
        <footer className="px-6 md:px-12 py-10 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/"
            className="text-[var(--fg-muted)] text-sm hover:text-[var(--fg)] transition-colors font-mono"
          >
            ← Polimelo
          </Link>
          <p className="text-[var(--fg-muted)] text-xs">
            © {new Date().getFullYear()} Polimelo — Polyvo
          </p>
        </footer>
      </main>
    </>
  );
}
