"use client";

import { useEffect, useState } from "react";

interface TypewriterHeadingProps {
  text: string;
  className?: string;
  speed?: number;
}

export function TypewriterHeading({ text, className = "", speed = 45 }: TypewriterHeadingProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      const frame = requestAnimationFrame(() => setDisplayed(text));
      return () => cancelAnimationFrame(frame);
    }

    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="opacity-0">{text}</span>
      <span className="absolute inset-0" aria-hidden="true">
        {displayed}
        <span className="ml-0.5 inline-block animate-pulse">|</span>
      </span>
    </span>
  );
}
