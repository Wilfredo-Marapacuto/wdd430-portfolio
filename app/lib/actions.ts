"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const currentYear = new Date().getFullYear();

const CreateProjectSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters."),
  description: z
    .string()
    .trim()
    .min(20, "Description must be at least 20 characters."),
  technologies: z
    .string()
    .trim()
    .min(2, "Add at least one technology."),
  yearCompleted: z.coerce
    .number()
    .int("Year must be a whole number.")
    .gte(2000, "Year must be 2000 or later.")
    .lte(
      currentYear,
      `Year cannot be greater than ${currentYear}.`,
    ),
  link: z
    .string()
    .trim()
    .url("Project link must be a valid URL.")
    .or(z.literal("")),
});

const UpdateProjectSchema = z.object({
  title: z
    .string()
    .trim()
    .min(2, "Title must contain at least 2 characters."),
  description: z
    .string()
    .trim()
    .min(10, "Description must contain at least 10 characters."),
  technologies: z
    .string()
    .trim()
    .min(2, "Technologies must contain at least 2 characters."),
  link: z
    .string()
    .trim()
    .url("Project link must be a valid URL.")
    .or(z.literal("")),
});

export type State = {
  errors?: {
    title?: string[];
    description?: string[];
    technologies?: string[];
    yearCompleted?: string[];
    link?: string[];
  };
  message: string | null;
};

export async function createProject(
  _previousState: State,
  formData: FormData,
): Promise<State> {
  const validatedFields = CreateProjectSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    technologies: formData.get("technologies"),
    yearCompleted: formData.get("yearCompleted"),
    link: formData.get("link") ?? "",
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message:
        "Missing or invalid fields. Failed to create project.",
    };
  }

  const {
    title,
    description,
    technologies,
    yearCompleted,
    link,
  } = validatedFields.data;

  try {
    await sql`
      INSERT INTO projects (
        title,
        description,
        technologies,
        year_completed,
        link
      )
      VALUES (
        ${title},
        ${description},
        ${technologies},
        ${yearCompleted},
        ${link || null}
      )
    `;
  } catch (error) {
    console.error("Error creating project:", error);

    return {
      errors: {},
      message:
        "Database error: Failed to create project. Please try again later.",
    };
  }

  revalidatePath("/");
  revalidatePath("/projects");
  redirect("/projects");
}

export async function updateProject(
  id: string,
  formData: FormData,
) {
  const projectId = Number(id);

  if (!Number.isInteger(projectId) || projectId <= 0) {
    throw new Error("Invalid project ID.");
  }

  const validatedFields = UpdateProjectSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    technologies: formData.get("technologies"),
    link: formData.get("link") ?? "",
  });

  if (!validatedFields.success) {
    throw new Error("Invalid project input.");
  }

  const { title, description, technologies, link } =
    validatedFields.data;

  try {
    await sql`
      UPDATE projects
      SET
        title = ${title},
        description = ${description},
        technologies = ${technologies},
        link = ${link || null}
      WHERE id = ${projectId}
    `;

    revalidatePath("/");
    revalidatePath("/projects");
  } catch (error) {
    console.error("Error updating project:", error);

    throw new Error(
      "Failed to update project. Please try again later.",
    );
  }

  redirect("/projects");
}

export async function deleteProject(id: number) {
  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("Invalid project ID.");
  }

  try {
    await sql`
      DELETE FROM projects
      WHERE id = ${id}
    `;

    revalidatePath("/");
    revalidatePath("/projects");
  } catch (error) {
    console.error("Error deleting project:", error);

    throw new Error(
      "Failed to delete project. Please try again later.",
    );
  }
}