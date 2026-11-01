import { useState } from "preact/hooks"

const field =
  "text-sm mt-1.5 block w-full rounded-md border border-card-accent bg-card px-3 py-2 text-base text-foreground placeholder:text-muted transition-colors hover:border-muted focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
const label = "block text-sm font-medium text-foreground"

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault()
    const form = event.currentTarget as HTMLFormElement

    try {
      const response = await fetch(window.location.pathname, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          new FormData(form) as unknown as Record<string, string>,
        ).toString(),
      })

      if (!response.ok) throw new Error()

      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="w-full max-w-md space-y-5">
      <form
        name="contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <p class="hidden">
          <label>
            Leave this field blank if you're human:{" "}
            <input name="bot-field" type="text" />
          </label>
        </p>
        <input type="hidden" name="form-name" value="contact" />
        <h1 className="text-2xl font-bold">Email Me</h1>

        <label className={label}>
          Your Name:
          <input
            type="text"
            name="name"
            placeholder="Jane Smith"
            autoComplete="name"
            required
            className={field}
          />
        </label>

        <label className={label}>
          Your Email:
          <input
            type="email"
            name="email"
            placeholder="jane@example.com"
            autoComplete="email"
            required
            className={field}
          />
        </label>

        <label className={label}>
          Message:
          <textarea
            name="message"
            placeholder="What would you like to talk about?"
            rows={6}
            required
            className={`${field} min-h-25 resize-y`}
          />
        </label>

        {status === "success" && (
          <p className="rounded-md border border-green-500 bg-green-500/10 px-4 py-3 text-sm text-green-600">
            Thank you! Your message has been sent.
          </p>
        )}

        {status === "error" && (
          <p className="rounded-md border border-red-500 bg-red-500/10 px-4 py-3 text-sm text-red-600">
            Something went wrong. Please try again.
          </p>
        )}

        <button
          type="submit"
          className="w-full cursor-pointer rounded-md bg-accent px-5 py-2.5 font-semibold text-background transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Send message
        </button>
      </form>
    </div>
  )
}
