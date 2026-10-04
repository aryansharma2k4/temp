"use client";

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { links } from '@/lib/data';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Stats', href: '/#stats' },
  { name: 'Contact', href: '/#contact' },
];

const linkStyle = "px-2.5 py-1.5 text-sm whitespace-nowrap text-neutral-500 hover:text-neutral-900 dark:text-zinc-400 dark:hover:text-white transition-colors";

export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/80 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/80">
      <nav className="mx-auto flex max-w-5xl items-center gap-2 px-4 py-3 md:px-6">
        <div className="no-scrollbar -ml-2.5 flex flex-1 items-center overflow-x-auto">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={linkStyle}>{link.name}</Link>
          ))}
          <a href={links.resume} target="_blank" rel="noopener noreferrer" className={linkStyle}>Resume ↗</a>
        </div>
        <button
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          type="button"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white transition-colors"
          aria-label="Toggle theme"
        >
          <Sun className="hidden h-4 w-4 dark:block" />
          <Moon className="h-4 w-4 dark:hidden" />
        </button>
      </nav>
    </header>
  );
}
