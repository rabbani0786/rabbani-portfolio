import { ArrowUpRight, Construction } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { portfolioPlaceholders } from "@/lib/data";

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32 bg-background-alt/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Portfolio"
            title="Case studies — coming soon."
            description="Detailed write-ups on the migrations, governance frameworks, and platforms behind the numbers above. This section is under construction."
          />
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {portfolioPlaceholders.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div
                className="group relative flex h-full cursor-default flex-col justify-between overflow-hidden rounded-2xl border border-dashed border-border-strong p-6 sm:p-7 transition-colors hover:border-accent/40"
              >
                <div>
                  <span className="tag-pill inline-block rounded-full px-3 py-1 text-[11px] text-muted-dim mb-5">
                    {item.tag}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-dim">Case study</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-dim transition-colors group-hover:border-accent group-hover:text-accent-2">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-6">
          <div className="glass-card flex flex-col sm:flex-row items-center gap-4 rounded-2xl p-6 text-center sm:text-left">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-2">
              <Construction size={20} strokeWidth={1.75} />
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Full project write-ups and links are being prepared. Check back soon,
              or{" "}
              <a href="#contact" className="text-foreground underline underline-offset-4 decoration-border-strong hover:decoration-accent-2">
                get in touch
              </a>{" "}
              for a walkthrough in the meantime.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
