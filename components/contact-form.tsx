"use client"

import { useActionState } from "react"
import { ArrowRight } from "lucide-react"
import { sendMessage } from "@/app/actions"

const field = "w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-neutral-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-zinc-600"

export function ContactForm() {
  const [state, action, pending] = useActionState(sendMessage, null)

  return (
    <form action={action} className="space-y-3">
      {/* Honeypot for bots: hidden from people and screen readers */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <label className="block">
        <span className="sr-only">Full name</span>
        <input name="name" required maxLength={100} placeholder="Full Name" autoComplete="name" className={field} />
      </label>
      <label className="block">
        <span className="sr-only">Email address</span>
        <input name="email" type="email" required maxLength={200} placeholder="Email Address" autoComplete="email" className={field} />
      </label>
      <label className="block">
        <span className="sr-only">Message</span>
        <textarea name="message" required maxLength={5000} rows={5} placeholder="Your Message" className={`${field} resize-none`} />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-300 hover:bg-neutral-50 disabled:opacity-60 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
      >
        {pending ? "Sending…" : "Send Message"} <ArrowRight className="h-4 w-4" />
      </button>
      {state && (
        <p role="status" className={`text-sm ${state.ok ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}>
          {state.message}
        </p>
      )}
    </form>
  )
}
