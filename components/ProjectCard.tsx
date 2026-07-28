import Link from "next/link";
import { deleteProject } from "@/app/lib/actions";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  yearCompleted: number;
  link?: string;
}

export default function ProjectCard({
  id,
  title,
  description,
  technologies,
  yearCompleted,
  link,
}: ProjectCardProps) {
  const deleteProjectWithId = deleteProject.bind(null, id);

  return (
    <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-2 text-xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mb-4 text-gray-700">
        {description}
      </p>

      <p className="mb-2 text-sm text-gray-600">
        <strong>Technologies:</strong>{" "}
        {technologies.join(", ")}
      </p>

      <p className="mb-4 text-sm text-gray-600">
        <strong>Year Completed:</strong>{" "}
        {yearCompleted}
      </p>

      <div className="mb-5">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View Project
          </a>
        )}
      </div>

      <div className="flex gap-3">
        <Link
          href={`/projects/${id}/edit`}
          className="rounded-md bg-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Edit
        </Link>

        <form action={deleteProjectWithId}>
          <button
            type="submit"
            className="rounded-md bg-red-700 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Delete
          </button>
        </form>
      </div>
    </article>
  );
}