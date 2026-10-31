const fmt = new Intl.DateTimeFormat("en-GB", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
})

export function formatDateRange(start: Date | string, end?: Date | null) {
  if (typeof start === "string") return start // custom text, shown as-is
  if (end === undefined) return `${fmt.format(start)} –` // ongoing
  if (end === null) return fmt.format(start) // single date
  return fmt.formatRange(start, end)
}

export function formatYearRange(start: Date | string, end?: Date | null) {
  if (typeof start === "string") return start
  const s = start.getUTCFullYear()
  const e = end?.getUTCFullYear()
  return e && e !== s ? `${s} – ${e}` : `${s}`
}

export function formatNowUpdatedDate(value: string) {
  const [day, month, year] = value.split("-").map(Number)
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  })
}
