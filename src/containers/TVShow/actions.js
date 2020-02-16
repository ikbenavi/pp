export const fetchShow = () => ({
  type: 'FETCH_SHOW'
});
export const fetchShowSuccess = res => (
  {
    type: 'FETCH_SHOW_SUCCESS',
    payload: res
  }
);
export const fetchShowError = () => (
  {
    type: 'FETCH_SHOW_ERROR'
  }
);
export const fetchEpisodes = () => ({
  type: 'FETCH_EPISODES'
});
export const fetchEpisodesSuccess = res => (
  {
    type: 'FETCH_EPISODES_SUCCESS',
    payload: res
  }
);