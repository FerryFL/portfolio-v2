"use client"

import Link from "next/link"
import { sendGAEvent } from "@next/third-parties/google"
import type { ComponentProps, ReactNode } from "react"

const resumePath = "/CV_Ferry_Febrian.pdf"

type TrackedResumeLinkProps = Omit<ComponentProps<typeof Link>, "href" | "onClick"> & { children?: ReactNode }

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

  return <Link {...props} href={resumePath} onClick={handleResumeClick}>{children}</Link>
}
