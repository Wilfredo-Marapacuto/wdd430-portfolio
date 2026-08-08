import type { Project } from "@/app/lib/data";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          technologies={project.technologies
            .split(",")
            .map((technology) => technology.trim())}
          yearCompleted={project.year_completed}
          link={project.link ?? undefined}
        />
      ))}
    </section>
  );
}