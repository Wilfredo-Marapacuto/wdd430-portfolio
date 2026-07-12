# WDD430 Portfolio

## Project Title & Description

WDD430 Portfolio is a full-stack web application built with Next.js, TypeScript, and Tailwind CSS. The application showcases software development projects, technical skills, and coursework completed throughout the WDD 430 course.

The initial release focuses on presenting portfolio projects, displaying personal and technical information, providing navigation between pages, and creating a foundation that can be expanded with authentication, database integration, and project management features.

## Purpose & Target Audience

- **Purpose:** Provide a professional portfolio that demonstrates software development skills, showcases completed projects, and serves as a foundation for future full-stack development.
- **Target Audience:** Instructors, classmates, recruiters, employers, and anyone interested in reviewing the developer's software projects and technical experience.

## Problem or Need

Students and junior developers often need a centralized and professional way to present their projects, skills, and development progress. Information stored across separate repositories and deployed applications can be difficult for instructors, recruiters, and employers to review efficiently.

WDD430 Portfolio addresses this need by organizing projects, technical skills, and professional information in one responsive web application.

## User Stories

1. As a visitor, I want to view a list of projects so that I can understand the developer's technical experience.
2. As a visitor, I want to open project links so that I can review repositories or live demonstrations.
3. As a visitor, I want to view an About page so that I can learn about the developer's background and skills.
4. As an administrator, I want to create new project records so that the portfolio remains current.
5. As an administrator, I want to edit project information so that inaccurate or outdated details can be corrected.
6. As an administrator, I want to delete projects that should no longer appear in the portfolio.
7. As a user, I want the application to work on mobile and desktop devices so that I can access it from different screen sizes.
8. As a user, I want clear feedback when an error occurs so that I understand what happened and what action to take.

## Acceptance Criteria

### Story 1: View Projects

- Given a visitor opens the home page, when the page loads, then at least two project cards are displayed.
- Each project card displays a title, description, and list of technologies.
- If a project includes a valid external URL, a project link is displayed.

### Story 2: Open Project Links

- Given a project has a URL, when the visitor selects the project link, then the repository or live demonstration opens in a new browser tab.
- Given a project has no URL, then no empty or broken link is displayed.

### Story 3: View About Information

- Given a visitor selects the About navigation link, when the route loads, then the About page displays background information and at least one reusable skills component.
- The Home and About navigation links must work without a full page reload.

### Story 4: Create Projects

- Given an authenticated administrator submits valid project information, when the form is processed, then a new project record is stored in the database.
- Given required information is missing, when the form is submitted, then validation messages are displayed and the record is not created.

### Story 5: Update Projects

- Given an authenticated administrator selects an existing project, when valid changes are submitted, then the project record is updated.
- The updated information must appear in the project list after the operation succeeds.

### Story 6: Delete Projects

- Given an authenticated administrator selects a project for deletion, when the action is confirmed, then the project is removed from normal application views.
- The application must display confirmation or error feedback after the action.

### Story 7: Responsive Design

- Given the application is opened on a mobile-sized screen, when the user navigates through the pages, then the content fits without horizontal scrolling.
- Navigation, project cards, forms, and text remain readable on desktop and mobile devices.

### Story 8: Error Handling

- Given a server or database request fails, when the application receives the error, then the user sees an understandable error message.
- Loading states must appear while asynchronous operations are in progress.

## Core Features

1. Responsive home page with a list of portfolio projects.
2. Reusable project cards with optional external links.
3. About page with reusable technical skills components.
4. User authentication for administrative actions.
5. CRUD operations for projects.
6. CRUD operations for skills or profile information.
7. API route handlers connected to the database.
8. Validation, loading states, and error feedback.
9. Responsive navigation shared across pages.
10. Deployment through Vercel.

## Application Views

### Home Page

Displays the portfolio introduction and project list.

### About Page

Displays background information, technical skills, and professional information.

### Project Management Page

Allows an authenticated administrator to create, update, and delete project records.

### Profile or Skills Management Page

Allows an authenticated administrator to update profile or technical skill information.

## Data Models

### User

- id
- name
- email
- passwordHash or authentication provider identifier
- role
- createdAt
- updatedAt

### Project

- id
- title
- description
- technologies
- link
- priority
- createdAt
- updatedAt

### Skill

- id
- title
- description
- category
- proficiency
- createdAt
- updatedAt

## Technical Requirements

- **Framework:** Next.js using the App Router
- **Language:** TypeScript in strict mode
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL, MongoDB, or Supabase
- **Authentication:** Auth.js v5 or Clerk
- **Hosting:** Vercel
- **Version Control:** GitHub with feature branches and pull requests
- **Rendering:** Server Components by default and Client Components only when interactivity is required
- **API:** Next.js Route Handlers
- **Formatting:** ESLint and Prettier
- **Accessibility:** Semantic HTML, keyboard-accessible navigation, descriptive text, and acceptable color contrast

## Core API Endpoints

- `GET /api/projects`
- `GET /api/projects/[id]`
- `POST /api/projects`
- `PUT /api/projects/[id]`
- `DELETE /api/projects/[id]`
- `GET /api/skills`
- `POST /api/skills`
- `PUT /api/skills/[id]`
- `DELETE /api/skills/[id]`
- `GET /api/hello`

## Component Architecture

The application will use reusable components, including:

- `Header`
- `Footer`
- `ProjectCard`
- `ProjectList`
- `SkillCard`
- `Navigation`
- `ProjectForm`
- `LoadingMessage`
- `ErrorMessage`

Server Components will be used whenever possible. Client Components will only be used for forms, state, event handlers, and browser-specific behavior.

## Coding Standards

- Use TypeScript strict mode.
- Do not use `any` unless there is a documented and unavoidable reason.
- Use interfaces or types for component props, state, and API responses.
- Use PascalCase for React component names.
- Use camelCase for variables and functions.
- Use descriptive names for files, components, functions, and variables.
- Use Tailwind CSS utility classes before adding custom CSS.
- Use semantic HTML elements.
- Keep components focused on a single responsibility.
- Use ESLint and Prettier before committing code.
- Do not include secrets or credentials in the repository.

## Git Workflow

- The `main` branch contains stable and reviewed code.
- New work is completed on feature branches.
- Feature branches use names such as `feature/project-crud` or `feature/user-auth`.
- Pull requests are used to merge changes into `main`.
- Code should be reviewed before merging when a reviewer is available.
- Commits should use clear and descriptive messages.
- GitHub Issues and the Project Board are used to track progress.

## Implementation Priority

### P0 — Minimum Viable Product

- Responsive Home page
- About page
- Shared Header and Footer
- Project cards
- At least two project records
- Working internal navigation
- Working `/api/hello` route
- Public Vercel deployment

### P1 — Core Full-Stack Features

- User authentication
- Database connection
- Project CRUD operations
- Skill or profile CRUD operations
- Form validation
- Loading and error states

### P2 — Future Improvements

- Project filtering and search
- Contact form
- Administrative dashboard
- Project images
- Social sharing metadata
- Custom 404 page
- Analytics
- Automated tests

## Definition of Done

A task is complete when:

- The implementation satisfies its acceptance criteria.
- TypeScript compiles without errors.
- ESLint passes.
- The feature works on desktop and mobile screens.
- Error and loading states are handled where applicable.
- The code is committed and pushed to GitHub.
- The deployed Vercel application works correctly.
- Documentation is updated when necessary.

## Known Risks and Constraints

- The project is being completed by one student with instructor authorization.
- Time is limited because this is an accelerated block course.
- Authentication and database setup may require external services.
- Scope must remain focused on the MVP before optional features are added.
- Code review activities may require an instructor-approved alternative because the project has one team member.