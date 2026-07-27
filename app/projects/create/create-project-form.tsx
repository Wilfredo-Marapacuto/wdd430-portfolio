"use client";

import { useActionState } from "react";
import {
  createProject,
  type State,
} from "@/app/lib/actions";

const initialState: State = {
  message: null,
  errors: {},
};

export default function CreateProjectForm() {
  const [state, formAction, isPending] = useActionState(
    createProject,
    initialState,
  );

  return (
    <form
      action={formAction}
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
          aria-describedby="title-error"
          className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring-2"
        />

        <div
          id="title-error"
          aria-live="polite"
          aria-atomic="true"
        >
          {state.errors?.title?.map((error) => (
            <p
              key={error}
              className="mt-1 text-sm text-red-600"
            >
              {error}
            </p>
          ))}
        </div>
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
          rows={5}
          aria-describedby="description-error"
          className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring-2"
        />

        <div
          id="description-error"
          aria-live="polite"
          aria-atomic="true"
        >
          {state.errors?.description?.map((error) => (
            <p
              key={error}
              className="mt-1 text-sm text-red-600"
            >
              {error}
            </p>
          ))}
        </div>
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
          placeholder="Next.js, TypeScript, Tailwind CSS"
          aria-describedby="technologies-help technologies-error"
          className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring-2"
        />

        <p
          id="technologies-help"
          className="mt-1 text-sm text-gray-600"
        >
          Separate technologies with commas.
        </p>

        <div
          id="technologies-error"
          aria-live="polite"
          aria-atomic="true"
        >
          {state.errors?.technologies?.map((error) => (
            <p
              key={error}
              className="mt-1 text-sm text-red-600"
            >
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="yearCompleted"
          className="mb-2 block font-medium text-gray-900"
        >
          Year Completed
        </label>

        <input
          id="yearCompleted"
          name="yearCompleted"
          type="number"
          min="2000"
          max={new Date().getFullYear()}
          required
          aria-describedby="yearCompleted-error"
          className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring-2"
        />

        <div
          id="yearCompleted-error"
          aria-live="polite"
          aria-atomic="true"
        >
          {state.errors?.yearCompleted?.map((error) => (
            <p
              key={error}
              className="mt-1 text-sm text-red-600"
            >
              {error}
            </p>
          ))}
        </div>
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
          aria-describedby="link-error"
          className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring-2"
        />

        <div
          id="link-error"
          aria-live="polite"
          aria-atomic="true"
        >
          {state.errors?.link?.map((error) => (
            <p
              key={error}
              className="mt-1 text-sm text-red-600"
            >
              {error}
            </p>
          ))}
        </div>
      </div>

      {state.message ? (
        <p
          aria-live="polite"
          className="text-sm text-red-600"
        >
          {state.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="rounded-md bg-blue-700 px-5 py-2 font-medium text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Saving..." : "Save Project"}
      </button>
    </form>
  );
}