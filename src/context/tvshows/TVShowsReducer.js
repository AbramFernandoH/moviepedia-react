const TVShowsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_ALL_TVSHOWS':
      return {
        ...state,
        tvshows: action.payload,
        tvshowsLoad: false
      }

    case 'GET_TVSHOWS_SECTION':
      const sectionName = `tvShows${action.payload.sectionName}`
      return {
        ...state,
        tvshows: {
          ...state.tvshows,
          [sectionName]: action.payload.tvShowsData
        },
        tvshowsLoad: false
      }

    case 'SET_LOADING':
      return {
        ...state,
        tvshowsLoad: true
      }
  
    default:
      return state
  }
}

export default TVShowsReducer