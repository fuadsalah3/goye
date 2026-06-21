"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/lib/constants";

const SceneCanvas = dynamic(() => import("@/components/scene3d/SceneCanvas"), { ssr: false });

export default function TechStack() {
  return (
    <section id="engine" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="The Engine"
          subtitle="A live 3D visualization of the tools that power every project. Scroll to shift the spectrum."
        />
      </div>

      <div className="relative h-[500px] md:h-[600px] w-full">
        <SceneCanvas />
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-2 rounded-full text-sm font-medium border border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--text-secondary)] hover:text-[var(--accent-gold)] hover:border-[var(--accent-gold)] transition-all duration-300"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
