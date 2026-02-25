import { ProjectCard } from "@/components/projectcard"
import { 
  NextIcon, 
  ReactIcon, 
  PrismaIcon, 
  AgentKitIcon, 
  JavaIcon, 
  NetworkIcon, 
  WebRTCIcon, 
  AppwriteIcon, 
  TailwindIcon, 
  ReduxIcon, 
  ExpressIcon
} from "@/components/icons"

export default function project() {
    const projects = [
        {
            title: "Sprint-0",
            description: "An AI tool that instantly transforms single-sentence app ideas into structured Kanban boards and production-ready database schemas.",
            imageUrl: "/api/placeholder/600/400",
            githubUrl: "https://github.com/DharaniTharan06/Sprint-0",
            liveUrl: "https://example.com",
            tags: [
                {name:"Next.js",icon:<NextIcon/>},
                {name:"Express.js",icon:<ExpressIcon/>},
                {name:"Tailwindcss",icon:<TailwindIcon/>},
                {name:"Prisma",icon:<PrismaIcon/>},
                {name:"Agentkit",icon:<AgentKitIcon/>}
            ]
        },
        {
            title: "Adaptive Video Streaming",
            description: "Deliver optimized video content seamlessly across varying network conditions using a custom client-server-relay architecture.",
            imageUrl: "/api/placeholder/600/400",
            githubUrl: "https://github.com/DharaniTharan06/Adaptive_video_streaming",
            liveUrl: "https://example.com",
            tags: [
                {name:"Java",icon:<JavaIcon/>},
                {name:"Computer Networks",icon:<NetworkIcon/>},
                {name:"Webrtc",icon:<WebRTCIcon/>}
            ]
        },
        {
            title: "Dblog",
            description: "A blogging platform featuring user authentication, content management, and dynamic routing for seamless reading experiences.",
            imageUrl: "https://github.com/DharaniTharan06/DBlog_app/blob/main/sample.png?raw=true",
            githubUrl: "https://github.com/DharaniTharan06/DBlog_app",
            liveUrl: "https://example.com",
            tags: [
                {name:"React",icon:<ReactIcon/>},
                {name:"Appwrite",icon:<AppwriteIcon/>},
                {name:"Tailwindcss",icon:<TailwindIcon/>},
                {name:"Redux",icon:<ReduxIcon/>}
            ]
        }
    ];
    return (
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-12 space-y-16">
            <section>
                <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white text-center">My Projects</h2>
                <div className="grid grid-cols-1 gap-6">
                    {
                        projects.map((proj, ind) => {
                            return (
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