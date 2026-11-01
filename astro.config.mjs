// @ts-check
import { defineConfig } from "astro/config"

import tailwindcss from "@tailwindcss/vite"

import sitemap from "@astrojs/sitemap"

import preact from "@astrojs/preact"

import mdx from "@astrojs/mdx"

// https://astro.build/config
export default defineConfig({
  site: "https://reillyfeatherstone.com/",
  image: {
    domains: ["static.reillyfeatherstone.com"],
    layout: "constrained",
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      lastmod: new Date(),
    }),
    preact(),
    mdx(),
  ],
})
