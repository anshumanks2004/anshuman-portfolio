"use client";

import { Mail, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { TypewriterHeading } from "@/components/ui/TypewriterHeading";
import { useInView } from "@/components/ui/useInView";

const stats = [
  { label: "Records analyzed", value: "500+", accent: false },
  { label: "Turnaround cut by", value: "80%", accent: true },
  { label: "Internships completed", value: "3", accent: false },
];

function pop(inView: boolean, delay: number) {
  return inView
    ? { animation: `counterPop 0.72s ${delay}ms cubic-bezier(0.22,1,0.36,1) both` }
    : { opacity: 0 };
}

export function Hero() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="top" className="mx-auto max-w-[72rem] px-6 pb-16 pt-2 sm:pt-4">
      <div ref={ref} className="grid gap-10 sm:grid-cols-[2fr_1fr] sm:items-start">
        <div>
          <p className="text-sm text-ledger" style={pop(inView, 0)}>Data Analytics · Fresher</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            <TypewriterHeading text="I turn raw data into decisions people can act on." />
          </h1>
          <p className="mt-6 max-w-xl text-ink/70 leading-relaxed" style={pop(inView, 150)}>
            BCA graduate from Galgotias University specializing in Data Analytics,
            with internship experience across data pipelines, machine learning,
            and generative AI. Now looking to build software that puts that
            analysis to work.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4" style={pop(inView, 300)}>
            <a href="#projects" className="rounded-sm bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-ledger">View my work</a>
            <a href="#contact" className="flex items-center gap-2 text-sm text-ink/70 hover:text-ledger"><Mail size={16} /> {profile.email}</a>
          </div>
        </div>

        <div className="relative w-full max-w-[240px] justify-self-start sm:justify-self-end" style={pop(inView, 200)}>
          <div className="aspect-[4/5] w-full border border-line bg-white">
            <img src="/images/profile.jpg" alt={profile.name} className="h-full w-full object-cover" />
          </div>
          <a href="/images/profile.jpg" download aria-label="Download photo" className="absolute -bottom-3 -right-3 flex h-9 w-9 items-center justify-center border border-ink bg-paper text-ink transition-colors hover:border-ledger hover:text-ledger"><Download size={16} /></a>
        </div>
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-line pt-8 sm:grid-cols-3">
        {stats.map((stat, idx) => (
          <div key={stat.label} style={pop(inView, 400 + idx * 100)}>
            <dt className="text-sm text-ink/60">{stat.label}</dt>
            <dd className={`mt-1 font-display text-2xl font-semibold ${stat.accent ? "text-gold" : "text-ink"}`}>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
