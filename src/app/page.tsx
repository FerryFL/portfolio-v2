import type { Metadata } from "next"
import { HomePage } from "@/components/home-page"

export const metadata: Metadata = {
  title: "Ferry Febrian - Software Engineer",
  description:
    "Portfolio of Ferry Febrian - Software Engineer",
}

export default function Page() {
  return <HomePage />
}
