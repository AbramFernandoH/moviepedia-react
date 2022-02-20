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

export const getMoviesSection = async (section) => {
  const params = new URLSearchParams({
    api_key: API_KEY
  })

  try {
    const moviesSection = await movies.get(`/movie/${section}?${params}`)
    return moviesSection.data.results
  } catch(e) {
    console.log(e)
  }
}

export const getMovieDetail = async (id) => {
  const params = new URLSearchParams({
    api_key: API_KEY
  })
  
  const getDetails = movies.get(`/movie/${id}?${params}`)
  const getCast = movies.get(`/movie/${id}/credits?${params}`)

  try {
    const [details, casts] = await Promise.all([getDetails, getCast])
    return { movieDetails: details.data, movieCasts: casts.data.cast }
  } catch(e) {
    console.log(e)
  }
}