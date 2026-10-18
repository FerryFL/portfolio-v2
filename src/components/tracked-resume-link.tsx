"use client"

import { sendGAEvent } from "@next/third-parties/google"
import type { AnchorHTMLAttributes, ReactNode } from "react"

const resumePath = "/download/cv"

type TrackedResumeLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick"> & { children?: ReactNode }

export function TrackedResumeLink({ children, ...props }: TrackedResumeLinkProps) {
  function handleResumeClick() {
    const now = new Date()

    sendGAEvent("event", "cv_download", {
      event_label: "CV Download - Ferry Febrian",
      file_name: "CV_Ferry_Febrian.pdf",
      time_of_day: now.getHours(),
      day_of_week: now.toLocaleDateString("en", { weekday: "long" }),
    })
  }

  return <a {...props} href={resumePath} download="CV_Ferry_Febrian.pdf" onClick={handleResumeClick}>{children}</a>
}
