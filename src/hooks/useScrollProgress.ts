"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollProgress() {
  const progressRef = useRef(0);

  useEffect(() => {
    const update = (self: ScrollTrigger) => {
      progressRef.current = self.progress;
    };
    const st = ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      onUpdate: update,
    });
    return () => st.kill();
  }, []);

  return progressRef;
}
