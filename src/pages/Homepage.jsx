import { useState, useEffect } from 'react'
import CardSection from "../components/cards/CardSection"
import TopJumbotron from "../components/jumbotron/TopJumbotron"
import { Container } from 'react-bootstrap'
import axios from 'axios'

function Homepage() {
  const [datas, setDatas] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const waitForFetching = async () => {
      await getMoviesData()
      setLoading(false)
    }
    waitForFetching()
  }, [])

  const getMoviesData = async () => {
    const API_KEY = process.env.REACT_APP_TMDB_KEY

    const movieNowPlaying = axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
    const tvOnAir = axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}`)

    const movieTopRated = axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
    const tvTopRated = axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`)

    const moviePopular = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    const tvPopular = axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)

    const movieUpcoming = axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`)

    try {
      const [nowPlayingMovie, onAirTV, topRatedMovie, topRatedTV, popularMovie, popularTV, upcomingMovie] = await Promise.all([movieNowPlaying, tvOnAir, movieTopRated, tvTopRated, moviePopular, tvPopular, movieUpcoming])

      await setDatas({ nowPlayingMovie: nowPlayingMovie.data.results, onAirTV: onAirTV.data.results, topRatedMovie: topRatedMovie.data.results, topRatedTV: topRatedTV.data.results, popularMovie: popularMovie.data.results, popularTV: popularTV.data.results, upcomingMovie: upcomingMovie.data.results })
    } catch(e) {
      console.log(e)
    }
  }

  const jumbotronRandomPic = async () => {
    const categoriesName = ["nowPlayingMovie", "onAirTV", "topRatedMovie", "topRatedTV", "popularMovie", "upcomingMovie"]
    const chooseRandomCategories = Math.floor(Math.random() * categoriesName.length)
    const chooseRandomMovieOrShow = Math.floor(Math.random() * 20)
    // const jumbotronBackground = await datas[categoriesName[chooseRandomCategories]][chooseRandomMovieOrShow]["backdrop_path"]
    // await setJumbotronPic(jumbotronBackground)
  }

  return (
    <div className="Homepage">
      <TopJumbotron />
        {
          loading 
          ? <h1>Loading...</h1> 
          :
          <Container>
            <div className="now-playing mt-5">
              <h1>Now Playing</h1>
              <CardSection sectionName='movies' title='Movies' destination='' data={datas.nowPlayingMovie} />
              <CardSection sectionName='tv-shows' title='TV Shows' destination='' data={datas.onAirTV} />
            </div>
            <div className="top-rated mt-5">
              <h1>Top Rated</h1>
              <CardSection sectionName='movies' title='Movies' destination='' data={datas.topRatedMovie} />
              <CardSection sectionName='tv-shows' title='TV Shows' destination='' data={datas.topRatedTV} />
            </div>
            <div className="popular mt-5">
              <h1>Popular</h1>
              <CardSection sectionName='movies' title='Movies' destination='' data={datas.popularMovie} />
              <CardSection sectionName='tv-shows' title='TV Shows' destination='' data={datas.popularTV} />
            </div>
            <div className="upcoming mt-5">
              <h1>Upcoming</h1>
              <CardSection sectionName='movies' title='Movies' destination='' data={datas.upcomingMovie} />
            </div>
          </Container>
        }
    </div>
  );
}

export default Homepage;