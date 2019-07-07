import React from 'react';

import styles from './VideoPlayer.css'

const VideoPlayer = (props) => {
    return (
        <div>
            <video className={styles.VideoPlayer} autoPlay={props.isAutoplay} ref={props.videoRef} id="video1" playsInline controls src={props.src}>
            </video>
        </div>
    )
};

export default VideoPlayer;
