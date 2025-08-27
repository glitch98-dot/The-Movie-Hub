import { useState } from "react";
import { Search, Play, Film, Heart, Calendar, TrendingUp, Star } from "lucide-react";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [isSearching, setIsSearching] = useState(false);

  const sampleMovies = [
    { id: 1, title: "The Dark Knight", year: "2008", rating: 9.0, genre: "Action", poster: "https://images.unsplash.com/photo-1489599510096-e4a9b70c3026?w=300&h=450&fit=crop" },
    { id: 2, title: "Inception", year: "2010", rating: 8.8, genre: "Sci-Fi", poster: "https://images.unsplash.com/photo-1518715336018-4dc6eaae4f4f?w=300&h=450&fit=crop" },
    { id: 3, title: "Interstellar", year: "2014", rating: 8.6, genre: "Drama", poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=300&h=450&fit=crop" },
    { id: 4, title: "The Matrix", year: "1999", rating: 8.7, genre: "Action", poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop" },
    { id: 5, title: "Pulp Fiction", year: "1994", rating: 8.9, genre: "Crime", poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop" },
    { id: 6, title: "Fight Club", year: "1999", rating: 8.8, genre: "Drama", poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=300&h=450&fit=crop" },
  ];

  const stats = [
    { label: "Total Movies", value: 247, icon: <Film className="w-6 h-6" />, color: "from-blue-500 to-blue-600" },
    { label: "Favorites", value: 8, icon: <Heart className="w-6 h-6" />, color: "from-red-500 to-red-600" },
    { label: "Recently Added", value: 10, icon: <Calendar className="w-6 h-6" />, color: "from-green-500 to-green-600" },
    { label: "Popular", value: 5, icon: <TrendingUp className="w-6 h-6" />, color: "from-orange-500 to-orange-600" },
  ];

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    setIsSearching(true);
    console.log("Searching for:", searchTerm, "in category:", category);
    // TODO: Add OMDb API call here
    setTimeout(() => setIsSearching(false), 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto p-6">
        
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider">KAVOO CLIPS</h1>
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-500 transition-all duration-300 cursor-pointer hover:scale-110">
              <Play className="w-6 h-6 text-white fill-white" />
            </div>
          </div>
          <p className="text-blue-300 text-lg mb-2">movie database</p>
          <p className="text-blue-400/80 text-sm">Discover movies and series instantly</p>
        </header>

        {/* Search Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search movie by title"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-12 py-4 text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-300"
              />
            </div>
            <button
              onClick={handleSearch}
              disabled={isSearching || !searchTerm.trim()}
              className="bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 disabled:opacity-50"
            >
              {isSearching ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Searching...
                </div>
              ) : (
                "Search"
              )}
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-3 justify-center flex-wrap">
            {["All", "Movies", "Series"].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  category === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                    : "bg-white/10 backdrop-blur-sm text-blue-300 border border-white/20 hover:bg-white/20 hover:text-white hover:border-blue-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 hover:transform hover:scale-105 hover:bg-white/15 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.color} text-white`}>
                  {stat.icon}
                </div>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
              <p className="text-blue-300 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Featured Movies Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Featured Movies</h2>
            <button className="text-blue-400 hover:text-blue-300 transition-colors duration-300">View All</button>
          </div>

          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {sampleMovies.map((movie) => (
              <div key={movie.id} className="group relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 cursor-pointer hover:transform hover:scale-105">
                <div className="aspect-[2/3] relative overflow-hidden">
                  <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>

                  {/* Rating badge */}
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    {movie.rating}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2 group-hover:text-blue-300 transition-colors">{movie.title}</h3>
                  <div className="flex items-center justify-between text-xs text-blue-400">
                    <span>{movie.year}</span>
                    <span className="bg-blue-600/20 px-2 py-1 rounded-full">{movie.genre}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-blue-400/60 text-sm">Browse through your collection of {stats[0].value} movies and discover new favorites</p>
        </div>
      </div>
    </div>
  );
}