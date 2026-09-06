"use client";

import { Mail, Phone, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { profile } from "@/data/profile";
import { useInView } from "@/components/ui/useInView";

function pop(inView: boolean, delay: number) {
  return inView
    ? { animation: `counterPop 0.72s ${delay}ms cubic-bezier(0.22,1,0.36,1) both` }
    : { opacity: 0 };
}

export function Contact() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="contact" className="border-t border-line">
      <div ref={ref} className="mx-auto max-w-[72rem] px-6 py-16">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl" style={pop(inView, 0)}>Contact</h2>
        <p className="mt-4 max-w-lg text-ink/70 leading-relaxed" style={pop(inView, 120)}>
          I&apos;m actively looking for opportunities in data analytics and software
          development. Reach out directly, or download my resume below.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 border border-line p-4 text-ink/80 transition-colors hover:border-ledger hover:text-ledger" style={pop(inView, 220)}><Mail size={18} /> {profile.email}</a>
          <a href={`tel:${profile.phone}`} className="flex items-center gap-3 border border-line p-4 text-ink/80 transition-colors hover:border-ledger hover:text-ledger" style={pop(inView, 300)}><Phone size={18} /> {profile.phone}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 border border-line p-4 text-ink/80 transition-colors hover:border-ledger hover:text-ledger" style={pop(inView, 380)}><LinkedinIcon className="h-[18px] w-[18px]" /> LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 border border-line p-4 text-ink/80 transition-colors hover:border-ledger hover:text-ledger" style={pop(inView, 460)}><GithubIcon className="h-[18px] w-[18px]" /> GitHub</a>
        </div>

        <a href={profile.resumeUrl} download className="mt-8 inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-ledger" style={pop(inView, 560)}>Download Resume <Download size={16} /></a>
      </div>
    </section>
  );
}
