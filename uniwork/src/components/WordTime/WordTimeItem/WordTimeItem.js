import React from 'react';

import styles from './WordTimeItem.css';

const WordTimeItem = (props) => {
    return (
        <button 
            className={styles.WordTimeItem}
            onClick={props.onClick}>
            <span>{props.word}</span>
            <span className={styles.Time}>{Math.round(parseFloat(props.time))}c</span>
        </button>
    )
}

export default WordTimeItem;

