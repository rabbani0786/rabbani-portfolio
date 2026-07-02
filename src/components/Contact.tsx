import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { LinkedinIcon } from "./ui/LinkedinIcon";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-blob absolute left-1/2 top-1/2 h-[420px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal className="flex flex-col items-center">
          <span className="tag-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide text-muted uppercase mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
            Get in touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight max-w-2xl">
            Let&apos;s build something{" "}
            <span className="text-gradient">worth trusting.</span>
          </h2>
          <p className="mt-6 max-w-xl text-muted text-base sm:text-lg leading-relaxed">
            Open to conversations about CRM &amp; customer data platforms, identity
            resolution, and enterprise product leadership.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-semibold hover:opacity-90 transition-all"
            >
              <Mail size={16} />
              {profile.email}
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-dim">
            <span className="inline-flex items-center gap-2">
              <Phone size={14} />
              {profile.phone}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} />
              {profile.location}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
