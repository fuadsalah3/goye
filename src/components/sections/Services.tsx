"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/constants";

export default function Services() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="What I Build"
          subtitle="Every service is delivered with the same obsessive attention to detail — from database indexing to micro-animations."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-8 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] overflow-hidden transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-gold)]/0 via-[var(--accent-gold)]/0 to-[var(--accent-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <span className="text-4xl mb-6 block">{service.icon}</span>
                <h3 className="text-xl font-bold mb-4 text-[var(--text-primary)]">{service.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{service.description}</p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
