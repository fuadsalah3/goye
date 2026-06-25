"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote: "Goye doesn't just write code — he architects solutions. The Elite platform handles 10x our previous traffic with zero issues.",
    author: "Sarah Mekonnen",
    role: "CEO, Merkato Group",
  },
  {
    quote: "Working with Goye felt like having a secret weapon. The Three.js visualizations he built transformed how our clients understand data.",
    author: "David Tesfaye",
    role: "CTO, DataPulse Inc.",
  },
  {
    quote: "Full-stack engineers are rare. Full-stack engineers who care about every pixel AND every query? That's Goye.",
    author: "Lina Wolde",
    role: "Product Lead, TechVentures",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Kind Words"
          subtitle="What people say when they've experienced the Goye difference."
        />

        <div className="relative max-w-3xl mx-auto min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <svg className="w-8 h-8 mx-auto mb-6 text-[var(--accent-gold)] opacity-40 animate-float" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>
              <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <div>
                <p className="text-[var(--text-primary)] font-bold">{testimonials[current].author}</p>
                <p className="text-sm text-[var(--accent-gold)]">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-[var(--accent-gold)] w-6"
                    : "bg-[var(--text-secondary)]/30 hover:bg-[var(--text-secondary)]/50"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
