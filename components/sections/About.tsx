"use client";

import { profile } from "@/data/profile";
import { useInView } from "@/components/ui/useInView";

function pop(inView: boolean, delay: number) {
  return inView
    ? { animation: `counterPop 0.72s ${delay}ms cubic-bezier(0.22,1,0.36,1) both` }
    : { opacity: 0 };
}

export function About() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="about" className="border-t border-line">
      <div ref={ref} className="mx-auto grid max-w-[72rem] gap-10 px-6 py-16 sm:grid-cols-[2fr_1fr]">
        <div>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl" style={pop(inView, 0)}>About</h2>
          <div className="mt-6 space-y-4 text-ink/70 leading-relaxed">
            <p style={pop(inView, 120)}>
              I recently completed my B.C.A. in Data Analytics at Galgotias University,
              Greater Noida. Alongside my coursework, I worked across three internships —
              at Alteryx, Google for Developers, and AWS Academy — where I moved from
              cleaning raw datasets to building automated dashboards to studying
              generative AI workflows on AWS Bedrock and SageMaker, earning an
              Outstanding grade for my GenAI coursework along the way.
            </p>
            <p style={pop(inView, 240)}>
              My strongest project so far, an Online Examination and Monitoring System,
              is where those two interests met: a MySQL schema built to support analytics
              on 500+ user records, and a Python pipeline that cut manual grading time by
              80%. I&apos;m comfortable with Python, SQL, Excel, and Tableau, and I&apos;m now
              looking to grow into a software development role where I can build the
              systems that data work depends on.
            </p>
          </div>
        </div>

        <div className="space-y-6 text-sm">
          <div style={pop(inView, 180)}>
            <p className="text-ink/50">Education</p>
            <div className="mt-2 space-y-4">
              {profile.education.map((edu, idx) => (
                <div key={edu.degree} style={pop(inView, 240 + idx * 80)}>
                  <p className="font-medium text-ink">{edu.degree}</p>
                  <p className="text-ink/70">{edu.institution}</p>
                  <p className="text-ink/50">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={pop(inView, 520)}>
            <p className="text-ink/50">Based in</p>
            <p className="mt-1 font-medium text-ink">{profile.location}</p>
          </div>
          <div style={pop(inView, 600)}>
            <p className="text-ink/50">Hometown</p>
            <p className="mt-1 font-medium text-ink">{profile.hometown}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
