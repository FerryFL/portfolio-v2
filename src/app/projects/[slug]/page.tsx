import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Check, CloudCog, Database, ExternalLink, Gauge, Layers3, Terminal } from "lucide-react"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { BrowserMockup } from "@/components/browser-mockup"
import { Separator } from "@/components/ui/separator"
import { ShareCaseStudyButton } from "@/components/share-case-study-button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TerminalCodeEditor } from "@/components/terminal-code-editor"
import { projects } from "@/lib/portfolio-data"

const deploymentCode = `const RecruitmentSpec = {
  cluster: "Enterprise-Cloud-JKT",
  tenants: ["ACE", "INFORMA", "F&B"],
  architecture: {
    framework: "Next.js App Router",
    stateManagement: "Zustand + IndexedDB",
    payloadValidation: "Zod Schemas",
    bridgeSync: "HRMS Core API Gateway"
  },
  cachingStrategy: "Edge ISR (600s)",
  security: {
    documentSanitizer: true,
    rateLimiting: true
  }
};`

const projectOutcomes = [
  "Clear information architecture",
  "Responsive by default",
  "Reusable component system",
  "Accessible interaction states",
]

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  return project ? { title: `${project.title} — Ferry Febrian`, description: project.description } : {}
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) notFound()

  return (
    <div className="min-h-screen bg-[#070709] font-mono text-[#f4f4f5] selection:bg-emerald-500 selection:text-black">
      <SiteHeader />
      <main className="flex-1 bg-[#070709] pt-20">
        <div className="relative mx-auto w-full max-w-[1200px] px-5 py-10 lg:px-8 lg:py-12">
          <div className="pointer-events-none absolute -right-20 -top-16 size-96 rounded-full bg-emerald-500/5 blur-[140px]" />
          <div className="pointer-events-none absolute -left-20 top-96 size-80 rounded-full bg-emerald-400/5 blur-[120px]" />

          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link href="/#projects" className="group inline-flex items-center gap-2 font-mono text-xs text-[#8a8a93] transition-colors hover:text-emerald-400"><ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />return /projects</Link>
              <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] text-[#8a8a93]"><span className="rounded-full bg-[#111216] px-3 py-1.5">ARCHIVE // {project.year}</span><span className="inline-flex items-center gap-2 rounded-full bg-[#111216] px-3 py-1.5 text-emerald-400"><span className="size-2 animate-pulse rounded-full bg-emerald-400" />Production Live (Group Scale)</span></div>
            </div>

            <section className="flex flex-col justify-between gap-8 pt-1 lg:flex-row lg:items-end">
              <div className="max-w-3xl"><div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-emerald-400"><span>{project.index}</span><span className="text-[#8a8a93]">/</span><span className="text-[#8a8a93]">{project.type}</span></div><h1 className="font-mono text-4xl font-bold tracking-tight text-white sm:text-6xl">{project.title}</h1><p className="mt-3 max-w-2xl font-mono text-base leading-7 text-[#8a8a93]">{project.description}</p></div>
              <div className="flex shrink-0 flex-wrap items-center gap-2"><a href={project.slug === "kawan-lama-e-recruitment" ? "https://karir.kawanlamagroup.com" : "#"} target={project.slug === "kawan-lama-e-recruitment" ? "_blank" : undefined} rel="noreferrer" className="group inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 font-mono text-xs font-bold text-black transition-colors hover:bg-emerald-400">Live Portal<ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a><ShareCaseStudyButton /></div>
            </section>

            <div className="grid grid-cols-2 gap-2 rounded-xl bg-[#111216] p-4 md:grid-cols-4 md:gap-4"><MetaItem label="Primary Role" value="Lead Frontend & System Arch" /><MetaItem label="Timeline & Cadence" value="Q3 2023 – Q2 2024 (10 mos)" /><MetaItem label="Enterprise Stakeholder" value="Kawan Lama Group HR Corp" /><MetaItem label="Throughput Volume" value="30,000+ Profiles Processed" accent /></div>

            <section className="mb-6 grid grid-cols-1 gap-3 lg:grid-cols-12">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111216] shadow-xl lg:col-span-8"><div className="flex h-10 items-center justify-between bg-[#131418] px-4"><div className="flex min-w-0 items-center gap-1.5"><span className="size-3 rounded-full bg-[#ff5f56]/80" /><span className="size-3 rounded-full bg-[#ffbd2e]/80" /><span className="size-3 rounded-full bg-[#27c93f]/80" /><span className="ml-2 truncate font-mono text-[11px] text-[#8a8a93]">pipeline-monitor.sh :: kl-recruitment.production</span></div><div className="hidden items-center gap-1.5 font-mono text-[10px] text-[#8a8a93] sm:flex"><Terminal className="size-3.5 text-emerald-400" />zsh 5.9</div></div><div className="relative flex min-h-[360px] flex-col justify-end overflow-hidden bg-[#070709] p-4 lg:min-h-[440px]"><div className="absolute inset-0 opacity-70"><BrowserMockup /></div><div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/40 to-transparent" /><div className="relative z-10 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-white/10 bg-[#111216]/90 p-4 backdrop-blur-md"><div className="flex items-center gap-3"><div className="flex size-9 items-center justify-center rounded bg-[#17181d] text-emerald-400"><Layers3 className="size-5" /></div><div><p className="font-mono text-xs text-white">Multi-Subsidiary Tenant Router</p><p className="font-mono text-[10px] text-[#8a8a93]">Ace Hardware, Informa, Toys Kingdom, Chatime</p></div></div><div className="flex items-center gap-4 font-mono text-[10px]"><div className="text-right"><p className="text-[#8a8a93]">CLUSTER HEALTH</p><p className="text-emerald-400">99.98% OPTIMAL</p></div><div className="h-6 w-px bg-white/10" /><div className="text-right"><p className="text-[#8a8a93]">FORM TIME</p><p className="text-white">6.4m AVG</p></div></div></div></div></div>
              <div className="flex flex-col gap-3 lg:col-span-4"><TerminalCodeEditor code={deploymentCode} fileName="deployment_manifest.ts" focusText="SAP SuccessFactors Bridge" focusStatus="v2.4" /><div className="flex items-center justify-between rounded-xl bg-[#17181d] p-4"><div className="flex items-center gap-3"><div className="flex size-10 items-center justify-center rounded-lg bg-[#111216] text-emerald-400"><Gauge className="size-5" /></div><div><p className="font-mono text-sm font-semibold text-white">Sub-second TTI</p><p className="font-mono text-[10px] text-[#8a8a93]">Lighthouse 96+ Score</p></div></div><span className="rounded bg-[#111216] px-2 py-1 font-mono text-[10px] text-emerald-400">0.84s FCP</span></div></div>
            </section>

            <section className="mb-8"><SectionLabel code="// OVERVIEW" label="Executive Summary & Architecture" /><h2 className="mb-8 max-w-3xl font-mono text-3xl font-bold leading-tight text-white sm:text-4xl">Unified Recruitment Platform for Nationwide Retail Subsidiaries</h2><div className="grid gap-8 lg:grid-cols-12"><div className="space-y-5 font-mono text-sm leading-7 text-[#8a8a93] lg:col-span-8"><p className="text-base text-white">Kawan Lama Group operates more than a dozen major retail, commercial, and industrial brands throughout Indonesia—including Ace Hardware, Informa, Toys Kingdom, and Chatime. Previously, each subsidiary operated fragmented hiring pipelines, leading to high candidate drop-off and severe administrative overhead across regional recruitment drives.</p><p>As Lead Frontend &amp; System Architect, I designed and spearheaded the development of a unified, high-concurrency recruitment gateway. The platform centralizes talent acquisition into an intuitive, high-speed single portal while maintaining rigorous data boundary isolation and custom candidate stage workflows for each brand&apos;s hiring teams.</p><p>To solve critical drop-off caused by unstable mobile connections and multi-page application fatigue, we engineered an optimistic client persistence engine with IndexedDB chunk caching. Applicants can pause, switch devices, or lose network connectivity without losing a single keystroke or document.</p></div><div className="flex flex-col gap-3 lg:col-span-4"><ImpactCard label="Business Impact" value="12+ Brands Consolidated" text="Streamlined talent pipelines into one high-throughput ecosystem." /><ImpactCard label="State Resilience" value="Zero Data Loss" text="Automatic local IndexedDB chunk serialization and background sync." /><ImpactCard label="System Performance" value="<1.1s Page Load" text="Edge caching paired with optimized server-side metadata." /></div></div></section>

            <section className="border-t border-white/10 py-8"><SectionLabel code="// TECH_STACK" label="Technologies & Tools Used" /><h2 className="mb-8 font-mono text-3xl font-bold text-white sm:text-4xl">Engineered with Modern Monospace Standards</h2><div className="grid gap-3 md:grid-cols-3"><StackCard icon={<Layers3 />} title="Core Frontend" items={["Next.js 14 App Router", "TypeScript 5", "Tailwind CSS", "Radix UI"]} /><StackCard icon={<Database />} title="State & Data Layer" items={["Zustand", "IndexedDB Chunking", "Zod Validation", "React Query"]} /><StackCard icon={<CloudCog />} title="Architecture & Infra" items={["REST API Gateway", "Edge ISR Caching", "HRMS Core Sync", "CI/CD Pipeline"]} /></div></section>

            <div className="flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#17181d] p-6 md:flex-row"><div className="flex items-center gap-4"><div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#111216] text-emerald-400"><ExternalLink className="size-6" /></div><div><h3 className="font-mono text-xl font-bold text-white">Interested in Enterprise-Grade Architecture?</h3><p className="font-mono text-sm leading-6 text-[#8a8a93]">Currently available for engineering leadership, contract architectural consulting, and full-stack engagements.</p></div></div><Link href="/#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 font-mono text-xs font-bold text-black transition-colors hover:bg-emerald-400 md:w-auto">Start a Conversation<ArrowUpRight className="size-4" /></Link></div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

function MetaItem({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) { return <div className="flex min-w-0 flex-col gap-1"><span className="font-mono text-[10px] uppercase text-[#8a8a93]">{label}</span><span className={`font-mono text-xs font-medium ${accent ? "text-emerald-400" : "text-white"}`}>{value}</span></div> }
function SectionLabel({ code, label }: { code: string; label: string }) { return <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em]"><span className="font-semibold text-emerald-400">{code}</span><span className="text-[#8a8a93]">{label}</span></div> }
function ImpactCard({ label, value, text }: { label: string; value: string; text: string }) { return <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-[#111216] p-4"><span className="font-mono text-[10px] uppercase text-emerald-400">{label}</span><span className="font-mono text-xl font-bold text-white">{value}</span><p className="font-mono text-xs leading-5 text-[#8a8a93]">{text}</p></div> }
function StackCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) { return <div className="flex flex-col justify-between gap-6 rounded-xl border border-white/10 bg-[#111216] p-5"><div className="flex items-center justify-between"><span className="font-mono text-sm font-bold text-white">{title}</span><span className="text-emerald-400">{icon}</span></div><div className="flex flex-wrap gap-2">{items.map((item) => <Badge key={item} variant="outline" className="rounded bg-[#17181d] px-2 py-1 font-mono text-[10px] font-normal text-emerald-300">{item}</Badge>)}</div></div> }
