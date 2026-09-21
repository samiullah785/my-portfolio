function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] px-6">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            Full-Stack Developer · AI Automation
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            I build modern digital experiences.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            I'm Sami Ullah, a developer focused on building modern websites,
            web applications, and practical AI-powered solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;