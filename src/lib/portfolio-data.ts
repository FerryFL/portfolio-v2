export type Project = {
  slug: string
  index: string
  type: string
  title: string
  summary: string
  description: string
  year: string
  role: string
  status: string
  stack: string[]
  accent: "violet" | "mint" | "blue"
}

export const projects: Project[] = [
  {
    slug: "kawan-lama-e-recruitment",
    index: "01",
    type: "WEB APP",
    title: "Kawan Lama E-Recruitment",
    summary: "A scalable recruitment experience for a multi-brand enterprise group.",
    description: "A complete recruitment platform that makes open roles easier to discover, applications easier to manage, and hiring operations easier to scale across a complex organization.",
    year: "2024",
    role: "Lead Frontend Engineer",
    status: "SHIPPED",
    stack: ["Next.js", "TypeScript", "Tailwind", "REST API"],
    accent: "violet",
  },
  {
    slug: "retail-operations-console",
    index: "02",
    type: "PRODUCT SYSTEM",
    title: "Retail Operations Console",
    summary: "Operational clarity for distributed retail teams and live inventory.",
    description: "A monitoring console that turns noisy operational data into a clear, actionable view for teams working across multiple retail locations.",
    year: "2023",
    role: "Product Engineer",
    status: "ACTIVE",
    stack: ["React", "Node.js", "PostgreSQL", "Charts"],
    accent: "mint",
  },
  {
    slug: "commerce-insights",
    index: "03",
    type: "DATA PLATFORM",
    title: "Commerce Insights",
    summary: "A faster way to understand the signals behind digital commerce.",
    description: "A focused analytics surface for teams who need trustworthy metrics, useful comparisons, and a direct path from insight to action.",
    year: "2022",
    role: "Full-stack Engineer",
    status: "SHIPPED",
    stack: ["Vue", "Express", "MySQL", "AWS"],
    accent: "blue",
  },
]
