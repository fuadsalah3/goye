"use client";

import { skills } from "@/lib/constants";

export default function MarqueeTicker() {
  const list = [...skills, ...skills];

  return (
    <div className="relative py-6 overflow-hidden border-y border-[var(--card-border)]">
      <div className="flex whitespace-nowrap animate-marquee gap-8 hover:[animation-play-state:paused]">
        {list.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="inline-flex items-center gap-3 text-sm font-medium tracking-widest uppercase text-[var(--text-secondary)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] animate-pulse-glow" />
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
