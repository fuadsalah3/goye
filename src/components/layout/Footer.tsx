"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-[var(--text-secondary)] text-sm tracking-widest">
          &copy; {new Date().getFullYear()} GOYE
        </span>
        <div className="flex items-center gap-6">
          {["GitHub", "LinkedIn", "Twitter"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-xs tracking-widest uppercase text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors duration-300"
            >
              {s}
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
