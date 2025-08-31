import React, { useState } from 'react';
import { Heart, Star, Play, Info, Calendar, Clock } from 'lucide-react';

const MovieCard = ({ 
  movie = {
    id: 1,
    title: "Sample Movie",
    year: "2024",
    genre: "Action",
    rating: 8.5,
    duration: "2h 15m",
    poster: "https://via.placeholder.com/300x450/1e293b/cyan",
    description: "An amazing movie that will keep you on the edge of your seat."
  },
  onMovieClick,
  onFavoriteToggle 
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    if (onFavoriteToggle) {
      onFavoriteToggle(movie.id, !isFavorite);
    }
  };

  const handleCardClick = () => {
    if (onMovieClick) {
      onMovieClick(movie);
    }
  };

  return (
    <div 
      className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
      
      {/* Poster Image */}
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 animate-pulse flex items-center justify-center">
            <Film className="w-12 h-12 text-gray-500" />
          </div>
        )}

        <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 z-30">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-white font-semibold text-sm">{movie.rating}</span>
        </div>

        <button
          onClick={handleFavoriteClick}
          className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all duration-300 z-30 ${
            isFavorite 
              ? 'bg-red-500/80 text-white scale-110' 
              : 'bg-black/50 text-gray-300 hover:bg-red-500/50 hover:text-white hover:scale-110'
          }`}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
        </button>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
          <div className="flex gap-3">
            <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110">
              <Play className="w-6 h-6 text-white fill-current" />
            </button>
            <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110">
              <Info className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Movie Info */}
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
          {movie.title}
        </h3>
        
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{movie.year}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{movie.duration}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {movie.genre}
          </span>
          
          <div className="flex items-center gap-1 text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-semibold">{movie.rating}</span>
          </div>
        </div>

        {movie.description && (
          <p className="text-gray-400 text-sm mt-3 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
            {movie.description}
          </p>
        )}
      </div>

      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>
    </div>
  );
};

export const MoviesGrid = ({ movies = [] }) => {
  const handleMovieClick = (movie) => {
    console.log('Movie clicked:', movie);
  };

  const handleFavoriteToggle = (movieId, isFavorite) => {
    console.log(`Movie ${movieId} ${isFavorite ? 'added to' : 'removed from'} favorites`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMovieClick={handleMovieClick}
            onFavoriteToggle={handleFavoriteToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieCard;