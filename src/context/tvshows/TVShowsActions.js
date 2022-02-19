import axios from 'axios'

const API_KEY = process.env.REACT_APP_TMDB_KEY
const API_URL = process.env.REACT_APP_API_URL

const tvshows = axios.create({ baseURL: API_URL })

export const getAllTvShows = async() => {
  const params = new URLSearchParams({
    api_key: API_KEY
  })

  try{
    const getOnAir = tvshows.get(`/tv/on_the_air?${params}`)
    const getTopRated = tvshows.get(`/tv/top_rated?${params}`)
    const getPopular = tvshows.get(`/tv/popular?${params}`)

    const [tvShowsOnAir, tvShowsTopRated, tvShowsPopular] = await Promise.all([getOnAir, getTopRated, getPopular])

    return { tvShowsOnAir: tvShowsOnAir.data.results, tvShowsTopRated: tvShowsTopRated.data.results, tvShowsPopular: tvShowsPopular.data.results }
  } catch(e) {
    console.log(e)
  }
}