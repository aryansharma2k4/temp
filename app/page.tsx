import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight, CircleCheck, FileText, Mail, MapPin } from "lucide-react"
import { SiGithub, SiSpotify, SiX } from "react-icons/si"
import { ProjectCard } from "@/components/projectcard"
import StatsSection from "@/components/stats-section"
import { ShinyText } from "@/components/ui/shiny-text"
import { BlurRotate } from "@/components/ui/blur-rotate"
import { ContactForm } from "@/components/contact-form"
import { QuoteCard } from "@/components/quote-card"
import getLastPlayed from "@/lib/spotify"
import { links, skills, experience, projects } from "@/lib/data"

const roles = ["Backend Developer", "Competitive Programmer", "CSE Undergrad @ VIT Chennai"]

const label = "mb-6 text-xs font-medium uppercase tracking-[0.25em] text-neutral-500 dark:text-zinc-500"
const section = "py-10 md:py-12"
const iconButton = "rounded-md p-2 text-neutral-500 transition hover:-translate-y-0.5 hover:bg-neutral-100 hover:text-neutral-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
const card = "rounded-2xl border border-neutral-200 bg-white/70 dark:border-zinc-800 dark:bg-zinc-950/70"

export default async function Home() {
  const lastPlayed = await getLastPlayed()

  return (
    <main className="mx-auto max-w-5xl px-4 md:px-6">
      {/* Hero */}
      <section id="home" className="pt-12 pb-6 md:pt-16">
        <div className="flex items-center gap-5">
          <Image
            src="https://avatars.githubusercontent.com/u/142207881?v=4"
            alt="Dharani Tharan"
            width={80}
            height={80}
            priority
            className="h-16 w-16 rounded-2xl border border-neutral-200 md:h-20 md:w-20 dark:border-zinc-800"
          />
          <div>
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Dharani Tharan</h1>
            <p className="mt-1 h-7 text-lg">
              <BlurRotate
                label={roles.join(", ")}
                items={roles.map((role) => <ShinyText key={role}>{role}</ShinyText>)}
              />
            </p>
          </div>
        </div>

        <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
          {[
            { term: "Location", value: links.location, icon: <MapPin className="h-4 w-4" /> },
            { term: "Email", value: links.email, icon: <Mail className="h-4 w-4" /> },
          ].map((item) => (
            <div key={item.term} className="min-w-0">
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-zinc-500">{item.term}</dt>
              <dd className="mt-1.5 flex items-center gap-2 text-neutral-800 dark:text-zinc-200">
                <span className="shrink-0 text-neutral-400">{item.icon}</span>
                <span className="truncate">{item.value}</span>
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-zinc-400">
          I build secure backend systems, APIs, and data-driven web applications using{" "}
          <span className="text-neutral-900 dark:text-white">TypeScript</span>,{" "}
          <span className="text-neutral-900 dark:text-white">Node.js</span>,{" "}
          <span className="text-neutral-900 dark:text-white">Java</span>,{" "}
          <span className="text-neutral-900 dark:text-white">Spring Boot</span>, and modern cloud tooling.
        </p>

        <div className="mt-6 -ml-2 flex items-center gap-1">
          <a href={`mailto:${links.email}`} aria-label="Email me" title="Email" className={iconButton}><Mail className="h-5 w-5" /></a>
          <a href={links.resume} target="_blank" rel="noopener noreferrer" aria-label="Resume" title="Resume" className={iconButton}><FileText className="h-5 w-5" /></a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className={iconButton}><SiGithub className="h-5 w-5" /></a>
          <a href={links.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" title="X" className={iconButton}><SiX className="h-[18px] w-[18px]" /></a>
        </div>

        <p className="mt-6 flex min-w-0 items-center gap-2 text-sm text-neutral-500 dark:text-zinc-400">
          <SiSpotify className="h-4 w-4 shrink-0 text-[#1DB954]" aria-hidden />
          <span className="shrink-0">Last played</span>
          <span aria-hidden>—</span>
          {lastPlayed ? (
            <a href={lastPlayed.url} target="_blank" rel="noopener noreferrer" className="truncate text-neutral-800 hover:underline dark:text-zinc-200">
              {lastPlayed.title} · {lastPlayed.artist}
            </a>
          ) : (
            // Shown until the Spotify env vars are set (or if Spotify is unreachable).
            <span className="truncate">Nothing playing right now</span>
          )}
        </p>
      </section>

      {/* About */}
      <section id="about" className={section}>
        <h2 className={label}>About</h2>
        <div className="max-w-3xl space-y-4 leading-relaxed text-neutral-600 dark:text-zinc-400">
          <p>
            I&apos;m a Computer Science undergraduate at VIT Chennai who enjoys the server side of software:
            designing APIs, modelling data, handling authentication, and thinking about how systems behave over real networks.
          </p>
          <p>
            Most recently I interned at Acelion Energy Storage Solution, where I contributed to a battery telemetry platform built on
            Spring Boot microservices, MQTT, and time-series storage. Outside of projects I practise competitive programming on
            LeetCode and Codeforces, which keeps my data structures and problem-solving sharp.
          </p>
          <p>I&apos;m looking for backend internship and software engineering opportunities.</p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className={section}>
        <h2 className={label}>Tech Stack</h2>
        <ul className="flex flex-wrap gap-x-7 gap-y-6">
          {skills.map((skill) => (
            <li
              key={skill.name}
              title={skill.name}
              className="transition duration-200 hover:-translate-y-0.5 [&_svg]:h-9 [&_svg]:w-9"
            >
              {skill.icon}
              <span className="sr-only">{skill.name}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section id="experience" className={section}>
        <h2 className={label}>Experience</h2>
        <ol className="relative border-l border-neutral-200 dark:border-zinc-800">
          {experience.map((job, i) => (
            <li key={job.company} className="relative pb-10 pl-8 last:pb-0">
              <span
                className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ring-4 ring-white dark:ring-zinc-950 ${i === 0 ? "bg-emerald-500" : "bg-neutral-400"}`}
                aria-hidden
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="font-medium text-neutral-900 dark:text-white">
                  {job.role} <span className="text-neutral-400">·</span>{" "}
                  <span className="font-normal text-neutral-600 dark:text-zinc-400">{job.company}</span>
                </h3>
                <p className="shrink-0 text-sm text-neutral-500 dark:text-zinc-400">{job.dates}</p>
              </div>
              <p className="mt-1 text-sm text-neutral-500 dark:text-zinc-500">{job.location} · Internship</p>
              <ul className="mt-4 space-y-2 text-neutral-600 dark:text-zinc-400">
                {job.points.map((p) => (
                  <li key={p} className="relative pl-4 leading-relaxed before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-neutral-400">
                    {p}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <li key={tag.name} className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 px-2 py-1 text-xs text-neutral-600 dark:border-zinc-800 dark:text-zinc-400">
                    {tag.icon}
                    {tag.name}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* Featured projects */}
      <section id="projects" className={section}>
        <div className="flex items-baseline justify-between">
          <h2 className={label}>Featured Projects</h2>
          <Link href="/projects" className="mb-8 inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 dark:text-zinc-400 dark:hover:text-white">
            View all projects <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(0, 2).map((p) => <ProjectCard key={p.title} {...p} />)}
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className={section}>
        <h2 className={label}>Stats</h2>
        <StatsSection />
      </section>

      {/* Contact */}
      <section id="contact" className={section}>
        <h2 className={label}>Let&apos;s Work Together</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className={`${card} flex flex-col`}>
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-medium">Get in Touch</h3>
              <p className="mt-2 text-neutral-600 dark:text-zinc-400">Pick whichever is easiest and let&apos;s talk about backend roles and internships.</p>
            </div>
            <ul className="border-t border-neutral-200 dark:border-zinc-800">
              {[
                { href: `mailto:${links.email}`, icon: <Mail className="h-5 w-5" />, title: links.email, sub: "Quick inquiries & opportunities" },
                { href: links.x, icon: <SiX className="h-[18px] w-[18px]" />, title: "Connect on X", sub: "@mugiwaradtd" },
                { href: links.github, icon: <SiGithub className="h-5 w-5" />, title: "GitHub", sub: "See what I'm building" },
              ].map((row) => (
                <li key={row.title} className="border-b border-neutral-200 dark:border-zinc-800">
                  <a
                    href={row.href}
                    {...(row.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                    className="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-neutral-50 md:px-8 dark:hover:bg-zinc-900"
                  >
                    <span className="flex w-5 justify-center text-neutral-700 dark:text-zinc-300">{row.icon}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-neutral-900 dark:text-white">{row.title}</span>
                      <span className="block text-sm text-neutral-500 dark:text-zinc-500">{row.sub}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-neutral-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-neutral-900 dark:group-hover:text-white" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-auto flex items-center gap-2 p-6 text-sm text-neutral-500 md:px-8 dark:text-zinc-500">
              <CircleCheck className="h-4 w-4" /> Open to backend internships & software engineering roles
            </p>
          </div>

          <div className={`${card} p-6 md:p-8`}>
            <h3 className="text-xl font-medium">Send a Message</h3>
            <p className="mt-2 mb-6 text-neutral-600 dark:text-zinc-400">Prefer to write? Fill out the form and it lands straight in my inbox.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section aria-label="Quote" className="pb-12">
        <QuoteCard />
      </section>
    </main>
  )
}
