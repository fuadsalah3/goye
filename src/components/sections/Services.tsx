"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] as const },
  },
};

export default function Services() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="What I Build"
          subtitle="Every service is delivered with the same obsessive attention to detail \u2014 from database indexing to micro-animations."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-8 rounded-xl glass overflow-hidden transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-gold)]/0 via-[var(--accent-gold)]/0 to-[var(--accent-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-[#22d3ee]/0 via-[#22d3ee]/10 to-[#a78bfa]/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ borderRadius: "inherit" }}
              />

              <div className="relative z-10">
                <motion.span
                  className="text-4xl mb-6 block"
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {service.icon}
                </motion.span>
                <h3 className="text-xl font-bold mb-4 text-[var(--text-primary)]">
                  {service.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
