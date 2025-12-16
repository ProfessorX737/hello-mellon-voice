import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://mellonvoice.com",
  integrations: [sitemap()],
  output: "static",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});
