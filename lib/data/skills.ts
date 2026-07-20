export interface SkillCategory {
  title: string;
  label: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    label: "LANG",
    skills: ["C++", "Python", "Java", "JavaScript", "TypeScript", "C"],
  },
  {
    title: "Web Development",
    label: "WEB",
    skills: ["Node.js", "Express.js", "React", "Next.js", "Tailwind CSS", "REST APIs"],
  },
  {
    title: "Databases",
    label: "DB",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis (Basics)"],
  },
  {
    title: "Data & Machine Learning",
    label: "ML",
    skills: ["Pandas", "NumPy", "scikit-learn", "Matplotlib"],
  },
  {
    title: "Tools & Platforms",
    label: "TOOLS",
    skills: ["Git & GitHub", "Linux", "Docker (Basics)", "Postman", "Figma"],
  },
  {
    title: "CS Fundamentals",
    label: "CS",
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems"],
  },
];
