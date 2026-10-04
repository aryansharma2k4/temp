"use client"

import { useEffect, useState, useSyncExternalStore } from "react"
import { Quote } from "lucide-react"

const quotes = [
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra" },
  { text: "Premature optimization is the root of all evil.", author: "Donald Knuth" },
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
]

// Picked once per page load in the browser; the server renders a hidden placeholder (-1) so hydration matches.
const clientPick = Math.floor(Math.random() * quotes.length)
const noop = () => () => {}

function ordinalSuffix(n: number) {
  return n % 100 >= 11 && n % 100 <= 13 ? "th" : ({ 1: "st", 2: "nd", 3: "rd" } as Record<number, string>)[n % 10] ?? "th"
}

// Each browser counts once; its visitor number is remembered so reloads don't inflate the total.
function useVisitorNumber() {
  const [count, setCount] = useState<number | null>(null)
  useEffect(() => {
    let saved: string | null = null
    try { saved = localStorage.getItem("visitor-number") } catch {}
    const p: Promise<{ count: number | null; demo?: boolean }> = saved
      ? Promise.resolve({ count: Number(saved) })
      : fetch("/api/visitors", { method: "POST" }).then((r) => r.json())
    p.then(({ count, demo }) => {
      if (!count) return
      // Only remember real counts, so placeholder numbers vanish once the counter is configured.
      if (!demo) try { localStorage.setItem("visitor-number", String(count)) } catch {}
      setCount(count)
    }).catch(() => {})
  }, [])
  return count
}

export function QuoteCard() {
  const index = useSyncExternalStore(noop, () => clientPick, () => -1)
  const quote = quotes[Math.max(index, 0)]
  const visitor = useVisitorNumber()

  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-neutral-200 bg-white/70 p-6 md:flex-row md:items-center md:p-8 dark:border-zinc-800 dark:bg-zinc-950/70">
      <figure className={`flex flex-1 gap-4 transition-opacity duration-500 ${index < 0 ? "opacity-0" : "opacity-100"}`}>
        <Quote className="mt-1 h-4 w-4 shrink-0 fill-current text-neutral-400 dark:text-zinc-500" aria-hidden />
        <div className="flex-1">
          <blockquote className="leading-relaxed text-neutral-700 dark:text-zinc-300">{quote.text}</blockquote>
          <figcaption className="mt-2 text-right text-sm text-neutral-500 dark:text-zinc-500">— {quote.author}</figcaption>
        </div>
      </figure>
      {visitor && (
        <p className="shrink-0 border-neutral-200 text-neutral-600 md:border-l md:pl-8 dark:border-zinc-800 dark:text-zinc-400">
          You are the <span className="font-semibold text-neutral-900 dark:text-white">{visitor.toLocaleString("en-US")}</span>
          <sup>{ordinalSuffix(visitor)}</sup> visitor
        </p>
      )}
    </div>
  )
}
