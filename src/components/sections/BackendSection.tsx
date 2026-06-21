"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const nodes = [
  { id: "client", label: "Client", x: 10, y: 50, color: "#D4AF37" },
  { id: "cdn", label: "CDN", x: 25, y: 25, color: "#6366F1" },
  { id: "api", label: "API Gateway", x: 40, y: 50, color: "#10B981" },
  { id: "micro", label: "Microservices", x: 60, y: 30, color: "#F59E0B" },
  { id: "db", label: "PostgreSQL", x: 60, y: 70, color: "#3B82F6" },
  { id: "cache", label: "Redis", x: 80, y: 25, color: "#EF4444" },
  { id: "queue", label: "Message Queue", x: 80, y: 75, color: "#8B5CF6" },
  { id: "s3", label: "Object Store", x: 92, y: 50, color: "#EC4899" },
];

const connections = [
  ["client", "cdn"],
  ["cdn", "api"],
  ["api", "micro"],
  ["micro", "db"],
  ["micro", "cache"],
  ["micro", "queue"],
  ["db", "s3"],
];

const features = [
  {
    title: "Scalable Microservices",
    description: "Containerized services with auto-scaling, load balancing, and circuit breakers for fault tolerance.",
  },
  {
    title: "Multi-Layer Caching",
    description: "Redis-based distributed caching with write-through and cache-aside patterns for sub-millisecond response times.",
  },
  {
    title: "Event-Driven Architecture",
    description: "Asynchronous processing with message queues for decoupled, resilient data pipelines.",
  },
  {
    title: "Database Mastery",
    description: "PostgreSQL with advanced indexing, partitioning, and connection pooling. MongoDB for flexible document storage at scale.",
  },
];

export default function BackendSection() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="backend" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Backend Architecture"
          subtitle="Scalable systems designed to handle millions of requests with elegance and reliability."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)] p-4"
          >
            <svg
              ref={svgRef}
              viewBox="0 0 100 100"
              className="w-full h-full"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              {connections.map(([from, to]) => {
                const f = nodes.find((n) => n.id === from)!;
                const t = nodes.find((n) => n.id === to)!;
                return (
                  <motion.line
                    key={`${from}-${to}`}
                    x1={f.x}
                    y1={f.y}
                    x2={t.x}
                    y2={t.y}
                    stroke="rgba(212, 175, 55, 0.2)"
                    strokeWidth="0.3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                );
              })}

              {nodes.map((node) => (
                <motion.g
                  key={node.id}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * nodes.indexOf(node) }}
                  onMouseEnter={() => setActive(node.id)}
                  onMouseLeave={() => setActive(null)}
                  className="cursor-pointer"
                >
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={active === node.id ? 6 : 4}
                    fill={node.color}
                    opacity={active === node.id ? 1 : 0.7}
                    className="transition-all duration-300"
                  />
                  {active === node.id && (
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r={9}
                      fill="none"
                      stroke={node.color}
                      strokeWidth="0.5"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      opacity={0.4}
                    />
                  )}
                  <text
                    x={node.x}
                    y={node.y + 8}
                    textAnchor="middle"
                    fill={active === node.id ? node.color : "rgba(255,255,255,0.5)"}
                    fontSize="2.5"
                    className="transition-all duration-300"
                    fontWeight={active === node.id ? "bold" : "normal"}
                  >
                    {node.label}
                  </text>
                </motion.g>
              ))}
            </svg>
          </motion.div>

          <div className="space-y-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-6 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--accent-gold)]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[var(--accent-gold)] flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{feature.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
