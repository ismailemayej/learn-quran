"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Oops! Something went wrong.
        </h2>
        <p className="text-gray-600 mb-6">
          We encountered an unexpected issue. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-6 py-2 text-white bg-indigo-500 hover:bg-indigo-700 rounded-lg transition duration-300 ease-in-out"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
