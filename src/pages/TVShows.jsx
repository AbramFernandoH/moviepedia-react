import { useEffect, useContext } from 'react'
import { Container } from 'react-bootstrap'
import HeaderSlider from '../components/header-slider/HeaderSlider'
import TVShowsContext from '../context/tvshows/TVShowsContext'
import CardSection from '../components/cards/CardSection'
import { getAllTvShows } from '../context/tvshows/TVShowsActions'
import Spinner from '../components/layout/Spinner'

function TVShows() {
  const { tvshows, tvshowsLoad, dispatchTvShow } = useContext(TVShowsContext)
  
  useEffect(() => {
    dispatchTvShow({ type: 'SET_LOADING' })
    const fetchData = async () => {
      const res = await getAllTvShows()
      await dispatchTvShow({ type: 'GET_ALL_TVSHOWS', payload: res })
    }
    fetchData()
  }, [dispatchTvShow])

  return (
    <div>
      {
        tvshowsLoad ? <Spinner />
        :
        <>
          <HeaderSlider movies={tvshows.tvShowsOnAir} />
          <Container>
            <div className="top-rated mt-5">
              <CardSection sectionName='tv-shows' title='Top Rated' destination='/tvshows/top-rated' data={tvshows.tvShowsTopRated} />
            </div>
            <div className="popular mt-5">
              <CardSection sectionName='tv-shows' title='Popular' destination='/tvshows/popular' data={tvshows.tvShowsPopular} />
            </div>
          </Container>
        </>
      }
    </div>
  );
}

export default TVShows;