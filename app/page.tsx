import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "WDD 430 Portfolio",
    description:
      "A portfolio website built with Next.js, TypeScript, and Tailwind CSS for my Web Full-Stack Development course.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/Wilfredo-Marapacuto/wdd430-portfolio",
  },
  {
    title: "CSE341 Contacts API",
    description:
      "A REST API for managing contacts using Node.js, Express, MongoDB, and Swagger.",
    technologies: ["Node.js", "Express", "MongoDB", "Swagger"],
    link: "https://github.com/Wilfredo-Marapacuto/CSE341-CONTACTS",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <section className="mb-10 text-center">
        <h1 className="mb-4 text-4xl font-bold">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          Welcome to my WDD 430 portfolio. Here are some of the projects I have
          developed while learning full-stack web development.
        </p>
      </section>

      <ProjectList projects={projects} />
    </main>
  );
}