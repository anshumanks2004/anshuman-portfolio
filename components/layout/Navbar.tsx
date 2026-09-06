"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Menu, X, Download } from "lucide-react";
import { profile } from "@/data/profile";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const animationFrame = useRef<number | null>(null);
  const previousScrollBehavior = useRef<string | null>(null);

  const stopScrollAnimation = () => {
    if (animationFrame.current !== null) {
      cancelAnimationFrame(animationFrame.current);
      animationFrame.current = null;
    }

    if (previousScrollBehavior.current !== null) {
      document.documentElement.style.scrollBehavior = previousScrollBehavior.current;
      previousScrollBehavior.current = null;
    }
  };

  useEffect(() => stopScrollAnimation, []);

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    stopScrollAnimation();
    setOpen(false);
    const targetId = event.currentTarget.getAttribute("href");
    if (!targetId?.startsWith("#")) return;

    window.history.replaceState(null, "", targetId === "#top"
      ? window.location.pathname + window.location.search
      : targetId);

    // Let the mobile menu close first so it cannot shift the page while the
    // browser is animating to the selected section.
    animationFrame.current = requestAnimationFrame(() => {
      const target = document.querySelector<HTMLElement>(targetId);
      const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
      const top = targetId === "#top" || !target
        ? 0
        : Math.max(target.getBoundingClientRect().top + window.scrollY - headerHeight, 0);
      const root = document.documentElement;

      previousScrollBehavior.current = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        window.scrollTo({ top, left: 0, behavior: "auto" });
        stopScrollAnimation();
        return;
      }

      const start = window.scrollY;
      const distance = top - start;
      const duration = Math.min(620, Math.max(320, Math.abs(distance) * 0.18));
      const startedAt = performance.now();

      const animate = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        window.scrollTo({ top: start + distance * eased, left: 0, behavior: "auto" });

        if (progress < 1) {
          animationFrame.current = requestAnimationFrame(animate);
          return;
        }

        stopScrollAnimation();
      };

      animationFrame.current = requestAnimationFrame(animate);
    });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-[72rem] items-center justify-between px-6 py-4">
        <a href="#top" onClick={scrollToSection} className="font-display text-lg font-semibold text-ink">Anshuman Kumar Singh</a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={scrollToSection} className="text-sm text-ink/70 transition-colors hover:text-ledger">{item.label}</a>
          ))}
          <a href={profile.resumeUrl} download className="flex items-center gap-2 rounded-sm border border-ink px-4 py-2 text-sm text-ink transition-colors hover:border-ledger hover:text-ledger">Resume <Download size={14} /></a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={scrollToSection} className="py-2 text-sm text-ink/70 transition-colors hover:text-ledger">{item.label}</a>
          ))}
          <a href={profile.resumeUrl} download className="mt-3 flex items-center justify-center gap-2 rounded-sm border border-ink px-4 py-2 text-sm text-ink transition-colors hover:border-ledger hover:text-ledger">Resume <Download size={14} /></a>
        </nav>
      )}
    </header>
  );
}
