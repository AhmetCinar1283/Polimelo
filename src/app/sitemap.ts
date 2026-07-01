import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://polimelo.com";
  const languages = ["tr", "en"];
  const routes = [
    "", 
    "/about", 
    "/polyvo", 
    "/syncron", 
    "/privacy", 
    "/terms",
    "/blog",
    "/contact",
    "/spaced-repetition-calculator"
  ];

  const staticSitemap: any[] = [];
  
  for (const lang of languages) {
    for (const route of routes) {
      staticSitemap.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: (route === "" || route === "/polyvo" || route === "/syncron" || route === "/blog" ? "weekly" : "monthly") as any,
        priority: route === "" ? 1.0 : route === "/polyvo" || route === "/syncron" || route === "/blog" ? 0.9 : 0.5,
      });
    }
  }

  const blogSitemap: any[] = [];
  for (const lang of languages) {
    for (const post of BLOG_POSTS) {
      blogSitemap.push({
        url: `${baseUrl}/${lang}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as any,
        priority: 0.8,
      });
    }
  }

  return [...staticSitemap, ...blogSitemap];
}


