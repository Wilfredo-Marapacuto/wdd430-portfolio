import type { Metadata } from "next";
import Link from "next/link";
import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/app/lib/data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse, create, edit, and manage Wilfredo Marapacuto's web development portfolio projects.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <section className="mb-8">
        <h1 className="mb-3 text-3xl font-bold text-gray-900">Projects</h1>

        <p className="mb-6 text-lg text-gray-700">
          Create, edit, and manage the projects in my portfolio.
        </p>

        <Link
          href="/projects/create"
          className="inline-block rounded-md bg-blue-700 px-5 py-2 font-medium text-white hover:bg-blue-800"
        >
          Create Project
        </Link>
      </section>

      {projects.length > 0 ? (
        <ProjectList projects={projects} />
      ) : (
        <p className="rounded-lg border border-gray-200 bg-white p-6 text-center text-gray-700">
          No projects are available.
        </p>
      )}
    </main>
  );
}