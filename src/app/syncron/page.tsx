"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink, Globe, Smartphone, Monitor, Star, Trophy, Users } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

// Tasarım sabitleri ve neon rengi
const NEON = "#4ade80";

export default function SyncronPage() {
  const { language, t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const mechanics = [
    {
      title: language === "tr" ? "Eş Zamanlı Hareket" : "Synchronous Movement",
      desc: language === "tr"
        ? "Oyuncu tek bir yön tuşuna bastığında ızgara üzerindeki iki farklı objeyi aynı anda hareket ettirir. Biri normal yönde ilerlerken, diğeri zıt (reversed) yönde hareket edebilir."
        : "When the player presses a single directional key, they move two different objects on the grid at the same time. While one moves normally, the other can move in the opposite (reversed) direction.",
    },
    {
      title: language === "tr" ? "Buz Zeminleri" : "Ice Floors",
      desc: language === "tr"
        ? "Kaygan yüzeyler momentumu korur. Objeler bir duvara ya da engele çarpana kadar durmaksızın kayar, bu da koordinasyon planlamasını derinleştirir."
        : "Slippery surfaces preserve momentum. Objects slide continuously until they hit a wall or obstacle, deepening the coordination planning.",
    },
    {
      title: language === "tr" ? "Konveyör Bantları" : "Conveyor Belts",
      desc: language === "tr"
        ? "Objeleri yönlerinden bağımsız olarak bant yönünde fırlatan mekanik. Stratejik olarak kutuları itmek veya kendinizi konumlandırmak için kullanın."
        : "A mechanic that flings objects in the belt's direction regardless of their facing. Use it strategically to push boxes or position yourself.",
    },
    {
      title: language === "tr" ? "Işınlayıcılar" : "Teleporters",
      desc: language === "tr"
        ? "Portal çiftleri sayesinde objeleri haritanın diğer ucuna anında nakledin. Eşzamanlı geçiş kombinasyonları ile zihninizi zorlayın."
        : "Instantly transport objects to the other side of the map via portal pairs. Challenge your mind with synchronous passage combinations.",
    },
    {
      title: language === "tr" ? "Kutular ve Ağırlıklar" : "Boxes and Weights",
      desc: language === "tr"
        ? "Izgaradaki kutuları iterek geçiş yolları açın, lazer engellerini kapatın veya siber zeminlerdeki ağırlık butonlarını tetikleyin."
        : "Push boxes on the grid to clear paths, block laser obstacles, or trigger weight buttons on cyber floors.",
    },
    {
      title: language === "tr" ? "Enerji Sistemleri" : "Energy Systems",
      desc: language === "tr"
        ? "Oyun alanındaki enerji jeneratörlerini ve kabloları aktif hale getirerek kapıları açın, siberpunk evrenin kurallarını lehinize çevirin."
        : "Open gates by activating energy generators and wires in the game area, turning the rules of the cyberpunk universe to your advantage.",
    },
  ];

  const platforms = [
    {
      icon: Globe,
      name: "Web",
      detail: language === "tr"
        ? "syncron.polimelo.com — Modern tarayıcılar üzerinden kurulum gerektirmeden, anında 60 FPS siber-bulmaca keyfi."
        : "syncron.polimelo.com — Instant 60 FPS cyber-puzzle fun through modern browsers, no installation required.",
      url: "https://syncron.polimelo.com",
      cta: language === "tr" ? "Web'de Oyna" : "Play on Web",
      available: true,
    },
    {
      icon: Smartphone,
      name: "Android",
      detail: language === "tr"
        ? "Capacitor entegrasyonu ile dokunmatik cihazlara özel swipe (kaydırma) hareketleriyle optimize edilmiş native mobil sürüm."
        : "Native mobile version optimized with touch-specific swipe gestures through Capacitor integration.",
      url: "#",
      cta: language === "tr" ? "Yakında Google Play'de" : "Soon on Google Play",
      available: false,
    },
    {
      icon: Monitor,
      name: language === "tr" ? "Masaüstü" : "Desktop",
      detail: language === "tr"
        ? "Electron tabanlı tam ekran klavye odaklı sürüm. Windows, macOS ve Linux üzerinde tam performanslı çalışır."
        : "Electron-based full-screen keyboard-focused edition. Runs with peak performance on Windows, macOS, and Linux.",
      url: "#",
      cta: language === "tr" ? "Yakında Steam'de" : "Soon on Steam",
      available: false,
    },
  ];

  const scores = [
    { 
      icon: Star, 
      label: language === "tr" ? "1–3 Yıldız Derecesi" : "1–3 Star Rating", 
      desc: language === "tr" 
        ? "Çözdüğünüz her seviye, harcadığınız hamle sayısına göre derecelendirilir. En optimize yolu bulmaya çalışın." 
        : "Every level you solve is rated based on the number of moves you spend. Try to find the most optimal path." 
    },
    { 
      icon: Trophy, 
      label: language === "tr" ? "Level Editor (Editör)" : "Level Editor", 
      desc: language === "tr" 
        ? "Kendi siber-bulmacalarınızı tasarlayın, Dexie (IndexedDB) ile kaydedin veya Firebase Firestore ile buluta yükleyip paylaşın." 
        : "Design your own cyber-puzzles, save them with Dexie (IndexedDB), or upload and share them to the cloud with Firebase Firestore." 
    },
    { 
      icon: Users, 
      label: language === "tr" ? "Çevrimdışı & Bulut Eşitleme" : "Offline & Cloud Sync", 
      desc: language === "tr" 
        ? "İnternet olmasa da Dexie altyapısıyla kesintisiz oynayın, bağlandığınızda Firebase üzerinden ilerlemenizi tüm cihazlarda eşitleyin." 
        : "Play uninterrupted with Dexie infrastructure even without internet, and sync your progress across all devices via Firebase when connected." 
    },
  ];

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

          {/* Oyun videosu alanı */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="relative overflow-hidden w-[min(55vw,450px)] aspect-square border rounded-xl shadow-2xl pointer-events-auto"
              style={{
                borderColor: `${NEON}30`,
                boxShadow: `0 0 60px ${NEON}15`
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/images/syncron/gameplay-loop.mp4" type="video/mp4" />
                Tarayıcınız video etiketini desteklemiyor.
              </video>
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
              {t("syncron.subHeader")}
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
              {t("syncron.tagline")}
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
                {t("syncron.introTag")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug whitespace-pre-line">
                {t("syncron.introTitle")}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p className="text-white/50 text-base leading-relaxed mb-6">
                {t("syncron.introDesc1")}
              </p>
              <p className="text-white/50 text-base leading-relaxed">
                {t("syncron.introDesc2")}
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
              {t("syncron.mechanicsTag")}
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
                {t("syncron.aestheticTag")}
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6 whitespace-pre-line">
                {t("syncron.aestheticTitle")}
              </h2>
              <p className="text-white/45 text-base leading-relaxed">
                {t("syncron.aestheticDesc")}
              </p>
            </motion.div>

            {/* Ekran görüntüsü alanı */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85 }}
            >
              {/* Custom CSS Animation definitions */}
              <style dangerouslySetInnerHTML={{ __html: `
                @keyframes syncronPlayerA {
                  0%, 100% { left: 0%; top: 0%; }
                  25% { left: 83.3%; top: 0%; }
                  50% { left: 83.3%; top: 83.3%; }
                  75% { left: 0%; top: 83.3%; }
                }
                @keyframes syncronPlayerB {
                  0%, 100% { left: 83.3%; top: 83.3%; }
                  25% { left: 0%; top: 83.3%; }
                  50% { left: 0%; top: 0%; }
                  75% { left: 83.3%; top: 0%; }
                }
              `}} />

              {/* Cyber Grid Gameplay Simulator */}
              <div className="relative aspect-[4/3] bg-neutral-950 border border-emerald-500/30 rounded-lg flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(74,222,128,0.08)]">
                {/* 6x6 Grid Cells */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 p-4 gap-1.5 pointer-events-none opacity-40">
                  {Array.from({ length: 36 }).map((_, idx) => (
                    <div key={idx} className="border border-emerald-500/15 rounded bg-emerald-500/[0.02]" />
                  ))}
                </div>

                {/* Simulation Area */}
                <div className="absolute inset-4">
                  {/* Central Portal Target */}
                  <div 
                    className="absolute w-1/6 h-1/6 flex items-center justify-center"
                    style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
                  >
                    <div className="w-8 h-8 rounded-full border-2 border-dashed border-emerald-400 animate-spin" style={{ animationDuration: '6s' }} />
                    <div className="absolute w-3 h-3 rounded-full bg-emerald-400/30 animate-ping" />
                    <div className="absolute w-2 h-2 rounded-full bg-emerald-400" />
                  </div>

                  {/* Player A (Green - Normal Movement) */}
                  <div 
                    className="absolute w-1/6 h-1/6 p-2 transition-all duration-1000 ease-in-out"
                    style={{
                      animation: "syncronPlayerA 6s infinite steps(1)"
                    }}
                  >
                    <div className="w-full h-full rounded bg-emerald-400 shadow-[0_0_15px_#4ade80] flex items-center justify-center text-[10px] font-extrabold text-black font-mono">
                      A
                    </div>
                  </div>

                  {/* Player B (Cyan - Reversed Movement) */}
                  <div 
                    className="absolute w-1/6 h-1/6 p-2 transition-all duration-1000 ease-in-out"
                    style={{
                      animation: "syncronPlayerB 6s infinite steps(1)"
                    }}
                  >
                    <div className="w-full h-full rounded bg-cyan-400 shadow-[0_0_15px_#22d3ee] flex items-center justify-center text-[10px] font-extrabold text-black font-mono">
                      B
                    </div>
                  </div>
                </div>
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
              {t("syncron.scoresTag")}
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
              {t("syncron.platformsTag")}
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

        {/* ── BİLİMSEL ARKA PLAN & REHBERLER ─────────────── */}
        <section className="px-6 md:px-12 py-24 border-t border-white/[0.06] bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-12">
              <span className="font-mono text-xs tracking-[0.3em] uppercase mb-4 block" style={{ color: `${NEON}60` }}>
                {t("syncron.diariesTag")}
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
                {t("syncron.diariesTitle")}
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl">
              <div className="p-8 border border-white/[0.06] bg-[#0a0a0a] flex flex-col justify-between rounded-lg">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {t("syncron.diariesPuzzleCardTitle")}
                  </h3>
                  <p className="text-sm text-white/55 leading-relaxed mb-6">
                    {t("syncron.diariesPuzzleCardDesc")}
                  </p>
                </div>
                <Link
                  href="/blog/puzzle-oyunu-tasarlamak"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-white"
                  style={{ color: NEON }}
                >
                  {t("syncron.diariesReadDiary")} <ArrowUpRight size={14} />
                </Link>
              </div>

              <div className="p-8 border border-white/[0.06] bg-[#0a0a0a] flex flex-col justify-between rounded-lg">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {t("syncron.diariesDifficultyCardTitle")}
                  </h3>
                  <p className="text-sm text-white/55 leading-relaxed mb-6">
                    {t("syncron.diariesDifficultyCardDesc")}
                  </p>
                </div>
                <Link
                  href="/blog/puzzle-oyunlarinda-zorluk-ayarlama"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-white"
                  style={{ color: NEON }}
                >
                  {t("syncron.diariesReadAnalysis")} <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER / GERİ ───────────────────────────────── */}
        <Footer />
      </main>
    </>
  );
}
