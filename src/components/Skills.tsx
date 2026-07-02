import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Core expertise"
          title="What I bring to the table."
          description="A blend of CRM & data platform depth, governance rigor, and product delivery discipline."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <div className="glass-card group relative h-full overflow-hidden rounded-2xl p-6 sm:p-7 transition-colors">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />
                <span className="font-display text-3xl font-semibold text-muted-dim/60 mb-4 block">
                  0{i + 1}
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {group.title}
                </h3>
                <p className="text-sm text-muted mb-5 leading-relaxed">{group.blurb}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="tag-pill rounded-full px-3 py-1 text-xs text-muted-dim"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
