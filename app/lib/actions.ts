"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const ProjectFormSchema = z.object({
  title: z.string().trim().min(2, "Title must contain at least 2 characters."),
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
    .url("Link must be a valid URL.")
    .or(z.literal("")),
});

function parseProjectFormData(formData: FormData) {
  const rawData = {
    title: formData.get("title"),
    description: formData.get("description"),
    technologies: formData.get("technologies"),
    link: formData.get("link") ?? "",
  };

  const parsedData = ProjectFormSchema.safeParse(rawData);

  if (!parsedData.success) {
    throw new Error("Invalid project input.");
  }

  return parsedData.data;
}

export async function createProject(formData: FormData) {
  const { title, description, technologies, link } =
    parseProjectFormData(formData);

  try {
    await sql`
      INSERT INTO projects (
        title,
        description,
        technologies,
        link
      )
      VALUES (
        ${title},
        ${description},
        ${technologies},
        ${link || null}
      )
    `;

    revalidatePath("/");
    revalidatePath("/projects");
  } catch (error) {
    console.error("Error creating project:", error);

    throw new Error(
      "Failed to create project. Please try again later.",
    );
  }

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

  const { title, description, technologies, link } =
    parseProjectFormData(formData);

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