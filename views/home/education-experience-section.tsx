import { EDUCATION } from "@/lib/data/education";
import { EXPERIENCE } from "@/lib/data/experience";

export function EducationExperienceSection() {
  return (
    <section id="experience" className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="mb-3 text-xs font-semibold tracking-[0.15em] text-muted-foreground">
            // EXPERIENCE
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Education & Professional Experience Timeline
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Two branches of the same commit history — classroom and codebase, growing side by side.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-lg font-semibold text-foreground">Academic Journey</h3>
            <div className="space-y-4">
              {EDUCATION.map((item) => (
                <div
                  key={item.degree}
                  className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-border/60"
                >
                  <p className="mb-1 text-xs text-muted-foreground">{item.period}</p>
                  <h4 className="text-sm font-semibold text-foreground">{item.degree}</h4>
                  <p className="mt-0.5 text-sm text-muted-foreground">{item.school}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold text-foreground">Professional Experience</h3>
            <div className="space-y-4">
              {EXPERIENCE.map((item) => (
                <div
                  key={item.role}
                  className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-border/60"
                >
                  <div className="mb-1 flex items-start justify-between gap-2">
                    <p className="text-xs text-muted-foreground">{item.period}</p>
                    <span className="shrink-0 rounded-md border border-border bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      {item.type}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-foreground">{item.role}</h4>
                  <p className="mt-0.5 text-sm text-muted-foreground">{item.company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
