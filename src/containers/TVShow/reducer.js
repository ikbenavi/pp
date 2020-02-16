const initialState = {
  showDetails: {
  },
  episodes: [],
  fetchingShow: false,
  fetchError: false,
  fetchingEpisodes: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SHOW':
      return {...state, fetchingShow: true};
    case 'FETCH_EPISODES':
      return {...state, fetchingEpisodes: true};
    case 'FETCH_SHOW_SUCCESS':
      return {...state, showDetails: action.payload, fetchingShow: false};
    case 'FETCH_SHOW_ERROR':
      return {...state, fetchingShow: false, fetchError: true};
    case 'FETCH_EPISODES_SUCCESS':
      return {...state, episodes: action.payload, fetchingEpisodes: false};
    default:
      return state
  }
}