import { open } from "node:fs/promises"
import path from "node:path"

const fileName = "CV_Ferry_Febrian.pdf"

export async function GET() {
  const file = await open(path.join(process.cwd(), "public", fileName))

  return new Response(file.readableWebStream() as unknown as ReadableStream, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${fileName}"`,
      "Cache-Control": "public, max-age=3600",
    },
  })
}
