import type { Metadata } from "next"
import { HomePage } from "@/components/home-page"

export const metadata: Metadata = {
  title: "Ferry Febrian — Software Engineer",
  description:
    "Portfolio of Ferry Febrian, a software engineer crafting high-performance web ecosystems.",
}

export default function Page() {
  return <HomePage />
}
