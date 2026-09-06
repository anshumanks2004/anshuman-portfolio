"use client";

import { useEffect, useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number; // ms delay before animation starts
  direction?: "up" | "left" | "right" | "none";
}

/**
 * Wraps any content and triggers a fade-in + slide animation
 * when the element enters the viewport (Intersection Observer).
 * Falls back gracefully when prefers-reduced-motion is set.
 */
export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    // Initial hidden state
    const translateMap = {
      up: "translateY(28px)",
      left: "translateX(-28px)",
      right: "translateX(28px)",
      none: "none",
    };

    el.style.opacity = "0";
    el.style.transform = translateMap[direction];
    el.style.transition = `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
