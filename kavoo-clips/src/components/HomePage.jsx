// src/components/HomePage.jsx
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-extrabold tracking-wide drop-shadow-lg">
          🎬 KAVOO CLIPS
        </h1>
        <p className="mt-2 text-lg opacity-90">
          Discover an endless universe of movies & series instantly.  
          Your ultimate entertainment destination with cutting-edge search and personalized recommendations.
        </p>
      </header>

      {/* Search */}
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="🔍 Search for Action movies..."
          className="px-4 py-2 rounded-l-xl w-80 text-black focus:outline-none"
        />
        <button className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-r-xl font-semibold">
          Search
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200">
          All
        </button>
        <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200">
          Movies
        </button>
        <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200">
          Series
        </button>
      </div>

      {/* Trending Section */}
      <section className="mt-10 px-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          🔥 Trending Now
        </h2>

        {/* Movie Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
          {["Movie 1", "Movie 2", "Movie 3", "Movie 4", "Movie 5", "Movie 6"].map((movie, index) => (
            <div
              key={index}
              className="bg-white/20 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="bg-gray-300 h-40 rounded-lg mb-3"></div>
              <h3 className="text-lg font-semibold">{movie}</h3>
              <p className="text-sm opacity-80">Action | 2023</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
