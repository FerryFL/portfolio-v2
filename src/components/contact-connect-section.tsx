"use client"

import { useState } from "react"
import { ArrowUpRight, BriefcaseBusiness, CheckCheck, Copy, Mail, MapPin, MessageCircle } from "lucide-react"

const email = "ferryfebrian.lim@gmail.com"
const command = "npx ferry-febrian"

export function ContactConnectSection() {
  const [copied, setCopied] = useState<string | null>(null)

  function handleCopy(value: string) {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(value)
      window.setTimeout(() => setCopied(null), 1800)
    })
  }

  return (
    <section id="contact" className="relative overflow-hidden border-b border-white/10 py-20 lg:py-24">
      <div className="pointer-events-none absolute -bottom-20 left-1/3 size-80 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="relative z-10 mx-auto grid max-w-[1200px] gap-10 px-5 lg:grid-cols-12 lg:items-center lg:px-8">
        <div className="space-y-5 lg:col-span-7">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">// 04 · Initiate Transmission</p>
          <h2 className="font-mono text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">Let&apos;s build something <span className="text-emerald-400">extraordinary</span> together.</h2>
          <p className="max-w-xl font-mono text-sm leading-6 text-[#8a8a93]">Whether you want to architect an enterprise platform, discuss modern web frameworks, or brainstorm impactful projects, my inbox is always open.</p>
          <div className="group flex w-full max-w-md items-center justify-between gap-3 rounded-lg border border-white/10 bg-[#111216] px-4 py-3 font-mono text-xs text-white transition-colors hover:border-emerald-500/50 active:border-emerald-500/50 focus-within:border-emerald-500/50">
            <code className="min-w-0 select-text truncate"><span className="mr-2 font-bold text-emerald-400">$</span>{command}</code>
            <button type="button" onClick={() => handleCopy(command)} className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 text-[#8a8a93] transition-colors hover:text-emerald-400 active:text-emerald-400 focus-visible:text-emerald-400" aria-label={copied === command ? "Copied command" : "Copy command"}>
              {copied === command ? <CheckCheck className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
              {copied === command ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
        <div className="space-y-3 lg:col-span-5">
          <ContactCard icon={<Mail />} label="Direct Email" value={email} href={`mailto:${email}`} action="copy" copied={copied === email} onAction={() => handleCopy(email)} />
          <ContactCard icon={<MessageCircle />} label="WhatsApp" value="+62 898 8433 850" href="https://wa.me/628988433850" action="external" />
          <ContactCard icon={<BriefcaseBusiness />} label="Professional Network" value="linkedin.com/in/ferry-febrian-it" href="https://www.linkedin.com/in/ferry-febrian-it/" action="external" />
          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[#131418] p-4"><div className="flex min-w-0 items-center gap-3"><IconBox><MapPin /></IconBox><span className="truncate font-mono text-sm text-white">Jakarta, Indonesia</span></div><span className="ml-3 shrink-0 font-mono text-[10px] text-[#8a8a93]">UTC+7 (WIB)</span></div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ icon, label, value, href, action, copied, onAction }: { icon: React.ReactNode; label: string; value: string; href: string; action: "copy" | "external"; copied?: boolean; onAction?: () => void }) {
  const content = <><IconBox>{icon}</IconBox><div className="min-w-0 flex-1"><p className="font-mono text-[10px] uppercase text-[#8a8a93]">{label}</p><p className="truncate font-mono text-sm font-medium text-white">{value}</p></div>{action === "copy" ? <button type="button" onClick={onAction} className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 font-mono text-xs text-[#8a8a93] transition-colors hover:text-emerald-400 active:text-emerald-400 focus-visible:text-emerald-400">{copied ? <CheckCheck className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}{copied ? "Copied!" : "Copy"}</button> : <ArrowUpRight className="size-4 shrink-0 text-[#8a8a93] transition-colors group-hover:text-emerald-400 group-active:text-emerald-400" />}</>
  if (action === "copy") return <div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-[#111216] p-4 transition-colors hover:border-emerald-500/70 hover:bg-[#17181d] active:border-emerald-500/70 active:bg-[#17181d] focus-within:border-emerald-500/70 focus-within:bg-[#17181d]">{content}</div>
  return <a href={href} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-[#111216] p-4 transition-colors hover:border-emerald-500/70 hover:bg-[#17181d] active:border-emerald-500/70 active:bg-[#17181d] focus-within:border-emerald-500/70 focus-within:bg-[#17181d]">{content}</a>
}

function IconBox({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-emerald-500/20 bg-[#17181d] text-emerald-400">{children}</span>
}
