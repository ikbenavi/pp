import React, { useEffect } from 'react';
import isEmpty from 'lodash';
import connect from 'react-redux/es/connect/connect';
import { createStructuredSelector } from 'reselect';
import dompurify from 'dompurify';

import { selectFetchingShow, selectEpisodes } from './selectors';
import { fetchShow, fetchEpisodes } from './actions';
import { Wrapper, Title, Cover, Summary, Description, BackLink } from './components';

function Episode(props) {
  const { episodes, fetchingShow, fetchShow, fetchEpisodes } = props;
  const sanitizer = dompurify.sanitize;

  useEffect(() => {
    if(isEmpty(episodes) && !fetchingShow) {
      fetchShow();
      fetchEpisodes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const episode = episodes.filter(episode => episode.id === parseInt(props.match.params.id))[0];
  if(!episode) {
    return <div>Loading...</div>
  }
  return (
    <Wrapper>
      <BackLink to="/">&#8678; Back</BackLink>
      <Title>{episode.name}</Title>
      <Summary>
        {episode.image && <Cover src={episode.image.medium}/>}
        <Description>
          <div dangerouslySetInnerHTML={{__html:sanitizer(episode.summary)}} />
        </Description>
      </Summary>
    </Wrapper>
  )
}

const mapStateToProps = createStructuredSelector({
  fetchingShow: selectFetchingShow,
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

export default withConnect(Episode);