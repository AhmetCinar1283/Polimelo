"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink, Globe, Smartphone, Monitor, Star, Trophy, Users } from "lucide-react";
import Nav from "@/components/Nav";
import Link from "next/link";

/* ─── veri ──────────────────────────────────────────────── */

const mechanics = [
  {
    title: "Eş Zamanlı Hareket",
    desc: "Her tuşa bastığında iki karakter aynı anda hareket eder. Biri ileri giderken diğeri geri gidebilir.",
  },
  {
    title: "Buz Zeminleri",
    desc: "Kaygan yüzeylerde dur komutu verilene kadar kayma devam eder. Momentum hesaplamalara girer.",
  },
  {
    title: "Konveyör Bantları",
    desc: "Karakteri yön fark etmeksizin fırlatır. Hem engel hem de araç olarak kullanılabilir.",
  },
  {
    title: "Işınlayıcılar",
    desc: "Portal çiftleri: bir tarafa giren diğer taraftan çıkar. Eş zamanlı ışınlanma kombinasyonları yaratır.",
  },
  {
    title: "İtilebilir Kutular",
    desc: "Haritadaki kutuları iterek yol açabilir, düşmanları engelleyebilir veya baskül mekanizmalarını tetikleyebilirsin.",
  },
  {
    title: "Kenar Portalları",
    desc: "Harita kenarına ulaşan karakter karşı kenara geçer. Sonsuz alan yanılsaması yaratır.",
  },
];

const platforms = [
  {
    icon: Globe,
    name: "Web",
    detail: "Tarayıcıdan anında oyna — kurulum yok",
    url: "https://syncron.polimelo.com",
    cta: "Oyna",
    available: true,
  },
  {
    icon: Smartphone,
    name: "Android",
    detail: "Kaydırma hareketleriyle doğal hissettiren mobil deneyim",
    url: "#",
    cta: "Yakında",
    available: false,
  },
  {
    icon: Monitor,
    name: "Masaüstü",
    detail: "Tam ekran, klavye odaklı — Windows / Mac / Linux",
    url: "#",
    cta: "Yakında",
    available: false,
  },
];

const scores = [
  { icon: Star, label: "1–3 Yıldız", desc: "Her seviye hamle sayına göre yıldızlandırılır" },
  { icon: Trophy, label: "Dünya Rekoru", desc: "En az hamleyle çözen oyuncuya özel rozet" },
  { icon: Users, label: "Topluluk Seviyeleri", desc: "Seviye editörüyle kendi bulmacalarını gönder" },
];

/* ─── sayfa ─────────────────────────────────────────────── */

const NEON = "#4ade80";

export default function SyncronPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <>
      <Nav startsOverDark />

      <main className="bg-[#080808] text-white">
        {/* ── HERO ───────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative h-screen overflow-hidden flex flex-col justify-end pb-16 px-6 md:px-12"
        >
          {/* Neon grid */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(${NEON}07 1px, transparent 1px), linear-gradient(90deg, ${NEON}07 1px, transparent 1px)`,
              backgroundSize: "70px 70px",
            }}
          />

          {/* Merkez parlaması — ileride oyun videosu için */}
          <div
            aria-hidden
            className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] pointer-events-none"
            style={{
              background: `radial-gradient(ellipse, ${NEON}10 0%, transparent 65%)`,
            }}
          />

          {/* Oyun videosu / ekran görüntüsü placeholder */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="w-[min(55vw,700px)] aspect-video border border-dashed flex flex-col items-center justify-center gap-3"
              style={{ borderColor: `${NEON}20` }}
            >
              <span
                className="text-6xl font-extrabold font-mono select-none"
                style={{ color: `${NEON}15` }}
              >
                S
              </span>
              <p
                className="text-xs font-mono text-center px-6"
                style={{ color: `${NEON}30` }}
              >
                [ Syncron — oyun videosu veya ekran görüntüsü ]<br />
                Önerilen: 1280×720, MP4 veya WEBP
              </p>
            </motion.div>
          </div>

          <motion.div style={{ opacity: heroOpacity, y: heroY }}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-mono text-xs tracking-[0.35em] uppercase mb-4"
              style={{ color: `${NEON}60` }}
            >
              Polimelo — Bulmaca Oyunu
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-extrabold leading-none tracking-tight"
              style={{
                fontSize: "clamp(4rem, 14vw, 14rem)",
                color: "#fff",
                textShadow: `0 0 80px ${NEON}20`,
              }}
            >
              Syncron
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-px mt-7 mb-6"
              style={{ background: `${NEON}25` }}
            />

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="text-white/45 text-lg italic max-w-sm"
            >
              "İki adım at, her ikisi de sayılsın."
            </motion.p>
          </motion.div>
        </section>

        {/* ── GİRİŞ / TANIM ──────────────────────────────── */}
        <section className="px-6 md:px-12 py-28 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <p
                className="font-mono text-xs tracking-[0.3em] uppercase mb-6"
                style={{ color: `${NEON}50` }}
              >
                Nasıl Bir Oyun?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
                Tek başına değil —<br />
                her zaman ikisi birden.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p className="text-white/50 text-base leading-relaxed mb-6">
                Standart bulmaca oyunları tek bir nesneyi kontrol ettirir.
                Syncron&apos;da her tuşa bastığında iki nesne birden hareket eder.
                Bu eş zamanlılık, beyin egzersizi olduğu kadar bir ritim ve
                koordinasyon deneyimine de dönüşür.
              </p>
              <p className="text-white/50 text-base leading-relaxed">
                Hedef: kısa, tatmin edici ve tekrar oynanabilir bulmacalar.
                Her seviye dakikalar içinde çözülebilecek kadar kompakt — ama
                çözüme ulaşmak için gerçek bir "aha!" anı gerektiriyor.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── MEKANİKLER ─────────────────────────────────── */}
        <section className="px-6 md:px-12 py-20 border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs tracking-[0.3em] uppercase mb-12"
              style={{ color: `${NEON}50` }}
            >
              Harita Mekanikleri
            </motion.p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-white/[0.05]">
              {mechanics.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="bg-[#080808] p-7 group"
                >
                  <div
                    className="text-xs font-mono mb-3 transition-colors duration-300"
                    style={{ color: `${NEON}40` }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">
                    {m.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {m.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GÖRSEL KIMLIK ───────────────────────────────── */}
        <section className="px-6 md:px-12 py-28 border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75 }}
            >
              <p
                className="font-mono text-xs tracking-[0.3em] uppercase mb-6"
                style={{ color: `${NEON}50` }}
              >
                Estetik
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                Siyah zemin,<br />
                <span style={{ color: NEON }}>neon ışıltısı.</span>
              </h2>
              <p className="text-white/45 text-base leading-relaxed">
                Syncron&apos;un görsel kimliği, retro arcade oyunlarının atmosferini
                modern minimalist bir tasarımla birleştiriyor. Her hamle, her
                kaydırma ve her kazanma anında animasyonlar ve ışık efektleri
                deneyimi canlı tutuyor.
              </p>
            </motion.div>

            {/* Ekran görüntüsü alanı */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85 }}
            >
              <div
                className="aspect-[4/3] border border-dashed flex flex-col items-center justify-center gap-3"
                style={{ borderColor: `${NEON}18` }}
              >
                <span
                  className="font-mono text-2xl"
                  style={{ color: `${NEON}20` }}
                >
                  ◈ ◈
                </span>
                <p
                  className="text-xs font-mono text-center px-6"
                  style={{ color: `${NEON}25` }}
                >
                  [ Syncron — oyun içi ekran görüntüsü / atmosfer görseli ]<br />
                  Önerilen: 800×600, PNG
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PUANLAMA ────────────────────────────────────── */}
        <section className="px-6 md:px-12 py-24 border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs tracking-[0.3em] uppercase mb-12"
              style={{ color: `${NEON}50` }}
            >
              Rekabet & Topluluk
            </motion.p>

            <div className="grid sm:grid-cols-3 gap-8">
              {scores.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex flex-col gap-4"
                >
                  <s.icon size={22} style={{ color: NEON }} />
                  <h3 className="text-white font-semibold">{s.label}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PLATFORMLAR ─────────────────────────────────── */}
        <section className="px-6 md:px-12 py-28 border-t border-white/[0.06]">
          <div className="max-w-6xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-xs tracking-[0.3em] uppercase mb-12"
              style={{ color: `${NEON}50` }}
            >
              Platformlar
            </motion.p>

            <div className="grid sm:grid-cols-3 gap-6">
              {platforms.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.55 }}
                  className="border border-white/[0.08] p-7 flex flex-col gap-5"
                >
                  <p.icon size={22} className="text-white/30" />
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{p.name}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{p.detail}</p>
                  </div>
                  {p.available ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-all"
                      style={{ color: NEON }}
                    >
                      {p.cta} <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span className="text-sm font-mono text-white/25">{p.cta}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER / GERİ ───────────────────────────────── */}
        <footer className="px-6 md:px-12 py-10 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/"
            className="text-white/40 text-sm hover:text-white transition-colors font-mono"
          >
            ← Polimelo
          </Link>
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Polimelo — Syncron
          </p>
        </footer>
      </main>
    </>
  );
}
