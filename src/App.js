import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopNavbar from "./components/layout/TopNavbar"
import Footer from "./components/layout/Footer"
import Homepage from './pages/Homepage'
import Movies from './pages/Movies'
import MovieDetail from './pages/MovieDetail'
import TVShows from './pages/TVShows'
import TVShowDetail from './pages/TVShowDetail'
import { MovieProvider } from './context/movies/MoviesContext'
import { TVShowsProvider } from './context/tvshows/TVShowsContext'
import './App.css'

function App() {
  return (
    <MovieProvider>
      <TVShowsProvider>
        <BrowserRouter>
          <div>
            <TopNavbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/now-playing" element={<Movies />} />
              <Route path="/movies/top-rated" element={<Movies />} />
              <Route path="/movies/popular" element={<Movies />} />
              <Route path="/movies/upcoming" element={<Movies />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
              <Route path="/tvshows" element={<TVShows />} />
              <Route path="/tvshow/:id" element={<TVShowDetail />} />
              <Route path="/movies/now-playing" element={<Movies />} />
              <Route path="/movies/top-rated" element={<Movies />} />
              <Route path="/movies/popular" element={<Movies />} />
              <Route path="/movies/upcoming" element={<Movies />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </TVShowsProvider>
    </MovieProvider>
  );
}

export default App;
