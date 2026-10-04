import {
  NextIcon, ReactIcon, TSIcon, JSIcon, TailwindIcon,
  NodeIcon, ExpressIcon, PostgresIcon, MongoIcon, MySQLIcon,
  PrismaIcon, BetterAuthIcon, CloudinaryIcon, DockerIcon, GitIcon,
  GithubIcon, PythonIcon, JavaIcon, CppIcon, AgentKitIcon, VercelIcon,
  AppwriteIcon, FirebaseIcon, PostmanIcon, SpringBootIcon, KeycloakIcon,
  MqttIcon, TimescaleIcon, NetworkIcon, WebRTCIcon, ReduxIcon,
} from "@/components/icons"

export type Tag = { name: string; icon: React.ReactNode }

export const links = {
  email: "duraisamydharanitharan@gmail.com",
  github: "https://github.com/DharaniTharan06",
  x: "https://x.com/mugiwaradtd",
  location: "Salem, India",
  resume: "https://drive.google.com/drive/folders/1a3BgEckkXcYEHbRw4Y3HzkgN-5rIl2dj",
}

// Shown as logos only (name is the tooltip / screen-reader label), backend-first.
export const skills: Tag[] = [
  { name: "Java", icon: <JavaIcon /> },
  { name: "TypeScript", icon: <TSIcon /> },
  { name: "JavaScript", icon: <JSIcon /> },
  { name: "Python", icon: <PythonIcon /> },
  { name: "C++", icon: <CppIcon /> },
  { name: "Spring Boot", icon: <SpringBootIcon /> },
  { name: "Node.js", icon: <NodeIcon /> },
  { name: "Express", icon: <ExpressIcon /> },
  { name: "Prisma", icon: <PrismaIcon /> },
  { name: "Keycloak", icon: <KeycloakIcon /> },
  { name: "Better Auth", icon: <BetterAuthIcon /> },
  { name: "MQTT", icon: <MqttIcon /> },
  { name: "PostgreSQL", icon: <PostgresIcon /> },
  { name: "MySQL", icon: <MySQLIcon /> },
  { name: "MongoDB", icon: <MongoIcon /> },
  { name: "TimescaleDB", icon: <TimescaleIcon /> },
  { name: "Docker", icon: <DockerIcon /> },
  { name: "Git", icon: <GitIcon /> },
  { name: "GitHub", icon: <GithubIcon /> },
  { name: "Postman", icon: <PostmanIcon /> },
  { name: "Vercel", icon: <VercelIcon /> },
  { name: "Appwrite", icon: <AppwriteIcon /> },
  { name: "Firebase", icon: <FirebaseIcon /> },
  { name: "Cloudinary", icon: <CloudinaryIcon /> },
  { name: "Next.js", icon: <NextIcon /> },
  { name: "React", icon: <ReactIcon /> },
  { name: "Tailwind CSS", icon: <TailwindIcon /> },
]

export const experience = [
  {
    role: "Software Engineering Intern",
    company: "Acelion Energy Storage Solution Private Limited",
    location: "Salem, Tamil Nadu",
    dates: "May 25, 2026 – June 30, 2026",
    points: [
      "Contributed to a secure battery telemetry management platform for customer, device, commissioning, installation, and telemetry workflows.",
      "Worked with Spring Boot microservices, MongoDB, TimescaleDB, Keycloak OAuth2/JWT, MQTT/EMQX, and a Next.js dashboard.",
      "Helped validate telemetry ingestion, device identity checks, role-based access, and API flows using Postman, Mosquitto tools, and database verification.",
    ],
    tags: [
      { name: "Spring Boot", icon: <SpringBootIcon /> },
      { name: "MongoDB", icon: <MongoIcon /> },
      { name: "TimescaleDB", icon: <TimescaleIcon /> },
      { name: "Keycloak", icon: <KeycloakIcon /> },
      { name: "MQTT", icon: <MqttIcon /> },
      { name: "Next.js", icon: <NextIcon /> },
      { name: "Postman", icon: <PostmanIcon /> },
    ],
  },
]

export type Project = {
  title: string
  description: string
  githubUrl: string
  liveUrl?: string
  imageUrl?: string
  tags: Tag[]
}

// First two are featured on the homepage.
export const projects: Project[] = [
  {
    title: "Sprint-0",
    description: "An AI tool that turns a single-sentence app idea into a structured Kanban board and a database schema, backed by an Express API and Prisma.",
    githubUrl: "https://github.com/DharaniTharan06/Sprint-0",
    tags: [
      { name: "Next.js", icon: <NextIcon /> },
      { name: "Express", icon: <ExpressIcon /> },
      { name: "Prisma", icon: <PrismaIcon /> },
      { name: "AgentKit", icon: <AgentKitIcon /> },
      { name: "Tailwind CSS", icon: <TailwindIcon /> },
    ],
  },
  {
    title: "Adaptive Video Streaming",
    description: "A Java video streaming system that adapts playback quality to network conditions using a client–server–relay architecture.",
    githubUrl: "https://github.com/DharaniTharan06/Adaptive_video_streaming",
    tags: [
      { name: "Java", icon: <JavaIcon /> },
      { name: "Computer Networks", icon: <NetworkIcon /> },
      { name: "WebRTC", icon: <WebRTCIcon /> },
    ],
  },
  {
    title: "DBlog",
    description: "A blogging platform with authentication, content management, and dynamic routing.",
    githubUrl: "https://github.com/DharaniTharan06/DBlog_app",
    imageUrl: "https://raw.githubusercontent.com/DharaniTharan06/DBlog_app/main/sample.png",
    tags: [
      { name: "React", icon: <ReactIcon /> },
      { name: "Appwrite", icon: <AppwriteIcon /> },
      { name: "Redux", icon: <ReduxIcon /> },
      { name: "Tailwind CSS", icon: <TailwindIcon /> },
    ],
  },
]
