import Link from "next/link"
import { ProjectCard } from "@/components/projectcard"
import { AgentKitIcon, NextIcon, PrismaIcon, TailwindIcon } from "@/components/icons";

export default function Home() {
  const featuredProjects = [
    {
      title: "Sprint-0",
      description: "An AI tool that instantly transforms single-sentence app ideas into structured Kanban boards and production-ready database schemas.",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "/api/placeholder/600/400",
      tags: [
        { name: "Next.js", icon: <NextIcon/>},
        { name: "TypeScript", icon: <TailwindIcon/> },
        { name: "AgentKit", icon: <AgentKitIcon/> },
        { name: "Prisma", icon: <PrismaIcon/> }
      ]
    },
    {
      title: "Adaptive Video Streaming",
      description: "A dynamic video streaming application engineered to automatically adjust playback quality based on real-time network conditions.",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "/api/placeholder/600/400",
      tags: [
        { name: "Next.js", icon: <NextIcon/> },
        { name: "TypeScript", icon: <TailwindIcon/>},
        { name: "AgentKit", icon: <AgentKitIcon/> },
        { name: "Prisma", icon: <PrismaIcon/> }
      ]
    }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-12 md:py-24">
      <section className="mb-20 space-y-6">
        <h1 className="text-xl md:text-2xl font-medium text-slate-900 dark:text-slate-100">
          Dharanitharan / CSE Undergrad @ VIT Chennai
        </h1>
        
        <p className="text-base md:text-lg text-slate-600 dark:text-zinc-400">
          Full-stack developer. Competitive programmer.
        </p>
        
        <p className="text-base md:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
          I use Next.js, Typescript, and modern web tools to build software that works. 
          Focused on writing maintainable code and solving hard problems across web and network architectures.
        </p>
      </section>
      <section>
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
          <Link 
            href="/projects" 
            className="text-sm text-slate-500 hover:text-slate-900 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
          >
            View All →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 gap-5">
          {
            featuredProjects.map((proj,ind)=>{
              return(
                <ProjectCard
                  key={ind}
                  title={proj.title}
                  description={proj.description}
                  imageUrl={proj.imageUrl}
                  githubUrl={proj.githubUrl}
                  liveUrl={proj.liveUrl}
                  tags={proj.tags}        
                />
              )
            })
          }
        </div>
      </section>

    </div>
  )
}