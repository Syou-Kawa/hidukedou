import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { TOOLS, COLUMNS, STATIC_PAGES } from "./src/lib/site.js";

// 各ページの最終更新日（サイトマップの lastmod 用）
const lastmod = new Map([...TOOLS, ...COLUMNS, ...STATIC_PAGES].map((p) => [p.href, p.updated]));

export default defineConfig({
  // sitemap生成とcanonical URLに使われます
  site: "https://hizukedo.com",
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/404/"),
      serialize(item) {
        const path = new URL(item.url).pathname;
        const d = lastmod.get(path);
        if (d) item.lastmod = `${d}T12:00:00+09:00`;
        return item;
      },
    }),
  ],
});
