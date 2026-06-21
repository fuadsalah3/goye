"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  useEffect(() => {
    const chars = textRef.current?.querySelectorAll(".char");
    if (!chars?.length) return;
    gsap.fromTo(
      chars,
      { y: 80, opacity: 0, rotateX: -90 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.04,
        ease: "back.out(1.7)",
      }
    );

    const ctx = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        if (containerRef.current) {
          gsap.to(containerRef.current, {
            opacity: 1 - self.progress * 1.5,
            y: -self.progress * 100,
            scale: 1 - self.progress * 0.05,
            duration: 0.1,
            overwrite: "auto",
          });
        }
      },
    });

    return () => ctx.kill();
  }, []);

  const greeting = "GOYE";
  const tagline = "Architecting the digital frontier — where backend logic meets frontend artistry.";

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
            transform: `translate(calc(-50% + ${mousePos.x}px), calc(-50% + ${mousePos.y}px))`,
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--card-border)] bg-[var(--card-bg)]"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)] animate-gold-pulse" />
          <span className="text-xs tracking-widest uppercase text-[var(--text-secondary)]">
            Fuad Nesredin
          </span>
        </motion.div>

        <h1
          ref={textRef}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8"
        >
          {greeting.split("").map((char, i) => (
            <span
              key={i}
              className="char inline-block text-[var(--accent-gold)]"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-lg md:text-xl lg:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--accent-gold)] text-[var(--accent-gold)] bg-transparent hover:shadow-[0_0_20px_rgba(var(--accent-gold-rgb),0.3)] font-medium tracking-wide transition-all duration-300"
          >
            View My Work
          </button>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--accent-gold)] text-[var(--accent-gold)] bg-transparent hover:shadow-[0_0_20px_rgba(var(--accent-gold-rgb),0.3)] font-medium tracking-wide transition-all duration-300"
          >
            Let&apos;s Talk
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase text-[var(--text-secondary)]">Scroll</span>
          <svg className="w-4 h-4 text-[var(--accent-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
