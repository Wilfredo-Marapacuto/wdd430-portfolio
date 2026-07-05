interface SkillCardProps {
  title: string;
  description: string;
}

export default function SkillCard({
  title,
  description,
}: SkillCardProps) {
  return (
    <section className="rounded-lg border border-blue-200 bg-blue-50 p-6 shadow-sm">
      <h3 className="mb-2 text-xl font-bold text-blue-800">
        {title}
      </h3>

      <p className="text-gray-700">
        {description}
      </p>
    </section>
  );
}