"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  color: string;
  size?: "small" | "wide";
}

export default function ProjectCard({ title, description, tags, color, size = "small" }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`group relative rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] overflow-hidden cursor-pointer transition-all duration-300 hover:border-[var(--accent-gold)]/40 ${size === "wide" ? "col-span-full" : ""}`}
      style={{ willChange: "transform" }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent" />

      <div className="relative z-10 p-6 h-full flex flex-col justify-end min-h-[220px]">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--accent-gold)] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-white/60 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider rounded-full bg-white/10 text-white/70 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg className="w-5 h-5 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </motion.div>
  );
}
