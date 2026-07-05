import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-4 text-4xl font-bold">About Me</h1>

      <p className="mb-6 text-lg text-gray-700">
        I am a software development student learning full-stack web development
        with Next.js, React, TypeScript, and modern backend technologies.
      </p>

      <SkillCard
        title="Full-Stack Development"
        description="I am building skills in frontend interfaces, backend APIs, database integration, and deployment workflows."
      />
    </main>
  );
}