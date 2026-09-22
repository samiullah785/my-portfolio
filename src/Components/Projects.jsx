import SectionHeading from "./SectionHeading";

function ProjectCard({ title, description, technology }) {
  return (
    <article className="rounded-3xl border border-gray-200 p-8">
      <p className="text-sm font-medium text-gray-500">
        {technology}
      </p>

      <h3 className="mt-5 text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        {description}
      </p>

      <a
        href="#contact"
        className="mt-6 inline-block text-sm font-medium underline underline-offset-4"
      >
        Discuss a similar project
      </a>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work and experiments."
          description="A growing collection of projects that demonstrate my development journey."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            technology="React · Tailwind"
            title="Developer Portfolio"
            description="A modern responsive portfolio designed to showcase development skills, projects, and services."
          />

          <ProjectCard
            technology="React · API"
            title="AI Productivity Tool"
            description="A future project focused on using AI to solve a practical productivity problem."
          />

          <ProjectCard
            technology="JavaScript · Automation"
            title="Business Automation"
            description="An automation concept designed to reduce repetitive business tasks."
          />

          <ProjectCard
            technology="Full-Stack"
            title="Web Application"
            description="A future full-stack application demonstrating frontend, backend, and database integration."
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;