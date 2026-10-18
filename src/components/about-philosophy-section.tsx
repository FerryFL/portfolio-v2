import { Badge } from "@/components/ui/badge"

const experience = [
  {
    number: "02",
    title: "NTT DATA",
    role: "Software Developer",
    description:
      "Assigned to Prudential Indonesia (Correspondence Team). Focusing on major project: UCP e-document migration",
  },
  {
    number: "01",
    title: "Kawan Lama Group",
    role: "Software Engineer (Intern)",
    description:
      "Assigned to KLG Head Office (IT Payroll Team). Built and maintained 3 core enterprise applications: Kawan Lama E-Recruitment, Kawan Lama Academy, and New HCPlus.",
  },
]

const education = [
  {
    number: "01",
    title: "Bachelor of Computer Science",
    description:
      "Bina Nusantara University (BINUS) - GPA 3.76 / 4.00",
  },
  {
    number: "02",
    title: "Freshmen Leader and Partner",
    description:
      "Mentored first year students, facilitating academic transition for ±3 months for FL and 2 semesters for FP.",
  },
  {
    number: "03",
    title: "Data Science Club",
    description:
      "Active member. Taught high school students in a 1 week teaching program (Data Science Go To School).",
  },
]

export function AboutPhilosophySection() {
  return (
    <section id="about" className="relative border-b border-white/10 bg-[#0a0b0e]/70 py-10 lg:py-16">
      <div className="mx-auto flex max-w-300 flex-col gap-6 px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-2 md:flex-row md:items-end">
          <div className="flex flex-col gap-1">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
              {"// 01 · Journey"}
            </p>
            <h2 className="font-mono text-2xl font-bold text-white sm:text-3xl">
              About Me
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-12">
          <article className="flex flex-col justify-between gap-6 rounded-xl border border-white/10 bg-[#111216] p-6 shadow-md transition-colors hover:border-emerald-500/30 active:border-emerald-500/30 md:col-span-7">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                Working Experience
              </span>
            </div>

            <div className="my-1 flex flex-col gap-5 h-full">
              {experience.map((item, index) => (
                <div key={item.title} className="group flex items-start gap-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#17181d] font-mono text-xs text-emerald-400 transition-colors group-hover:bg-emerald-400 group-hover:text-black group-active:bg-emerald-400 group-active:text-black">
                    {item.number}
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-mono text-base font-semibold text-white">
                        {item.title}
                      </h3>
                      {index === 0 ? (
                        <Badge className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 font-mono text-[11px] font-semibold text-emerald-400">
                          Present
                        </Badge>
                      ) : ""}
                    </div>
                    <span className="font-mono text-[11px] text-[#8a8a93] pb-2">
                      {item.role}
                    </span>
                    <p className="mt-1 font-mono text-xs leading-5 text-[#8a8a93]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#17181d] px-3 py-3">
              <span className="text-lg text-emerald-400">&quot;</span>
              <p className="font-mono text-xs italic text-white">
                Motivation gets you going, but discipline keeps you growing.
              </p>
            </div>
          </article>

          <article className="flex flex-col gap-6 rounded-xl border border-white/10 bg-[#111216] p-6 shadow-md transition-colors hover:border-emerald-500/30 active:border-emerald-500/30 md:col-span-5">
            <div className="flex items-center">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-400">
                Education and Leadership
              </span>
            </div>

            <div className="my-1 flex flex-col gap-5">
              {education.map((item) => (
                <div key={item.title} className="group flex items-start gap-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#17181d] font-mono text-xs text-emerald-400 transition-colors group-hover:bg-emerald-400 group-hover:text-black group-active:bg-emerald-400 group-active:text-black">
                    {item.number}
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-mono text-base font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>
                    {/* <span className="font-mono text-[11px] text-[#8a8a93] pb-2">
                      {item.degree}
                    </span> */}
                    <p className="mt-1 font-mono text-xs leading-5 text-[#8a8a93]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
