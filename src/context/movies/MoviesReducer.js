const movieReducer = (state, action) => {
  switch (action.type) {
    case 'GET_ALL_MOVIES':
      return {
        ...state,
        movies: action.payload,
        moviesLoad: false
      }

    case 'SET_LOADING':
      return {
        ...state,
        moviesLoad: true
      }

    default:
      return state
  }
}

export default movieReducer