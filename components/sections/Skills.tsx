"use client";

import { skillGroups } from "@/data/skills";
import { useInView } from "@/components/ui/useInView";

export function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="skills" className="border-t border-line">
      <div ref={ref} className="mx-auto max-w-[72rem] px-6 py-16">
        <h2
          className="font-display text-2xl font-semibold text-ink sm:text-3xl"
          style={inView ? { animation: "counterPop 0.72s 0ms cubic-bezier(0.22,1,0.36,1) both" } : { opacity: 0 }}
        >
          Skills
        </h2>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, groupIdx) => (
            <div key={group.category}>
              <p
                className="text-sm text-ledger"
                style={inView ? { animation: `counterPop 0.72s ${groupIdx * 100 + 100}ms cubic-bezier(0.22,1,0.36,1) both` } : { opacity: 0 }}
              >
                {group.category}
              </p>
              <ul className="mt-3 space-y-2">
                {group.items.map((item, itemIdx) => (
                  <li
                    key={item}
                    className="skill-tag inline-block rounded-sm border border-line px-2.5 py-1 text-ink/80 text-sm mr-2 mb-2 cursor-default"
                    style={
                      inView
                        ? { animation: `counterPop 0.72s ${groupIdx * 100 + itemIdx * 60 + 200}ms cubic-bezier(0.22,1,0.36,1) both` }
                        : { opacity: 0 }
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
