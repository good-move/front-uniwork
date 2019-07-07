import React from 'react';

import WordTimeItem from './WordTimeItem/WordTimeItem';

import styles from './WordTime.css';

const WordTime = (props) => {
    console.log(props);
    const wordTimeItems = props.wordTimeItems.map(item => (
        <WordTimeItem 
            word={item.word}
            time={item.startTime}
            onClick={() => props.handleWordTimeItem(item.startTime)}
        />
    ));

    return (
        <div className={styles.WordTime}>
            {wordTimeItems}
        </div>
    )
}

export default WordTime;
