import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopNavbar from "./components/layout/TopNavbar"
import Footer from "./components/layout/Footer"
import Homepage from './pages/Homepage'
import Movies from './pages/Movies'
import TVShows from './pages/TVShows'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        <TopNavbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<TVShows />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
