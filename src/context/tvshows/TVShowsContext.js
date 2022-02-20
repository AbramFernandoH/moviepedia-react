import { createContext, useReducer } from 'react'
import TVShowsReducer from './TVShowsReducer'

const TVShowsContext = createContext()
TVShowsContext.displayName = 'TVShows'

export const TVShowsProvider = ({ children }) => {
  const initialState = {
    tvshows: {},
    tvshowsLoad: false
  }

  const [state, dispatchTvShow] = useReducer(TVShowsReducer, initialState)

  return(
    <TVShowsContext.Provider value={{ ...state, dispatchTvShow }}>
      {children}
    </TVShowsContext.Provider>
  )
}

export default TVShowsContext