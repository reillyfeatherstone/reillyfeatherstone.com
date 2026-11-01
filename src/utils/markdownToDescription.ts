export function markdownToDescription(markdown = "", maxLength = 160) {
  const text = markdown
    .replace(/```[\s\S]*?```/g, " ") // code blocks
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ") // images
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1") // links -> link text
    .replace(/<[^>]+>/g, " ") // inline HTML
    .replace(/^#{1,6}\s+/gm, "") // headings
    .replace(/^\s*>\s?/gm, "") // blockquotes
    .replace(/^\s*([-*+]|\d+\.)\s+/gm, "") // list markers
    .replace(/(\*\*|__|\*|`|~~)/g, "") // bold, italic (asterisks), inline code, strikethrough
    .replace(/\b_+([^_]+)_+\b/g, "$1") // italic with underscores
    .replace(/\s+/g, " ") // collapse whitespace and newlines
    .trim()

  if (text.length <= maxLength || maxLength === 0) return text

  // Cut at the last full word that fits, leaving room for the ellipsis
  const cut = text.slice(0, maxLength - 1)
  const lastSpace = cut.lastIndexOf(" ")
  const trimmed = lastSpace > 0 ? cut.slice(0, lastSpace) : cut

  return trimmed.replace(/[.,;:!?\-–—\s]+$/, "") + "…"
}
