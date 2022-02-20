import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopNavbar from "./components/layout/TopNavbar"
import Footer from "./components/layout/Footer"
import Homepage from './pages/Homepage'
import Movies from './pages/Movies'
import MovieDetail from './pages/MovieDetail'
import TVShows from './pages/TVShows'
import TVShowDetail from './pages/TVShowDetail'
import MoviesSection from './pages/MoviesSection'
import TVShowsSection from './pages/TVShowsSection'
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
              <Route path="/movies/now-playing" element={<MoviesSection title='Now Playing' />} />
              <Route path="/movies/top-rated" element={<MoviesSection title='Top Rated' />} />
              <Route path="/movies/popular" element={<MoviesSection title='Popular' />} />
              <Route path="/movies/upcoming" element={<MoviesSection title='Upcoming' />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
              <Route path="/tvshows" element={<TVShows />} />
              <Route path="/tvshow/:id" element={<TVShowDetail />} />
              <Route path="/tvshows/on-air" element={<TVShowsSection title='On Air' />} />
              <Route path="/tvshows/top-rated" element={<TVShowsSection title='Top Rated' />} />
              <Route path="/tvshows/popular" element={<TVShowsSection title='Popular' />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </TVShowsProvider>
    </MovieProvider>
  );
}

export default App;
