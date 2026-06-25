"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chars = textRef.current?.querySelectorAll(".char");
    if (chars?.length) {
      gsap.fromTo(
        chars,
        { y: 100, opacity: 0, rotateX: -90, scale: 0.5 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          scale: 1,
          duration: 1,
          stagger: 0.03,
          ease: "power4.out",
        }
      );
    }

    const ctx = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        if (containerRef.current) {
          gsap.to(containerRef.current, {
            opacity: 1 - self.progress * 1.2,
            y: -self.progress * 150,
            scale: 1 - self.progress * 0.08,
            duration: 0.1,
            overwrite: "auto",
          });
        }
        if (gridRef.current) {
          gsap.to(gridRef.current, {
            opacity: 1 - self.progress * 1.5,
            duration: 0.1,
            overwrite: "auto",
          });
        }
      },
    });

    return () => ctx.kill();
  }, []);

  const greeting = "GOYE";
  const tagline = "Architecting the digital frontier \u2014 where backend logic meets frontend artistry.";

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        ref={gridRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />

      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(34, 211, 238, 0.08) 0%, rgba(167, 139, 250, 0.04) 40%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)] animate-pulse-glow" />
          <span className="text-xs tracking-widest uppercase text-[var(--text-secondary)]">
            Fuad Nesredin
          </span>
        </motion.div>

        <h1
          ref={textRef}
          className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tight mb-6 leading-none"
          style={{ perspective: "1000px" }}
        >
          {greeting.split("").map((char, i) => (
            <span
              key={i}
              className="char inline-block gradient-text"
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl lg:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34, 211, 238, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#a78bfa] text-[#030712] font-bold tracking-wide transition-all duration-300"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[var(--accent-gold)] text-[var(--accent-gold)] bg-transparent hover:bg-[var(--accent-gold)]/10 font-medium tracking-wide transition-all duration-300"
          >
            Let&apos;s Talk
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase text-[var(--text-secondary)]">
            Scroll
          </span>
          <svg
            className="w-4 h-4 text-[var(--accent-gold)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
