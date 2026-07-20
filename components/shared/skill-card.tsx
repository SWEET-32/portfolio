import type { SkillCategory } from "@/lib/data/skills";

export function SkillCard({ title, label, skills }: SkillCategory) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-border/60">
      <span className="mb-3 inline-block rounded-md border border-border bg-muted px-2.5 py-1 text-[10px] font-semibold tracking-wider text-muted-foreground">
        {label}
      </span>
      <h3 className="mb-4 text-base font-semibold text-foreground">{title}</h3>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-muted-foreground/30"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
