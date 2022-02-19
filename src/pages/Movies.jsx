import { useEffect, useContext } from 'react'
import { Container } from 'react-bootstrap'
import HeaderSlider from '../components/header-slider/HeaderSlider'
import MovieContext from '../context/movies/MoviesContext'
import CardSection from '../components/cards/CardSection'
import { getAllMovies } from '../context/movies/MoviesActions'

function Movies() {
  const { movies, moviesLoad, dispatch } = useContext(MovieContext)
  
  useEffect(() => {
    dispatch({ type: 'SET_LOADING' })
    const fetchData = async () => {
      const res = await getAllMovies()
      await dispatch({ type: 'GET_ALL_MOVIES', payload: res })
    }
    fetchData()
  }, [dispatch])

  return (
    <div>
      {
        moviesLoad ? <h1>Loading...</h1>
        :
        <>
          <HeaderSlider movies={movies.moviesNowPlaying} />
          <Container>
            <div className="top-rated mt-5">
              <CardSection sectionName='movies' title='Top Rated' destination='' data={movies.moviesTopRated} />
            </div>
            <div className="popular mt-5">
              <CardSection sectionName='movies' title='Popular' destination='' data={movies.moviesPopular} />
            </div>
            <div className="upcoming mt-5">
              <CardSection sectionName='movies' title='Upcoming' destination='' data={movies.moviesUpcoming} />
            </div>
          </Container>
        </>
      }
    </div>
  );
}

export default Movies;