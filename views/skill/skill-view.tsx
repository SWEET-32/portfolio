import { SKILL_CATEGORIES } from "@/lib/data/skills";
import { SkillCard } from "@/components/shared/skill-card";

export function SkillsView() {
  return (
    <section id="skill" className="bg-muted">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="mb-14">
          <p className="mb-3 text-xs font-semibold tracking-[0.15em] text-muted-foreground">
            // SKILLS
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What I Build With
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Comfortable across the stack, but I lean backend — I like knowing exactly what happens
            between a request and a response.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((cat) => (
            <SkillCard key={cat.title} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
