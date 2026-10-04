import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiGithub, SiX } from "react-icons/si";
import { Mail } from "lucide-react";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import getLastCommitDate from "@/lib/lastupdate";
import { links } from "@/lib/data";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Dharani Tharan — Backend Developer",
  description: "Backend developer and competitive programmer, CSE undergrad at VIT Chennai. Building secure backend systems, APIs, and data-driven web applications.",
  openGraph: {
    title: "Dharani Tharan — Backend Developer",
    description: "Backend developer and competitive programmer, CSE undergrad at VIT Chennai.",
    type: "website",
  },
};

const footerIcon = "text-neutral-500 hover:text-neutral-900 dark:text-zinc-400 dark:hover:text-white transition-colors";

export default async function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  const lastupdate = await getLastCommitDate();
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased text-neutral-900 dark:text-zinc-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <footer className="mx-auto max-w-5xl px-4 md:px-6">
            <div className="flex flex-col gap-4 border-t border-neutral-200 py-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800 dark:text-zinc-400">
              <p>
                © {new Date().getFullYear()} Dharani Tharan
                {lastupdate && <span className="text-neutral-400 dark:text-zinc-500"> · Last updated {lastupdate}</span>}
              </p>
              <div className="flex items-center gap-4">
                <a href={`mailto:${links.email}`} aria-label="Email" className={footerIcon}><Mail className="h-4 w-4" /></a>
                <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={footerIcon}><SiGithub className="h-4 w-4" /></a>
                <a href={links.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className={footerIcon}><SiX className="h-3.5 w-3.5" /></a>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
