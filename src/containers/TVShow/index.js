import React, { useEffect } from 'react';
import isEmpty from 'lodash';
import connect from 'react-redux/es/connect/connect';
import { createStructuredSelector } from 'reselect';

import { selectShowDetails, selectFetchingShow, selectFetchError, selectEpisodes } from './selectors';
import { fetchShow, fetchEpisodes } from './actions';
import {Wrapper, Title, Description, Cover, Summary, Episodes, EpisodeLink } from './components';

function TVShow(props) {
  // eslint-disable-next-line no-unused-vars
  const { showDetails, episodes, fetchingShow, fetchError, fetchShow, fetchEpisodes } = props;
  useEffect(() => {
    if(isEmpty(showDetails) && !fetchingShow) {
      fetchShow();
      fetchEpisodes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if(!showDetails) {
    return <div>Loading...</div>
  }
  return (
    <Wrapper>
      <Title>{showDetails.name}</Title>
      <Summary>
        {showDetails.image && (<Cover src={showDetails.image.original}/>)}
        <Description>
          <div dangerouslySetInnerHTML={{__html:showDetails.summary}} />
        </Description>
      </Summary>
      <Title>Episodes</Title>
      {episodes && (<Episodes>
        {episodes.map(episode => (<EpisodeLink to={`/episode/${episode.id}`} key={episode.name}>{episode.name}</EpisodeLink>))}
      </Episodes>)}
    </Wrapper>
  );
}

const mapStateToProps = createStructuredSelector({
  showDetails: selectShowDetails,
  fetchingShow: selectFetchingShow,
  fetchError: selectFetchError,
  episodes: selectEpisodes,
});

const mapDispatchToProps = dispatch => ({
  fetchShow : () => dispatch(fetchShow()),
  fetchEpisodes: () => dispatch(fetchEpisodes())
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect(TVShow);