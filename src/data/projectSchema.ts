import type { CollectionEntry } from "astro:content"
import { personSchema } from "@data/personSchema"

type ProjectData = CollectionEntry<"projects">["data"]

interface Options {
  url: string
  description?: string
  image?: string
}

const named =
  (type: string) =>
  (names: string[] = []) =>
    names.map((name) => ({ "@type": type, name }))

const people = named("Person")
const orgs = named("Organization")
const places = named("Place")

const isoDate = (d?: Date | string | null) =>
  d instanceof Date && !Number.isNaN(d.getTime())
    ? d.toISOString().slice(0, 10)
    : undefined

const compact = (obj: Record<string, unknown>) =>
  Object.fromEntries(
    Object.entries(obj).filter(
      ([, v]) => v != null && !(Array.isArray(v) && v.length === 0),
    ),
  )

type Builder = (d: ProjectData, cast: object[]) => Record<string, unknown>

const byFormat: Record<ProjectData["format"], Builder> = {
  Theatre: (d, cast) => ({
    "@type": "TheaterEvent",
    startDate: isoDate(d.startDate),
    endDate: isoDate(d.endDate),
    performer: cast,
    organizer: orgs(d.prodCompanies),
    location: places(d.venues),
  }),
  "Short Film": (d, cast) => ({
    "@type": "Movie",
    datePublished: isoDate(d.startDate),
    actor: cast,
    author: people(d.writers),
    productionCompany: orgs(d.prodCompanies),
  }),
}

export function buildProjectSchema(
  data: ProjectData,
  { url, description, image }: Options,
) {
  const cast = [
    {
      "@type": "Person",
      "@id": personSchema["@id"],
      name: personSchema.name,
    },
    ...people(data.cast.filter((name) => name !== personSchema.name)),
  ]

  return compact({
    "@context": "https://schema.org",
    "@id": `${url}#project`,
    name: data.title,
    url,
    description,
    image,
    director: people(data.directors),
    ...byFormat[data.format](data, cast),
  })
}
