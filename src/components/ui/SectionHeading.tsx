"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  gold?: boolean;
}

export default function SectionHeading({ title, subtitle, gold = true }: SectionHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const line = el.querySelector(".accent-line") as HTMLElement;
    if (!line) return;

    const ctx = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => {
        gsap.fromTo(
          line,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.8, ease: "power3.out" }
        );
      },
      once: true,
    });

    return () => ctx.kill();
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] as const }}
      className="mb-16 md:mb-20"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
        {title.split(" ").map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-3 last:mr-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            {word === "Gold" || word === "Engine" || word === "Flagship" ? (
              <span className="gradient-text">{word}</span>
            ) : (
              word
            )}
          </motion.span>
        ))}
      </h2>
      {gold && (
        <div
          className="accent-line mt-4 h-0.5 w-24 bg-gradient-to-r from-[var(--accent-gold)] to-[#a78bfa] origin-left scale-x-0 opacity-0 rounded-full"
        />
      )}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
