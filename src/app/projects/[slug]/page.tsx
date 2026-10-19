import type { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { ArrowLeft, ArrowUpRight, CloudCog, Database, Layers3, Terminal } from "lucide-react"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { CopyLinkButton } from "@/components/copy-link-button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { projects } from "@/lib/portfolio-data"
import Image from "next/image"

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  return project ? { title: `${project.title} — Ferry Febrian`, description: project.description } : {}
}

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<ProjectDetailsFallback />}>
      <ProjectDetails params={params} />
    </Suspense>
  )
}

async function ProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) notFound()

  return (
    <div className="min-h-screen bg-[#070709] font-mono text-[#f4f4f5] selection:bg-emerald-500 selection:text-black">
      <SiteHeader />
      <main className="flex-1 bg-[#070709] pt-20">
        <div className="relative mx-auto w-full max-w-300 overflow-hidden px-5 py-10 lg:px-8 lg:py-12">
          <div className="pointer-events-none absolute -right-20 -top-16 size-96 rounded-full bg-emerald-500/5 blur-[140px]" />
          <div className="pointer-events-none absolute -left-20 top-96 size-80 rounded-full bg-emerald-400/5 blur-[120px]" />

          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link href="/#projects" className="group inline-flex items-center gap-2 font-mono text-xs text-[#8a8a93] transition-colors hover:text-emerald-400 active:text-emerald-400 focus-visible:text-emerald-400">
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1 group-active:-translate-x-1" />return /projects
              </Link>
              <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] text-[#8a8a93]">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#111216] px-3 py-1.5 text-emerald-400">
                  <span className="size-2 animate-pulse rounded-full bg-emerald-400" />
                  Production Live (Group Scale)
                </span>
              </div>
            </div>

            <section className="flex flex-col justify-between gap-8 pt-1 lg:flex-row lg:items-end">
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-emerald-400">
                  <span>{project.index}</span>
                  <span className="text-[#8a8a93]">/</span>
                  <span className="text-[#8a8a93]">{project.type}</span>
                </div>
                <h1 className="font-mono text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  {project.title}
                </h1>
                <p className="mt-3 max-w-2xl font-mono text-base leading-7 text-[#8a8a93]">
                  {project.description}
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 font-mono text-xs font-bold text-black transition-colors hover:bg-emerald-400 active:bg-emerald-400 focus-visible:bg-emerald-400"
                >
                  Live Portal
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-active:-translate-y-0.5 group-active:translate-x-0.5" />
                </a>
                <CopyLinkButton />
              </div>
            </section>

            <div className="grid grid-cols-2 gap-2 rounded-xl bg-[#111216] p-4 md:grid-cols-3 md:gap-4 md:px-8">
              <MetaItem label="Primary Role" value={project.role} />
              <MetaItem label="Timeline" value={project.timeline} />
              <MetaItem label="Stakeholder" value={project.stakeholder} />
            </div>

            <section className="mb-6 w-full">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111216] shadow-xl lg:col-span-8">
                <div className="flex h-10 items-center justify-between bg-[#131418] px-4">
                  <div className="flex min-w-0 items-center gap-1.5">
                    <span className="size-3 rounded-full bg-[#ff5f56]/80" />
                    <span className="size-3 rounded-full bg-[#ffbd2e]/80" />
                    <span className="size-3 rounded-full bg-[#27c93f]/80" />
                    <span className="ml-2 truncate font-mono text-[11px] text-[#8a8a93]">
                      pipeline-monitor.sh :: {project.terminalTitle}
                    </span>
                  </div>
                  <div className="hidden items-center gap-1.5 font-mono text-[10px] text-[#8a8a93] sm:flex">
                    <Terminal className="size-3.5 text-emerald-400" />
                    zsh {project.terminalVersion}
                  </div>
                </div>
                <div className="relative flex min-h-90 flex-col justify-end overflow-hidden bg-[#070709] p-4 lg:min-h-110">
                  <div className="absolute inset-0 opacity-70">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-t from-[#070709] via-[#070709]/40 to-transparent" />
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-white/10 bg-[#111216]/90 p-4 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 items-center justify-center rounded bg-[#17181d] text-emerald-400">
                        <Layers3 className="size-5" />
                      </div>
                      <div>
                        <p className="font-mono text-xs text-white">Users & Scale</p>
                        <p className="font-mono text-[10px] text-[#8a8a93]">
                          {project.user}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <SectionLabel code="// Project" label="Overview, Challenges, Solutions, Impact" />
              <h2 className="mb-8 max-w-3xl font-mono text-3xl font-bold leading-tight text-white sm:text-4xl">
                {project.title}
              </h2>
              <div className="gap-8">
                <div className="space-y-5 font-mono text-sm leading-7 text-[#8a8a93] text-justify">
                  <p className="text-base text-white">{project.projectDetails.overview}</p>
                  <p>{project.projectDetails.problems}</p>
                  <p>{project.projectDetails.solutions}</p>
                  <p>{project.projectDetails.challenges}</p>
                  <p>{project.projectDetails.impact}</p>
                </div>
              </div>
            </section>

            <section className="border-t border-white/10 py-8">
              <SectionLabel code="// TECH_STACK" label="Technologies & Tools Used" />
              <h2 className="mb-8 font-mono text-3xl font-bold text-white sm:text-4xl">
                Engineered with Modern Standards
              </h2>
              <div className="grid gap-3 md:grid-cols-3">
                <StackCard
                  icon={<Layers3 />}
                  title="Frontend System"
                  items={project.techFrontend}
                />
                <StackCard
                  icon={<Database />}
                  title="Backend System"
                  items={project.techBackend}
                />
                <StackCard
                  icon={<CloudCog />}
                  title="Others"
                  items={project.techOthers}
                />
              </div>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

function ProjectDetailsFallback() {
  return (
    <div className="min-h-screen bg-[#070709] font-mono text-[#f4f4f5]">
      <SiteHeader />
      <main className="flex min-h-screen items-center justify-center bg-[#070709] px-5 pt-20">
        <p className="text-sm text-[#8a8a93]">Loading Project...</p>
      </main>
      <SiteFooter />
    </div>
  )
}

function MetaItem({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex min-w-0 flex-col gap-1">
      <span className="font-mono text-[10px] uppercase text-[#8a8a93]">{label}</span>
      <span className={`font-mono text-xs font-medium ${accent ? "text-emerald-400" : "text-white"}`}>
        {value}
      </span>
    </div>
  )
}

function SectionLabel({ code, label }: { code: string; label: string }) {
  return (
    <div className="mb-3 flex flex-col md:flex-row gap-2 font-mono text-xs uppercase tracking-[0.14em]">
      <span className="font-semibold text-emerald-400">{code}</span>
      <span className="text-[#8a8a93]">{label}</span>
    </div>
  )
}

function StackCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-6 rounded-xl border border-white/10 bg-[#111216] p-5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm font-bold text-white">{title}</span>
        <span className="text-emerald-400">{icon}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge
            key={item}
            variant="outline"
            className="rounded bg-[#17181d] px-2 py-1 font-mono text-[10px] font-normal text-emerald-300"
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  )
}
