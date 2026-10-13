// import { file } from "astro/loaders"
import { glob } from "astro/loaders"
import { defineCollection } from "astro:content"
import { z } from "astro/zod"

const projects = defineCollection({
  loader: glob({ base: "src/content/projects", pattern: "*.md" }),
  // loader: file("src/content/projects.json"),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    format: z.string(),
    directors: z.array(z.string()).default([]),
    writers: z.array(z.string()).default([]),
    prodCompanies: z.array(z.string()).optional(),
    venues: z.array(z.string()).default([]),
    cast: z.array(z.string()).default([]),
    partners: z.array(z.string()).default([]),
    links: z
      .array(z.object({ label: z.string(), url: z.string() }))
      .default([]),
    banner: z.string(),
    gallery: z
      .array(
        z.object({
          url: z.string(),
          alt: z.string(),
          title: z.string(),
          label: z.string(),
        }),
      )
      .default([]),
  }),
})

export const collections = { projects }
