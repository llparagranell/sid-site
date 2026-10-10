import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { SITE, sitemapPaths } from "./src/seo/routes.js";

/** Emits /sitemap.xml from the route table at build time, so it never drifts from the pages. */
function sitemap() {
  return {
    name: "devgrowth-sitemap",
    apply: "build",
    generateBundle() {
      const urls = sitemapPaths()
        .map((path) => `  <url><loc>${SITE.origin}${path}</loc></url>`)
        .join("\n");
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      });
    },
  };
}

export default defineConfig({
  base: "/",
  plugins: [react(), sitemap()],
});
