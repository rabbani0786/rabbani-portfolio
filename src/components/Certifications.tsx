import { Award, GraduationCap } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { certifications, education } from "@/lib/data";

export function Certifications() {
  return (
    <section className="relative py-4 sm:py-6">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="glass-card rounded-2xl p-6 sm:p-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-accent-2 mb-5">
                <Award size={14} />
                Certifications &amp; Recognition
              </h3>
              <ul className="flex flex-col gap-3.5">
                {certifications.map((cert) => (
                  <li key={cert.title} className="flex flex-col">
                    <span className="text-sm text-foreground font-medium">{cert.title}</span>
                    <span className="text-xs text-muted-dim">{cert.subtitle}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:border-l sm:border-border sm:pl-8">
              <h3 className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-accent-2 mb-5">
                <GraduationCap size={14} />
                Education
              </h3>
              <div className="flex flex-col">
                <span className="text-sm text-foreground font-medium">{education.degree}</span>
                <span className="text-xs text-muted-dim">{education.school}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
