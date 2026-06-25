"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/lib/constants";

const skillIcons: Record<string, string> = {
  React: "⚛️",
  "Next.js": "▲",
  TypeScript: "TS",
  "Node.js": "💚",
  PostgreSQL: "🐘",
  MongoDB: "🍃",
  "Three.js": "3D",
  "Tailwind CSS": "🌊",
  GraphQL: "◈",
  Docker: "🐳",
  AWS: "☁️",
  Redis: "⚡",
  Python: "🐍",
  Go: "🔷",
  Kubernetes: "⎈",
};

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="engine" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(34, 211, 238, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(167, 139, 250, 0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          title="The Engine"
          subtitle="The tools and technologies that power every project I build."
        />

        <div ref={containerRef} className="relative">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0, rotateX: 90 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1, rotateX: 0 }
                    : { opacity: 0, scale: 0, rotateX: 90 }
                }
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="group relative p-4 md:p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--accent-gold)]/30 transition-all duration-300 cursor-default"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[var(--accent-gold)]/0 via-transparent to-[var(--accent-gold)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col items-center gap-3">
                  <motion.span
                    className="text-2xl md:text-3xl font-mono font-bold text-[var(--accent-gold)]"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    {skillIcons[skill] || skill.slice(0, 2)}
                  </motion.span>
                  <span className="text-xs md:text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300 text-center">
                    {skill}
                  </span>
                </div>

                <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)]/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1 }}
            className="mt-16 text-center"
          >
            <motion.div
              className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)]" />
              Constantly expanding
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
