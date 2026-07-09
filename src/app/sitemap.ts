import type { MetadataRoute } from "next";
import { absoluteUrl, blogPosts, routes } from "@/lib/site-content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const blogRoutes = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...routes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: now,
      changeFrequency: route.path === "/" ? ("monthly" as const) : ("yearly" as const),
      priority: route.priority,
    })),
    ...blogRoutes,
  ];
}
