type ProjectDetail = {
  overview: string
  problems: string
  solutions: string
  challenges: string
  impact: string
}

export type Project = {
  slug: string
  index: string
  type: string
  title: string
  description: string
  timeline: string
  stakeholder: string
  role: string
  stack: string[]
  scope: string
  image: string
  user: string
  link: string
  terminalTitle: string
  terminalVersion: string
  projectDetails: ProjectDetail
  techFrontend: string[]
  techBackend: string[]
  techOthers: string[]
}

export const projects: Project[] = [
  {
    slug: "kawan-lama-e-recruitment",
    index: "01",
    type: "Enterprise Application (Recruitment)",
    title: "Kawan Lama E-Recruitment Revamp",
    description: "A career platform that manage the recruitment process for Kawan Lama Group.",
    timeline: "Q4 2025 - Q1 2026 (4 months)",
    stakeholder: "Kawan Lama Group Candidates",
    role: "Full Stack Engineer",
    stack: ["ASP.NET MVC", "SQL Server Management System (SSMS)", "Google reCAPTCHA", "Google Conversational Agent"],
    scope: "Massive Volume of Applicants",
    image: "/erec.png",
    user: "Built with the team of HR, impacted internal HR and Kawan Lama Group candidates",
    link: "https://karir.kawanlamagroup.com/",
    terminalTitle: "kawanlamarecruitment.production",
    terminalVersion: "v1.1.0",
    projectDetails: {
      overview: "Kawan Lama Group is a major Indonesian conglomerate with over 30 brands, 1.500 stores, 6 business pillars, and 30.000+ employees. Managing hiring at this scale requires a more reliable platform, which led to the revamp of the Kawan Lama E Recruitment System.",
      problems: "The legacy application faced an outdated UI, hidden bugs, and security risks. It needed enhancements to make the recruitment process effective, efficient, and secure",
      solutions: "We revamped the platform with a clean redesign, bug fixes, security and automation upgrade including Google reCAPTCHA, Google Conversational Agent (Chatbot), CV OCR, Rate Limiter, and Job Vacancy Task Scheduler",
      challenges: "During the development, the main challenges included designing the new UI that modern but still professional, identifying the legacy hidden bugs, aligning strategies to overcome security risks, and incrementally implementing CV OCR",
      impact: "Overall, the recruitment process became significantly more efficient with CV OCR and Chatbot, and much more secure using Rate Limiter and Google reCAPTCHA",
    },
    techFrontend: ["ASP.NET MVC"],
    techBackend: ["ASP.NET MVC, SQL Server Management System (SSMS)"],
    techOthers: ["Google reCAPTCHA", "Google Conversational Agent (Chatbot)", "Task Scheduler", "Rate Limiter", "CV OCR"],
  },
  {
    slug: "kawan-lama-academy",
    index: "02",
    type: "Enterprise Application (Edutech)",
    title: "Kawan Lama Academy",
    description: "A learning platform for 30,000+ internal employees with role based learning tracks, google calendar integration, management and monitoring.",
    timeline: "Q2 2025 - Q3 2025 (4 months)",
    stakeholder: "Kawan Lama Group Internal Employees",
    role: "Frontend Engineer",
    stack: ["Vue.js (Nuxt.js)", "PostgreSQL", "Google Calendar"],
    scope: "30,000+ Staff",
    image: "/kla.png",
    user: "Built with the Kawan Lama Academy team, impacted 30.000+ internal employees",
    link: "https://klacademy.klgsys.com/",
    terminalTitle: "kawanlamaacademy.production",
    terminalVersion: "v1.0.0",
    projectDetails: {
      overview: "Kawan Lama Group is a major Indonesian conglomerate with over 30 brands, 1.500 stores, 6 business pillars, and 30.000+ employees. To support employee learn through structured learning path, the Kawan Lama Academy team collaborated with IT Payroll to build a Kawan Lama Academy learning platform",
      problems: "The old system used Moodle, which was hard to customize, not user friendly, and made management and monitoring inefficient.",
      solutions: "We built a custom web app on the top of Moodle with the cleaner UI/UX, customizable features, and we can manage the classes using Admin role, and monitoring team progress with Superior role.",
      challenges: "During the development process, the main challenge was constantly coordinating with the backend team to ensure the consistency of API payloads, response structures, and naming conventions.",
      impact: "Overall, the teaching and learning process became more efficient, organized, and easier to monitor at any time.",
    },
    techFrontend: ["Vue.js (Nuxt.js)", "Typescript", "Tailwind", "Shadcn", "Zod"],
    techBackend: ["PostgreSQL"],
    techOthers: ["Google Calendar"],
  },
  {
    slug: "posnova",
    index: "03",
    type: "Business Application (POS & AI Recommendation)",
    title: "POSnova",
    description: "A Point of Sales application with an AI product recommendation using Content Based Filtering and Apriori based on transactions amount.",
    role: "Full Stack Engineer, Tech Lead",
    timeline: "Q2 2025 - Q3 2025 (5 months)",
    stakeholder: "MSMEs (Food and Beverage)",
    stack: ["React.js (Next.js)", "Python (Flask)", "Machine Learning (Content Based Filtering, Apriori)"],
    scope: "MSMEs (Food Beverage)",
    image: "/posnova.png",
    user: "MSMEs Food and Beverage",
    link: "https://posnova-skripsi.vercel.app/",
    terminalTitle: "posnova.production",
    terminalVersion: "v1.0.0",
    projectDetails: {
      overview: "Micro, Small, and Medium Enterprises (MSMEs / UMKM) are the key of Indonesia's economy. They contribute up to 61% of national GDP, reaching 65.6 million business units (99% of all business), and employ 97% of the Indonesian workforce.",
      problems: "Many MSMEs in Indonesia still track their sales manually. It creates error in record, limit business monitoring, and harder for owner to plan future sales strategies.",
      solutions: "We built POSnova, a Point of Sales application, with the transactions monitoring, and AI Recommendation to help owner discover new sales opportunity",
      challenges: "During the development, the main challenge was interviewing MSMEs owners to truly understand their daily sales pain point and needs.",
      impact: "Overall, the app is ready to bring value to the MSMEs, especially in Food and Beverage.",
    },
    techFrontend: ["React.js (Next.js)", "Typescript", "Tailwind", "Shadcn", "Zod"],
    techBackend: ["Next.js"],
    techOthers: ["Machine Learning (Content-Based Filtering, Apriori)"],
  },
]
