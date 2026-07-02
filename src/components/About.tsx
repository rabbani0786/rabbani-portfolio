import { Database, GitMerge, ShieldCheck } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { profile, stats } from "@/lib/data";

const pillars = [
  {
    icon: Database,
    title: "Unified customer data",
    text: "Building the single customer view that engineering, marketing, and operations all trust.",
  },
  {
    icon: GitMerge,
    title: "Identity resolution at scale",
    text: "Defining the logic that resolves who a customer is across CRM, CDP, and loyalty systems.",
  },
  {
    icon: ShieldCheck,
    title: "Governance by design",
    text: "Access control and data segregation baked into every migration and multi-region rollout.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About me"
          title="Product management for the systems that make customer data trustworthy."
          description={profile.summary}
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <div className="glass-card h-full rounded-2xl p-6 transition-colors">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent-2">
                  <pillar.icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-6">
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-[13px] text-muted-dim leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
