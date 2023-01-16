import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import theme from "./docs/themes/github-dark.json";

// https://astro.build/config
export default defineConfig({
  // add mx support
  integrations: [mdx()],
  srcDir: "./docs",
  outDir: "./dist/docs",

  // setup syntax highlighting theme
  markdown: {
    shikiConfig: {
      theme: {
        type: "dark",
        settings: theme.tokenColors,
      },
    },
  },
});
