import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1a1a2e] text-white">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="mb-6">Page not found.</p>
      <Link to="/" className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition">
        Go Home
      </Link>
    </div>
  );
}
