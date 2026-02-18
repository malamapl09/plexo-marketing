import type { MetadataRoute } from "next";

const baseUrl = "https://plexoapp.com";

const pages = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/demo", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/roi-calculator", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/features/tasks", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/features/checklists", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/features/audits", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/features/campaigns", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/features/training", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/features/corrective-actions", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/features/gamification", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/features/visual-merchandising", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/features/issue-tracking", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/cookies", changeFrequency: "yearly" as const, priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    const cleanPath = page.path === "/" ? "" : page.path;

    entries.push({
      url: `${baseUrl}${cleanPath}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          en: `${baseUrl}${cleanPath}`,
          es: `${baseUrl}/es${cleanPath}`,
        },
      },
    });

    entries.push({
      url: `${baseUrl}/es${cleanPath}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          en: `${baseUrl}${cleanPath}`,
          es: `${baseUrl}/es${cleanPath}`,
        },
      },
    });
  }

  return entries;
}
