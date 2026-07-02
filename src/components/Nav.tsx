"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 py-3 transition-all duration-300 ${
            scrolled
              ? "glass-card shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
              : "border border-transparent"
          }`}
        >
          <a
            href="#top"
            className="font-display text-lg font-semibold tracking-tight flex items-center gap-2.5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-[13px] font-bold text-black">
              {profile.initials}
            </span>
            <span className="hidden sm:inline">{profile.shortName}</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-muted hover:text-foreground transition-colors rounded-full hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Let&apos;s talk
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full glass-card"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass-card rounded-2xl p-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm text-muted hover:text-foreground rounded-xl hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground text-background px-4 py-2.5 text-sm font-medium"
            >
              Let&apos;s talk
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
