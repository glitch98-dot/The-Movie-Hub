import { useState } from "react";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
    // TODO: Add OMDb API call here
  };

  return (
    <div className="max-w-4xl mx-auto p-4 text-center">
      {/* Title */}
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">
        Kavoo Clips
      </h1>

      {/* Search Bar */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleSearch}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Search
        </button>
      </div>

      {/* Results Placeholder */}
      <div className="text-gray-500">
        Search results will appear here...
      </div>
    </div>
  );
}
