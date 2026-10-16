import Link from "next/link"
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Users,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { BrowserMockup } from "@/components/browser-mockup"
import { AboutPhilosophySection } from "@/components/about-philosophy-section"
import { TechStackPlayground } from "@/components/tech-stack-playground"
import { ContactConnectSection } from "@/components/contact-connect-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const showcaseProjects = [
  {
    number: "01",
    category: "Enterprise Recruitment",
    code: "PRJ001",
    title: "Kawan Lama E-Recruitment",
    description:
      "A career platform that manages the complete recruitment process for Kawan Lama Group. Engineered for clear candidate journeys and reliable enterprise workflows.",
    tags: ["Next.js", "TypeScript", "Tailwind", "REST API"],
    slug: "kawan-lama-e-recruitment",
    metric: "10,000+ Applicants",
  },
  {
    number: "02",
    category: "Internal EdTech & LMS",
    code: "PRJ002",
    title: "Kawan Lama Academy",
    description:
      "A learning platform for 30,000+ internal employees with role-based learning tracks, evaluation quizzes, certificates, and performance analytics.",
    tags: ["Vue.js", "Nuxt.js", "ASP.NET", "SQL Database"],
    slug: "retail-operations-console",
    metric: "30,000+ Staff",
  },
  {
    number: "03",
    category: "Smart Retail & AI",
    code: "PRJ003",
    title: "POSnova",
    description:
      "A web-based point of sale application with an AI-powered product recommendation engine and real-time inventory telemetry.",
    tags: ["React.js", "Python (Flask)", "AI/ML Engine", "Vercel"],
    slug: "commerce-insights",
    metric: "AI Recommendation Engine",
  },
]

function JourneySection() {
  return <AboutPhilosophySection />
}

function StackSection() {
  return <TechStackPlayground />
}

function ProjectVisual({
  metric,
  icon,
}: {
  metric: string
  icon: "users" | "bot" | "briefcase"
}) {
  const MetricIcon =
    icon === "users" ? Users : icon === "bot" ? Bot : BriefcaseBusiness

  return (
    <div className="group relative overflow-hidden rounded-lg border border-white/10 bg-[#17181d]">
      <div className="transition-transform duration-500 group-hover:scale-[1.02]">
        <BrowserMockup compact />
      </div>
      <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded border border-emerald-500/30 bg-black/80 px-2 py-1 font-mono text-[10px] text-emerald-400 backdrop-blur-md">
        <MetricIcon data-icon="inline-start" />
        {metric}
      </div>
    </div>
  )
}

function ShowcaseSection() {
  return (
    <section id="projects" className="border-b border-white/10 bg-[#0a0b0e]/40 py-20 lg:py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">{"// 03 · Selected Work"}</p><h2 className="mt-2 font-mono text-2xl font-bold text-white sm:text-3xl">Engineering Showcase</h2></div><p className="max-w-md font-mono text-sm leading-6 text-[#8a8a93]">A selection of systems where product thinking meets technical craft.</p></div>
        <div className="flex flex-col gap-5">
          {showcaseProjects.map((project, index) => {
            const isReversed = index % 2 === 1
            const projectIcon = index === 0 ? "users" : index === 1 ? "briefcase" : "bot"

            return (
              <article
                key={project.title}
                className="group rounded-xl border border-white/10 bg-[#111216] p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:bg-[#131418] hover:shadow-[0_12px_36px_-12px_rgba(16,185,129,0.25)] active:border-emerald-500/50 active:bg-[#131418] focus-within:border-emerald-500/50 focus-within:bg-[#131418] lg:p-7"
              >
                <div className="grid items-center gap-7 lg:grid-cols-12">
                  <div className={`${isReversed ? "order-2 lg:col-start-7" : "order-1 lg:col-start-1"} lg:col-span-6`}>
                    <ProjectVisual metric={project.metric} icon={projectIcon} />
                  </div>

                  <div className={`${isReversed ? "order-1 lg:col-start-1" : "order-2 lg:col-start-7"} flex flex-col gap-4 lg:col-span-6`}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-400">
                        {project.number} · {project.category}
                      </span>
                      <span className="font-mono text-xs text-[#8a8a93]">{project.code}</span>
                    </div>
                    <h3 className="font-mono text-2xl font-bold text-white transition-colors group-hover:text-emerald-50">
                      {project.title}
                    </h3>
                    <p className="font-mono text-sm leading-6 text-[#8a8a93]">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="rounded-full border-white/10 bg-[#17181d] px-2.5 py-1 font-mono text-[10px] font-normal text-[#a1a1aa] transition-colors group-hover:border-emerald-500/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 pt-1">
                      <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1 font-mono text-xs text-white transition-colors hover:text-emerald-400 active:text-emerald-400 focus-visible:text-emerald-400">
                        View Details
                        <ArrowUpRight data-icon="inline-end" />
                      </Link>
                    </div>
                  </div>

                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#070709] font-mono text-[#f4f4f5] selection:bg-emerald-500 selection:text-black">
      <SiteHeader />
      <main id="overview" className="pt-20">
        <section className="relative overflow-hidden border-b border-white/10 py-16 lg:py-24"><div className="pointer-events-none absolute -left-10 top-[-8rem] size-96 rounded-full bg-emerald-500/10 blur-[140px]" /><div className="pointer-events-none absolute right-[-6rem] top-1/2 size-80 rounded-full bg-emerald-400/5 blur-[120px]" /><div className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-12 px-5 lg:grid-cols-12 lg:px-8"><div className="flex flex-col items-start gap-5 lg:col-span-7"><div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-[#111216] px-4 py-2 shadow-[0_0_16px_rgba(16,185,129,0.12)]"><span>👋</span><span className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-400">Hello, World! I am Ferry Febrian</span><span className="size-1.5 animate-pulse rounded-full bg-emerald-400" /></div><h1 className="font-mono text-4xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-[48px]">Software Engineer crafting <span className="text-emerald-400">high-performance</span> web ecosystems.</h1><p className="max-w-xl font-mono text-base leading-7 text-[#8a8a93]">Associate Software Developer at <strong className="font-medium text-white">NTT DATA</strong> · Computer Science Alumnus at <strong className="font-medium text-white">Bina Nusantara University</strong> · Former SE Intern at <strong className="font-medium text-white">Kawan Lama Group</strong>.</p><div className="flex flex-wrap items-center gap-2 pt-2"><Link href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-mono text-sm font-bold text-black transition-colors hover:bg-emerald-400 active:bg-emerald-400 focus-visible:bg-emerald-400">Explore Projects <ArrowDownRight /></Link><Link href="/CV_Ferry_Febrian.pdf" target="_blank" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-[#17181d] px-5 py-3 font-mono text-sm text-white transition-colors hover:border-emerald-500 hover:text-emerald-400 active:border-emerald-500 active:text-emerald-400 focus-visible:border-emerald-500 focus-visible:text-emerald-400">Download CV <ArrowDownRight /></Link></div><div className="flex flex-wrap gap-5 pt-3 font-mono text-[10px] text-[#8a8a93]"><span><b className="mr-1 text-emerald-400">✓</b>Full-Stack Mastery</span><span><b className="mr-1 text-emerald-400">ϟ</b>Production Scale</span><span><b className="mr-1 text-emerald-400">⌖</b>Jakarta, ID (UTC+7)</span></div></div><div className="relative min-w-0 lg:col-span-5"><div className="absolute -inset-5 rounded-3xl bg-emerald-500/10 blur-3xl" /><BrowserMockup editor /></div></div></section>
        <JourneySection />
        <StackSection />
        <ShowcaseSection />
        <ContactConnectSection />
      </main>
      <SiteFooter />
    </div>
  )
}
