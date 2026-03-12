import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import getLastCommitDate from "@/lib/lastupdate";
import getcodeforcesmap from "@/lib/codeforces-calender";

export default async function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  const lastupdate = await getLastCommitDate();
  const leetcodeMap = await getcodeforcesmap();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={'antialiased dark:bg-zinc-950 text-slate-900 dark:text-white transition-colors duration-300'}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar date={lastupdate}/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
