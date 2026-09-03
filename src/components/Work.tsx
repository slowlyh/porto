const PROJECTS = [
  {
    name: "HyCode",
    url: "https://github.com/slowlyh/snippet",
    desc: "A production-ready platform for sharing code snippets — public REST API with key-based auth, rate limiting, and a Postgres-backed schema protected by row-level security.",
    tags: ["React", "Supabase", "PostgreSQL", "REST API", "Vercel"],
    status: "Live · Production",
    variant: "live",
  },
  {
    name: "Relay",
    url: "https://github.com/slowlyh",
    desc: "An AI-powered workspace that combines automation, APIs, and intelligent workflows into one simple product experience — from trigger to action, without the glue code.",
    tags: ["Node.js", "OpenAI API", "Automation", "Webhooks"],
    status: "In development",
    variant: "dev",
  },
  {
    name: "Hyuu APIs",
    url: "https://github.com/slowlyh",
    desc: "A fast, reliable multi-service platform — auth, storage, and utility endpoints behind a single REST gateway, focused on clean architecture and a smooth developer experience.",
    tags: ["Node.js", "Express", "Docker", "CI/CD"],
    status: "Live · Stable",
    variant: "live",
  },
];

const STATUS_STYLES: Record<string, string> = {
  live: "text-[#15803d] border-[#bbe4c8] bg-[#f2fbf5]",
  dev: "text-[#1f46d6] border-[#c7d4fe] bg-[#eef2ff]",
};

const STATUS_DOT: Record<string, string> = {
  live: "bg-[#16a34a]",
  dev: "bg-[#2b5bff]",
};

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="mb-10 md:mb-14">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-[#8a93a0]">
            <span className="text-[#2b5bff]">03</span> — Selected Work
          </p>
          <h2
            id="work-title"
            className="max-w-[16ch] font-head text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.02em]"
          >
            Shipped, not staged.
          </h2>
          <p className="mt-4 max-w-[46ch] text-[1.05rem] text-[#5a6472]">
            Products and systems I&apos;ve designed, built, and run in production.
          </p>
        </div>

        <div className="grid gap-5">
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              data-reveal
              className="grid grid-cols-1 items-start gap-6 rounded-[18px] border border-[#e6e7e3] bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d2d4ce] sm:p-8 md:grid-cols-[1fr_auto]"
            >
              <div>
                <h3 className="font-head text-xl font-bold tracking-[-0.02em] sm:text-2xl">
                  {p.name}
                </h3>
                <p className="mt-3 max-w-[52ch] leading-relaxed text-[#5a6472]">{p.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${p.name} technologies`}>
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-[#d2d4ce] bg-white px-3 py-1 font-mono text-xs text-[#8a93a0] transition-colors hover:border-[#2b5bff] hover:bg-[#eef2ff] hover:text-[#2b5bff]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-row flex-wrap items-center gap-3.5 md:flex-col md:items-end">
                <span
                  className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-3.5 py-1.5 font-mono text-xs tracking-wide ${STATUS_STYLES[p.variant]}`}
                >
                  <span className={`h-[7px] w-[7px] rounded-full ${STATUS_DOT[p.variant]}`} aria-hidden />
                  {p.status}
                </span>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#d2d4ce] bg-white px-5 py-2.5 text-sm font-semibold text-[#0c1424] transition-all hover:-translate-y-px hover:border-[#0c1424]"
                >
                  View source
                  <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
