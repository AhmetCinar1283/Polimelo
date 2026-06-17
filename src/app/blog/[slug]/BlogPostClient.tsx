"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { BlogPost } from "@/data/posts";
import { useLanguage } from "@/context/LanguageContext";

interface BlogPostClientProps {
  post: BlogPost;
  finalRelated: BlogPost[];
}

export default function BlogPostClient({ post, finalRelated }: BlogPostClientProps) {
  const { language, t } = useLanguage();

  // Colors based on category
  const getCategoryColor = (category: typeof post.category.en) => {
    switch (category) {
      case "Education":
        return "text-indigo-400 border-indigo-500/20 bg-indigo-500/5";
      case "Game Design":
        return "text-emerald-400 border-emerald-500/20 bg-emerald-500/5";
      case "Software":
        return "text-amber-400 border-amber-500/20 bg-amber-500/5";
      default:
        return "text-indigo-400 border-indigo-500/20 bg-indigo-500/5";
    }
  };

  return (
    <>
      <Nav />

      <main className="bg-[var(--bg)] text-[var(--fg)] min-h-screen">
        {/* HEADER */}
        <article className="pt-40 pb-24 px-6 md:px-12 max-w-3xl mx-auto">
          {/* Back Button */}
          <div className="mb-10">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              {t("common.back")}
            </Link>
          </div>

          {/* Category & Read Time */}
          <div className="flex items-center gap-4 mb-6">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(post.category.en)}`}>
              {post.category[language]}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[var(--fg-muted)] font-mono">
              <Clock size={12} />
              {post.readTime[language]}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-[var(--fg)] mb-8">
            {post.title[language]}
          </h1>

          {/* Author & Date */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pb-10 border-b border-[var(--border)] text-sm text-[var(--fg-muted)] mb-12">
            <span className="flex items-center gap-1.5 font-mono">
              <User size={14} />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5 font-mono">
              <Calendar size={14} />
              {post.date[language]}
            </span>
          </div>

          {/* Content Body */}
          <div 
            className="blog-content text-[var(--fg-muted)] leading-relaxed text-base md:text-lg mb-16"
            dangerouslySetInnerHTML={{ __html: post.content[language] }}
          />

          {/* Horizontal Rule */}
          <hr className="border-[var(--border)] my-12" />

          {/* RELATED ARTICLES */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-[var(--fg)] mb-8">{t("blog.relatedTitle")}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {finalRelated.map((related) => (
                <Link 
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group block p-6 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg hover:border-[var(--fg-muted)] transition-all duration-300 h-full flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[var(--fg-muted)] text-xs font-mono block mb-2">{related.category[language]}</span>
                    <h3 className="text-lg font-bold text-[var(--fg)] group-hover:text-[var(--fg)] mb-4 leading-snug">
                      {related.title[language]}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--fg-muted)] group-hover:text-[var(--fg)] group-hover:translate-x-1 transition-all mt-4">
                    {t("common.readArticle")} <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </article>

        {/* FOOTER */}
        <Footer />
      </main>
    </>
  );
}
