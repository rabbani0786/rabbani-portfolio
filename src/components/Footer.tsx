import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-dim">
        <span>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </span>
        <span>Built with Next.js.</span>
      </div>
    </footer>
  );
}
