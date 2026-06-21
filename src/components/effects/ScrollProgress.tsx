"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        bar.style.transform = `scaleX(${self.progress})`;
      },
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[9998] bg-white/5">
      <div
        ref={barRef}
        className="h-full bg-[var(--accent-gold)] origin-left"
        style={{ transform: "scaleX(0)", willChange: "transform" }}
      />
    </div>
  );
}
