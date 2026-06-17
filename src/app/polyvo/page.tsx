"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink, Globe, Smartphone, BrainCircuit, BookOpen, PenLine, Layers, Gamepad2 } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

/* ─── sayfa ─────────────────────────────────────────────── */

const ACCENT = "#4f46e5";
const ACCENT_LIGHT = "#818cf8";

export default function PolyvoPage() {
  const { language, t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const studyModes = [
    {
      icon: BookOpen,
      name: "Flashcard",
      desc: language === "tr"
        ? "Bilişsel temelli kart çevirme; kelimenin telaffuzu, Türkçe/İngilizce tanımları, eş anlamlıları ve cümle içindeki örnekleriyle derinlemesine öğrenme."
        : "Cognitive-based card flipping; deep learning with word pronunciation, Turkish/English definitions, synonyms, and contextual examples.",
    },
    {
      icon: PenLine,
      name: "Cloze",
      desc: language === "tr"
        ? "Cümle içindeki boşluğu bağlamdan tahmin etme. Kelimeleri izole kelime listeleri yerine doğal ve gerçekçi kullanım yapılarıyla öğrenmenizi sağlar."
        : "Guessing blanks in a sentence based on context. Allows you to learn words through natural and realistic usage structures rather than isolated word lists.",
    },
    {
      icon: Layers,
      name: "Test",
      desc: language === "tr"
        ? "Çoktan seçmeli interaktif testlerle bilginizi ölçün. Hatalı cevaplanan tüm kelimeler SM-2 tarafından otomatik olarak yeniden planlanır."
        : "Measure your knowledge with interactive multiple-choice tests. All incorrectly answered words are automatically rescheduled by SM-2.",
    },
    {
      icon: BrainCircuit,
      name: "Deeplearn",
      desc: language === "tr"
        ? "Gelişmiş tekrar seansı. Kart sıralama, zorluk katsayısı ve odaklanılmış öğrenme oturumları üzerinde tam kontrol elde etmenizi sağlar."
        : "Advanced review session. Gives you full control over card sorting, difficulty factor, and focused study sessions.",
    },
  ];

  const games = [
    {
      name: "PolyFlip",
      desc: language === "tr"
        ? "Eşleştirme kartı oyunu. Kelimelerin Türkçe karşılıklarını hafızanızda en hızlı şekilde eşleştirmek için zamana karşı yarışın."
        : "Matching card game. Race against time to match the meanings of words in your memory as quickly as possible.",
      emoji: "🃏",
    },
    {
      name: "FlapyChicken",
      desc: language === "tr"
        ? "Hız ve refleks odaklı kelime seçimi. Uçan tavukla engelleri aşarken doğru kelime anlamına yönelin, yanlışta düşüşe geçin."
        : "Speed and reflex-based word selection. Navigate obstacles with a flying chicken and steer towards the correct word meaning, drop down on wrong ones.",
      emoji: "🐔",
    },
    {
      name: "Tug of War",
      desc: language === "tr"
        ? "Kelime yazma yarışı. Yapay zeka destekli rakibinize karşı kelimeleri en hızlı ve doğru yazarak halatı kendi tarafınıza çekin."
        : "Word typing race. Pull the rope to your side by typing words the fastest and most accurately against an AI-powered opponent.",
      emoji: "💪",
    },
    {
      name: "Bil ve Fethet",
      desc: language === "tr"
        ? "Altıgen haritada stratejik toprak fethi. Doğru cevaplar vererek haritadaki kaleleri ve toprakları ele geçirin, alanınızı büyütün."
        : "Strategic land conquest on a hexagonal map. Conquer castles and territories on the map by giving correct answers, expanding your area.",
      emoji: "🗺️",
    },
  ];

  const features = [
    {
      title: language === "tr" ? "Çevrimdışı Çalışma" : "Offline Study",
      desc: language === "tr"
        ? "İnternet bağlantınız olmasa dahi Dexie.js (IndexedDB) yerel veritabanı sayesinde tüm uygulamayı kullanabilirsiniz. Bağlantı geldiğinde otomatik senkronize olur."
        : "Even without an internet connection, you can use the entire app thanks to the Dexie.js (IndexedDB) local database. Automatically syncs once connection is restored.",
    },
    {
      title: language === "tr" ? "Gelişmiş PDF Okuyucu" : "Advanced PDF Reader",
      desc: language === "tr"
        ? "Öğrenmek istediğiniz dilde kitapları okurken bilinmeyen kelimelerin üzerine tıklayarak anında kendi çalışma destenize ekleyebilir ve Polyvo ekosistemine dahil edebilirsiniz."
        : "While reading books in the language you want to learn, click on unknown words to instantly add them to your study decks and integrate them into the Polyvo ecosystem.",
    },
    {
      title: language === "tr" ? "Bulut Senkronizasyonu" : "Cloud Sync",
      desc: language === "tr"
        ? "Firebase Firestore ve Cloudflare Workers + D1 + KV hibrit altyapısı sayesinde tüm cihazlarınızda (Web ve Android) verileriniz anında eşitlenir."
        : "Thanks to Firebase Firestore and Cloudflare Workers + D1 + KV hybrid infrastructure, your data is instantly synced across all your devices (Web and Android).",
    },
    {
      title: language === "tr" ? "Bireysel Deste Yönetimi" : "Custom Deck Management",
      desc: language === "tr"
        ? "Kendi özel kelime destelerinizi oluşturabilir, kategorilere ayırabilir ve toplulukla paylaşarak kolektif bir öğrenme başlatabilirsiniz."
        : "You can create your own custom vocabulary decks, categorize them, and share them with the community to start collective learning.",
    },
  ];

  const platforms = [
    {
      icon: Globe,
      name: "Web",
      detail: language === "tr"
        ? "polyvo.polimelo.com — tarayıcınızdan kurulum gerektirmeden anında çalışın"
        : "polyvo.polimelo.com — run instantly from your browser without any installation",
      url: "https://polyvo.polimelo.com",
      cta: language === "tr" ? "Web Uygulaması" : "Web Application",
      available: true,
    },
    {
      icon: Smartphone,
      name: "Android",
      detail: language === "tr"
        ? "Capacitor altyapısıyla geliştirilen native uygulama sayesinde mobil cihazlarda pürüzsüz kaydırma ve bildirim destekli deneyim."
        : "Native application developed with Capacitor, providing smooth scrolling and notification-supported mobile experience.",
      url: "#",
      cta: language === "tr" ? "Yakında Google Play'de" : "Soon on Google Play",
      available: false,
    },
  ];

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
              {t("polyvo.subHeader")}
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
              {t("polyvo.tagline")}
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
                {t("common.playOnWeb")} <ExternalLink size={14} />
              </a>

              {/* Sub-button style link specifically for Polyvo SM-2 science details */}
              <div className="w-full mt-2">
                <Link
                  href="/spaced-repetition-calculator"
                  className="inline-flex items-center gap-1 text-[11px] font-mono font-medium opacity-50 hover:opacity-100 text-[var(--fg)] transition-opacity"
                >
                  ⚡ {language === "tr" ? "SM-2 Algoritması ve Bellek Bilimi Analizi" : "SM-2 Algorithm & Memory Science Analysis"} <ArrowUpRight size={11} />
                </Link>
              </div>
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
                {t("polyvo.scienceTag")}
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-[var(--fg)] whitespace-pre-line">
                {t("polyvo.scienceTitle")}
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
                {t("polyvo.scienceDesc1")}
              </p>
              <p className="text-[var(--fg-muted)] text-base leading-relaxed">
                {language === "tr" ? (
                  <>
                    <Link href="/spaced-repetition-calculator" className="underline font-semibold hover:text-[var(--fg)] transition-colors">
                      SM-2
                    </Link>{" "}
                    algoritmasının özelleştirilmiş uygulaması: learning → review → graduated aşamalarıyla her kelime uzun süreli belleğe yerleşir.
                  </>
                ) : (
                  <>
                    A tailored implementation of the{" "}
                    <Link href="/spaced-repetition-calculator" className="underline font-semibold hover:text-[var(--fg)] transition-colors">
                      SM-2
                    </Link>{" "}
                    algorithm: using learning → review → graduated phases, each word settles into your long-term memory.
                  </>
                )}
              </p>
              <p className="text-[var(--fg-muted)] text-sm italic">
                {t("polyvo.scienceDesc3")}
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
              {t("polyvo.studyModesTag")}
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
                  {t("polyvo.gameCenterTag")}
                </p>
                <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-[var(--fg)] whitespace-pre-line">
                  {t("polyvo.gameCenterTitle")}
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <p className="text-[var(--fg-muted)] text-base leading-relaxed">
                  {t("polyvo.gameCenterDesc")}
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
              {t("polyvo.featuresTag")}
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
              {t("polyvo.platformsTag")}
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

        {/* ── BİLİMSEL ARKA PLAN & REHBERLER ─────────────── */}
        <section className="px-6 md:px-12 py-24 border-t border-[var(--border)] bg-[var(--card-bg)]">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-12">
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--fg-muted)] mb-4 block">
                {t("polyvo.scienceBackTag")}
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-[var(--fg)]">
                {t("polyvo.scienceBackTitle")}
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl">
              <div className="p-8 border border-[var(--border)] bg-[var(--bg)] flex flex-col justify-between rounded-lg">
                <div>
                  <h3 className="text-xl font-bold text-[var(--fg)] mb-3">
                    {t("polyvo.scienceSm2CardTitle")}
                  </h3>
                  <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-6">
                    {t("polyvo.scienceSm2CardDesc")}
                  </p>
                </div>
                <Link
                  href="/blog/sm2-algoritmasi-ve-ogrenme"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-500 hover:text-indigo-400"
                >
                  {t("common.readArticle")} <ArrowUpRight size={14} />
                </Link>
              </div>

              <div className="p-8 border border-[var(--border)] bg-[var(--bg)] flex flex-col justify-between rounded-lg">
                <div>
                  <h3 className="text-xl font-bold text-[var(--fg)] mb-3">
                    {t("polyvo.scienceActiveCardTitle")}
                  </h3>
                  <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-6">
                    {t("polyvo.scienceActiveCardDesc")}
                  </p>
                </div>
                <Link
                  href="/blog/dil-ogreniminde-aktif-geri-cagirma"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-500 hover:text-indigo-400"
                >
                  {t("common.readArticle")} <ArrowUpRight size={14} />
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
