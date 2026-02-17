import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://voice.mellon.chat",
  integrations: [sitemap()],
  output: "static",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});
