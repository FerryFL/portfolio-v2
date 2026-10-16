import { Badge } from "@/components/ui/badge"

const journey = [
  {
    number: "02",
    title: "NTT DATA",
    role: "Software Developer",
    description:
      "Serving as Associate Software Developer, architecting high-reliability digital transformation solutions.",
  },
  {
    number: "01",
    title: "Kawan Lama Group",
    role: "Software Engineer (Intern)",
    description:
      "Built and scaled mission-critical internal recruitment & LMS systems handling thousands of organizational users.",
  },
]

export function AboutPhilosophySection() {
  return (
    <section id="about" className="relative border-b border-white/10 bg-[#0a0b0e]/70 py-10 lg:py-16">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-2 md:flex-row md:items-end">
          <div className="flex flex-col gap-1">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
              {"// 01 · Architectural Journey"}
            </p>
            <h2 className="font-mono text-2xl font-bold text-white sm:text-3xl">
              About Me &amp; Philosophy
            </h2>
          </div>
          <p className="max-w-md font-mono text-sm leading-6 text-[#8a8a93]">
            Combining academic rigor from Bina Nusantara University with
            real-world enterprise engineering at Kawan Lama &amp; NTT DATA.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-12">
          <article className="flex flex-col justify-between gap-6 rounded-xl border border-white/10 bg-[#111216] p-6 shadow-md transition-colors hover:border-emerald-500/30 active:border-emerald-500/30 md:col-span-7">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                Trajectory
              </span>
              <span className="font-mono text-xs text-[#8a8a93]">timeline</span>
            </div>

            <div className="my-1 flex flex-col gap-5">
              {journey.map((item, index) => (
                <div key={item.title} className="group flex items-start gap-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#17181d] font-mono text-xs text-emerald-400 transition-colors group-hover:bg-emerald-400 group-hover:text-black group-active:bg-emerald-400 group-active:text-black">
                    {item.number}
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-mono text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      {index === 0 ? (
                        <Badge className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 font-mono text-[11px] font-semibold text-emerald-400">
                          Present
                        </Badge>
                      ) : ""}
                    </div>
                    <span className="font-mono text-[11px] text-[#8a8a93] pb-2">
                      {item.role}
                    </span>
                    <p className="mt-1 font-mono text-xs leading-5 text-[#8a8a93]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#17181d] px-3 py-3">
              <span className="text-lg text-emerald-400">&quot;</span>
              <p className="font-mono text-xs italic text-white">
                Motivation gets you going, but discipline keeps you growing.
              </p>
            </div>
          </article>

          <article className="flex flex-col justify-between gap-6 rounded-xl border border-white/10 bg-[#111216] p-6 shadow-md transition-colors hover:border-emerald-500/30 active:border-emerald-500/30 md:col-span-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                Impact Matrix
              </span>
              <span className="font-mono text-xs text-[#8a8a93]">analytics</span>
            </div>

            <div className="my-auto grid grid-cols-2 gap-4">
              {[
                ["30K+", "Active Users Impacted", true],
                ["3+", "Enterprise Systems", false],
                ["99.8%", "Uptime Reliability", true],
                ["4+", "Core Tech Stacks", false],
              ].map(([value, label, highlighted]) => (
                <div key={label as string} className="flex flex-col rounded-lg border border-white/5 bg-[#17181d] p-3">
                  <span className={`font-mono text-2xl font-bold ${highlighted ? "text-emerald-400" : "text-white"}`}>
                    {value}
                  </span>
                  <span className="mt-1 font-mono text-[11px] text-[#8a8a93]">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-[#17181d] p-2">
              <div className="flex flex-col">
                <span className="font-mono text-[11px] text-[#8a8a93]">
                  Delivery Velocity
                </span>
                <span className="font-mono text-xs font-semibold text-emerald-400">
                  Optimal Performance
                </span>
              </div>
              <svg className="h-8 w-24 text-emerald-400" fill="none" viewBox="0 0 100 30">
                <path d="M0 25 L20 20 L40 22 L60 12 L80 15 L100 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
