import { BriefcaseBusiness, Code2, Mail, MessageCircle, Terminal } from "lucide-react"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

const footerLinks = [
  { label: "GitHub", href: "https://github.com", icon: Code2 },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ferry-febrian-it/", icon: BriefcaseBusiness },
  { label: "WhatsApp", href: "https://wa.me/628988433850", icon: MessageCircle },
  { label: "Email", href: "mailto:ferryfebrian.lim@gmail.com", icon: Mail },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0d]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 py-10 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex items-start gap-3"><Image src="/Logo%20F%20Code.jpg" alt="Ferry Febrian logo" width={36} height={36} className="size-9 shrink-0 rounded-lg object-cover" /><div><p className="font-mono text-lg font-bold text-white">Ferry Febrian</p><p className="mt-2 max-w-md font-mono text-xs leading-5 text-[#8a8a93]">Full-Stack Engineer &amp; Creative Technologist. Crafting resilient cyber-minimal digital products.</p></div></div>
          <div className="flex flex-wrap justify-center gap-5 font-mono text-xs text-[#a1a1aa]">{footerLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="inline-flex items-center gap-1.5 transition-colors hover:text-emerald-400"><Icon className="size-3.5" />{label}</a>)}</div>
        </div>
        <Separator className="bg-white/5" />
        <div className="flex flex-col items-center justify-between gap-2 font-mono text-[10px] text-[#8a8a93] sm:flex-row"><p>© 2026 Ferry Febrian. All rights reserved.</p><p className="inline-flex items-center gap-1.5"><Terminal className="size-3.5 text-emerald-400" />Architected with Tailwind CSS &amp; Monospace Design</p></div>
      </div>
    </footer>
  )
}
