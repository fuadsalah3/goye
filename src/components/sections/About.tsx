"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useSpring } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { label: "Projects Delivered", value: 50, suffix: "+" },
  { label: "Years Experience", value: 5, suffix: "+" },
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

export default function About() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="About the Architect"
          subtitle="I bridge the gap between complex backend systems and beautiful frontend experiences. Every project is a fusion of engineering precision and creative vision."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center p-6 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)]"
            >
              <div className="text-3xl md:text-4xl font-bold text-[var(--accent-gold)] mb-2">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-[var(--text-secondary)] tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
            I&apos;m Goye — a full-stack engineer who believes the best digital products feel inevitable.
            From architecting PostgreSQL schemas that handle millions of rows to crafting React components
            that delight every pixel, I own the full stack. My philosophy? <span className="text-[var(--accent-gold)]">The backend should be invisible,
            and the frontend should be unforgettable.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
