import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../UI/Spinner/Spinner';

import styles from './VideoResults.css';
import SuggestionItem from '../SuggestionItem/SuggestionItem';

const VideoResults = props => {

  let suggestions = props.videos.length === 0
    ? null
    : props.videos.map(elem => {
      return (
        <SuggestionItem
          src={elem.url}
          key={elem.id}
          autoplay={false}
          videoId={elem.id}
          words={elem.words}
          title={elem.title}
          onClick={() => props.itemClickHandler(elem.id)}/>);
    }
  );

  return (
    <div className={styles.videoResults}>
      <h3>Найденные видео</h3>
      {
        props.isLoading
          ? <div className={styles.spinnerWrapper}>
            <Spinner/>
          </div>
          : <div className={styles.suggestionsContainer}>
            {suggestions}
          </div>
      }
    </div>
  );
};

VideoResults.propTypes = {
  videos: PropTypes.array,
};

export default VideoResults;
