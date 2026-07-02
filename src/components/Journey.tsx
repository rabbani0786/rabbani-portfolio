import { Briefcase, MapPin } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { experiences } from "@/lib/data";

export function Journey() {
  return (
    <section id="journey" className="relative py-24 sm:py-32 bg-background-alt/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Career journey"
          title="A decade building enterprise retail & data platforms."
          description="From QA leadership in enterprise platforms to owning the customer data backbone of a global retail group."
        />

        <div className="relative mt-16">
          {/* Timeline spine */}
          <div className="absolute left-[19px] sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-border to-transparent" />

          <div className="flex flex-col gap-10 sm:gap-14">
            {experiences.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.06} className="relative pl-14 sm:pl-20">
                {/* Node */}
                <div className="absolute left-0 top-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-background-alt border border-border-strong">
                  <span
                    className={`flex h-full w-full items-center justify-center rounded-full text-[11px] font-display font-semibold ${
                      i === 0
                        ? "bg-gradient-to-br from-accent to-accent-2 text-black"
                        : "text-muted"
                    }`}
                  >
                    {exp.period.split(" ")[1] ?? exp.period.slice(0, 4)}
                  </span>
                </div>

                <div className="glass-card rounded-2xl p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        {i === 0 && (
                          <span className="rounded-full bg-accent/15 text-accent-2 text-[11px] font-medium px-2.5 py-0.5 tracking-wide uppercase">
                            Current
                          </span>
                        )}
                        <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
                          {exp.company}
                        </h3>
                      </div>
                      <p className="text-sm text-muted">{exp.companyMeta}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-muted-dim shrink-0">
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase size={13} />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="font-medium text-foreground/90 mb-4">{exp.role}</p>

                  <div className="flex flex-col gap-6">
                    {exp.groups.map((group, gi) => (
                      <div key={gi}>
                        {group.heading && (
                          <h4 className="text-xs font-semibold tracking-wide uppercase text-accent-2 mb-3">
                            {group.heading}
                          </h4>
                        )}
                        <ul className="flex flex-col gap-2.5">
                          {group.bullets.map((bullet, bi) => (
                            <li
                              key={bi}
                              className="text-sm text-muted leading-relaxed flex gap-2.5"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
