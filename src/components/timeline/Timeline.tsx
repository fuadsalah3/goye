"use client";

import TimelineItem from "./TimelineItem";

const experience = [
  {
    year: "2024 — Present",
    title: "Founder & Full-Stack Architect",
    company: "Goye Digital",
    description: "Building high-performance web applications for startups and enterprises. Specializing in Next.js, Three.js, and scalable backend architectures.",
  },
  {
    year: "2022 — 2024",
    title: "Senior Full-Stack Engineer",
    company: "TechVentures Inc.",
    description: "Led the development of a real-time analytics platform serving 2M+ users. Architected microservices on Kubernetes with PostgreSQL sharding.",
  },
  {
    year: "2020 — 2022",
    title: "Frontend Developer",
    company: "PixelCraft Studio",
    description: "Crafted interactive data visualizations and component libraries using React, TypeScript, and D3.js.",
  },
];

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-[6px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-[var(--card-border)]" />
      <div className="space-y-0">
        {experience.map((item, i) => (
          <TimelineItem key={item.title} {...item} index={i} />
        ))}
      </div>
    </div>
  );
}
