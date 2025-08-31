import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Search, Film, Tv, Heart, Home, Info } from 'lucide-react';

import HomePage from "./components/HomePage";
import MovieDetails from "./components/MovieCard";
import Favorites from "./components/Favorites";
import NotFound from "./components/NotFound";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/movies', icon: Film, label: 'Movies' },
    { path: '/series', icon: Tv, label: 'Series' },
    { path: '/favorites', icon: Heart, label: 'Favorites' },
    { path: '/about', icon: Info, label: 'About' }
  ];

  return (
    <header className="backdrop-blur-xl bg-black/20 border-b border-white/10 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
          KAVOO CLIPS
        </Link>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`font-semibold transition-all duration-300 hover:scale-105 relative group flex items-center gap-2 px-4 py-2 rounded-full ${
                  isActive 
                    ? 'text-cyan-400 bg-white/10' 
                    : 'text-white hover:text-cyan-400'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            );
          })}
        </div>

        <button className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300">
          <Search className="w-6 h-6" />
        </button>
      </nav>
    </header>
  );
};

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/10 w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/5 right-1/6 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-1/3 left-2/3 w-16 h-16 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-gradient-to-r from-red-500/30 to-pink-500/30 rounded-full animate-bounce" style={{animationDuration: '4s', animationDelay: '2s'}}></div>
      </div>
      
      <Navigation />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/movies" element={<HomePage />} />
          <Route path="/series" element={<HomePage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;