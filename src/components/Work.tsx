import type { ReactNode } from "react";

/** Shared frame untuk preview ringan (non-interactive, aria-hidden). */
function PreviewFrame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div
      aria-hidden
      className="mb-5 overflow-hidden rounded-[12px] border border-[#e6e7e3] bg-[#f6f6f4]"
    >
      <div className="flex items-center gap-1.5 border-b border-[#e6e7e3] bg-white px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#e6e7e3]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#e6e7e3]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#e6e7e3]" />
        <span className="ml-2 font-mono text-[10px] tracking-wide text-[#8a93a0]">{label}</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

/** Snippets → code editor preview */
function SnippetsPreview() {
  return (
    <PreviewFrame label="hycode / editor">
      <div className="font-mono text-[11px] leading-[1.8]">
        <p className="truncate">
          <span className="text-[#8a93a0]">01</span>{" "}
          <span className="text-[#1f46d6]">const</span>{" "}
          <span className="text-[#0c1424]">debounce</span>{" "}
          <span className="text-[#8a93a0]">= (fn, ms)</span>{" "}
          <span className="text-[#1f46d6]"> =&gt;</span>{" "}
          <span className="text-[#8a93a0]">{"{"}</span>
        </p>
        <p className="truncate">
          <span className="text-[#8a93a0]">02&nbsp;&nbsp;</span>
          <span className="text-[#8a93a0]">let</span>{" "}
          <span className="text-[#0c1424]">t</span>
          <span className="text-[#8a93a0]">;</span>
        </p>
        <p className="truncate">
          <span className="text-[#8a93a0]">03&nbsp;&nbsp;</span>
          <span className="text-[#1f46d6]">return</span>{" "}
          <span className="text-[#8a93a0]">(...args) =&gt; {"{"}</span>
        </p>
        <p className="truncate">
          <span className="text-[#8a93a0]">04&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span className="text-[#8a93a0]">clearTimeout(t)</span>
          <span className="text-[#8a93a0]">;</span>
        </p>
        <p className="truncate">
          <span className="text-[#8a93a0]">05&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span className="rounded bg-[#eef2ff] px-1 text-[#2b5bff]">t = setTimeout(() =&gt; fn(...args), ms)</span>
        </p>
      </div>
    </PreviewFrame>
  );
}

/** API → documentation/dashboard preview */
function ApiPreview() {
  return (
    <PreviewFrame label="api / documentation">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="rounded bg-[#f2fbf5] px-1.5 py-0.5 font-mono text-[10px] font-medium text-[#15803d]">GET</span>
          <span className="font-mono text-[11px] text-[#0c1424]">/v1/snippets</span>
          <span className="ml-auto rounded-full border border-[#bbe4c8] bg-[#f2fbf5] px-2 py-0.5 font-mono text-[9px] text-[#15803d]">200 OK</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded bg-[#eef2ff] px-1.5 py-0.5 font-mono text-[10px] font-medium text-[#1f46d6]">POST</span>
          <span className="font-mono text-[11px] text-[#0c1424]">/v1/upload</span>
          <span className="ml-auto rounded-full border border-[#c7d4fe] bg-[#eef2ff] px-2 py-0.5 font-mono text-[9px] text-[#1f46d6]">201 Created</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded bg-[#fef3f0] px-1.5 py-0.5 font-mono text-[10px] font-medium text-[#c2410c]">DELETE</span>
          <span className="font-mono text-[11px] text-[#0c1424]">/v1/files/:id</span>
          <span className="ml-auto rounded-full border border-[#f3d5c9] bg-[#fef3f0] px-2 py-0.5 font-mono text-[9px] text-[#c2410c]">204 No Content</span>
        </div>
      </div>
    </PreviewFrame>
  );
}

/** Uploader → file upload interface preview */
function UploaderPreview() {
  return (
    <PreviewFrame label="uploader / share">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border border-[#e6e7e3] bg-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="#2b5bff" strokeWidth="2" className="h-5 w-5">
            <path d="M12 16V4m0 0 4 4m-4-4-4 4M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate font-mono text-[11px] text-[#0c1424]">screenshot-final.png</div>
          <div className="mt-1.5 flex items-center gap-2">
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#e6e7e3]">
              <div className="h-full w-[72%] rounded-full bg-[#2b5bff]" />
            </div>
            <span className="shrink-0 font-mono text-[9px] text-[#8a93a0]">72%</span>
          </div>
        </div>
      </div>
    </PreviewFrame>
  );
}

/** SlowTik → TikTok downloader interface preview */
function SlowTikPreview() {
  return (
    <PreviewFrame label="slowtik / download">
      <div className="space-y-2.5">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-full items-center rounded-full border border-[#d2d4ce] bg-white px-3">
            <span className="truncate font-mono text-[10px] text-[#a9b0ba]">
              tiktok.com/@user/video/7…
            </span>
          </div>
          <span className="shrink-0 rounded-full bg-[#2b5bff] px-3 py-1.5 font-mono text-[10px] font-medium text-white">
            Download
          </span>
        </div>
        <div className="flex items-center gap-2.5 rounded-[10px] border border-[#e6e7e3] bg-white p-2.5">
          <div className="h-10 w-10 shrink-0 rounded-[8px] bg-[#e6e7e3]" />
          <div className="min-w-0 flex-1 space-y-1.5">
            <div className="h-2 w-3/4 rounded-full bg-[#e6e7e3]" />
            <div className="h-2 w-1/2 rounded-full bg-[#eef2ff]" />
          </div>
          <span className="shrink-0 font-mono text-[9px] text-[#8a93a0]">MP4 · HD</span>
        </div>
      </div>
    </PreviewFrame>
  );
}

const PREVIEWS = {
  snippets: SnippetsPreview,
  api: ApiPreview,
  uploader: UploaderPreview,
  slowtik: SlowTikPreview,
} as const;

const PROJECTS = [
  {
    key: "snippets" as const,
    name: "Snippets",
    url: "https://github.com/slowlyh/snippets",
    desc: "A simple code snippets website for sharing code.",
    tags: ["TypeScript", "Supabase", "React"],
    status: "Live",
    variant: "live",
  },
  {
    key: "api" as const,
    name: "API",
    url: "https://github.com/slowlyh/Api",
    desc: "A simple REST API built with Express.js.",
    tags: ["JavaScript", "Express", "REST"],
    status: "Open source",
    variant: "live",
  },
  {
    key: "uploader" as const,
    name: "Uploader",
    url: "https://github.com/slowlyh/uploader",
    desc: "Simple, fast, and CLI-friendly file sharing with a sunset glow.",
    tags: ["TypeScript", "File sharing", "CLI"],
    status: "Open source",
    variant: "live",
  },
  {
    key: "slowtik" as const,
    name: "SlowTik",
    url: "https://github.com/slowlyh/slowtik",
    desc: "Source code of the TikTok downloader website.",
    tags: ["TypeScript", "Downloader", "Web"],
    status: "Open source",
    variant: "live",
  },
];

const STATUS_STYLES: Record<string, string> = {
  live: "text-[#15803d] border-[#bbe4c8] bg-[#f2fbf5]",
};

const STATUS_DOT: Record<string, string> = {
  live: "bg-[#16a34a]",
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
            Real projects I&apos;ve built and shared on GitHub.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {PROJECTS.map((p) => {
            const Preview = PREVIEWS[p.key];
            return (
              <article
                key={p.name}
                data-reveal
                className="flex h-full flex-col rounded-[18px] border border-[#e6e7e3] bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d2d4ce] sm:p-8"
              >
                <Preview />
                <h3 className="font-head text-xl font-bold tracking-[-0.02em] sm:text-2xl">
                  {p.name}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-[#5a6472]">{p.desc}</p>
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
                <div className="mt-5 flex items-center justify-between gap-3">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
