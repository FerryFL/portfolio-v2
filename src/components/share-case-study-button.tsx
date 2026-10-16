"use client"

import { useState } from "react"
import { CheckCheck, Share2 } from "lucide-react"

export function ShareCaseStudyButton() {
  const [copied, setCopied] = useState(false)

  async function handleShare() {
    await navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return <button type="button" onClick={handleShare} className="relative inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#111216] px-4 py-2.5 font-mono text-xs text-white transition-colors hover:bg-[#17181d] active:bg-[#17181d] focus-visible:bg-[#17181d]" aria-label="Share link">{copied ? <CheckCheck className="size-4 text-emerald-400" /> : <Share2 className="size-4" />}{copied ? "Copied" : "Share Link"}</button>
}
