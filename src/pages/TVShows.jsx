import { useEffect, useContext } from 'react'
import { Container } from 'react-bootstrap'
import HeaderSlider from '../components/header-slider/HeaderSlider'
import TVShowsContext from '../context/tvshows/TVShowsContext'
import CardSection from '../components/cards/CardSection'
import { getAllTvShows } from '../context/tvshows/TVShowsActions'

function TVShows() {
  const { tvshows, tvshowsLoad, dispatch } = useContext(TVShowsContext)
  
  useEffect(() => {
    dispatch({ type: 'SET_LOADING' })
    const fetchData = async () => {
      const res = await getAllTvShows()
      await dispatch({ type: 'GET_ALL_TVSHOWS', payload: res })
    }
    fetchData()
  }, [dispatch])

  return (
    <div>
      {
        tvshowsLoad ? <h1>Loading...</h1>
        :
        <>
          <HeaderSlider movies={tvshows.tvShowsOnAir} />
          <Container>
            <div className="top-rated mt-5">
              <CardSection sectionName='tv-shows' title='Top Rated' destination='' data={tvshows.tvShowsTopRated} />
            </div>
            <div className="popular mt-5">
              <CardSection sectionName='tv-shows' title='Popular' destination='' data={tvshows.tvShowsPopular} />
            </div>
          </Container>
        </>
      }
    </div>
  );
}

export default TVShows;