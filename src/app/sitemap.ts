import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/solutions",
    "/careers",
    "/contact",
    "/get-a-quote",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/privacy" || route === "/terms" ? 0.3 : 0.8,
  }));
}
