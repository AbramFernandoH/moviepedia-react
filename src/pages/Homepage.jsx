import { useEffect, useContext, useState } from 'react'
import CardSection from "../components/cards/CardSection"
import TopJumbotron from "../components/jumbotron/TopJumbotron"
import { Container } from 'react-bootstrap'
import MovieContext from '../context/movies/MoviesContext'
import TVShowsContext from '../context/tvshows/TVShowsContext'
import { getAllMovies } from '../context/movies/MoviesActions'
import { getAllTvShows } from '../context/tvshows/TVShowsActions'

function Homepage() {
  const { moviesLoad, dispatchMovie } = useContext(MovieContext)
  const { tvshowsLoad, dispatchTvShow } = useContext(TVShowsContext)
  const [data, setData] = useState({})

  useEffect(() => {
    const waitForFetching = async () => {
      dispatchMovie({ type: 'SET_LOADING' })
      dispatchTvShow({ type: 'SET_LOADING' })
      await fetchMovies()
      await fetchTvShows()
    }
    waitForFetching()
  }, [dispatchMovie, dispatchTvShow])

  const fetchMovies = async () => {
    try {
      const moviesData = await getAllMovies()
      await dispatchMovie({ type: 'GET_ALL_MOVIES', payload: moviesData })
      await setData(prevState => ({ ...prevState, movies: moviesData }))
    } catch(e) {
      console.log(e)
    }
  }

  const fetchTvShows = async () => {
    try{
      const tvShowsData = await getAllTvShows()
      await dispatchTvShow({ type: 'GET_ALL_TVSHOWS', payload: tvShowsData })
      await setData(prevState => ({ ...prevState, tvshows: tvShowsData }))
    } catch(e) {
      console.log(e)
    }
  }

  if(moviesLoad && tvshowsLoad){
    return <h1>Loading...</h1> 
  }

  return (
    <div className="Homepage">
      <TopJumbotron />
        {
          (data.movies && data.tvshows) &&
          <Container>
            <div className="now-playing mt-5">
              <h1>Now Playing</h1>
              <CardSection sectionName='movies' title='Movies' destination='/movies/now-playing' data={data.movies.moviesNowPlaying} />
              <CardSection sectionName='tv-shows' title='TV Shows' destination='/tvshows/on-air' data={data.tvshows.tvShowsOnAir} />
            </div>
            <div className="top-rated mt-5">
              <h1>Top Rated</h1>
              <CardSection sectionName='movies' title='Movies' destination='/movies/top-rated' data={data.movies.moviesTopRated} />
              <CardSection sectionName='tv-shows' title='TV Shows' destination='/tvshows/top-rated' data={data.tvshows.tvShowsTopRated} />
            </div>
            <div className="popular mt-5">
              <h1>Popular</h1>
              <CardSection sectionName='movies' title='Movies' destination='/movies/popular' data={data.movies.moviesPopular} />
              <CardSection sectionName='tv-shows' title='TV Shows' destination='/tvshows/popular' data={data.tvshows.tvShowsPopular} />
            </div>
            <div className="upcoming mt-5">
              <h1>Upcoming</h1>
              <CardSection sectionName='movies' title='Movies' destination='/movies/upcoming' data={data.movies.moviesUpcoming} />
            </div>
          </Container>
        }
    </div>
  );
}

export default Homepage;