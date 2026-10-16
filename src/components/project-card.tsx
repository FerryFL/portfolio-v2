import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { BrowserMockup } from "@/components/browser-mockup"
import type { Project } from "@/lib/portfolio-data"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group overflow-hidden border-border-subtle bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 hover:shadow-[0_0_24px_-8px_rgba(139,92,246,0.5)] active:border-primary/70 active:shadow-[0_0_24px_-8px_rgba(139,92,246,0.5)] focus-within:border-primary/70 focus-within:shadow-[0_0_24px_-8px_rgba(139,92,246,0.5)]">
      <CardHeader className="gap-4 p-5 pb-0 sm:p-6 sm:pb-0">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-secondary">
          <span>
            {project.index} / {project.type}
          </span>
          <span className="text-muted-foreground">{project.year}</span>
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <BrowserMockup compact />
        </Link>
      </CardHeader>

      <CardContent className="space-y-3 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>
          <ArrowUpRight className="mt-1 shrink-0 text-muted-foreground transition-colors group-hover:text-secondary" />
        </div>
        <p className="text-sm leading-6 text-muted-foreground">{project.summary}</p>
      </CardContent>

      <CardFooter className="flex flex-wrap gap-2 border-t border-border-subtle px-5 py-4 sm:px-6">
        {project.stack.map((item) => (
          <Badge
            key={item}
            variant="outline"
            className="rounded-full border-border-subtle px-2.5 py-1 font-mono text-[10px] font-normal text-muted-foreground"
          >
            {item}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  )
}
