import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://voice.mellon.chat",
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you/'),
      serialize(item) {
        item.lastmod = new Date().toISOString().split('T')[0];
        return item;
      },
    }),
  ],
  output: "static",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});
