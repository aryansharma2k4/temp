import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { SiGithub } from "react-icons/si"
import type { Project } from "@/lib/data"

const iconLink = "p-1.5 rounded-md text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800 transition-colors"

export function ProjectCard({ title, description, imageUrl, githubUrl, liveUrl, tags }: Project) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition duration-300 hover:-translate-y-0.5 hover:border-neutral-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700">
      <div className="relative aspect-[16/9] border-b border-neutral-200 dark:border-zinc-800">
        {imageUrl ? (
          <Image src={imageUrl} alt={`${title} screenshot`} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
        ) : (
          // Not a screenshot: a neutral preview tile showing the repo name.
          <div className="grid-bg absolute inset-0 flex flex-col items-center justify-center gap-2 bg-neutral-50 dark:bg-zinc-900">
            <span className="text-2xl font-semibold tracking-tight text-neutral-800 dark:text-zinc-200">{title}</span>
            <span className="font-mono text-xs text-neutral-400 dark:text-zinc-500">{githubUrl.replace("https://github.com/", "")}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-medium text-neutral-900 dark:text-white">{title}</h3>
          <div className="-mr-1.5 -mt-1 flex shrink-0">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${title} on GitHub`} className={iconLink}>
              <SiGithub className="h-4 w-4" />
            </a>
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${title} live demo`} className={iconLink}>
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-zinc-400">{description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag.name} className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 px-2 py-1 text-xs text-neutral-600 dark:border-zinc-800 dark:text-zinc-400">
              {tag.icon}
              {tag.name}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
