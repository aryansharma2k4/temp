import { cn } from "@/lib/utils"

type ShinyTextProps = {
  children: React.ReactNode
  className?: string
  speed?: number // seconds per sweep
}

// Text with a soft highlight sweeping across it. Styles live in globals.css (.shiny-text).
export function ShinyText({ children, className, speed = 3 }: ShinyTextProps) {
  return (
    <span className={cn("shiny-text", className)} style={{ animationDuration: `${speed}s` }}>
      {children}
    </span>
  )
}
