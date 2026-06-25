"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useSpring } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

function downloadCV() {
  const a = document.createElement("a");
  a.href = "/api/cv";
  a.download = "";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

const stats = [
  { label: "Projects Delivered", value: 5, suffix: "+" },
  { label: "Years Experience", value: 1, suffix: "+" },
  { label: "Technologies", value: 20, suffix: "+" },
  { label: "Happy Clients", value: 30, suffix: "+" },
];

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, spring, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => setDisplay(Math.floor(v)));
    return unsubscribe;
  }, [spring]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] as const },
  },
};

export default function About() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="About the Architect"
          subtitle="I bridge the gap between complex backend systems and beautiful frontend experiences. Every project is a fusion of engineering precision and creative vision."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={statVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="text-center p-6 rounded-xl glass hover:border-[var(--accent-gold)]/20 transition-all duration-500"
            >
              <div className="text-3xl md:text-4xl font-bold text-[var(--accent-gold)] mb-2">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-[var(--text-secondary)] tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl"
        >
          <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
            I&apos;m Goye — a full-stack engineer who believes the best digital products feel inevitable.
            From architecting PostgreSQL schemas that handle millions of rows to crafting React components
            that delight every pixel, I own the full stack. My philosophy?{" "}
            <span className="text-[var(--accent-gold)]">The backend should be invisible,
            and the frontend should be unforgettable.</span>
          </p>

          <motion.button
            onClick={downloadCV}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#a78bfa] text-[#030712] font-bold tracking-wide transition-all duration-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download CV</span>
            <motion.span
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
              </svg>
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
