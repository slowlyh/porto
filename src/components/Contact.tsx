"use client";

import { useState, type FormEvent } from "react";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/slowlyh/",
    icon: (
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.5v-1.7c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.2-.3-.5-1.5.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .6 1.2.2 2.4.1 2.7.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.2c0 .2.2.6.8.5 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z" />
    ),
  },
  {
    label: "X",
    href: "https://x.com/kips3666",
    icon: (
      <path d="M18.9 1.2h3.7l-8.1 9.2L24 22.8h-7.5l-5.9-7.7-6.7 7.7H.2l8.6-9.9L0 1.2h7.7l5.3 7 6-7Zm-1.3 19.4h2L6.6 3.3H4.4l13.2 17.3Z" />
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/hiyuux",
    icon: (
      <path d="M21.9 4.2 18.8 20c-.2 1-.8 1.3-1.7.8l-4.6-3.4-2.2 2.1c-.3.3-.5.5-1 .5l.4-4.7L18 6.7c.4-.3-.1-.5-.6-.2L6.9 13.9l-4.5-1.4c-1-.3-1-1 .2-1.4l17.6-6.8c.8-.3 1.5.2 1.7 1Z" />
    ),
  },
  {
    label: "WhatsApp",
    href: "https://whatsapp.com/channel/0029VaiqxgdJZg4Eq8WZoQ0X",
    icon: (
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20Zm4.5-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.1-.2 0-.4.1-.5l.7-.8c.1-.2.1-.3 0-.5l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1 0-.1-.2-.2-.3-.2Z" />
    ),
  },
];

export default function Contact() {
  const [note, setNote] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) {
      setNote("Please fill in your name, email, and message.");
      return;
    }
    const subject = encodeURIComponent(`New project inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    setNote("Opening your email app — or reach me directly at hyuuoffc@gmail.com.");
    window.location.href = `mailto:hyuuoffc@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="mb-10 md:mb-14">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-[#8a93a0]">
            <span className="text-[#2b5bff]">04</span> — Contact
          </p>
          <h2
            id="contact-title"
            className="max-w-[16ch] font-head text-[clamp(1.9rem,4vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.02em]"
          >
            Let&apos;s build something useful.
          </h2>
          <p className="mt-4 max-w-[46ch] text-[1.05rem] text-[#5a6472]">
            Have a project, idea, or collaboration in mind? Send me a message.
          </p>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-[1.3fr_1fr] md:gap-20">
          <form data-reveal onSubmit={handleSubmit} noValidate>
            <div className="mb-5">
              <label
                htmlFor="f-name"
                className="mb-1.5 block font-mono text-xs font-medium uppercase tracking-[0.14em] text-[#8a93a0]"
              >
                Name
              </label>
              <input
                id="f-name"
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                className="w-full rounded-[10px] border border-[#d2d4ce] bg-white px-4 py-3 text-base outline-none transition focus:border-[#2b5bff] focus:shadow-[0_0_0_3px_rgba(43,91,255,0.14)] placeholder:text-[#a9b0ba]"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="f-email"
                className="mb-1.5 block font-mono text-xs font-medium uppercase tracking-[0.14em] text-[#8a93a0]"
              >
                Email
              </label>
              <input
                id="f-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                className="w-full rounded-[10px] border border-[#d2d4ce] bg-white px-4 py-3 text-base outline-none transition focus:border-[#2b5bff] focus:shadow-[0_0_0_3px_rgba(43,91,255,0.14)] placeholder:text-[#a9b0ba]"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="f-message"
                className="mb-1.5 block font-mono text-xs font-medium uppercase tracking-[0.14em] text-[#8a93a0]"
              >
                Message
              </label>
              <textarea
                id="f-message"
                name="message"
                placeholder="Tell me about your project or idea…"
                className="min-h-[140px] w-full resize-y rounded-[10px] border border-[#d2d4ce] bg-white px-4 py-3 text-base outline-none transition focus:border-[#2b5bff] focus:shadow-[0_0_0_3px_rgba(43,91,255,0.14)] placeholder:text-[#a9b0ba]"
              />
            </div>

            <button
              type="submit"
              className="group inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#2b5bff] px-7 py-3.5 font-semibold text-white transition-all hover:-translate-y-px hover:bg-[#1f46d6]"
            >
              Send message
              <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden>↗</span>
            </button>

            {note && (
              <p role="status" className="mt-4 text-sm text-[#5a6472]">
                {note}
              </p>
            )}
          </form>

          <aside data-reveal>
            <p className="mb-5 text-[1.05rem] text-[#5a6472]">Prefer to go direct? Find me here:</p>
            <div className="flex flex-wrap gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#d2d4ce] bg-white px-5 py-2.5 text-sm font-semibold text-[#0c1424] transition-all hover:-translate-y-px hover:border-[#2b5bff] hover:bg-[#eef2ff] hover:text-[#2b5bff]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden>
                    {s.icon}
                  </svg>
                  {s.label}
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
