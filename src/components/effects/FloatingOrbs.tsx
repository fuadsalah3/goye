"use client";

import { useEffect, useRef } from "react";

export default function FloatingOrbs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const orbs = Array.from(container.querySelectorAll(".orb")) as HTMLDivElement[];
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      orbs.forEach((orb, i) => {
        const speed = (i + 1) * 8;
        orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <div className="orb absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-[#22d3ee]/10 to-transparent blur-3xl animate-float" />
      <div className="orb absolute top-3/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#a78bfa]/10 to-transparent blur-3xl animate-float-delayed" />
      <div className="orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#f472b6]/5 via-[#22d3ee]/5 to-transparent blur-3xl animate-drift" />
      <div className="orb absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-gradient-to-br from-[#22d3ee]/8 to-[#a78bfa]/8 blur-3xl animate-drift-reverse" />
    </div>
  );
}
