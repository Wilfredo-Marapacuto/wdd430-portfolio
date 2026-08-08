import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { updateProject } from "@/app/lib/actions";
import { getProjectById } from "@/app/lib/data";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const projectId = Number(id);

  if (!Number.isInteger(projectId) || projectId <= 0) {
    return {
      title: "Project Not Found",
      description: "The requested portfolio project could not be found.",
    };
  }

  const project = await getProjectById(projectId);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested portfolio project could not be found.",
    };
  }

  return {
    title: `Edit ${project.title}`,
    description: `Edit the portfolio project: ${project.description}`,
    openGraph: {
      title: project.title,
      description: project.description,
    },
  };
}

export default async function EditProjectPage({ params }: PageProps) {
  const { id } = await params;
  const projectId = Number(id);

  if (!Number.isInteger(projectId) || projectId <= 0) {
    notFound();
  }

  const project = await getProjectById(projectId);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <Link
        href="/projects"
        className="mb-8 inline-block text-blue-700 hover:underline"
      >
        ← Back to projects
      </Link>

      <h1 className="mb-8 text-3xl font-bold text-gray-900">
        Edit Project
      </h1>

      <form
        action={updateProject.bind(null, id)}
        className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
      >
        <div>
          <label
            htmlFor="title"
            className="mb-2 block font-medium text-gray-900"
          >
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            minLength={2}
            defaultValue={project.title}
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="mb-2 block font-medium text-gray-900"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            minLength={10}
            rows={5}
            defaultValue={project.description}
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="technologies"
            className="mb-2 block font-medium text-gray-900"
          >
            Technologies
          </label>
          <input
            id="technologies"
            name="technologies"
            type="text"
            required
            minLength={2}
            defaultValue={project.technologies}
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        <div>
          <label
            htmlFor="link"
            className="mb-2 block font-medium text-gray-900"
          >
            Project Link
          </label>
          <input
            id="link"
            name="link"
            type="url"
            defaultValue={project.link ?? ""}
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="rounded-md bg-blue-700 px-5 py-2 font-medium text-white hover:bg-blue-800"
        >
          Update Project
        </button>
      </form>
    </main>
  );
}