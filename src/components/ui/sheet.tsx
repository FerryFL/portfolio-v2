"use client"

import * as React from "react"
import { Dialog } from "@base-ui/react/dialog"
import { cn } from "cn"

function Sheet({ ...props }: React.ComponentProps<typeof Dialog.Root>) {
  return <Dialog.Root data-slot="sheet" {...props} />
}

function SheetTrigger({ className, ...props }: React.ComponentProps<typeof Dialog.Trigger>) {
  return <Dialog.Trigger data-slot="sheet-trigger" className={cn(className)} {...props} />
}

function SheetClose({ className, ...props }: React.ComponentProps<typeof Dialog.Close>) {
  return <Dialog.Close data-slot="sheet-close" className={cn(className)} {...props} />
}

function SheetContent({ className, side = "right", ...props }: React.ComponentProps<typeof Dialog.Popup> & { side?: "top" | "right" | "bottom" | "left" }) {
  return (
    <Dialog.Portal>
      <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0" />
      <Dialog.Popup
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "fixed z-50 flex h-full w-3/5 max-w-sm flex-col gap-6 border-white/10 bg-[#0a0a0d] p-6 text-white shadow-2xl outline-none transition-transform duration-200 data-ending-style:duration-200 data-starting-style:duration-200",
          side === "right" && "inset-y-0 right-0 border-l data-ending-style:translate-x-full data-starting-style:translate-x-full",
          side === "left" && "inset-y-0 left-0 border-r data-ending-style:-translate-x-full data-starting-style:-translate-x-full",
          side === "top" && "inset-x-0 top-0 h-auto border-b data-ending-style:-translate-y-full data-starting-style:-translate-y-full",
          side === "bottom" && "inset-x-0 bottom-0 h-auto border-t data-ending-style:translate-y-full data-starting-style:translate-y-full",
          className
        )}
        {...props}
      />
    </Dialog.Portal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="sheet-header" className={cn("flex flex-col gap-2", className)} {...props} />
}

function SheetTitle({ className, ...props }: React.ComponentProps<typeof Dialog.Title>) {
  return <Dialog.Title data-slot="sheet-title" className={cn("font-mono text-lg font-bold text-white", className)} {...props} />
}

function SheetDescription({ className, ...props }: React.ComponentProps<typeof Dialog.Description>) {
  return <Dialog.Description data-slot="sheet-description" className={cn("font-mono text-sm text-[#8a8a93]", className)} {...props} />
}

export { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger }
