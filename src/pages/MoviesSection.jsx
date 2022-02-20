import { useEffect, useContext } from 'react'
import CardGrid from '../components/cards/CardGrid'
import { Container } from 'react-bootstrap'
import MovieContext from '../context/movies/MoviesContext'
import { getMoviesSection } from '../context/movies/MoviesActions'
import { Link } from 'react-router-dom'
import './MoviesSection.css'

function MoviesSection({ title = '' }) {
  const { movies, moviesLoad, dispatchMovie } = useContext(MovieContext)
  const category = title.toLowerCase().split(' ').join('_')
  const sectionName = title.split(' ').join('')

  useEffect(() => {
    dispatchMovie({ type: 'SET_LOADING'})
    const fetchData = async () => {
      const data = await getMoviesSection(category)
      dispatchMovie({ type: 'GET_MOVIES_SECTION', payload: { sectionName, moviesData: data } })
    }
    fetchData()
  }, [dispatchMovie, title])

  if(moviesLoad){
    return <h1>Loading...</h1>
  }

  return (
    <div className={`MoviesSection movies ${title} my-5`}>
      {
        movies[`movies${sectionName}`] !== undefined &&
        <>
          <h1 className='text-center'>{title}</h1>
          <Container className="d-flex justify-content-center flex-wrap CardGrid-wrapper">
            {
              movies[`movies${sectionName}`].map(d => 
                <Link to={`/movie/${d.id}`} className='CardGrid-link'>
                  <CardGrid title={d.title} imagePath={d.poster_path} key={d.id} release_date={d.release_date} />
                </Link>
              )
            }
          </Container>
        </>
      }
    </div>
  );
}

export default MoviesSection;