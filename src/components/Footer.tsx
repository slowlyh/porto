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
];

export default function Footer() {
  return (
    <footer className="border-t border-[#e6e7e3] py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-5 sm:px-8">
        <div>
          <a
            href="/"
            className="inline-flex items-baseline gap-0.5 font-head text-lg font-extrabold tracking-tight text-[#0c1424]"
          >
            Hyuu
            <span className="inline-block h-[7px] w-[7px] translate-y-[1px] rounded-full bg-[#2b5bff]" aria-hidden />
          </a>
          <p className="mt-1.5 text-sm text-[#8a93a0]">
            Backend developer building useful things.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <ul className="flex gap-1.5">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] text-[#5a6472] transition-colors hover:bg-[#eef2ff] hover:text-[#2b5bff]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px]" aria-hidden>
                    {s.icon}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
          <p className="m-0 text-sm text-[#8a93a0]">© 2026 Hyuu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
