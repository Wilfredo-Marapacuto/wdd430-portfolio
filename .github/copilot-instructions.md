# GitHub Copilot Instructions

## Project Overview

This project is a full-stack portfolio application built with Next.js App Router, TypeScript, Tailwind CSS, and PostgreSQL. The application allows users to manage portfolio projects through Create, Read, Update, and Delete (CRUD) operations.

## Technology Stack

- Next.js 16 (App Router)
- React
- TypeScript
- Tailwind CSS
- PostgreSQL (Neon)
- Vercel
- Zod
- React Server Actions

## Project Structure

- app/
  - lib/
  - projects/
  - components/

## Coding Standards

- Use TypeScript for all new code.
- Prefer Server Components unless client-side interactivity is required.
- Validate user input with Zod.
- Use Server Actions for data mutations.
- Keep components reusable and small.
- Follow consistent formatting and naming conventions.

## Naming Conventions

- Components: PascalCase
- Functions: camelCase
- Variables: camelCase
- Files: Follow Next.js App Router conventions.

## Database

The application uses PostgreSQL hosted on Neon.

The primary data model is:

- Project
  - id
  - title
  - description
  - technologies
  - yearCompleted
  - link

## Current Features

- Portfolio homepage
- Project listing
- Create project
- Edit project
- Delete project
- Server-side validation
- Error handling
- Accessibility improvements

## Future Features

- Authentication
- User profiles
- Additional portfolio sections
