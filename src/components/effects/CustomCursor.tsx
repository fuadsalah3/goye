"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const hovered = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-hoverable]")) {
        hovered.current = true;
      }
    };

    const onOut = () => {
      hovered.current = false;
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    let animId: number;

    const draw = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const radius = hovered.current ? 28 : 20;
      const alpha = hovered.current ? 0.25 : 0.15;

      ctx.beginPath();
      ctx.arc(pos.current.x, pos.current.y, radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
      ctx.lineWidth = hovered.current ? 2 : 1.5;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(pos.current.x, pos.current.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(212, 175, 55, 0.4)";
      ctx.fill();

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999] hidden md:block"
      aria-hidden="true"
    />
  );
}
