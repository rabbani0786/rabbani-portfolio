import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`flex flex-col gap-4 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      <span className="tag-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide text-muted uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground max-w-2xl">
        {title}
      </h2>
      {description && (
        <p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </Reveal>
  );
}
