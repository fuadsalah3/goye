"use client";

import { useEffect, useState } from "react";

export default function Lighting() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const t = document.documentElement.getAttribute("data-theme");
      setTheme(t === "light" ? "light" : "dark");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  const intensity = theme === "dark" ? 1 : 1.4;

  return (
    <>
      <ambientLight intensity={0.4 * intensity} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.8 * intensity}
        color="#D4AF37"
      />
      <directionalLight
        position={[-3, 2, -4]}
        intensity={0.4 * intensity}
        color="#4466FF"
      />
      <pointLight
        position={[0, 0, 2]}
        intensity={0.5 * intensity}
        color="#D4AF37"
        distance={8}
      />
    </>
  );
}
