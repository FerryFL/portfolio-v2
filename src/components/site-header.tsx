import Link from "next/link"
import Image from "next/image"
import { FileText, Menu, Send, UserRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const navigationItems = [
  { href: "/#overview", label: "Overview" },
  { href: "/#about", label: "About Me" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
]

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
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {navigationItems.map((item, index) => (
            <Link key={item.href} href={item.href} className={index === 0 ? "rounded-lg bg-white px-3 py-2 font-mono text-xs font-medium text-black transition-colors hover:bg-emerald-400 active:bg-emerald-400 focus-visible:bg-emerald-400" : "rounded-lg px-3 py-2 font-mono text-xs text-[#a1a1aa] transition-colors hover:text-emerald-400 active:text-emerald-400 focus-visible:text-emerald-400"}>{item.label}</Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Link href="/CV_Ferry_Febrian.pdf" target="_blank" className="hidden items-center gap-1.5 rounded-lg border border-white/10 bg-[#17181d] px-4 py-2 font-mono text-xs text-white transition-colors hover:border-emerald-400 hover:bg-emerald-400 hover:text-black active:border-emerald-400 active:bg-emerald-400 active:text-black focus-visible:border-emerald-400 focus-visible:bg-emerald-400 focus-visible:text-black sm:inline-flex"><FileText className="size-3.5" />Resume</Link>
          <Link href="/#contact" className="hidden items-center gap-1.5 rounded-lg bg-white px-4 py-2 font-mono text-xs font-semibold text-black transition-colors hover:bg-emerald-400 active:bg-emerald-400 focus-visible:bg-emerald-400 sm:inline-flex">Get in Touch<Send className="size-3.5" /></Link>
          <span className="hidden size-8 items-center justify-center rounded-full border border-white/10 bg-[#17181d] text-[#a1a1aa] lg:inline-flex" aria-hidden="true"><UserRound className="size-4" /></span>
          <Sheet>
            <SheetTrigger render={<Button variant="outline" size="icon-lg" className="border-white/10 bg-[#17181d] text-white hover:border-emerald-400 hover:bg-emerald-400 hover:text-black active:border-emerald-400 active:bg-emerald-400 active:text-black focus-visible:border-emerald-400 focus-visible:bg-emerald-400 focus-visible:text-black md:hidden" aria-label="Open navigation menu" />}>
              <Menu className="size-5" data-icon="inline-start" />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Navigation menu</SheetTitle>
                <SheetDescription>Jump to a section or get in touch.</SheetDescription>
              </SheetHeader>
              <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
                {navigationItems.map((item, index) => (
                  <SheetClose key={item.href} nativeButton={false} render={<Link href={item.href} />} className={index === 0 ? "rounded-lg bg-white px-4 py-3 font-mono text-sm font-medium text-black transition-colors hover:bg-emerald-400 active:bg-emerald-400 focus-visible:bg-emerald-400" : "rounded-lg px-4 py-3 font-mono text-sm text-[#a1a1aa] transition-colors hover:text-emerald-400 active:text-emerald-400 focus-visible:text-emerald-400"}>{item.label}</SheetClose>
                ))}
                <SheetClose nativeButton={false} render={<Link href="/CV_Ferry_Febrian.pdf" target="_blank" />} className="mt-2 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#17181d] px-4 py-3 font-mono text-sm text-white transition-colors hover:border-emerald-400 hover:bg-emerald-400 hover:text-black active:border-emerald-400 active:bg-emerald-400 active:text-black focus-visible:border-emerald-400 focus-visible:bg-emerald-400 focus-visible:text-black"><FileText data-icon="inline-start" />Resume</SheetClose>
                <SheetClose nativeButton={false} render={<Link href="/#contact" />} className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 font-mono text-sm font-semibold text-black transition-colors hover:bg-emerald-400 active:bg-emerald-400 focus-visible:bg-emerald-400">Get in Touch<Send data-icon="inline-end" /></SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
