"use client"

import Link from "next/link"
import { sendGAEvent } from "@next/third-parties/google"
import type { ComponentProps, MouseEvent, ReactNode } from "react"

const resumePath = "/CV_Ferry_Febrian.pdf"

type TrackedResumeLinkProps = Omit<ComponentProps<typeof Link>, "href" | "onClick"> & { children?: ReactNode }

export function TrackedResumeLink({ children, ...props }: TrackedResumeLinkProps) {
  async function handleResumeClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()

    const now = new Date()

    sendGAEvent("event", "cv_download", {
      event_label: "CV Download - Ferry Febrian",
      file_name: "CV_Ferry_Febrian.pdf",
      time_of_day: now.getHours(),
      day_of_week: now.toLocaleDateString("en", { weekday: "long" }),
    })

    const previewWindow = window.open("", "_blank")

    try {
      const response = await fetch(resumePath)
      if (!response.ok) throw new Error(`Resume download failed: ${response.status}`)

      const pdfBlob = await response.blob()
      const pdfUrl = URL.createObjectURL(pdfBlob)
      const downloadLink = document.createElement("a")

      downloadLink.href = pdfUrl
      downloadLink.download = "CV_Ferry_Febrian.pdf"
      document.body.appendChild(downloadLink)
      downloadLink.click()
      downloadLink.remove()

      if (previewWindow && !previewWindow.closed) {
        previewWindow.location.href = pdfUrl
      } else {
        window.open(pdfUrl, "_blank", "noopener,noreferrer")
      }

      window.setTimeout(() => URL.revokeObjectURL(pdfUrl), 60_000)
    } catch {
      previewWindow?.close()
      window.open(resumePath, "_blank", "noopener,noreferrer")
    }
  }

  return <Link {...props} href={resumePath} onClick={handleResumeClick}>{children}</Link>
}
