"use client";

import { useRef, type ReactNode } from "react";

interface MagneticWrapperProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export default function MagneticWrapper({ children, strength = 0.2, className = "" }: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
}
