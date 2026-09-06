"use client";

import { certifications } from "@/data/certifications";
import { useInView } from "@/components/ui/useInView";

export function Certifications() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="certifications" className="border-t border-line">
      <div ref={ref} className="mx-auto max-w-[72rem] px-6 py-16">
        <h2
          className="font-display text-2xl font-semibold text-ink sm:text-3xl"
          style={inView ? { animation: "counterPop 0.72s 0ms cubic-bezier(0.22,1,0.36,1) both" } : { opacity: 0 }}
        >
          Certifications
        </h2>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, idx) => (
            <li
              key={cert.title}
              className="border-b border-line pb-4 text-ink/80 transition-colors duration-200 hover:text-ledger cursor-default"
              style={inView ? { animation: `counterPop 0.72s ${idx * 100 + 150}ms cubic-bezier(0.22,1,0.36,1) both` } : { opacity: 0 }}
            >
              {cert.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
