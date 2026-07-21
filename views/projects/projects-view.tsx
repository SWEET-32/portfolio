import { PROJECTS } from "@/lib/data/projects";

export function ProjectsView() {
  return (
    <section id="projects" className="bg-muted">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="mb-3 text-xs font-semibold tracking-[0.15em] text-muted-foreground">
            // PROJECTS
          </p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Things I&apos;ve Shipped
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Projects created to solve practical problems involving traffic, blood donation,
                education, business operations, and data analysis.
              </p>
            </div>
            <a
              href="/cv.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Download Full CV (PDF)
              <span className="text-xs">↓</span>
            </a>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.number}
              className="group rounded-xl border border-border bg-card p-5 transition-colors hover:border-border/60"
            >
              <div className="mb-3 flex items-start justify-between">
                <span className="text-xs font-semibold text-muted-foreground/50">
                  {project.number}
                </span>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Live ↗
                  </a>
                </div>
              </div>

              <div className="mb-4 aspect-video overflow-hidden rounded-lg border border-border bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <h3 className="mb-1.5 text-base font-semibold text-foreground">{project.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
