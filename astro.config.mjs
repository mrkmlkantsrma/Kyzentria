import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://kyzentria.pages.dev",
  integrations: [sitemap()],
  vite: {
    build: {
      cssMinify: "esbuild",
    },
  },
});
