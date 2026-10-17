import { glob } from "astro/loaders"
import { defineCollection } from "astro:content"
import { z } from "astro/zod"

const date = z
  .string()
  .regex(/^(\d{2}\/)?\d{2}\/\d{4}$/, "Use dd/mm/yyyy or mm/yyyy")
  .transform((s) => {
    const [y, m, d = 1] = s.split("/").reverse().map(Number)
    return new Date(Date.UTC(y, m - 1, d))
  })

const projects = defineCollection({
  loader: glob({ base: "src/content/projects", pattern: "*.md" }),
  schema: z.object({
    title: z.string(),
    startDate: z.union([date, z.string()]),
    endDate: date.nullable().optional(),
    format: z.enum(["Theatre", "Short Film"]),
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
          title: z.string().optional(),
          label: z.string().optional(),
        }),
      )
      .default([]),
    order: z.number(),
  }),
})

export const collections = { projects }
