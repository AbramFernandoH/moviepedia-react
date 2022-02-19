import axios from 'axios'

const API_KEY = process.env.REACT_APP_TMDB_KEY
const API_URL = process.env.REACT_APP_API_URL

const movies = axios.create({ baseURL: API_URL })

export const getAllMovies = async() => {
  const params = new URLSearchParams({
    api_key: API_KEY
  })

  try{
    const getNowPlaying = movies.get(`/movie/now_playing?${params}`)
    const getTopRated = movies.get(`/movie/top_rated?${params}`)
    const getPopular = movies.get(`/movie/popular?${params}`)
    const getUpcoming = movies.get(`/movie/upcoming?${params}`)

    const [moviesNowPlaying, moviesTopRated, moviesPopular, moviesUpcoming] = await Promise.all([getNowPlaying, getTopRated, getPopular, getUpcoming])

    return { moviesNowPlaying: moviesNowPlaying.data.results, moviesTopRated: moviesTopRated.data.results, moviesPopular: moviesPopular.data.results, moviesUpcoming: moviesUpcoming.data.results }
  } catch(e) {
    console.log(e)
  }
}