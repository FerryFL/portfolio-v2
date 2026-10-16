import { TerminalCodeEditor } from "@/components/terminal-code-editor"

type BrowserMockupProps = {
  compact?: boolean
  editor?: boolean
}

const accentColors = ["#8b5cf6", "#06f0b2", "#38bdf8"]

function DashboardMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`browser-mockup overflow-hidden rounded-xl border border-white/10 bg-[#0d0e15] ${compact ? "aspect-[16/10]" : "aspect-[16/9]"}`}
    >
      <div className="flex h-8 items-center gap-1.5 border-b border-white/[0.07] bg-[#12141c] px-3">
        <span className="size-2 rounded-full bg-[#ff5f56]" />
        <span className="size-2 rounded-full bg-[#ffbd2e]" />
        <span className="size-2 rounded-full bg-[#27c93f]" />
        <div className="mx-auto h-4 w-1/3 rounded bg-white/[0.04]" />
      </div>

      <div className="relative grid h-[calc(100%-2rem)] grid-cols-[24%_1fr] gap-3 p-3 sm:gap-5 sm:p-5">
        <div className="space-y-2 border-r border-white/[0.06] pr-3 sm:pr-5">
          <div className="h-2 w-2/3 rounded bg-secondary/70" />
          <div className="h-1.5 w-full rounded bg-white/10" />
          <div className="h-1.5 w-4/5 rounded bg-white/10" />
          <div className="mt-5 h-1.5 w-full rounded bg-primary/40" />
          <div className="h-1.5 w-3/4 rounded bg-white/10" />
          <div className="h-1.5 w-5/6 rounded bg-white/10" />
        </div>

        <div className="space-y-3 sm:space-y-5">
          <div className="flex items-end justify-between">
            <div className="space-y-2">
              <div className="h-3 w-28 rounded bg-white/80 sm:w-44" />
              <div className="h-1.5 w-36 rounded bg-white/15 sm:w-56" />
            </div>
            <div className="h-5 w-14 rounded-full bg-secondary/20" />
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {accentColors.map((color) => (
              <div
                key={color}
                className="h-12 rounded-lg border border-white/[0.06] bg-white/[0.03] sm:h-20"
                style={{ borderTopColor: color }}
              />
            ))}
          </div>

          <div className="h-24 rounded-lg border border-white/[0.06] bg-gradient-to-br from-primary/20 via-transparent to-secondary/10 sm:h-36" />
        </div>
      </div>
    </div>
  )
}

export function BrowserMockup({ compact = false, editor = false }: BrowserMockupProps) {
  if (editor) {
    return <TerminalCodeEditor />
  }

  return <DashboardMockup compact={compact} />
}
