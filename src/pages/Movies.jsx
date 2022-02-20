import { useEffect, useContext } from 'react'
import { Container } from 'react-bootstrap'
import HeaderSlider from '../components/header-slider/HeaderSlider'
import MovieContext from '../context/movies/MoviesContext'
import CardSection from '../components/cards/CardSection'
import { getAllMovies } from '../context/movies/MoviesActions'
import Spinner from '../components/layout/Spinner'

function Movies() {
  const { movies, moviesLoad, dispatchMovie } = useContext(MovieContext)
  
  useEffect(() => {
    dispatchMovie({ type: 'SET_LOADING' })
    const fetchData = async () => {
      const res = await getAllMovies()
      await dispatchMovie({ type: 'GET_ALL_MOVIES', payload: res })
    }
    fetchData()
  }, [dispatchMovie])

  return (
    <div>
      {
        moviesLoad ? <Spinner />
        :
        <>
          <HeaderSlider movies={movies.moviesNowPlaying} />
          <Container>
            <div className="top-rated mt-5">
              <CardSection sectionName='movies' title='Top Rated' destination='/movies/top-rated' data={movies.moviesTopRated} />
            </div>
            <div className="popular mt-5">
              <CardSection sectionName='movies' title='Popular' destination='/movies/popular' data={movies.moviesPopular} />
            </div>
            <div className="upcoming mt-5">
              <CardSection sectionName='movies' title='Upcoming' destination='/movies/upcoming' data={movies.moviesUpcoming} />
            </div>
          </Container>
        </>
      }
    </div>
  );
}

export default Movies;