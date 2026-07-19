interface SkillCardProps {
  title: string;
  label: string;
  skills: string[];
  backgroundColor?: string;
  labelColor?: string;
}

export function SkillCard({
  title,
  label,
  skills,
  backgroundColor = "bg-neutral-50",
  labelColor = "text-purple-500",
}: SkillCardProps) {
  return (
    <div className={`${backgroundColor} rounded-lg p-6 border border-neutral-200 transition-all hover:shadow-md hover:border-neutral-300`}>
      <div className="mb-4">
        <span className={`inline-block text-xs font-semibold tracking-wider ${labelColor} mb-2`}>
          {label}
        </span>
        <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-block px-3 py-1 text-sm text-neutral-700 bg-white border border-neutral-200 rounded-full hover:bg-neutral-50 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
