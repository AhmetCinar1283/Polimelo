import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS, ARCHIVED_BLOG_POSTS } from "@/data/posts";
import BlogPostClient from "./BlogPostClient";

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

const ALL_POSTS = [...BLOG_POSTS, ...ARCHIVED_BLOG_POSTS];

export async function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const post of ALL_POSTS) {
    params.push({ lang: "tr", slug: post.slug });
    params.push({ lang: "en", slug: post.slug });
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = ALL_POSTS.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Yazı Bulunamadı — Polimelo Blog",
    };
  }

  const validLang = lang === "en" ? "en" : "tr";
  const isArchived = ARCHIVED_BLOG_POSTS.some((p) => p.slug === slug);

  return {
    title: `${post.title[validLang]} — Polimelo Blog`,
    description: post.description[validLang],
    robots: {
      index: !isArchived,
      follow: true,
    },
    alternates: {
      canonical: `/${validLang}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { lang, slug } = await params;
  const post = ALL_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related articles (filtered by category, excluding current)
  // We prefer showing active BLOG_POSTS as related, fallback to ALL_POSTS
  const relatedPosts = BLOG_POSTS
    .filter((p) => p.slug !== post.slug && p.category.en === post.category.en)
    .slice(0, 2);

  // Fallback related posts if not enough in same category
  const finalRelated = relatedPosts.length >= 2 
    ? relatedPosts 
    : [...relatedPosts, ...BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category.en !== post.category.en)].slice(0, 2);

  return (
    <BlogPostClient post={post} finalRelated={finalRelated} />
  );
}

