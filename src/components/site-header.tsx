"use client"

import Link from "next/link"
import Image from "next/image"
import { FileText, Menu, Send, UserRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { TrackedResumeLink } from "@/components/tracked-resume-link"
import { useLanguage } from "@/components/language-context"

const navigationItems = [
  { href: "/#overview", label: { en: "Overview", id: "Ringkasan" } },
  { href: "/#about", label: { en: "About Me", id: "Tentang Saya" } },
  { href: "/#projects", label: { en: "Projects", id: "Proyek" } },
  { href: "/#contact", label: { en: "Contact", id: "Kontak" } },
]

function LanguageToggle({ mobile = false }: { mobile?: boolean }) {
  const { language, setLanguage } = useLanguage()

  return (
    <div
      className={`flex items-center rounded-lg border border-white/10 bg-[#17181d] p-0.5 font-mono text-[10px] ${mobile ? "w-full" : ""}`}
      aria-label="Choose language"
    >
      {(["en", "id"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLanguage(option)}
          aria-pressed={language === option}
          className={`flex-1 rounded-md px-2 py-1.5 uppercase transition-colors ${language === option ? "bg-emerald-400 font-bold text-black" : "text-[#a1a1aa] hover:text-emerald-400"}`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

export function SiteHeader() {
  const { language } = useLanguage()

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0d]/85 shadow-[0_1px_12px_rgba(0,0,0,0.8)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-300 items-center justify-between gap-4 px-5 lg:px-8">
        <div className="flex min-w-0 items-center">
          <Link href="/" className="inline-flex shrink-0 items-center gap-2 font-mono text-lg font-bold tracking-tight text-white">
            <Image src="/Logo F Code.jpg" alt="Ferry Febrian logo" width={32} height={32} className="size-8 rounded-lg object-cover" />
            ferryfebrian<span className="text-emerald-400">.com</span>
          </Link>
        </div>
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2 font-mono text-xs text-[#a1a1aa] transition-colors hover:text-emerald-400 active:text-emerald-400 focus-visible:text-emerald-400">
              {item.label[language]}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <TrackedResumeLink className="hidden items-center gap-1.5 rounded-lg border border-white/10 bg-[#17181d] px-4 py-2 font-mono text-xs text-white transition-colors hover:border-emerald-400 hover:bg-emerald-400 hover:text-black active:border-emerald-400 active:bg-emerald-400 active:text-black focus-visible:border-emerald-400 focus-visible:bg-emerald-400 focus-visible:text-black sm:inline-flex">
            <FileText className="size-3.5" />
            {language === "en" ? "Resume" : "CV"}
          </TrackedResumeLink>
          <Link href="/#contact" className="hidden items-center gap-1.5 rounded-lg bg-white px-4 py-2 font-mono text-xs font-semibold text-black transition-colors hover:bg-emerald-400 active:bg-emerald-400 focus-visible:bg-emerald-400 sm:inline-flex">
            {language === "en" ? "Get in Touch" : "Hubungi Saya"}
            <Send className="size-3.5" />
          </Link>
          {/* <span className="hidden size-8 items-center justify-center rounded-full border border-white/10 bg-[#17181d] text-[#a1a1aa] lg:inline-flex" aria-hidden="true"><UserRound className="size-4" /></span> */}
          <LanguageToggle />
          <Sheet>
            <SheetTrigger render={<Button variant="outline" size="icon-lg" className="border-white/10 bg-[#17181d] text-white hover:border-emerald-400 hover:bg-emerald-400 hover:text-black active:border-emerald-400 active:bg-emerald-400 active:text-black focus-visible:border-emerald-400 focus-visible:bg-emerald-400 focus-visible:text-black md:hidden" aria-label="Open navigation menu" />}>
              <Menu className="size-5" data-icon="inline-startfixed z-50 flex h-full w-3/5 max-w-sm flex-col gap-2 border-white/10" />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Navigation menu</SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <nav aria-label="Mobile navigation" className="flex flex-col">
                {navigationItems.map((item) => (
                  <SheetClose key={item.href} nativeButton={false} render={<Link href={item.href} />} className="rounded-lg px-4 py-3 font-mono text-sm text-[#a1a1aa] transition-colors hover:text-emerald-400 active:text-emerald-400 focus-visible:text-emerald-400 ps-0">
                    {item.label[language]}
                  </SheetClose>
                ))}
                <div className="mt-2">
                  <LanguageToggle mobile />
                </div>
                <SheetClose nativeButton={false} render={<TrackedResumeLink />} className="mt-2 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#17181d] px-4 py-3 font-mono text-sm text-white transition-colors hover:border-emerald-400 hover:bg-emerald-400 hover:text-black active:border-emerald-400 active:bg-emerald-400 active:text-black focus-visible:border-emerald-400 focus-visible:bg-emerald-400 focus-visible:text-black">
                  <FileText data-icon="inline-start" />{language === "en" ? "Resume" : "CV"}
                </SheetClose>
                <SheetClose nativeButton={false} render={<Link href="/#contact" />} className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 font-mono text-sm font-semibold text-black transition-colors hover:bg-emerald-400 active:bg-emerald-400 focus-visible:bg-emerald-400">
                  {language === "en" ? "Get in Touch" : "Hubungi Saya"}<Send data-icon="inline-end" />
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
