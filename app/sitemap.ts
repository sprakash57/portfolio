import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${profile.siteUrl}/llms.txt`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.5 },
  ];
}
