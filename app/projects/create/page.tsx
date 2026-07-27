import Link from "next/link";
import { createProject } from "@/app/lib/actions";

export default function CreateProjectPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <div className="mb-8">
        <Link
          href="/projects"
          className="text-sm font-medium text-blue-700 hover:underline"
        >
          ← Back to projects
        </Link>
      </div>

      <h1 className="mb-8 text-3xl font-bold text-gray-900">
        Create Project
      </h1>

      <form
        action={createProject}
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
            placeholder="Next.js, TypeScript, Tailwind CSS"
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />
          <p className="mt-1 text-sm text-gray-600">
            Separate technologies with commas.
          </p>
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
            placeholder="https://github.com/username/project"
            className="w-full rounded-md border border-gray-300 px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="rounded-md bg-blue-700 px-5 py-2 font-medium text-white hover:bg-blue-800"
        >
          Save Project
        </button>
      </form>
    </main>
  );
}