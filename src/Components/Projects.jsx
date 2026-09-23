import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A responsive portfolio website.",
    category: "Frontend",
    link: "https://github.com/",
  },
  {
    id: 2,
    title: "E-commerce Website",
    description: "An online store interface.",
    category: "Full Stack",
    link: "https://github.com/",
  },
  {
    id: 3,
    title: "Admin Dashboard",
    description: "A responsive admin dashboard.",
    category: "Frontend",
    link: "https://github.com/",
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "A full-stack blogging platform.",
    category: "Full Stack",
    link: "https://github.com/",
  },
];

function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          description="Some projects I have worked on."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              category={project.category}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;