"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
  index: number;
}

export default function TimelineItem({ year, title, company, description, index }: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0 md:flex md:items-start gap-8 group"
    >
      <div className="hidden md:block md:w-1/3 text-right">
        <span className="text-lg font-bold text-[var(--accent-gold)]">{year}</span>
      </div>

      <div className="relative md:w-2/3 pb-12">
        <div className="absolute left-[-33px] md:left-0 top-1 w-3 h-3 rounded-full bg-[var(--accent-gold)] border-2 border-[var(--bg-primary)] z-10" />

        <div className="p-6 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--accent-gold)]/40 transition-all duration-300">
          <span className="md:hidden text-sm font-bold text-[var(--accent-gold)] mb-2 block">{year}</span>
          <h3 className="text-lg font-bold text-[var(--text-primary)]">{title}</h3>
          <p className="text-sm text-[var(--accent-gold)] mb-3">{company}</p>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
