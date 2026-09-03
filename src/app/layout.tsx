import type { Metadata } from "next";
import { Sora, Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-head",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Hyuu — Backend Developer",
  description:
    "Backend developer building fast, scalable, accessible, AI-powered experiences for the modern web — APIs, databases, automation, and cloud infrastructure.",
  keywords: [
    "Hyuu",
    "backend developer",
    "API",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "AI integration",
    "portfolio",
  ],
  authors: [{ name: "Hyuu" }],
  openGraph: {
    title: "Hyuu — Backend Developer",
    description:
      "Backend developer building fast, scalable, accessible, AI-powered experiences for the modern web.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Hyuu — Backend Developer",
    description:
      "Backend developer building fast, scalable, accessible, AI-powered experiences for the modern web.",
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
