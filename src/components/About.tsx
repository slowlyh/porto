const HIGHLIGHTS = [
  {
    title: "Backend Development",
    desc: "Node.js services, data models, and business logic built to last.",
  },
  {
    title: "API & System Architecture",
    desc: "REST design, auth, webhooks, and clean service boundaries.",
  },
  {
    title: "AI Integration",
    desc: "LLM-powered features, prompt engineering, and automation pipelines.",
  },
  {
    title: "Cloud & Infrastructure",
    desc: "Docker, CI/CD, and deployment that scales without drama.",
  },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="mb-10 md:mb-14">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-[#8a93a0]">
            <span className="text-[#2b5bff]">01</span> — About
          </p>
          <h2
            id="about-title"
            className="max-w-[16ch] font-head text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.02em]"
          >
            Building the systems behind useful products.
          </h2>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-[1.15fr_1fr] md:gap-20">
          <div data-reveal className="space-y-5 text-[1.05rem] leading-[1.75] text-[#5a6472]">
            <p>
              Hi, I&apos;m Hyuu. I&apos;m an SMK student majoring in Automotive Engineering, and programming
              is one of my biggest hobbies. I enjoy learning{" "}
              <strong className="font-semibold text-[#0c1424]">
                backend development, APIs, automation, AI
              </strong>
              , and building useful digital tools.
            </p>
            <p className="font-head text-[1.1rem] font-semibold tracking-[-0.01em] text-[#0c1424]">
              Automotive student by day. Developer by passion.
            </p>
          </div>

          <div data-reveal role="list" aria-label="Focus areas">
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={h.title}
                role="listitem"
                className={`py-5 transition-[padding] duration-200 hover:pl-1.5 ${
                  i === 0 ? "border-t border-[#e6e7e3]" : ""
                } border-b border-[#e6e7e3]`}
              >
                <h3 className="mb-1 font-head text-base font-bold tracking-[-0.01em]">
                  <span className="mr-1 text-[#2b5bff]" aria-hidden>— </span>
                  {h.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#8a93a0]">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
