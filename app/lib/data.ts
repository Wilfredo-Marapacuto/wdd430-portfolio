import { sql } from "@vercel/postgres";

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string;
  year_completed: number;
  link: string | null;
}

export async function getProjects(): Promise<Project[]> {
  const result = await sql<Project>`
    SELECT
      id,
      title,
      description,
      technologies,
      year_completed,
      link
    FROM projects
    ORDER BY created_at DESC, id DESC
  `;

  return result.rows;
}

export async function getProjectById(
  id: number,
): Promise<Project | null> {
  const result = await sql<Project>`
    SELECT
      id,
      title,
      description,
      technologies,
      year_completed,
      link
    FROM projects
    WHERE id = ${id}
    LIMIT 1
  `;

  return result.rows[0] ?? null;
}