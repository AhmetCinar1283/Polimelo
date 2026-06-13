import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://polimelo.com";
  const routes = ["", "/about", "/polyvo", "/syncron", "/privacy", "/terms"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/polyvo" || route === "/syncron" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/polyvo" || route === "/syncron" ? 0.9 : 0.5,
  }));
}
