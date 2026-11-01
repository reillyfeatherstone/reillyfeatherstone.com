// @ts-check
import { defineConfig } from "astro/config"

import tailwindcss from "@tailwindcss/vite"

import sitemap, { ChangeFreqEnum } from "@astrojs/sitemap"

import preact from "@astrojs/preact"

import mdx from "@astrojs/mdx"

import partytown from "@astrojs/partytown"

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
      priority: 1,
      chunks: {
        projects: (item) => {
          if (/projects/.test(item.url)) {
            item.changefreq = ChangeFreqEnum.NEVER
            item.lastmod = new Date().toISOString()
            item.priority = 0.9
            return item
          }
        },
      },
    }),
    preact(),
    mdx(),
    partytown({
      config: {
        forward: ["posthog.capture", "posthog.identify", "posthog.reset"],
      },
    }),
  ],
})
