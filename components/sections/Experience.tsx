import { experience } from "@/data/experience";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function Experience() {
  return (
    <section id="experience" className="border-t border-line">
      <div className="mx-auto max-w-[72rem] px-6 py-16">
        <AnimatedSection>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Experience</h2>
        </AnimatedSection>

        <ol className="mt-10 space-y-10 border-l border-line pl-8">
          {experience.map((item, idx) => (
            <AnimatedSection key={item.role} delay={idx * 120} direction="left">
              <li className="relative">
                <span className="timeline-dot absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-ledger" />
                <p className="text-sm text-ink/50">{item.period}</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink">{item.role}</h3>
                <p className="text-ink/60">{item.organization}</p>
                <ul className="mt-3 space-y-1.5 text-ink/70">
                  {item.points.map((point) => (
                    <li key={point} className="leading-relaxed">{point}</li>
                  ))}
                </ul>
              </li>
            </AnimatedSection>
          ))}
        </ol>
      </div>
    </section>
  );
}