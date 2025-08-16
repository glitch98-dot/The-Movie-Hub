import { useState } from "react";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const handleSearch = () => {
    console.log("Searching for:", searchTerm, "in category:", category);
    // TODO: Add OMDb API call here
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <header className="mb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-600">
          Kavoo Clips Movie Database
        </h1>
        <p className="text-gray-600 mt-1">Discover movies and series instantly</p>
      </header>

      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleSearch}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Search
        </button>
      </div>

      <div className="flex gap-3 mb-6 justify-center">
        {["All", "Movies", "Series"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              category === cat
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Movies", value: 120 },
          { label: "Favorites", value: 15 },
          { label: "Top Rated", value: 10 },
          { label: "Trending", value: 8 },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-4 rounded-lg shadow text-center"
          >
            <p className="text-lg font-semibold">{stat.value}</p>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {[1, 2, 3, 4, 5, 6].map((movie) => (
          <div
            key={movie}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="h-40 bg-gray-300"></div>
            <div className="p-2">
              <h3 className="text-sm font-semibold">Movie Title {movie}</h3>
              <p className="text-xs text-gray-500">Year</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
