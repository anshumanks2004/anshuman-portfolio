"use client";

import { useEffect } from "react";

export function ScrollReset() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const html = document.documentElement;
    const previousScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    const forceTop = () => window.scrollTo(0, 0);
    forceTop();

    const raf1 = requestAnimationFrame(() => {
      forceTop();
      requestAnimationFrame(forceTop);
    });

    const timers = [0, 100, 300, 600, 1000].map((delay) => setTimeout(forceTop, delay));

    window.addEventListener("load", forceTop);

    const restore = setTimeout(() => {
      html.style.scrollBehavior = previousScrollBehavior;
    }, 1100);

    return () => {
      cancelAnimationFrame(raf1);
      timers.forEach(clearTimeout);
      clearTimeout(restore);
      window.removeEventListener("load", forceTop);
    };
  }, []);

  return null;
}
