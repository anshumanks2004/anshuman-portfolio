"use client";

import { GithubIcon } from "@/components/ui/icons";
import { projects } from "@/data/projects";
import { useInView } from "@/components/ui/useInView";

export function Projects() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="projects" className="border-t border-line">
      <div ref={ref} className="mx-auto max-w-[72rem] px-6 py-16">
        <h2
          className="font-display text-2xl font-semibold text-ink sm:text-3xl"
          style={inView ? { animation: "counterPop 0.72s 0ms cubic-bezier(0.22,1,0.36,1) both" } : { opacity: 0 }}
        >
          Projects
        </h2>

        <div className="mt-8 space-y-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="project-card border border-line p-6 sm:p-8"
              style={inView ? { animation: `counterPop 0.72s ${idx * 100 + 150}ms cubic-bezier(0.22,1,0.36,1) both` } : { opacity: 0 }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h3 className="font-display text-xl font-semibold text-ink">{project.title}</h3>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm text-ink/70 transition-colors duration-200 hover:text-ledger"
                  >
                    <GithubIcon className="h-4 w-4" /> Code
                  </a>
                )}
              </div>

              <ul className="mt-4 space-y-1.5 text-ink/70">
                {project.points.map((point) => (
                  <li key={point} className="leading-relaxed">{point}</li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech, techIdx) => (
                  <span
                    key={tech}
                    className="skill-tag border border-line px-2.5 py-1 text-xs text-ink/60"
                    style={
                      inView
                        ? { animation: `counterPop 0.72s ${idx * 100 + 250 + techIdx * 45}ms cubic-bezier(0.22,1,0.36,1) both` }
                        : { opacity: 0 }
                    }
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
