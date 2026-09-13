import {
  blogPosts,
  experiences,
  parties,
  programs,
  shopProducts,
} from "@/lib/data";
import { SITE_URL } from "@/lib/site";
export default function sitemap() {
  const staticRoutes = [
    "",
    "/visit",
    "/shop",
    "/parties",
    "/programs",
    "/shows",
    "/map",
    "/stamps",
    "/blog",
    "/our-story",
    "/connect",
    "/accessibility",
    "/vip",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
  const dynamicRoutes = [
    ...experiences.map((e) => `/experience/${e.slug}`),
    ...shopProducts.map((p) => `/shop/${p.slug}`),
    ...parties.map((p) => `/parties/${p.slug}`),
    ...programs.map((p) => `/programs/${p.slug}`),
    ...blogPosts.map((p) => `/blog/${p.slug}`),
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));
  return [...staticRoutes, ...dynamicRoutes];
}
