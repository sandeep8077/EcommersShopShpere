import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg text-center">
        
        {/* Error Code */}
        <h1 className="text-6xl font-extrabold text-red-500 mb-4">
          Oops!
        </h1>

        {/* Message */}
        <p className="text-gray-700 text-lg mb-2">
          Something went wrong.
        </p>

        {/* Error info (safe) */}
        {error?.statusText || error?.message ? (
          <p className="text-sm text-gray-500 mb-6">
            {error.statusText || error.message}
          </p>
        ) : null}

        {/* Action */}
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold
                     rounded-lg hover:bg-blue-700 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
