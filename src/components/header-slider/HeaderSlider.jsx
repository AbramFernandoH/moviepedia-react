import { Carousel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './HeaderSlider.css'

function HeaderSlider({ movies = [] }) {
  const navigate = useNavigate()

  return (
    <div className="header-slider w-100">
      <Carousel>
        {movies.map(movie => (
          <Carousel.Item interval={1000} onClick={() => navigate(`/movie/${movie.id}`)}>
            <div className="ratio ratio-16x9">
              <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.original_title || movie.name} key={movie.id} />
            </div>
            <Carousel.Caption>
              <h3 className="movie-title">{movie.original_title || movie.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default HeaderSlider;