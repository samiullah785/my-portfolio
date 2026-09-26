import { Link, useParams } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();

  return (
    <main className="mx-auto min-h-[70vh] max-w-5xl px-6 py-20 lg:px-8">
      <Link
        to="/projects"
        className="text-sm font-semibold text-cyan-500 hover:text-cyan-600"
      >
        ← Back to Projects
      </Link>

      <div className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-500">
          Project Details
        </p>

        <h1 className="mt-3 text-4xl font-bold text-gray-900 dark:text-white">
          Project {id}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
          This page will display the detailed information for the selected
          project.
        </p>
      </div>
    </main>
  );
}

export default ProjectDetails;