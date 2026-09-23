function ProjectCard({
  title,
  description,
  category,
  link,
}) {
  return (
    <article className="rounded-xl border border-gray-200 p-6 shadow-sm">
      <span className="mb-3 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
        {category}
      </span>

      <h3 className="mb-3 text-xl font-semibold">
        {title}
      </h3>

      <p className="mb-5 text-gray-600">
        {description}
      </p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-lg bg-black px-5 py-3 text-white transition hover:bg-gray-800"
      >
        View Project
      </a>
    </article>
  );
}

export default ProjectCard;