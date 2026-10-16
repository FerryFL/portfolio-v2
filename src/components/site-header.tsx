import Link from "next/link"
import Image from "next/image"
import { FileText, Send, UserRound } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0d]/85 shadow-[0_1px_12px_rgba(0,0,0,0.8)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between gap-4 px-5 lg:px-8">
        <div className="flex min-w-0 items-center">
          <Link href="/" className="inline-flex shrink-0 items-center gap-2 font-mono text-lg font-bold tracking-tight text-white">
            <Image src="/Logo%20F%20Code.jpg" alt="Ferry Febrian logo" width={32} height={32} className="size-8 rounded-lg object-cover" />
            ferryfebrian<span className="text-emerald-400">.com</span>
          </Link>
        </div>
        <nav className="hidden items-center gap-1 md:flex">
          <Link href="/#overview" className="rounded-lg bg-white px-3 py-2 font-mono text-xs font-medium text-black">Overview</Link>
          <Link href="/#about" className="rounded-lg px-3 py-2 font-mono text-xs text-[#a1a1aa] transition-colors hover:bg-[#17181d] hover:text-white">About Me</Link>
          <Link href="/#projects" className="rounded-lg px-3 py-2 font-mono text-xs text-[#a1a1aa] transition-colors hover:bg-[#17181d] hover:text-white">Projects</Link>
          <Link href="/#contact" className="rounded-lg px-3 py-2 font-mono text-xs text-[#a1a1aa] transition-colors hover:bg-[#17181d] hover:text-white">Contact</Link>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Link href="/CV_Ferry_Febrian.pdf" target="_blank" className="hidden items-center gap-1.5 rounded-lg border border-white/10 bg-[#17181d] px-4 py-2 font-mono text-xs text-white transition-colors hover:border-emerald-500 hover:text-emerald-400 sm:inline-flex"><FileText className="size-3.5" />Resume</Link>
          <Link href="/#contact" className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 font-mono text-xs font-semibold text-black transition-colors hover:bg-emerald-400">Get in Touch<Send className="size-3.5" /></Link>
          <span className="hidden size-8 items-center justify-center rounded-full border border-white/10 bg-[#17181d] text-[#a1a1aa] lg:inline-flex" aria-hidden="true"><UserRound className="size-4" /></span>
        </div>
      </div>
    </header>
  )
}
