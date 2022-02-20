import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTVShowDetail } from '../context/tvshows/TVShowsActions'
import HeaderDetail from '../components/movie-detail/HeaderDetail'
import MainDetail from '../components/movie-detail/MainDetail'

function TVShowDetail() {
  const [detail, setDetail] = useState({})
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTVShowDetail(id)
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
      return `${minutes}m`
    }
    const hours = Math.floor(minutes / 60)
    const minute = minutes - (60 * hours)
    return `${hours}h ${minute}m`
  }
  
  return (
    <div className='TVShowsDetail my-5'>
      <HeaderDetail poster_path={detail.tvShowDetails.poster_path} title={detail.tvShowDetails.name} genres={detail.tvShowDetails.genres} description={detail.tvShowDetails.overview} runtime={runtime(detail.episode_run_time)} score={detail.tvShowDetails.vote_average} tagline={detail.tvShowDetails.tagline} />
      <MainDetail cast={detail.tvShowCasts} status={detail.tvShowDetails.status} language={detail.tvShowDetails.spoken_languages} created_by={detail.tvShowDetails.created_by} first_air_date={detail.tvShowDetails.first_air_date} />
    </div>
  );
}

export default TVShowDetail;