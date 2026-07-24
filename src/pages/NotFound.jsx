import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4">Page not found.</p>
      <Link
        to="/"
        className="mt-6 rounded bg-blue-600 px-5 py-2 text-white"
      >
        Back Home
      </Link>
    </section>
  );
}