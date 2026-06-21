"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

interface GoldButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function GoldButton({ children, onClick, href, className = "" }: GoldButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouse = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  };

  const baseClasses = `relative inline-flex items-center gap-2 px-6 py-3 rounded-full
    border border-[var(--accent-gold)] text-[var(--accent-gold)]
    bg-transparent overflow-hidden transition-all duration-300
    hover:shadow-[0_0_20px_rgba(var(--accent-gold-rgb),0.3)]
    font-medium tracking-wide ${className}`;

  const content = (
    <>
      <motion.span
        className="absolute inset-0 bg-[var(--accent-gold)]"
        initial={{ scaleX: 0, originX: 0.5 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        style={{ opacity: 0.1 }}
      />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        onPointerMove={handleMouse}
        onPointerLeave={handleLeave}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      onClick={onClick}
      className={baseClasses}
      onPointerMove={handleMouse}
      onPointerLeave={handleLeave}
    >
      {content}
    </button>
  );
}
