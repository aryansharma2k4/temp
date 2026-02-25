import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
const linkstyle = "flex items-center text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white transition-colors font-medium";
export default function Contact() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-8 flex flex-col items-center justify-between min-h-[calc(100vh-12rem)] py-12">
      <Card className="w-full max-w-md text-center border-slate-200 dark:border-zinc-800/60 bg-white dark:bg-zinc-950/50 shadow-sm transition-all hover:shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">Get in touch</CardTitle>
          <CardDescription className="text-slate-600 dark:text-zinc-400 mt-2">
            Have a question, want to collaborate on a project, or just want to say hi? I'd love to hear from you.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-5 pt-2 pb-6">
          <div className="flex items-center justify-center gap-3 text-slate-700 dark:text-zinc-300">
            <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="font-medium text-[17px]">duraisamydharanitharan@gmail.com</span>
          </div>
          
          <div className="flex items-center justify-center gap-3 text-slate-700 dark:text-zinc-300">
            <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="font-medium text-[17px]">+91 9952750592</span>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col items-center space-y-6 pb-4">
        <h3 className="text-sm font-medium text-slate-500 dark:text-zinc-500 uppercase tracking-widest">Connect with me</h3>
        
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          <a href="https://github.com/DharaniTharan06" target="_blank" rel="noreferrer" className= {linkstyle}>
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>
          
          <a href="https://www.linkedin.com/in/dharani-tharand/" target="_blank" rel="noreferrer" className= {linkstyle}>
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
            LinkedIn
          </a>

          <a href="https://x.com/mugiwaradtd" target="_blank" rel="noreferrer" className= {linkstyle}>
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            X
          </a>
        </div>
      </div>
      
    </div>
  )
}