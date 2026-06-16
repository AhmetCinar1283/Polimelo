import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, User, ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import { BLOG_POSTS } from "@/data/posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Yazı Bulunamadı — Polimelo Blog",
    };
  }

  return {
    title: `${post.title} — Polimelo Blog`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related articles (filtered by category, excluding current)
  const relatedPosts = BLOG_POSTS
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  // Fallback related posts if not enough in same category
  const finalRelated = relatedPosts.length >= 2 
    ? relatedPosts 
    : [...relatedPosts, ...BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category !== post.category)].slice(0, 2);

  // Colors based on category
  const getCategoryColor = (category: typeof post.category) => {
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
        {/* HEADER */}
        <article className="pt-40 pb-24 px-6 md:px-12 max-w-3xl mx-auto">
          {/* Back Button */}
          <div className="mb-10">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Geri dön
            </Link>
          </div>

          {/* Category & Read Time */}
          <div className="flex items-center gap-4 mb-6">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(post.category)}`}>
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[var(--fg-muted)] font-mono">
              <Clock size={12} />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-[var(--fg)] mb-8">
            {post.title}
          </h1>

          {/* Author & Date */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pb-10 border-b border-[var(--border)] text-sm text-[var(--fg-muted)] mb-12">
            <span className="flex items-center gap-1.5 font-mono">
              <User size={14} />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5 font-mono">
              <Calendar size={14} />
              {post.date}
            </span>
          </div>

          {/* Content Body */}
          <div 
            className="blog-content text-[var(--fg-muted)] leading-relaxed text-base md:text-lg mb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Horizontal Rule */}
          <hr className="border-[var(--border)] my-12" />

          {/* RELATED ARTICLES */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-[var(--fg)] mb-8">İlginizi Çekebilecek Diğer Yazılar</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {finalRelated.map((related) => (
                <Link 
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group block p-6 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg hover:border-[var(--fg-muted)] transition-all duration-300 h-full flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[var(--fg-muted)] text-xs font-mono block mb-2">{related.category}</span>
                    <h3 className="text-lg font-bold text-[var(--fg)] group-hover:text-[var(--fg)] mb-4 leading-snug">
                      {related.title}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--fg-muted)] group-hover:text-[var(--fg)] group-hover:translate-x-1 transition-all mt-4">
                    Yazıyı Oku <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </article>

        {/* FOOTER */}
        <footer className="px-6 md:px-12 py-10 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/" className="text-[var(--fg-muted)] text-sm hover:text-[var(--fg)] transition-colors font-mono">
              ← Polimelo Anasayfa
            </Link>
            <Link href="/blog" className="text-[var(--fg-muted)] text-xs hover:text-[var(--fg)] transition-colors font-mono">
              Blog Listesi
            </Link>
            <Link href="/privacy" className="text-[var(--fg-muted)] text-xs hover:text-[var(--fg)] transition-colors font-mono">
              Gizlilik Politikası
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
