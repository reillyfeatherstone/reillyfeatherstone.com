import { file } from "astro/loaders"
import { defineCollection } from "astro:content"
import { z } from "astro/zod"

const projects = defineCollection({
  loader: file("src/content/projects.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    date: z.string(),
    format: z.string(),
    director: z.string(),
    writer: z.string(),
    prodCompany: z.string().optional(),
    venues: z.string().optional(),
    cast: z.string(),
    partners: z.string().optional(),
    synopsis: z.string(),
    links: z.string().optional(),
  }),
})

export const collections = { projects }
