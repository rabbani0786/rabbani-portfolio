"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { heroStats, profile } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-grid pt-40 pb-24 sm:pt-48 sm:pb-32"
    >
      {/* Decorative glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="glow-blob animate-float absolute -top-24 left-1/2 h-[420px] w-[560px] -translate-x-1/2 rounded-full bg-accent/25" />
        <div className="glow-blob absolute top-40 -right-32 h-[360px] w-[360px] rounded-full bg-accent-2/20" />
        <div className="glow-blob absolute -bottom-40 -left-20 h-[320px] w-[320px] rounded-full bg-accent-3/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--background)_75%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <span className="tag-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-muted uppercase mb-8">
            <Sparkles size={13} className="text-accent-2" />
            Product Leadership · CRM &amp; Customer Data
          </span>

          <h1 className="font-display text-[13vw] leading-[0.95] sm:text-7xl md:text-8xl font-semibold tracking-tight max-w-5xl">
            <span className="block text-foreground">Turning fragmented</span>
            <span className="block text-gradient">customer data into</span>
            <span className="block text-foreground">a single source of truth.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base sm:text-lg text-muted leading-relaxed">
            {`I'm ${profile.shortName.split(" ")[0]} — a Senior Product Manager building unified, governed customer data platforms at enterprise scale. Currently leading CRM & CDP for`}{" "}
            <span className="text-foreground">Apparel Group</span> across{" "}
            <span className="text-foreground">85+ brands</span> and{" "}
            <span className="text-foreground">14 countries</span>.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#journey"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-semibold hover:opacity-90 transition-all"
            >
              See my career journey
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full glass-card px-6 py-3.5 text-sm font-semibold text-foreground transition-colors"
            >
              View portfolio
            </a>
          </div>

          <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-dim">
            <MapPin size={14} />
            {profile.location}
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border bg-border"
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-background-alt/80 px-5 py-7 sm:py-8 flex flex-col items-center text-center gap-1.5"
            >
              <span className="font-display text-2xl sm:text-3xl font-semibold text-gradient-accent">
                {stat.value}
              </span>
              <span className="text-xs sm:text-[13px] text-muted-dim leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
