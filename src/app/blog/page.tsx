"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, BookOpen, MessageSquare, Code } from "lucide-react";
import Nav from "@/components/Nav";
import { BLOG_POSTS, BlogPost } from "@/data/posts";

const categories = ["Hepsi", "Eğitim", "Oyun Tasarımı", "Yazılım"] as const;

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Hepsi");

  const filteredPosts = selectedCategory === "Hepsi"
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === selectedCategory);

  const getCategoryIcon = (category: BlogPost["category"]) => {
    switch (category) {
      case "Eğitim":
        return <BookOpen size={14} className="text-indigo-400" />;
      case "Oyun Tasarımı":
        return <MessageSquare size={14} className="text-emerald-400" />;
      case "Yazılım":
        return <Code size={14} className="text-amber-400" />;
    }
  };

  const getCategoryColorClass = (category: BlogPost["category"]) => {
    switch (category) {
      case "Eğitim":
        return "text-indigo-400 border-indigo-500/20 bg-indigo-500/5";
      case "Oyun Tasarımı":
        return "text-emerald-400 border-emerald-500/20 bg-emerald-500/5";
      case "Yazılım":
        return "text-amber-400 border-amber-500/20 bg-amber-500/5";
    }
  };

  return (
    <>
      <Nav />

      <main className="bg-[var(--bg)] text-[var(--fg)] min-h-screen">
        {/* HERO HEADER */}
        <section className="pt-40 pb-16 px-6 md:px-12 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-mono text-xs tracking-[0.35em] uppercase text-[var(--fg-muted)] mb-5"
          >
            Bilgi Bankası & Blog
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-extrabold leading-none tracking-tight text-[var(--fg)] mb-8"
          >
            Melodiler ve Kodlar.
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-px bg-[var(--border)] mb-10"
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-lg md:text-xl text-[var(--fg-muted)] font-light leading-relaxed max-w-2xl"
          >
            Öğrenme algoritmalarından bulmaca tasarımı mekaniklerine, çapraz platform yazılım mimarilerinden veri analitiğine kadar stüdyomuzun mutfağından teknik paylaşımlar.
          </motion.p>
        </section>

        {/* CATEGORY FILTER */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto mb-16">
          <div className="flex flex-wrap gap-2.5 border-b border-[var(--border)] pb-6">
            {categories.map((category, idx) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 text-sm font-semibold rounded-full border transition-all duration-300 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-[var(--fg)] text-[var(--bg)] border-[var(--fg)]"
                    : "bg-[var(--card-bg)] text-[var(--fg-muted)] border-[var(--border)] hover:border-[var(--fg-muted)]"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </section>

        {/* ARTICLES GRID */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-32">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-[var(--border)] rounded-lg">
              <p className="text-[var(--fg-muted)]">Bu kategoride henüz yazı bulunmuyor.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-8">
              {filteredPosts.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="group"
                >
                  <Link href={`/blog/${post.slug}`} className="block h-full">
                    <div className="h-full p-8 flex flex-col justify-between bg-[var(--card-bg)] border border-[var(--border)] rounded-lg hover:border-[var(--fg-muted)] transition-all duration-300">
                      <div>
                        {/* Meta Tags */}
                        <div className="flex items-center gap-3 mb-6">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColorClass(post.category)}`}>
                            {getCategoryIcon(post.category)}
                            {post.category}
                          </span>
                          <span className="text-[var(--fg-muted)] text-xs font-mono">
                            {post.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl font-bold group-hover:text-[var(--fg)] text-[var(--fg)] leading-snug mb-3 transition-colors duration-300">
                          {post.title}
                        </h2>

                        {/* Description */}
                        <p className="text-[var(--fg-muted)] text-sm leading-relaxed mb-8">
                          {post.description}
                        </p>
                      </div>

                      {/* Footer Actions */}
                      <div className="flex items-center justify-between pt-6 border-t border-[var(--border)]/40 mt-auto">
                        <span className="text-xs text-[var(--fg-muted)] font-mono">
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1 text-sm font-semibold text-[var(--fg-muted)] group-hover:text-[var(--fg)] transition-all duration-300 group-hover:translate-x-1">
                          Yazıyı Oku <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* FOOTER */}
        <footer className="px-6 md:px-12 py-10 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/" className="text-[var(--fg-muted)] text-sm hover:text-[var(--fg)] transition-colors font-mono">
              ← Polimelo Anasayfa
            </Link>
            <Link href="/privacy" className="text-[var(--fg-muted)] text-xs hover:text-[var(--fg)] transition-colors font-mono">
              Gizlilik Politikası
            </Link>
            <Link href="/terms" className="text-[var(--fg-muted)] text-xs hover:text-[var(--fg)] transition-colors font-mono">
              Kullanım Koşulları
            </Link>
          </div>
          <p className="text-[var(--fg-muted)] text-xs">
            © {new Date().getFullYear()} Polimelo — Blog
          </p>
        </footer>
      </main>
    </>
  );
}
