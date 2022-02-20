import { createContext, useReducer } from 'react'
import movieReducer from './MoviesReducer'

const MovieContext = createContext()
MovieContext.displayName = 'Movie'

export const MovieProvider = ({ children }) => {
  const initialState = {
    movies: {},
    moviesLoad: false
  }

  const [state, dispatchMovie] = useReducer(movieReducer, initialState)

  return(
    <MovieContext.Provider value={{ ...state, dispatchMovie }}>
      {children}
    </MovieContext.Provider>
  )
}

export default MovieContext
