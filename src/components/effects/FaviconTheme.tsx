"use client";

import { useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";

export default function FaviconTheme() {
  const { theme } = useTheme();

  useEffect(() => {
    const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (link) {
      link.href = theme === "dark" ? "/favicon-dark.svg" : "/favicon-light.svg";
    }
  }, [theme]);

  return null;
}
