const TVShowsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_ALL_TVSHOWS':
      return {
        ...state,
        tvshows: action.payload,
        loading: false
      }

    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      }
  
    default:
      return state
  }
}

export default TVShowsReducer