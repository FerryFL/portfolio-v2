import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { GoogleAnalytics } from "@next/third-parties/google"
import { LanguageProvider } from "@/components/language-context"

const heading = Space_Grotesk({ variable: "--font-heading", subsets: ["latin"] })
const body = Inter({ variable: "--font-body", subsets: ["latin"] })
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ferry Febrian — Full-stack Engineer",
  description: "Portfolio of Ferry Febrian, a full-stack engineer building thoughtful digital products.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
      <GoogleAnalytics gaId="G-R9YD32C53Y" />
    </html>
  )
}
