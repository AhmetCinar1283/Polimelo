"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Nav from "@/components/Nav";
import Image from "next/image";

/* ─── veri ─────────────────────────────────────────────── */

const apps = [
  {
    id: "polyvo",
    slug: "/polyvo",
    number: "01",
    name: "Polyvo",
    tagline: "İngilizce öğrenmenin akıllı yolu.",
    description:
      "Aralıklı tekrar (SM-2) algoritması ve oyun tabanlı aktivitelerle kelime dağarcığınızı kısa sürede, kalıcı biçimde geliştirin.",
    platforms: ["Web", "Android"],
    webUrl: "https://polyvo.polimelo.com",
    imageSrc: "/images/polyvo/tablet-home-screen.png", // Resim yolu
    mediaFooter: "Polyvo Dashboard — Tablet Görünümü", // Alt bilgi
    dark: false,
    accentColor: "#4f46e5",
    mediaLabel: "Polyvo — uygulama ekranı (önerilen: 800×600, PNG/WEBP)",
  },
  {
    id: "syncron",
    slug: "/syncron",
    number: "02",
    name: "Syncron",
    tagline: "İki adım at, her ikisi de sayılsın.",
    description:
      "Grid tabanlı eş zamanlılık bulmacası. Her tuşa bastığında iki nesne birden hareket eder — biri ileri giderken diğeri geri gidebilir.",
    platforms: ["Web", "Android", "Masaüstü"],
    webUrl: "https://syncron.polimelo.com",
    imageSrc: "/images/syncron/gameplay-tablet.png", // Resim yolu
    mediaFooter: "Syncron — Seviye 12 Eş Zamanlılık Bulmacası", // Alt bilgi
    dark: true,
    accentColor: "#4ade80",
    mediaLabel: "Syncron — oyun ekranı (önerilen: 800×600, 16:9, PNG/WEBP)",
  },
] as const;

/* ─── sayfa ─────────────────────────────────────────────── */

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(heroScroll, [0, 0.85], [1, 0]);
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "18%"]);

  return (
    <>
      <Nav startsOverDark />

      <main>
        {/* ── HERO ────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative h-screen bg-[#080808] overflow-hidden flex flex-col justify-end pb-16 px-6 md:px-12 select-none"
        >
          {/* Subtle grid overlay */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
              backgroundSize: "90px 90px",
            }}
          />

          {/* Glow blob — ileride hero video / görsel için placeholder olabilir */}
          <div
            aria-hidden
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(79,70,229,0.12) 0%, transparent 65%)",
            }}
          />

          <motion.div style={{ opacity: heroOpacity, y: heroY }}>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-white/35 text-xs font-mono tracking-[0.35em] uppercase mb-5"
            >
              Dijital Deneyimler Stüdyosu
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-white font-extrabold leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(4.5rem, 15vw, 17rem)" }}
            >
              Polimelo
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="h-px bg-white/15 mt-8 mb-7"
            />

            <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-16">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="text-white/45 text-base leading-relaxed max-w-xs"
              >
                Öğrenmeyi, oynamayı ve keşfetmeyi — kalıcı deneyimlere
                dönüştürüyoruz.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="flex gap-8"
              >
                {apps.map((a) => (
                  <Link
                    key={a.id}
                    href={a.slug}
                    className="group flex flex-col"
                  >
                    <span className="text-white/20 text-xs font-mono">
                      {a.number}
                    </span>
                    <span className="text-white/70 text-sm font-semibold group-hover:text-white transition-colors">
                      {a.name} ↗
                    </span>
                  </Link>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Kaydır ipucu */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
          >
            <motion.div
              animate={{ scaleY: [1, 1.4, 1] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="w-px h-8 bg-white/20"
            />
            <span className="text-white/25 text-[10px] font-mono tracking-widest uppercase">
              Kaydır
            </span>
          </motion.div>
        </section>

        {/* ── PROJELER ─────────────────────────────────────── */}
        <section id="projeler">
          {apps.map((app, i) => (
            <AppFeatureSection key={app.id} app={app} flip={i % 2 === 1} />
          ))}
        </section>

        {/* ── MANİFESTO ─────────────────────────────────────── */}
        <section className="py-40 px-6 md:px-16 bg-[var(--bg)]">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              className="inline-block text-[var(--fg-muted)] text-xs font-mono tracking-[0.3em] uppercase mb-10"
            >
              Vizyon
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight text-[var(--fg)] mb-6"
            >
              Sadece kod değil —<br />
              <em className="not-italic text-[var(--fg-muted)] font-light">
                bir his inşa ediyoruz.
              </em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, delay: 0.18 }}
              className="text-[var(--fg-muted)] text-lg leading-relaxed mb-12"
            >
              İster akıllı algoritmalarla çalışan bir eğitim aracı olsun, ister
              altıgenlerin dünyasında geçen stratejik bir bulmaca — amacımız
              her zaman verimli, estetik ve kullanıcıyı gülümseten ürünler
              ortaya koymak.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[var(--fg)] font-semibold text-sm border-b border-[var(--fg)] pb-0.5 hover:pb-2 transition-all duration-300"
              >
                Stüdyoyu tanıyın <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────── */}
        <footer className="px-6 md:px-12 py-10 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <span className="font-bold text-lg text-[var(--fg)]">Polimelo.</span>
          <nav className="flex items-center gap-6 text-sm text-[var(--fg-muted)]">
            <Link href="/syncron" className="hover:text-[var(--fg)] transition-colors">
              Syncron
            </Link>
            <Link href="/polyvo" className="hover:text-[var(--fg)] transition-colors">
              Polyvo
            </Link>
            <Link href="/about" className="hover:text-[var(--fg)] transition-colors">
              Hakkımızda
            </Link>
          </nav>
          <p className="text-[var(--fg-muted)] text-xs">
            © {new Date().getFullYear()} Polimelo
          </p>
        </footer>
      </main>
    </>
  );
}

/* ─── AppFeatureSection ──────────────────────────────────── */

function AppFeatureSection({
  app,
  flip,
}: {
  app: (typeof apps)[number];
  flip: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const mediaY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  const fg = app.dark ? "text-white" : "text-[var(--fg)]";
  const fgMuted = app.dark ? "text-white/50" : "text-[var(--fg-muted)]";
  const borderColor = app.dark ? "border-white/10" : "border-[var(--border)]";

  return (
    <motion.section
      ref={ref}
      className={`relative min-h-screen flex items-center overflow-hidden px-6 md:px-12 py-28 ${app.dark ? "bg-[#080808]" : "bg-[var(--bg)]"
        }`}
    >
      {/* Koyu bölümlerde çizgi grid */}
      {app.dark && (
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${app.accentColor}08 1px, transparent 1px), linear-gradient(90deg, ${app.accentColor}08 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      )}

      <div className="relative z-10 w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Metin */}
        <div className={flip ? "md:order-2" : ""}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`text-xs font-mono tracking-[0.3em] uppercase mb-5 ${fgMuted}`}
          >
            {app.number} — {app.platforms.join(" · ")}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, x: flip ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className={`text-7xl md:text-9xl font-extrabold tracking-tight leading-none mb-5 ${fg}`}
          >
            {app.name}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className={`text-lg italic font-light mb-5 ${fgMuted}`}
          >
            "{app.tagline}"
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.22 }}
            className={`text-base leading-relaxed mb-10 max-w-md ${fgMuted}`}
          >
            {app.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.32 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href={app.slug}
              className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-80 ${app.dark ? "bg-white text-black" : "bg-[var(--fg)] text-[var(--bg)]"
                }`}
            >
              Ayrıntılar <ArrowUpRight size={15} />
            </Link>
            <a
              href={app.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border transition-colors ${app.dark
                ? "border-white/20 text-white/70 hover:border-white/50 hover:text-white"
                : "border-[var(--border)] text-[var(--fg-muted)] hover:border-[var(--fg)] hover:text-[var(--fg)]"
                }`}
            >
              Web&apos;de Oyna <ExternalLink size={13} />
            </a>
          </motion.div>
        </div>

        {/* Medya placeholder */}
        <motion.div
          style={{ y: mediaY }}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className={flip ? "md:order-1" : ""}
        >
          {/* Üst etiket */}
          <div className={`flex items-center gap-2 mb-3 ${fgMuted}`}>
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: app.accentColor }}
            />
            <span className="text-xs font-mono">{app.name}</span>
          </div>

          {/* Gerçek Ekran Görüntüsü Alanı */}
          <div
            className={`relative overflow-hidden aspect-[4/3] border shadow-2xl ${borderColor}`}
            style={{ borderRadius: '4px' }} // Tasarıma uygun hafif yuvarlatma
          >
            <Image
              src={app.imageSrc}
              alt={`${app.name} Uygulama Ekranı`}
              fill
              className="object-cover"
              unoptimized // output: 'export' kullandığın için ekliyoruz
            />
          </div>

          {/* Alt bilgi (Data'dan geliyor) */}
          <p className={`mt-4 text-xs font-mono ${fgMuted} opacity-60 italic`}>
            {app.mediaFooter}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
