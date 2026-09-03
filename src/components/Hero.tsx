import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section aria-label="Introduction" className="px-5 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-36">
      <div className="mx-auto max-w-6xl">
        <p
          data-reveal
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#d2d4ce] bg-white px-4 py-2 font-mono text-xs tracking-wide text-[#5a6472]"
        >
          <span className="status-dot h-2 w-2 rounded-full bg-[#16a34a]" aria-hidden />
          Available for new projects
        </p>

        <h1
          data-reveal
          className="font-head text-[clamp(3.6rem,10vw,6.75rem)] font-extrabold leading-[1.02] tracking-[-0.035em]"
        >
          Hyuu
        </h1>

        <p
          data-reveal
          className="mt-7 max-w-[34ch] text-[clamp(1.2rem,2.6vw,1.6rem)] leading-[1.55] text-[#5a6472]"
        >
          Backend developer building <strong className="font-semibold text-[#0c1424]">fast, scalable</strong>,
          accessible, <strong className="font-semibold text-[#0c1424]">AI-powered</strong> experiences for
          the modern web.
        </p>

        <div data-reveal className="mt-10 flex flex-wrap gap-3.5">
          <a
            href="#work"
            className="group inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#2b5bff] px-7 py-3.5 font-semibold text-white transition-all hover:-translate-y-px hover:bg-[#1f46d6]"
          >
            View selected work
            <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden>↗</span>
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-[44px] items-center rounded-full border border-[#d2d4ce] bg-white px-7 py-3.5 font-semibold text-[#0c1424] transition-all hover:-translate-y-px hover:border-[#0c1424]"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
