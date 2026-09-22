import SectionHeading from "./SectionHeading";

function ServiceCard({ number, title, description }) {
  return (
    <div className="rounded-3xl border border-gray-200 p-8 transition hover:-translate-y-1">
      <p className="text-sm font-medium text-gray-400">
        {number}
      </p>

      <h3 className="mt-6 text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        {description}
      </p>
    </div>
  );
}

function Services() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="What I can build."
          description="The types of digital solutions this portfolio will eventually showcase."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            number="01"
            title="Web Development"
            description="Modern responsive websites and web applications built with React and modern frontend technologies."
          />

          <ServiceCard
            number="02"
            title="AI Automation"
            description="Practical AI-powered workflows designed to reduce repetitive work and improve business processes."
          />

          <ServiceCard
            number="03"
            title="Web Solutions"
            description="Custom digital experiences focused on usability, performance, and real business needs."
          />
        </div>
      </div>
    </section>
  );
}

export default Services;