"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function EliteMerkatoCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
    el.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    setMousePos({ x: 0, y: 0 });
    el.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="group relative row-span-2 col-span-2 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] overflow-hidden cursor-pointer transition-all duration-300 hover:border-[var(--accent-gold)]/50"
      style={{ willChange: "transform", minHeight: "460px" }}
    >
      <div
        className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05))`,
          transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-yellow-600/5 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
        <div className="text-[200px] font-bold text-[var(--accent-gold)] select-none">E</div>
      </div>

      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] animate-gold-pulse" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--accent-gold)]">Flagship Project</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3">
              Elite / Merkato Store
            </h3>
            <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-md leading-relaxed">
              A high-performance e-commerce platform serving thousands of concurrent users.
              Built with Next.js, PostgreSQL, and Redis for blazing-fast checkout experiences.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {["Next.js", "PostgreSQL", "Redis", "Stripe", "Docker"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full border border-[var(--card-border)] text-[var(--text-secondary)] bg-[var(--card-bg)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-[var(--accent-gold)] group-hover:gap-3 transition-all duration-300">
            <span className="tracking-wider uppercase">View Project</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
    </motion.div>
  );
}
