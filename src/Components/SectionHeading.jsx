function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;