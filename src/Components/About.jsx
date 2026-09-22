import SectionHeading from "./SectionHeading";

function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="I build with curiosity and purpose."
          description="I'm focused on becoming a strong full-stack developer while exploring practical AI-powered solutions."
        />

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-lg leading-8 text-gray-700">
              I'm learning how modern web applications are designed,
              developed, deployed, and maintained.
            </p>

            <p className="mt-5 leading-7 text-gray-600">
              My goal is to combine strong web development fundamentals with
              AI automation to build useful digital products for businesses
              and clients.
            </p>
          </div>

          <div className="rounded-3xl border border-gray-200 p-8">
            <p className="text-sm font-medium text-gray-500">
              CURRENT FOCUS
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              Full-Stack + AI Automation
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Learning frontend development, backend fundamentals, APIs,
              automation, and modern AI tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;