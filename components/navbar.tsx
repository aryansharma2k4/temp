"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

type Nav = {
  name : string
  href : string
  external?: boolean
}
interface nprops{
  date : string
}

export default function Navbar({date} : nprops) {
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const navLinks : Nav[] = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects'},
    { name: 'Stats', href: '/stats' },
    { name: 'Contact', href: '/contact'},
    { name: 'Resume' , href: 'https://drive.google.com/drive/folders/1a3BgEckkXcYEHbRw4Y3HzkgN-5rIl2dj' , external: true}
  ];

  const isActive = (path: string) => pathname === path;
  const getSubtitle = () => {
    switch (pathname) {
      case "/":
        return `Last updated: ${date}`; 
      case "/projects":
        return "Projects";
      case "/stats":
        return "Stats";
      case "/contact":
        return "Contact";
      default:
        return "";
    }
  };
  return (
    <div className="w-full flex justify-center pt-4 pb-4 md:pt-8 md:pb-8">
      <nav className="flex flex-col items-center w-full max-w-6xl px-4 md:px-8 gap-4 md:gap-5">
        
        <Link href="/" className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight dark:text-white hover:opacity-70 transition-opacity">
          Dharani Tharan
        </Link>
        <p className="text-sm text-slate-500 dark:text-zinc-400 font-mono mb-10">
          {getSubtitle()}
        </p>
        <div className="flex items-center p-1 bg-gray-100 dark:bg-zinc-800 rounded-full transition-colors duration-200 max-w-[95vw] overflow-x-auto no-scrollbar shadow-sm"> 
          {navLinks.map((link) => {
            const active = isActive(link.href);
            
            const style = `px-3 md:px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 whitespace-nowrap
            ${ active ? 'bg-white text-black shadow-sm dark:bg-zinc-950 dark:text-white'
                : 'text-gray-500 hover:text-black dark:text-zinc-400 dark:hover:text-white'}`;
            if(link.external){
              return(
                <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className={style}>
                  {link.name}
                </Link>
              )
            }
            return (
              <Link key={link.name} href={link.href} className={style}>
                {link.name}
              </Link>
            );
          })}

          <div className="w-px h-4 bg-gray-300 dark:bg-zinc-600 mx-1 shrink-0"></div>

          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            type="button" 
            className="p-2 rounded-full text-gray-500 dark:text-zinc-400 hover:bg-white dark:hover:bg-zinc-950 hover:text-black dark:hover:text-white transition-all ml-1 shrink-0 w-8 h-8 flex items-center justify-center"
            aria-label="Toggle Theme"
          >
            {mounted && (
              resolvedTheme === "dark" ? (
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}