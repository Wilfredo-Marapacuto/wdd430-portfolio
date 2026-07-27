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

  revalidatePath("/projects");
  redirect("/projects");
}

export async function updateProject(id: string, formData: FormData) {
  const projectId = Number(id);

  if (!Number.isInteger(projectId) || projectId <= 0) {
    throw new Error("Invalid project ID.");
  }

  const { title, description, technologies, link } =
    parseProjectFormData(formData);

  await sql`
    UPDATE projects
    SET
      title = ${title},
      description = ${description},
      technologies = ${technologies},
      link = ${link || null}
    WHERE id = ${projectId}
  `;

  revalidatePath("/projects");
  redirect("/projects");
}

export async function deleteProject(id: number) {
  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("Invalid project ID.");
  }

  await sql`
    DELETE FROM projects
    WHERE id = ${id}
  `;

  revalidatePath("/projects");
}