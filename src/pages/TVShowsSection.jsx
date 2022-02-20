import { useEffect, useContext } from 'react'
import CardGrid from '../components/cards/CardGrid'
import { Container } from 'react-bootstrap'
import TVShowsContext from '../context/tvshows/TVShowsContext'
import { getTVShowsSection } from '../context/tvshows/TVShowsActions'
import { Link } from 'react-router-dom'
import './MoviesSection.css'

function TVShowsSection({ title = '' }) {
  const { tvshows, tvshowsLoad, dispatchTvShow } = useContext(TVShowsContext)
  const category = title.toLowerCase().split(' ').join('_')
  const sectionName = title.split(' ').join('')

  useEffect(() => {
    dispatchTvShow({ type: 'SET_LOADING'})
    const fetchData = async () => {
      const data = await getTVShowsSection(category)
      dispatchTvShow({ type: 'GET_TVSHOWS_SECTION', payload: { sectionName, tvShowsData: data } })
    }
    fetchData()
  }, [dispatchTvShow, title])

  if(tvshowsLoad){
    return <h1>Loading...</h1>
  }

  return (
    <div className={`TVShowsSection tvshows ${title} my-5`}>
      {
        tvshows[`tvShows${sectionName}`] !== undefined &&
        <>
          <h1 className='text-center'>{title}</h1>
          <Container className="d-flex justify-content-center flex-wrap CardGrid-wrapper">
            {
              tvshows[`tvShows${sectionName}`].map(d => 
                <Link to={`/tvshow/${d.id}`} className='CardGrid-link'>
                  <CardGrid title={d.name} imagePath={d.poster_path} key={d.id} release_date={d.first_air_date} />
                </Link>
              )
            }
          </Container>
        </>
      }
    </div>
  );
}

export default TVShowsSection;