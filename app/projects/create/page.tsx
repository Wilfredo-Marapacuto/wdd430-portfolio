import Link from "next/link";
import CreateProjectForm from "./create-project-form";

export default function CreateProjectPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <div className="mb-8">
        <Link
          href="/projects"
          className="text-sm font-medium text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          ← Back to projects
        </Link>
      </div>

      <h1 className="mb-8 text-3xl font-bold text-gray-900">
        Create Project
      </h1>

      <CreateProjectForm />
    </main>
  );
}