import { defineConfig } from "astro/config";
import markdownIntegration from "@astropub/md";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [markdownIntegration(), react(), tailwind()],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
