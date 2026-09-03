const GROUPS = [
  {
    label: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express",
      "REST API",
      "PostgreSQL",
      "Supabase",
      "Authentication",
      "Webhooks",
    ],
  },
  {
    label: "AI",
    items: [
      "OpenAI API",
      "AI integrations",
      "Prompt engineering",
      "Automation",
      "LLM-powered applications",
    ],
  },
  {
    label: "Cloud / Infrastructure",
    items: ["Docker", "GitHub", "Vercel", "Cloud services", "CI/CD", "Server deployment"],
  },
];

export default function Toolkit() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="mb-10 md:mb-14">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-[#8a93a0]">
            <span className="text-[#2b5bff]">02</span> — Toolkit
          </p>
          <h2
            id="skills-title"
            className="max-w-[16ch] font-head text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.02em]"
          >
            A practical stack, end to end.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:gap-12">
          {GROUPS.map((group) => (
            <div key={group.label} data-reveal>
              <h3 className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.14em] text-[#8a93a0]">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[#d2d4ce] bg-white px-4 py-1.5 text-sm font-medium text-[#5a6472] transition-colors hover:border-[#2b5bff] hover:bg-[#eef2ff] hover:text-[#2b5bff]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
