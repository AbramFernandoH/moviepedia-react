import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetail } from '../context/movies/MoviesActions'
import HeaderDetail from '../components/movie-detail/HeaderDetail'
import MainDetail from '../components/movie-detail/MainDetail'

function MovieDetail() {
  const [detail, setDetail] = useState({})
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMovieDetail(id)
      setDetail(res)
      setLoading(false)
    }
    fetchData()
  }, [])

  if(loading){
    return <h1>Loading...</h1>
  }

  const runtime = minutes => {
    if(minutes < 60){
      return minutes
    }
    const hours = Math.floor(minutes / 60)
    const minute = minutes - (60 * hours)
    return `${hours}h ${minute}m`
  }
  
  return (
    <div className='MovieDetail my-5'>
      <HeaderDetail poster_path={detail.movieDetails.poster_path} title={detail.movieDetails.original_title} genres={detail.movieDetails.genres} description={detail.movieDetails.overview} runtime={runtime(detail.runtime)} score={detail.movieDetails.vote_average} tagline={detail.movieDetails.tagline} />
      <MainDetail cast={detail.movieCasts} status={detail.movieDetails.status} language={detail.movieDetails.spoken_languages} budget={detail.movieDetails.budget} revenue={detail.movieDetails.revenue} />
    </div>
  );
}

export default MovieDetail;