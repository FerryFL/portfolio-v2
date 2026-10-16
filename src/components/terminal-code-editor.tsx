"use client"

import { useState } from "react"
import { Copy, CopyCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const defaultCode = `const engineer = {
  name: "Ferry Febrian",
  role: "Associate Developer",
  company: "NTT DATA",
  motto: "Motivation gets you going,
          but discipline keeps you growing",
  stack: ["Next.js", "TypeScript", "C#", "Python"],
  impact: "30,000+ Enterprise Users"
};`

type TerminalCodeEditorProps = {
  code?: string
  fileName?: string
  focusText?: string
  focusStatus?: string
}

export function TerminalCodeEditor({
  code = defaultCode,
  fileName = "ferry-profile.ts",
  focusText = "Next.js 15, TypeScript & Distributed Systems",
  focusStatus = "Active",
}: TerminalCodeEditorProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="group relative flex min-w-0 max-w-full flex-col gap-4 overflow-visible rounded-xl border border-white/10 bg-[#111216] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.8)] transition-colors hover:border-emerald-500/40">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-100" />

      <div className="relative z-10 flex items-center justify-between border-b border-white/5 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="size-3 rounded-full bg-[#ff5f56]" />
          <span className="size-3 rounded-full bg-emerald-500/60" />
          <span className="size-3 rounded-full bg-[#27c93f]" />
          <span className="ml-2 truncate font-mono text-[11px] text-[#8a8a93]">{fileName}</span>
        </div>

        <div className="relative">
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={handleCopy}
            className="text-[#8a8a93] hover:bg-transparent hover:text-emerald-400"
            aria-label={copied ? "Code copied" : "Copy code"}
          >
            {copied ? <CopyCheck aria-hidden="true" /> : <Copy aria-hidden="true" />}
          </Button>
          <span
            className={`pointer-events-none absolute -top-9 right-0 z-50 rounded bg-emerald-400 px-2 py-0.5 font-mono text-[11px] font-semibold text-black transition-opacity ${copied ? "opacity-100" : "opacity-0"}`}
          >
            Copied!
          </span>
        </div>
      </div>

      {code === defaultCode ? <pre className="relative z-10 min-w-0 max-w-full overflow-x-auto rounded-lg border border-white/5 bg-[#070709] p-3 font-mono text-[11px] leading-relaxed text-[#d4d4d8] sm:text-[13px]">
        <code>
          <span className="font-semibold text-emerald-400">const</span>{" "}
          <span className="text-white">engineer</span>{" = {"}
          {"\n"}
          <span className="text-white">  name</span>: <span className="text-emerald-300">&quot;Ferry Febrian&quot;</span>,
          {"\n"}
          <span className="text-white">  role</span>: <span className="text-emerald-300">&quot;Associate Developer&quot;</span>,
          {"\n"}
          <span className="text-white">  company</span>: <span className="text-emerald-300">&quot;NTT DATA&quot;</span>,
          {"\n"}
          <span className="text-white">  motto</span>: <span className="text-[#a1a1aa]">&quot;Motivation gets you going,</span>
          {"\n          "}
          <span className="text-[#a1a1aa]">but discipline keeps you growing&quot;</span>,
          {"\n"}
          <span className="text-white">  stack</span>: [<span className="text-emerald-300">&quot;Next.js&quot;</span>, <span className="text-emerald-300">&quot;TypeScript&quot;</span>, <span className="text-emerald-300">&quot;C#&quot;</span>, <span className="text-emerald-300">&quot;Python&quot;</span>],
          {"\n"}
          <span className="text-white">  impact</span>: <span className="text-emerald-400">&quot;30,000+ Enterprise Users&quot;</span>
          {"\n"}
          <span className="text-white">&#125;;</span>
        </code>
      </pre> : <pre className="relative z-10 min-w-0 max-w-full select-text overflow-x-auto rounded-lg border border-white/5 bg-[#070709] p-3 font-mono text-[11px] leading-relaxed text-[#d4d4d8] sm:text-[13px]"><code>{code}</code></pre>}

      <div className="relative z-10 flex items-center justify-between gap-2 rounded-lg border border-white/10 bg-[#17181d]/90 p-2">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#111216] text-emerald-400">
            <span aria-hidden="true" className="text-base">✦</span>
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#8a8a93]">Current Focus</span>
            <span className="truncate font-mono text-xs text-white">{focusText}</span>
          </div>
        </div>
        <span className="shrink-0 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-1 font-mono text-[11px] font-semibold text-emerald-400">{focusStatus}</span>
      </div>
    </div>
  )
}
