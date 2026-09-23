import SectionHeading from "./SectionHeading";

function Skills() {
  return (
    <section id = "skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I'm learning and using."
          description="A growing toolkit focused on modern web development and practical AI solutions."
        />

        <div className="flex flex-wrap gap-3">
          <span className="rounded-full border border-gray-200 px-4 py-2 text-sm">
            HTML
          </span>

          <span className="rounded-full border border-gray-200 px-4 py-2 text-sm">
            CSS
          </span>

          <span className="rounded-full border border-gray-200 px-4 py-2 text-sm">
            JavaScript
          </span>

          <span className="rounded-full border border-gray-200 px-4 py-2 text-sm">
            React
          </span>

          <span className="rounded-full border border-gray-200 px-4 py-2 text-sm">
            Tailwind CSS
          </span>

          <span className="rounded-full border border-gray-200 px-4 py-2 text-sm">
            Git
          </span>

          <span className="rounded-full border border-gray-200 px-4 py-2 text-sm">
            GitHub
          </span>

          <span className="rounded-full border border-gray-200 px-4 py-2 text-sm">
            APIs
          </span>

          <span className="rounded-full border border-gray-200 px-4 py-2 text-sm">
            AI Automation
          </span>
        </div>
      </div>
    </section>
  );
}

export default Skills;