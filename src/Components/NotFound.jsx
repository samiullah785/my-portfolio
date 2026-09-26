import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-500">
          404 Error
        </p>

        <h1 className="mt-3 text-5xl font-bold text-gray-900 dark:text-white">
          Page Not Found
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-400">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;