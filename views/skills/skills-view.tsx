import { SkillCard } from "@/components/skill-card";

interface SkillCategory {
  title: string;
  label: string;
  skills: string[];
  labelColor: string;
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    label: "CORE",
    skills: ["C++", "Python", "Java", "JavaScript", "TypeScript", "C"],
    labelColor: "text-blue-500",
  },
  {
    title: "Web Development",
    label: "WEB",
    skills: ["Node.js", "Express.js", "React", "Next.js", "Tailwind CSS", "REST APIs"],
    labelColor: "text-orange-500",
  },
  {
    title: "Databases",
    label: "DATA",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis (basics)"],
    labelColor: "text-pink-500",
  },
  {
    title: "Data & ML",
    label: "ML",
    skills: ["Pandas", "Numpy", "scikit-learn", "Matplotlib"],
    labelColor: "text-green-500",
  },
  {
    title: "Tools & Platforms",
    label: "TOOLS",
    skills: ["Git & GitHub", "Linux", "Docker (basics)", "Postman", "Figma"],
    labelColor: "text-red-500",
  },
  {
    title: "CS Fundamentals",
    label: "CS",
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems"],
    labelColor: "text-indigo-500",
  },
];

export function SkillsView() {
  return (
    <section id="skill" className="mx-auto max-w-6xl px-5 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
      {/* Section Header */}
      <div className="mb-12 md:mb-16">
        <p className="text-sm font-semibold tracking-wider text-neutral-500 uppercase">Skills</p>
        <h2 className="mt-2 text-4xl font-bold leading-tight text-neutral-900 sm:text-5xl">
          What I Build With
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-neutral-600">
          Comfortable across the stack, but I lean backend — I like knowing exactly what happens between a request and a response.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((category) => (
          <SkillCard
            key={category.title}
            title={category.title}
            label={category.label}
            skills={category.skills}
            labelColor={category.labelColor}
            backgroundColor="bg-white"
          />
        ))}
      </div>
    </section>
  );
}
