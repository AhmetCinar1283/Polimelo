"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Nav from "@/components/Nav";

/* ─── veri ──────────────────────────────────────────────── */

const values = [
  {
    number: "01",
    title: "His önce gelir.",
    desc: "Bir ürünü değerlendirirken ilk soru her zaman şudur: kullanıcı nasıl hissetti? Teknik mükemmellik bu hissin üstüne inşa edilir, altına değil.",
  },
  {
    number: "02",
    title: "Karmaşıklık gizlenir.",
    desc: "Güçlü bir algoritma ya da derin bir sistem, perde arkasında kalmalı. Kullanıcı yalnızca sonucu görür: sadelik.",
  },
  {
    number: "03",
    title: "Öğrenme ve oyun ayrı değil.",
    desc: "Beyin, merak ettiğinde öğrenir. Oyun tam da o merakı kışkırtan en doğal araçtır. İkisini birbirinden ayırmak yapay bir sınırdır.",
  },
  {
    number: "04",
    title: "Küçük ama dürüst.",
    desc: "Geniş bir ekip yerine odaklı bir niyet. Her ürün, ne yapmak istediğini biliyor. İmkânın ötesine söz vermiyoruz.",
  },
];

const works = [
  {
    name: "Polyvo",
    tagline: "Akıllı aralıklı tekrarla İngilizce kelime öğrenme",
    href: "/polyvo",
    color: "#4f46e5",
  },
  {
    name: "Syncron",
    tagline: "Eş zamanlı hareketin bulmacası",
    href: "/syncron",
    color: "#4ade80",
    dark: true,
  },
];

/* ─── sayfa ─────────────────────────────────────────────── */

export default function AboutPage() {
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
            Stüdyo
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-extrabold leading-none tracking-tight text-[var(--fg)] mb-8"
          >
            Polimelo.
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
            Öğrenmeyi, oynamayı ve keşfetmeyi — kalıcı dijital deneyimlere
            dönüştüren küçük bir stüdyo.
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
            {/* <div
              className="w-full aspect-[16/7] border border-dashed border-[var(--border)] flex flex-col items-center justify-center gap-3"
            >
              <p className="text-[var(--fg-muted)] text-xs font-mono opacity-40 text-center px-4">
                GÖRSEL: [ Stüdyo fotoğrafı veya atmosfer görseli ]<br />
                Önerilen: 1600×700, geniş format, WEBP
              </p>
            </div> */}
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
                Nereden Geldik?
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--fg)] leading-tight">
                Bir ürün yaptık,<br />
                duramadık.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-6 text-[var(--fg-muted)] text-base leading-relaxed"
            >
              {/* Polimelo poli-melodi isim hikayesi ve ürün felsefesi */}
              <p>
                Müziği ve sanatı gerçek dünyaya taşıyan <b>Polimelo</b>,
                müzikte bağımsız melodilerin bir araya gelerek oluşturduğu o kusursuz çok sesli uyum, 
                geliştirdiğimiz her üründe farklı mekaniklerin ve kullanıcı deneyiminin harmonisini temsil ediyor.
              </p>
              <p>
                İlk melodimiz olan Polyvo, dil öğrenimini akıllı algoritmalarla eşleştirme arayışımızdan doğdu. 
                Ardından gelen Syncron ise, tıpkı müzikteki kontrpuan gibi, iki bağımsız nesnenin grid üzerinde 
                aynı anda hareket ederek oluşturduğu eşsiz bir bulmaca ritmiydi. Her ürünümüz, kendi hikayesini 
                anlatan ayrı bir tınıdır.
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
              Neye İnanıyoruz?
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
              Ürünlerimiz
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6">
              {works.map((w, i) => (
                <motion.div
                  key={w.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                >
                  <Link href={w.href} className="group block">
                    <div
                      className={`p-8 flex flex-col justify-between min-h-[200px] transition-all duration-300 ${
                        w.dark ? "bg-[#0d0d0d]" : "bg-[var(--card-bg)]"
                      } border border-[var(--border)] hover:border-transparent`}
                      style={{ ["--tw-shadow" as string]: `0 0 0 2px ${w.color}40` }}
                    >
                      <div>
                        <div
                          className="w-2 h-2 rounded-full mb-6"
                          style={{ background: w.color }}
                        />
                        <h3
                          className={`text-2xl font-extrabold mb-2 ${
                            w.dark ? "text-white" : "text-[var(--fg)]"
                          }`}
                        >
                          {w.name}
                        </h3>
                        <p
                          className={`text-sm leading-relaxed ${
                            w.dark ? "text-white/45" : "text-[var(--fg-muted)]"
                          }`}
                        >
                          {w.tagline}
                        </p>
                      </div>
                      <div
                        className="mt-8 flex items-center gap-1 text-xs font-semibold transition-all duration-300 group-hover:gap-2"
                        style={{ color: w.color }}
                      >
                        Keşfet <ArrowUpRight size={13} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
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
              Bir şey mi aklında?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[var(--fg-muted)] text-lg mb-12"
            >
              Ürünler, fikirler veya işbirliği hakkında her zaman
              konuşmaya açığız.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.28 }}
            >
              {/* E-posta/iletişim butonu — adresi sen ekleyeceksin */}
              <a
                href="mailto:hello@polimelo.com"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold bg-[var(--fg)] text-[var(--bg)] transition-opacity hover:opacity-80"
              >
                Merhaba de <ArrowUpRight size={15} />
              </a>
            </motion.div>
          </div>
        </section>


        {/* ── FOOTER ───────────────────────────────────────── */}
        <footer className="px-6 md:px-12 py-10 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
            <Link href="/syncron" className="hover:text-[var(--fg)] transition-colors">Syncron</Link>
            <Link href="/polyvo" className="hover:text-[var(--fg)] transition-colors">Polyvo</Link>
            <Link href="/privacy" className="hover:text-[var(--fg)] transition-colors">Gizlilik</Link>
            <Link href="/terms" className="hover:text-[var(--fg)] transition-colors">Koşullar</Link>
          </nav>
          <p className="text-[var(--fg-muted)] text-xs">
            © {new Date().getFullYear()} Polimelo
          </p>
        </footer>
      </main>
    </>
  );
}
