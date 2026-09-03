"use client";

import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e6e7e3] bg-[#fafaf8]/85 backdrop-blur-md">
      <div className="mx-auto flex min-h-[68px] max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="/"
          className="font-head text-xl font-extrabold tracking-tight text-[#0c1424]"
          aria-label="Hyuu — home"
        >
          Hyuu
          <span className="ml-0.5 inline-block h-[7px] w-[7px] translate-y-[1px] rounded-full bg-[#2b5bff]" aria-hidden />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-[0.95rem] font-medium text-[#5a6472] transition-colors hover:bg-[#f1f2ee] hover:text-[#0c1424]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex min-h-[44px] items-center rounded-full border border-[#d2d4ce] bg-white px-5 py-2.5 text-[0.95rem] font-semibold text-[#0c1424] transition-all hover:-translate-y-px hover:border-[#0c1424]"
        >
          Get in touch
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(!open)}
          className="relative h-11 w-11 rounded-[10px] border border-[#d2d4ce] bg-white md:hidden"
        >
          <span
            aria-hidden
            className={`absolute left-3 right-3 h-0.5 rounded bg-[#0c1424] transition-all ${
              open ? "top-[21px] rotate-45" : "top-[17px]"
            }`}
          />
          <span
            aria-hidden
            className={`absolute left-3 right-3 h-0.5 rounded bg-[#0c1424] transition-all ${
              open ? "top-[21px] -rotate-45" : "top-[25px]"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" hidden={!open} className="border-t border-[#e6e7e3] px-5 pb-5 pt-3 md:hidden">
        <nav aria-label="Mobile">
          <ul className="space-y-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-lg font-semibold text-[#0c1424]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-[#2b5bff] px-5 py-3 font-semibold text-white"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
