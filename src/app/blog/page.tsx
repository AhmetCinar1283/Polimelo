"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, BookOpen, MessageSquare, Code } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { BLOG_POSTS, BlogPost } from "@/data/posts";
import { useLanguage } from "@/context/LanguageContext";

const categories = ["all", "Education", "Game Design", "Software"] as const;

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { language, t } = useLanguage();

  const filteredPosts = selectedCategory === "all"
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category.en === selectedCategory);

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "all":
        return language === "tr" ? "Hepsi" : "All";
      case "Education":
      case "Eğitim":
        return language === "tr" ? "Eğitim" : "Education";
      case "Game Design":
      case "Oyun Tasarımı":
        return language === "tr" ? "Oyun Tasarımı" : "Game Design";
      case "Software":
      case "Yazılım":
        return language === "tr" ? "Yazılım" : "Software";
      default:
        return cat;
    }
  };

  const getCategoryIcon = (category: BlogPost["category"]["en"]) => {
    switch (category) {
      case "Education":
        return <BookOpen size={14} className="text-indigo-400" />;
      case "Game Design":
        return <MessageSquare size={14} className="text-emerald-400" />;
      case "Software":
        return <Code size={14} className="text-amber-400" />;
    }
  };

  const getCategoryColorClass = (category: BlogPost["category"]["en"]) => {
    switch (category) {
      case "Education":
        return "text-indigo-400 border-indigo-500/20 bg-indigo-500/5";
      case "Game Design":
        return "text-emerald-400 border-emerald-500/20 bg-emerald-500/5";
      case "Software":
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
            {t("blog.badge")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-extrabold leading-none tracking-tight text-[var(--fg)] mb-8"
          >
            {t("blog.title")}
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
            {t("blog.desc")}
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
                {getCategoryLabel(category)}
              </motion.button>
            ))}
          </div>
        </section>

        {/* POLIMELO LAB CALLOUT BANNER */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-6 bg-gradient-to-r from-[#ef5a5a]/10 to-transparent border border-[#ef5a5a]/20 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          >
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ef5a5a] animate-pulse" />
                <span className="font-mono text-[10px] font-bold tracking-widest text-[#ef5a5a] uppercase">
                  Polimelo Laboratory Outpost
                </span>
              </div>
              <p className="text-sm text-[var(--fg-muted)] leading-relaxed max-w-2xl font-serif">
                {language === "tr"
                  ? "Yapay zeka, veri yapıları ve lineer cebir kuramlarını tarayıcıda çalışan canlı simülasyonlar ve interaktif kodlarla öğrenmek ister misiniz? Polimelo Lab'deki interaktif derslere ve sandbox alanına göz atın."
                  : "Want to learn artificial intelligence, data structures, and linear algebra theories with live in-browser simulations and interactive code? Explore the courses and sandbox modules in Polimelo Lab."}
              </p>
            </div>
            <Link
              href="/lab"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--fg)] hover:text-[#ef5a5a] border-b border-transparent hover:border-[#ef5a5a] transition-all duration-300 pb-0.5 whitespace-nowrap"
            >
              {language === "tr" ? "Laboratuvarı Keşfet" : "Explore Laboratory"} <ArrowUpRight size={13} />
            </Link>
          </motion.div>
        </section>

        {/* ARTICLES GRID */}
        <section className="px-6 md:px-12 max-w-5xl mx-auto pb-32">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-[var(--border)] rounded-lg">
              <p className="text-[var(--fg-muted)]">{t("blog.noPosts")}</p>
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
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColorClass(post.category.en)}`}>
                            {getCategoryIcon(post.category.en)}
                            {post.category[language]}
                          </span>
                          <span className="text-[var(--fg-muted)] text-xs font-mono">
                            {post.readTime[language]}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl font-bold group-hover:text-[var(--fg)] text-[var(--fg)] leading-snug mb-3 transition-colors duration-300">
                          {post.title[language]}
                        </h2>

                        {/* Description */}
                        <p className="text-[var(--fg-muted)] text-sm leading-relaxed mb-8">
                          {post.description[language]}
                        </p>
                      </div>

                      {/* Footer Actions */}
                      <div className="flex items-center justify-between pt-6 border-t border-[var(--border)]/40 mt-auto">
                        <span className="text-xs text-[var(--fg-muted)] font-mono">
                          {post.date[language]}
                        </span>
                        <span className="flex items-center gap-1 text-sm font-semibold text-[var(--fg-muted)] group-hover:text-[var(--fg)] transition-all duration-300 group-hover:translate-x-1">
                          {t("common.readArticle")} <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
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
        <Footer />
      </main>
    </>
  );
}
