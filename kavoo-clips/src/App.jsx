import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import MovieDetails from "./components/MovieDetails";
import Favorites from "./components/Favorites";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Movie Details Page */}
        <Route path="/movie/:id" element={<MovieDetails />} />

        {/* Favorites Page */}
        <Route path="/favorites" element={<Favorites />} />

        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
