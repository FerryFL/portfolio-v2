"use client"

import { useState } from "react"

type StackCategory = "all" | "lang" | "frontend" | "backend"

const filters: { id: StackCategory; label: string }[] = [
  { id: "all", label: "All (13)" },
  { id: "lang", label: "Languages" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & DevOps" },
]

const technologies: { name: string; category: StackCategory; type: string; detail: string }[] = [
  { name: "TypeScript", category: "lang", type: "Lang", detail: "Strict · Type Safe" },
  { name: "JS ES6+", category: "lang", type: "Lang", detail: "Async · Functional" },
  { name: "C#", category: "lang", type: "Lang", detail: "Enterprise · OOP" },
  { name: "Python", category: "lang", type: "Lang", detail: "AI/ML · Scripting" },
  { name: "React.js", category: "frontend", type: "Frontend", detail: "Hooks · Virtual DOM" },
  { name: "Next.js", category: "frontend", type: "Frontend", detail: "App Router · SSR" },
  { name: "Vue.js", category: "frontend", type: "Frontend", detail: "Composition API" },
  { name: "Nuxt.js", category: "frontend", type: "Frontend", detail: "Universal Vue Apps" },
  { name: "Tailwind CSS", category: "frontend", type: "Frontend", detail: "Design Systems" },
  { name: "ASP.NET", category: "backend", type: "Backend", detail: "Web APIs · EF Core" },
  { name: "Flask", category: "backend", type: "Backend", detail: "Microservices · AI" },
  { name: "Git & CI/CD", category: "backend", type: "DevOps", detail: "GitHub Actions" },
  { name: "Docker", category: "backend", type: "DevOps", detail: "Containers · Deployments" },
]

export function TechStackPlayground() {
  const [activeFilter, setActiveFilter] = useState<StackCategory>("all")
  const visibleTechnologies = technologies.filter(
    (technology) => activeFilter === "all" || technology.category === activeFilter,
  )

  return (
    <section className="relative border-b border-white/10 py-10 lg:py-16">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
              {"// 02 · Technical Ecosystem"}
            </p>
            <h2 className="mt-1 font-mono text-2xl font-bold text-white sm:text-3xl">
              The Modern Stack
            </h2>
          </div>

          <div className="flex max-w-full gap-1 overflow-x-auto rounded-lg border border-white/10 bg-[#111216] p-1 pb-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`shrink-0 rounded px-3 py-1.5 font-mono text-[11px] transition-colors ${activeFilter === filter.id ? "bg-white font-semibold text-black" : "text-[#8a8a93] hover:text-white active:bg-[#17181d] active:text-white focus-visible:bg-[#17181d] focus-visible:text-white"}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {visibleTechnologies.map((technology) => (
            <div key={technology.name} className="group flex flex-col gap-1 rounded-xl border border-white/10 bg-[#111216] p-4 transition-all hover:border-emerald-500 hover:bg-[#17181d] active:border-emerald-500 active:bg-[#17181d]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-semibold text-emerald-400">{technology.type}</span>
                <span className="size-2 rounded-full bg-emerald-400 opacity-0 transition-opacity group-hover:opacity-100 group-active:opacity-100" />
              </div>
              <span className="font-mono text-base font-bold text-white transition-colors group-hover:text-emerald-400 group-active:text-emerald-400">{technology.name}</span>
              <span className="font-mono text-[11px] text-[#8a8a93]">{technology.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
