"use client";

import { socialLinks } from "@/lib/constants";

const links = [
  { label: "GitHub", href: socialLinks.github },
  { label: "Telegram", href: socialLinks.telegram },
  { label: "Instagram", href: socialLinks.instagram },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-[var(--text-secondary)] text-sm tracking-widest">
          &copy; {new Date().getFullYear()} GOYE
        </span>
        <div className="flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>
        <span className="text-[var(--text-secondary)] text-xs tracking-wider">
          Crafted with precision
        </span>
      </div>
    </footer>
  );
}
