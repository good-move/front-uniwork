import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './SuggestionItem.css';
import Button from '../UI/Button/Button';
import VideoPlayer from '../VidePlayer/VideoPlayer';

const SuggestionItem = (props) => {
    console.log(props.words);
    return (
        <div className={styles.SuggestionItem}>
            <div className={styles.VideoPlayer}>
                <VideoPlayer 
                    src={props.src}
                    isAutoplay={props.autoplay}
                    videoId={props.videoId}
                />
            </div>
            <div className={styles.Description}>
                <h4>{props.title}</h4>
                <Button text={"Подробнее"} onClick={props.onClick}/>
            </div>
        </div>
    )
}

export default SuggestionItem;
