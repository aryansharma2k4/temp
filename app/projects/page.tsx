import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ProjectCard } from "@/components/projectcard"
import { projects } from "@/lib/data"

export const metadata: Metadata = { title: "Projects — Dharani Tharan" }

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24">
      <Link href="/#projects" className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 dark:text-zinc-400 dark:hover:text-white">
        <ArrowLeft className="h-3.5 w-3.5" /> Back home
      </Link>
      <h1 className="mt-8 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500 dark:text-zinc-500">All Projects</h1>
      <p className="mt-4 max-w-2xl text-neutral-600 dark:text-zinc-400">
        Everything I&apos;ve built so far. Source code for each project is on GitHub.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
      </div>
    </main>
  )
}
