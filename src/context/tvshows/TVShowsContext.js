import { createContext, useReducer } from 'react'
import TVShowsReducer from './TVShowsReducer'

const TVShowsContext = createContext()

export const TVShowsProvider = ({ children }) => {
  const initialState = {
    tvshows: {},
    tvshowsLoad: false
  }

  const [state, dispatch] = useReducer(TVShowsReducer, initialState)

  return(
    <TVShowsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TVShowsContext.Provider>
  )
}

export default TVShowsContext