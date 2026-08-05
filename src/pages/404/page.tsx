import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-stone-50 px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-6xl font-bold text-stone-900 sm:text-7xl lg:text-8xl">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-semibold text-stone-900 sm:text-3xl">
          Page Not Found
        </h2>
        <p className="mt-6 text-base leading-relaxed text-stone-600">
          The page you're looking for doesn't exist or has been moved. Please check the URL or return to the homepage.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            Go to Homepage
          </Link>
          <Link
            to="/projects"
            className="inline-flex rounded-lg border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-700 shadow-sm transition-colors hover:bg-stone-50"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
