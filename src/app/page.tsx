"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import { BLOG_POSTS } from "@/data/posts";
import { useLanguage } from "@/context/LanguageContext";

/* ─── veri ─────────────────────────────────────────────── */

// Polimelo bünyesindeki uygulamaların listesi ve özellikleri
const apps = [
  {
    id: "polyvo",
    slug: "/polyvo",
    number: "01",
    name: "Polyvo",
    tagline: {
      tr: "İngilizce öğrenmenin akıllı yolu.",
      en: "The smart way to learn English."
    },
    description: {
      tr: "Aralıklı tekrar (SM-2) algoritması, kişiselleştirilmiş kelime desteleri, entegre PDF okuyucu ve eğlenceli mini oyunlarla İngilizce kelime dağarcığınızı kalıcı şekilde geliştirin.",
      en: "Improve your English vocabulary permanently with a spaced repetition (SM-2) algorithm, personalized vocabulary decks, an integrated PDF reader, and fun mini-games."
    },
    platforms: ["Web", "Android"],
    webUrl: "https://polyvo.polimelo.com",
    imageSrc: "/images/polyvo/tablet-home-screen.png", // Resim yolu
    mediaFooter: {
      tr: "Polyvo Dashboard — Tablet Görünümü",
      en: "Polyvo Dashboard — Tablet View"
    },
    dark: false,
    accentColor: "#4f46e5",
    mediaLabel: "Polyvo — uygulama ekranı (önerilen: 800×600, PNG/WEBP)",
  },
  {
    id: "syncron",
    slug: "/syncron",
    number: "02",
    name: "Syncron",
    tagline: {
      tr: "İki adım at, her ikisi de sayılsın.",
      en: "Take two steps, let both of them count."
    },
    description: {
      tr: "Grid tabanlı siberpunk bulmaca platformu. Tek tuşla iki objeyi aynı anda (zıt ve normal modda) hareket ettirin, buz slide'ları, ışınlayıcılar ve gelişmiş seviye editörüyle zihninizi zorlayın.",
      en: "Grid-based cyberpunk puzzle platformer. Move two objects simultaneously (in normal and reversed modes) with a single button, and challenge your mind with ice slides, teleporters, and an advanced level editor."
    },
    platforms: ["Web", "Android", "Masaüstü"],
    webUrl: "https://syncron.polimelo.com",
    imageSrc: "/images/syncron/gameplay-tablet.png", // Resim yolu
    mediaFooter: {
      tr: "Syncron — Seviye 12 Eş Zamanlılık Bulmacası",
      en: "Syncron — Level 12 Synchronicity Puzzle"
    },
    dark: true,
    accentColor: "#4ade80",
    mediaLabel: "Syncron — oyun ekranı (önerilen: 800×600, 16:9, PNG/WEBP)",
  },
] as const;

/* ─── sayfa ─────────────────────────────────────────────── */

export default function Home() {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const { language, t } = useLanguage();
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
          {/* Performance-optimized background video / fallback media */}
          <HeroBackgroundMedia onVideoActive={setIsVideoActive} />
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
              {t("home.studioTag")}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(0px)" }}
              animate={
                isVideoActive
                  ? { opacity: 0, y: -45, filter: "blur(24px)" }
                  : { opacity: 1, y: 0, filter: "blur(0px)" }
              }
              transition={
                isVideoActive
                  ? { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
                  : { duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }
              }
              className="text-white font-extrabold leading-[0.9] tracking-tight pointer-events-none"
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
                {t("home.tagline")}
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
              {t("home.scroll")}
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
              {t("home.visionTag")}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight text-[var(--fg)] mb-6"
            >
              {t("home.manifestoTitleFirst")}<br />
              <em className="not-italic text-[var(--fg-muted)] font-light">
                {t("home.manifestoTitleSecond")}
              </em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, delay: 0.18 }}
              className="text-[var(--fg-muted)] text-lg leading-relaxed mb-12"
            >
              {t("home.manifestoDesc")}
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
                {t("home.manifestoLink")} <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── BLOGDAN SEÇMELER ──────────────────────────────── */}
        <section className="py-28 px-6 md:px-12 bg-[var(--card-bg)] border-t border-[var(--border)]">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div>
                <span className="inline-block text-[var(--fg-muted)] text-xs font-mono tracking-[0.3em] uppercase mb-4">
                  {t("home.blogTag")}
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--fg)] leading-tight">
                  {t("home.blogTitle")}
                </h2>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--fg)] border-b border-[var(--fg)] pb-0.5 hover:pb-1.5 transition-all duration-300"
              >
                {t("home.blogLink")} <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BLOG_POSTS.slice(0, 3).map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group flex flex-col justify-between p-6 bg-[var(--bg)] border border-[var(--border)] hover:border-[var(--fg-muted)] rounded-lg transition-all duration-300"
                >
                  <div>
                    <span className="text-xs font-mono text-[var(--fg-muted)] block mb-2">{post.category[language]}</span>
                    <h3 className="text-lg font-bold text-[var(--fg)] mb-3 leading-snug group-hover:text-[var(--fg)]">
                      {post.title[language]}
                    </h3>
                    <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-6">
                      {post.description[language]}
                    </p>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--fg-muted)] group-hover:text-[var(--fg)] transition-all duration-300"
                  >
                    {t("common.readArticle")} <ArrowUpRight size={12} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────────── */}
        <Footer />
      </main>
    </>
  );
}

/* ─── AppFeatureSection ──────────────────────────────────── */

function AppFeatureSection({
  app,
  flip,
}: {
  app: typeof apps[number];
  flip: boolean;
}) {
  const { language, t } = useLanguage();
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
            "{app.tagline[language]}"
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.22 }}
            className={`text-base leading-relaxed mb-10 max-w-md ${fgMuted}`}
          >
            {app.id === "polyvo" ? (
              language === "tr" ? (
                <>
                  Aralıklı tekrar (
                  <Link href="/spaced-repetition-calculator" className="underline font-semibold hover:text-[var(--fg)] transition-colors">
                    SM-2
                  </Link>
                  ) algoritması, kişiselleştirilmiş kelime desteleri, entegre PDF okuyucu ve eğlenceli mini oyunlarla İngilizce kelime dağarcığınızı kalıcı şekilde geliştirin.
                </>
              ) : (
                <>
                  Improve your English vocabulary permanently with a spaced repetition (
                  <Link href="/spaced-repetition-calculator" className="underline font-semibold hover:text-[var(--fg)] transition-colors">
                    SM-2
                  </Link>
                  ) algorithm, personalized vocabulary decks, an integrated PDF reader, and fun mini-games.
                </>
              )
            ) : (
              app.description[language]
            )}
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
              {t("common.details")} <ArrowUpRight size={15} />
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
              {t("common.playOnWeb")} <ExternalLink size={13} />
            </a>

            {/* Sub-button style link specifically for Polyvo SM-2 science details */}
            {app.id === "polyvo" && (
              <div className="w-full mt-2">
                <Link
                  href="/spaced-repetition-calculator"
                  className={`inline-flex items-center gap-1 text-[11px] font-mono font-medium transition-opacity opacity-50 hover:opacity-100 ${
                    app.dark ? "text-white" : "text-[var(--fg)]"
                  }`}
                >
                  ⚡ {language === "tr" ? "SM-2 Algoritması ve Bellek Bilimi Analizi" : "SM-2 Algorithm & Memory Science Analysis"} <ArrowUpRight size={11} />
                </Link>
              </div>
            )}
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
            {app.mediaFooter[language]}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ─── HeroBackgroundMedia ────────────────────────────────── */

function HeroBackgroundMedia({
  onVideoActive,
}: {
  onVideoActive: (active: boolean) => void;
}) {
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoUnmounted, setVideoUnmounted] = useState(false);

  useEffect(() => {
    // Mobil kontrolü (768px altı mobil sayılır)
    const isMobile = window.innerWidth < 768;

    // Yavaş bağlantı ve veri tasarrufu modu kontrolü
    let isSlowConnection = false;
    if (typeof navigator !== "undefined") {
      const conn = (navigator as any).connection;
      if (conn) {
        if (conn.saveData) {
          isSlowConnection = true;
        }
        const effectiveType = conn.effectiveType;
        if (effectiveType === "2g" || effectiveType === "3g") {
          isSlowConnection = true;
        }
      }
    }

    // Yalnızca hızlı bağlantıya sahip masaüstü cihazlarda videoyu yükle
    if (!isMobile && !isSlowConnection) {
      setShouldPlayVideo(true);
      // İlk boyamayı (initial paint) engellememek için kaynağı mount sonrasında atıyoruz
      setVideoSrc("/videos/hero");
    }
  }, []);

  const handleVideoEnded = () => {
    setVideoEnded(true);
    // Opaklık geçişinin tamamlanması için 1 saniye bekleyip video elementini DOM'dan kaldırıyoruz
    setTimeout(() => {
      setVideoUnmounted(true);
    }, 1000);
  };

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0">
      {/* 1. İlk Kare / Yedek Görsel (Video yüklenene kadar veya video yüklenemezse gösterilir) */}
      {(!videoLoaded || !shouldPlayVideo) && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out opacity-25 animate-pulse-slow"
          style={{
            backgroundImage: "url('/images/hero-first-frame.webp')",
            backgroundColor: "#080808",
          }}
        />
      )}

      {/* 2. Arka Plan Videosu */}
      {shouldPlayVideo && videoSrc && !videoUnmounted && (
        <video
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleVideoEnded}
          onCanPlay={() => {
            setVideoLoaded(true);
            onVideoActive(true);
          }}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            videoLoaded && !videoEnded ? "opacity-25" : "opacity-0"
          }`}
        >
          <source src={`${videoSrc}.webm`} type="video/webm" />
          <source src={`${videoSrc}.mp4`} type="video/mp4" />
        </video>
      )}

      {/* 3. Son Kare Görseli (Video bittiğinde gösterilir) */}
      {videoEnded && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out opacity-25"
          style={{
            backgroundImage: "url('/images/hero-last-frame.webp')",
            backgroundColor: "#080808",
          }}
        />
      )}
    </div>
  );
}
