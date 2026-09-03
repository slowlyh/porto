import type { Metadata } from "next";
import { Sora, Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-head",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://porto-*.vercel.app"),
  title: {
    default: "Hyuu — Backend Developer",
    template: "%s — Hyuu",
  },
  description:
    "Hyuu — an SMK Automotive Engineering student with a passion for programming, backend development, APIs, automation, and AI.",
  keywords: [
    "Hyuu",
    "backend developer",
    "SMK Automotive",
    "API",
    "Node.js",
    "automation",
    "AI",
    "portfolio",
  ],
  authors: [{ name: "Hyuu", url: "https://github.com/slowlyh/" }],
  creator: "Hyuu",
  openGraph: {
    title: "Hyuu — Backend Developer",
    description:
      "An SMK Automotive Engineering student with a passion for programming, backend development, APIs, automation, and AI.",
    type: "website",
    locale: "en_US",
    siteName: "Hyuu",
  },
  twitter: {
    card: "summary",
    title: "Hyuu — Backend Developer",
    description:
      "An SMK Automotive Engineering student with a passion for programming, backend development, APIs, automation, and AI.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${figtree.variable} ${mono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
