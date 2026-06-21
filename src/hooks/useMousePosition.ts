"use client";

import { useEffect, useRef } from "react";

export function useMousePosition() {
  const posRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      posRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return posRef;
}
