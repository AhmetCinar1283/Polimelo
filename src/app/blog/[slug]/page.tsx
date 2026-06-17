import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/posts";
import BlogPostClient from "./BlogPostClient";

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
    title: `${post.title.tr} | ${post.title.en} — Polimelo Blog`,
    description: `${post.description.tr} | ${post.description.en}`,
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
