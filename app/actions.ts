"use server"

import { links } from "@/lib/data"

export type ContactState = { ok: boolean; message: string } | null

// Sends the contact form to my inbox through Resend's REST API (needs RESEND_API_KEY).
export async function sendMessage(_prev: ContactState, form: FormData): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field.
  if (form.get("company")) return { ok: true, message: "Thanks! Your message has been sent." }

  const name = String(form.get("name") ?? "").trim()
  const email = String(form.get("email") ?? "").trim()
  const message = String(form.get("message") ?? "").trim()

  if (!name || name.length > 100) return { ok: false, message: "Please enter your name (up to 100 characters)." }
  if (email.length > 200 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, message: "Please enter a valid email address." }
  if (!message || message.length > 5000) return { ok: false, message: "Please enter a message (up to 5000 characters)." }

  const key = process.env.RESEND_API_KEY
  if (!key) return { ok: false, message: `Messaging isn't set up yet. Please email me at ${links.email}.` }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
        to: links.email,
        reply_to: email,
        subject: `Portfolio message from ${name.replace(/[\r\n]+/g, " ")}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    })
    if (!res.ok) throw new Error(`Resend status: ${res.status}`)
    return { ok: true, message: "Thanks! Your message has been sent." }
  } catch {
    return { ok: false, message: `Something went wrong. Please email me at ${links.email}.` }
  }
}
