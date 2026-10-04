"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"

type BlurRotateProps = {
  items: React.ReactNode[]
  label: string // full text for screen readers, since the visible text keeps changing
  interval?: number // ms each item stays visible
  className?: string
}

// Cycles through items, blurring each one out and the next one in.
export function BlurRotate({ items, label, interval = 2600, className }: BlurRotateProps) {
  const [index, setIndex] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), interval)
    return () => clearInterval(id)
  }, [items.length, interval])

  return (
    <span className={cn("inline-block", className)}>
      <span className="sr-only">{label}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={index}
          aria-hidden
          className="inline-block"
          initial={{ opacity: 0, filter: "blur(8px)", y: 6 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          exit={{ opacity: 0, filter: "blur(8px)", y: -6 }}
          transition={{ duration: reduceMotion ? 0 : 0.45, ease: "easeOut" }}
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
