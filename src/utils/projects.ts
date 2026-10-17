import { getCollection } from "astro:content"

export async function getProjects() {
  const projects = await getCollection("projects")
  return projects.sort((a, b) => b.data.order - a.data.order)
}
